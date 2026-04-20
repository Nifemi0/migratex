import fs from 'fs';
import { Project, SyntaxKind, QuoteKind } from 'ts-morph';
import fg from 'fast-glob';

export async function transformFileProvider(filePath: string) {
  const src = fs.readFileSync(filePath, 'utf8');
  const project = new Project({ useInMemoryFileSystem: true, manipulationSettings: { quoteKind: QuoteKind.Single }, compilerOptions: { allowJs: true } });
  const sourceFile = project.createSourceFile(filePath, src, { overwrite: true });

  let changed = false;
  let migratedPatterns = 0;
  const diagnostics: string[] = [];

  // Replace named import WagmiConfig -> WagmiProvider in imports from 'wagmi'
  sourceFile.getImportDeclarations().forEach((imp) => {
    if (imp.getModuleSpecifierValue() !== 'wagmi') return;
    const named = imp.getNamedImports();
    named.forEach((ni) => {
      if (ni.getName() === 'WagmiConfig') {
        ni.replaceWithText('WagmiProvider' + (ni.getAliasNode() ? ` as ${ni.getAliasNode()!.getText()}` : ''));
        changed = true;
        migratedPatterns += 1;
      }
    });
  });

  // Replace JSX elements <WagmiConfig ...> -> <WagmiProvider ...>
  const openingTags = sourceFile.getDescendantsOfKind(SyntaxKind.JsxOpeningElement);
  openingTags.forEach((el) => {
    try {
      const tagNode = el.getTagNameNode();
      const tagName = tagNode.getText();
      if (tagName === 'WagmiConfig') {
        tagNode.replaceWithText('WagmiProvider');
        changed = true;
        migratedPatterns += 1;
      }
    } catch (e) {
      diagnostics.push(`Failed updating JSX opening tag in ${filePath}: ${String(e)}`);
    }
  });

  const selfClosing = sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement);
  selfClosing.forEach((el) => {
    try {
      const tagNode = el.getTagNameNode();
      const tagName = tagNode.getText();
      if (tagName === 'WagmiConfig') {
        tagNode.replaceWithText('WagmiProvider');
        changed = true;
        migratedPatterns += 1;
      }
    } catch (e) {
      diagnostics.push(`Failed updating JSX self-closing tag in ${filePath}: ${String(e)}`);
    }
  });

  // Update closing tags for JsxElement
  const closingTags = sourceFile.getDescendantsOfKind(SyntaxKind.JsxClosingElement);
  closingTags.forEach((el) => {
    try {
      const tagNode = el.getTagNameNode();
      const tagName = tagNode.getText();
      if (tagName === 'WagmiConfig') {
        tagNode.replaceWithText('WagmiProvider');
        changed = true;
        migratedPatterns += 1;
      }
    } catch (e) {
      diagnostics.push(`Failed updating JSX closing tag in ${filePath}: ${String(e)}`);
    }
  });

  if (changed) {
    const out = sourceFile.getFullText();
    fs.writeFileSync(filePath, out, 'utf8');
  }

  return { filePath, changed, migratedPatterns, diagnostics };
}

export async function runProviderCodemod(cwd: string) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const res = await transformFileProvider(f);
      if (res.changed) results.push(res);
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}

export default { transformFileProvider, runProviderCodemod };
