import fs from 'fs';
import { Project, QuoteKind, SyntaxKind } from 'ts-morph';
import fg from 'fast-glob';

type UseNetworkTarget = 'useAccount' | 'useConfig';

function stripQuotes(v: string) {
  return v.replace(/^['"]|['"]$/g, '');
}

export async function transformFileUseNetwork(filePath: string) {
  const src = fs.readFileSync(filePath, 'utf8');
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: { quoteKind: QuoteKind.Single },
    compilerOptions: { allowJs: true },
  });
  const sourceFile = project.createSourceFile(filePath, src, { overwrite: true });

  let changed = false;
  let migratedPatterns = 0;
  const diagnostics: string[] = [];

  const wagmiImports = sourceFile.getImportDeclarations().filter((d) => d.getModuleSpecifierValue() === 'wagmi');
  if (!wagmiImports.length) return { filePath, changed, migratedPatterns, diagnostics };

  const useNetworkLocals = new Set<string>();
  wagmiImports.forEach((imp) => {
    imp.getNamedImports().forEach((ni) => {
      if (ni.getName() !== 'useNetwork') return;
      const local = ni.getAliasNode() ? ni.getAliasNode()!.getText() : 'useNetwork';
      useNetworkLocals.add(local);
    });
  });
  if (!useNetworkLocals.size) return { filePath, changed, migratedPatterns, diagnostics };

  const neededTargets = new Set<UseNetworkTarget>();

  const varDecls = sourceFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration);
  varDecls.forEach((decl) => {
    try {
      const initializer = decl.getInitializer();
      if (!initializer || initializer.getKind() !== SyntaxKind.CallExpression) return;
      const call = initializer as any;
      const expr = call.getExpression();
      if (expr.getKind() !== SyntaxKind.Identifier) return;
      const callee = expr.getText();
      if (!useNetworkLocals.has(callee)) return;
      if (call.getArguments().length !== 0) {
        diagnostics.push(`Skipped ${filePath}: useNetwork call has arguments`);
        return;
      }

      const nameNode = decl.getNameNode();
      if (nameNode.getKind() !== SyntaxKind.ObjectBindingPattern) {
        diagnostics.push(`Skipped ${filePath}: useNetwork result is not object destructuring`);
        return;
      }
      const bindings = (nameNode as any).getElements();
      if (!bindings.length) return;

      const bindingNames = bindings
        .map((b: any) => stripQuotes(b.getNameNode().getText()))
        .sort();

      if (bindingNames.length === 1 && bindingNames[0] === 'chain') {
        expr.replaceWithText('useAccount');
        neededTargets.add('useAccount');
        changed = true;
        migratedPatterns += 1;
        return;
      }
      if (bindingNames.length === 1 && bindingNames[0] === 'chains') {
        expr.replaceWithText('useConfig');
        neededTargets.add('useConfig');
        changed = true;
        migratedPatterns += 1;
        return;
      }

      diagnostics.push(`Skipped ${filePath}: unsupported useNetwork destructure keys: ${bindingNames.join(', ')}`);
    } catch (e: any) {
      diagnostics.push(`Error processing useNetwork in ${filePath}: ${String(e.message || e)}`);
    }
  });

  if (changed) {
    // Remove useNetwork import where present.
    wagmiImports.forEach((imp) => {
      imp.getNamedImports().forEach((ni) => {
        if (ni.getName() === 'useNetwork') ni.remove();
      });
      if (imp.getNamedImports().length === 0 && !imp.getDefaultImport() && !imp.getNamespaceImport()) {
        imp.remove();
      }
    });

    // Ensure replacement hooks are imported from wagmi.
    if (neededTargets.size) {
      const targetImport =
        sourceFile.getImportDeclarations().find((d) => d.getModuleSpecifierValue() === 'wagmi') ??
        sourceFile.addImportDeclaration({ moduleSpecifier: 'wagmi', namedImports: [] });
      neededTargets.forEach((target) => {
        const exists = targetImport.getNamedImports().some((ni) => ni.getName() === target);
        if (!exists) targetImport.addNamedImport(target);
      });
    }

    fs.writeFileSync(filePath, sourceFile.getFullText(), 'utf8');
  }

  return { filePath, changed, migratedPatterns, diagnostics };
}

export async function runUseNetworkCodemod(cwd: string) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const res = await transformFileUseNetwork(f);
      if (res.changed) results.push(res);
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}

export default { transformFileUseNetwork, runUseNetworkCodemod };
