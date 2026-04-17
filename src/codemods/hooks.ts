import fs from 'fs';
import { Project, QuoteKind, SyntaxKind } from 'ts-morph';
import fg from 'fast-glob';

export type HookOptionMap = Record<string, Record<string, string>>;

/**
 * Hook signature options renaming codemod.
 * - mapping: { hookName: { oldOption: newOption } }
 * - Only applies when the first argument is an object literal
 * - Renames only mapped keys and leaves unknown keys untouched
 */
export const DEFAULT_HOOK_OPTION_RENAMING: HookOptionMap = {
  // Keep default hook option mapping empty until each hook's option-shape
  // migration is fully validated end-to-end against build/typecheck.
};

export async function transformFileHookSignatures(filePath: string, mapping: HookOptionMap = DEFAULT_HOOK_OPTION_RENAMING) {
  const src = fs.readFileSync(filePath, 'utf8');
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: { quoteKind: QuoteKind.Single },
    compilerOptions: { allowJs: true }
  });
  const sourceFile = project.createSourceFile(filePath, src, { overwrite: true });
  let changed = false;
  const diagnostics: string[] = [];

  // Build import alias map for wagmi imports: localName -> importedName
  const importAliasMap = new Map<string, string>();
  sourceFile.getImportDeclarations().forEach((imp) => {
    const m = imp.getModuleSpecifierValue();
    if (m !== 'wagmi') return;
    imp.getNamedImports().forEach((ni) => {
      const imported = ni.getName();
      const local = ni.getAliasNode() ? ni.getAliasNode()!.getText() : imported;
      importAliasMap.set(local, imported);
    });
  });

  const calls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);
  calls.forEach((call) => {
    try {
      const expr = call.getExpression();
      // only handle simple identifier calls (e.g., useConnect(...))
      if (expr.getKind() !== SyntaxKind.Identifier) return;
      const localName = expr.getText();
      const importedName = importAliasMap.get(localName);
      if (!importedName) return;
      if (!mapping[importedName]) return;

      const args = call.getArguments();
      if (!args || args.length === 0) return;
      const first = args[0];
      if (!first || first.getKind() !== SyntaxKind.ObjectLiteralExpression) return;

      const props = (first as any).getProperties();
      if (props.length === 0) return;
      const propNames: string[] = [];
      for (const p of props) {
        // only handle PropertyAssignment of identifier/string name (skip spread, method, shorthand)
        const kind = p.getKind();
        if (kind !== SyntaxKind.PropertyAssignment) {
          diagnostics.push(`Skipped ${filePath}: unsupported property kind ${p.getKindName()}`);
          return;
        }
        const nameNode = (p as any).getNameNode();
        const keyText = nameNode.getText().replace(/^['"]|['"]$/g, '');
        propNames.push(keyText);
      }

      const map = mapping[importedName];

      // Apply rename by replacing object literal text in-place
      const newPropsText = props.map((p: any) => {
        const nameNode = p.getNameNode();
        const keyTextRaw = nameNode.getText();
        const keyText = keyTextRaw.replace(/^['"]|['"]$/g, '');
        const newKey = map[keyText] ?? keyText;
        const initializer = (p as any).getInitializer().getText();
        return `${/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(newKey) ? newKey : `'${newKey}'`}: ${initializer}`;
      }).join(', ');

      // Replace the object literal with new text
      first.replaceWithText(`{ ${newPropsText} }`);
      changed = true;
    } catch (e: any) {
      diagnostics.push(`Error processing call in ${filePath}: ${String(e.message || e)}`);
    }
  });

  if (changed) {
    const out = sourceFile.getFullText();
    fs.writeFileSync(filePath, out, 'utf8');
  }

  return { filePath, changed, diagnostics };
}

export async function runHookCodemod(cwd: string, mapping: HookOptionMap = DEFAULT_HOOK_OPTION_RENAMING) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const res = await transformFileHookSignatures(f, mapping);
      if (res.changed) results.push(res);
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}
