/**
 * Deterministic import-name renaming codemod (safe rules):
 * - Only transforms ImportDeclarations with moduleSpecifier === 'wagmi'
 * - Renames only known named imports in the provided mapping
 * - Leaves unknown named imports untouched
 * - Does not touch default imports or namespace imports
 *
 * This design keeps edits deterministic while improving coverage.
 */

import fs from "fs";
import path from "path";
import { Project, QuoteKind } from "ts-morph";
import fg from "fast-glob";

export type RenameMap = Record<string, string>;

/**
 * Default mapping example. Only used for demo/tests.
 * Real mappings should be constructed from migration docs and expanded conservatively.
 */
export const DEFAULT_IMPORT_RENAMING: RenameMap = {
  // High-confidence symbol renames
  // Hooks
  "useWallet": "useAccount",
  "useNetwork": "useChainId",
  "useSigner": "useWalletClient",
  "useProvider": "usePublicClient",
  "useWaitForTransaction": "useWaitForTransactionReceipt",
  // Provider / config
  "WagmiConfig": "WagmiProvider",
  // Client helpers
  "createClient": "createConfig"
};

export async function transformFileImports(filePath: string, renameMap: RenameMap) {
  const src = fs.readFileSync(filePath, "utf8");
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      quoteKind: QuoteKind.Single
    },
    compilerOptions: { allowJs: true }
  });

  const sourceFile = project.createSourceFile(filePath, src, { overwrite: true });

  let changed = false;
  const diagnostics: string[] = [];

  sourceFile.getImportDeclarations().forEach((imp) => {
    const moduleText = imp.getModuleSpecifierValue();
    if (moduleText !== "wagmi") return;

    const namedImports = imp.getNamedImports();
    if (namedImports.length === 0) return;

    // Apply rename for each known named import
    namedImports.forEach((ni) => {
      const oldName = ni.getName();
      const newName = renameMap[oldName];
      if (!newName) return;
      if (oldName !== newName) {
        const alias = ni.getAliasNode() ? ni.getAliasNode()!.getText() : null;
        // collect references for the original name before changing the import
        let refs: any[] = [];
        try {
          const originalNameNode = ni.getNameNode();
          refs = originalNameNode.findReferences();
        } catch (e) {
          diagnostics.push(`Warning: couldn't collect references for ${oldName} in ${filePath}: ${String(e)}`);
        }

        // replace import specifier text
        ni.replaceWithText(newName + (alias ? ` as ${alias}` : ""));

        // rename local usages (references) of the original import binding
        try {
          refs.forEach((ref: any) => {
            ref.getReferences().forEach((r: any) => {
              const node = r.getNode();
              const parent = node.getParent();
              if (parent && parent.getKindName && parent.getKindName() === 'ImportSpecifier') return;
              if (node.replaceWithText) node.replaceWithText(newName);
            });
          });
        } catch (e) {
          diagnostics.push(`Warning: couldn't update references for ${oldName} in ${filePath}: ${String(e)}`);
        }
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

/**
 * Run codemod across repository cwd; returns summary.
 */
export async function runImportCodemod(cwd: string, renameMap: RenameMap) {
  const patterns = ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ["node_modules/**", "dist/**"] });

  const results = [];
  for (const f of files) {
    try {
      const res = await transformFileImports(f, renameMap);
      if (res.changed) results.push(res);
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }

  return {
    totalFilesScanned: files.length,
    filesChanged: results.length,
    results,
  };
}
