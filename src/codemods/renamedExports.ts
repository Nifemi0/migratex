import fs from "fs";
import { Project, QuoteKind, SyntaxKind } from "ts-morph";
import fg from "fast-glob";

export type RenameMap = Record<string, string>;

export const DEFAULT_EXPORT_RENAMING: RenameMap = {
  // High-confidence export renames
  useWallet: "useAccount",
  useNetwork: "useChainId",
  useSigner: "useWalletClient",
  useProvider: "usePublicClient",
  useWaitForTransaction: "useWaitForTransactionReceipt",
  WagmiConfig: "WagmiProvider",
  createClient: "createConfig"
};

export async function transformFileRenamedExports(filePath: string, renameMap: RenameMap) {
  const src = fs.readFileSync(filePath, "utf8");
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: { quoteKind: QuoteKind.Single },
    compilerOptions: { allowJs: true }
  });

  const sourceFile = project.createSourceFile(filePath, src, { overwrite: true });
  let changed = false;
  const diagnostics: string[] = [];

  // 1) Handle namespace imports: import * as Wagmi from 'wagmi';
  sourceFile.getImportDeclarations().forEach((imp) => {
    if (imp.getModuleSpecifierValue() !== "wagmi") return;
    const ns = imp.getNamespaceImport();
    if (!ns) return;
    const nsName = ns.getText();

    // find property access expressions like Wagmi.useWallet()
    const props = sourceFile.getDescendantsOfKind(SyntaxKind.PropertyAccessExpression);
    props.forEach((pa) => {
      const expr = pa.getExpression();
      const name = pa.getName();
      if (expr.getText() === nsName && renameMap[name]) {
        pa.getNameNode().replaceWithText(renameMap[name]);
        changed = true;
      }
    });
  });

  // 2) Handle re-exports: export { useX } from 'wagmi';
  sourceFile.getExportDeclarations().forEach((exp) => {
    if (exp.getModuleSpecifierValue() !== "wagmi") return;
    const namedExports = exp.getNamedExports();
    if (namedExports.length === 0) return;
    namedExports.forEach((ne) => {
      const oldName = ne.getName();
      const newName = renameMap[oldName];
      if (!newName) return;
      if (oldName !== newName) {
        const alias = ne.getAliasNode() ? ne.getAliasNode()!.getText() : null;
        ne.replaceWithText(newName + (alias ? ` as ${alias}` : ""));
        changed = true;
      }
    });
  });

  if (changed) {
    const out = sourceFile.getFullText();
    fs.writeFileSync(filePath, out, "utf8");
  }

  return { filePath, changed, diagnostics };
}

export async function runRenamedExportsCodemod(cwd: string, renameMap: RenameMap) {
  const patterns = ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ["node_modules/**", "dist/**"] });

  const results: any[] = [];
  for (const f of files) {
    try {
      const res = await transformFileRenamedExports(f, renameMap);
      if (res.changed) results.push(res);
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }

  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}
