import fs from 'fs';
import os from 'os';
import path from 'path';
import fg from 'fast-glob';
import { transformFileImports, DEFAULT_IMPORT_RENAMING } from './imports.js';
import { transformFileRenamedExports, DEFAULT_EXPORT_RENAMING } from './renamedExports.js';
import { transformFileProvider } from './provider.js';
import { transformFileHookSignatures } from './hooks.js';

async function copyToTemp(filePath: string) {
  const tmpDir = path.join(process.cwd(), '.migratex_tmp');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const rel = path.relative(process.cwd(), filePath);
  const dest = path.join(tmpDir, rel);
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(filePath, dest);
  return dest;
}

async function cleanupTemp() {
  const tmpDir = path.join(process.cwd(), '.migratex_tmp');
  if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
}

export async function runImportCodemodDry(cwd: string, renameMap = DEFAULT_IMPORT_RENAMING) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const tmp = await copyToTemp(f);
      const res = await transformFileImports(tmp, renameMap);
      if (res.changed) {
        const newText = fs.readFileSync(tmp, 'utf8');
        results.push({ filePath: f, changed: true, preview: newText, diagnostics: res.diagnostics || [] });
      }
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  await cleanupTemp();
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}

export async function runRenamedExportsCodemodDry(cwd: string, renameMap = DEFAULT_EXPORT_RENAMING) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const tmp = await copyToTemp(f);
      const res = await transformFileRenamedExports(tmp, renameMap);
      if (res.changed) {
        const newText = fs.readFileSync(tmp, 'utf8');
        results.push({ filePath: f, changed: true, preview: newText, diagnostics: res.diagnostics || [] });
      }
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  await cleanupTemp();
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}

export async function runProviderCodemodDry(cwd: string) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const tmp = await copyToTemp(f);
      const res = await transformFileProvider(tmp);
      if (res.changed) {
        const newText = fs.readFileSync(tmp, 'utf8');
        results.push({ filePath: f, changed: true, preview: newText, diagnostics: res.diagnostics || [] });
      }
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  await cleanupTemp();
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}

export async function runHookCodemodDry(cwd: string, mapping = {}) {
  const patterns = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];
  const files = await fg(patterns, { cwd, absolute: true, ignore: ['node_modules/**', 'dist/**'] });
  const results: any[] = [];
  for (const f of files) {
    try {
      const tmp = await copyToTemp(f);
      const res = await transformFileHookSignatures(tmp, mapping as any);
      if (res.changed) {
        const newText = fs.readFileSync(tmp, 'utf8');
        results.push({ filePath: f, changed: true, preview: newText, diagnostics: res.diagnostics || [] });
      }
    } catch (err) {
      results.push({ filePath: f, error: String(err) });
    }
  }
  await cleanupTemp();
  return { totalFilesScanned: files.length, filesChanged: results.length, results };
}

export default { runImportCodemodDry, runRenamedExportsCodemodDry, runProviderCodemodDry };
