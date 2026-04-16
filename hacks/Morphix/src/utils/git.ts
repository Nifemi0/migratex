import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { createTwoFilesPatch } from 'diff';

export function generatePatchForReport(reportPath: string, outPath?: string, cwd?: string, mode: 'auto' | 'git' | 'snapshot' = 'auto') {
  const repoDir = cwd ?? process.cwd();
  const out = outPath ?? path.join(repoDir, 'migratex-output', 'patch.diff');
  if (!fs.existsSync(reportPath)) {
    throw new Error(`Report not found at ${reportPath}`);
  }
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const files: string[] = [];
  ["imports", "renamedExports", "provider"].forEach((k) => {
    const r = (report as any)[k];
    if (r && r.results) {
      r.results.forEach((res: any) => {
        if (res.filePath) files.push(res.filePath);
      });
    }
  });

  // Ensure output directory exists
  const outDir = path.dirname(out);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // If no files listed, write empty patch
  if (files.length === 0) {
    fs.writeFileSync(out, '', 'utf8');
    return { out, mode: 'none' };
  }

  const gitDir = path.join(repoDir, '.git');

  // Helper to run git diff
  const tryGitDiff = () => {
    const args = ['diff', 'HEAD', '--', ...files];
    const diff = execFileSync('git', args, { cwd: repoDir, encoding: 'utf8' });
    fs.writeFileSync(out, diff, 'utf8');
    return { out, mode: 'git' } as const;
  };

  // If user forced git mode
  if (mode === 'git') {
    if (!fs.existsSync(gitDir)) throw new Error('Git mode requested but .git not found');
    try { return tryGitDiff(); } catch (e: any) { throw new Error(`git diff failed: ${String(e.message || e)}`); }
  }

  // If user forced snapshot mode
  if (mode === 'snapshot') {
    const snapsDirForced = path.join(repoDir, 'migratex-output', 'snapshots');
    if (!fs.existsSync(snapsDirForced)) throw new Error('Snapshot mode requested but no snapshots found');
    // fallthrough to snapshot processing below
  }

  // Auto mode: prefer git if available
  if (mode === 'auto' && fs.existsSync(gitDir)) {
    try { return tryGitDiff(); } catch (e) { /* fallthrough to snapshot */ }
  }

  // Snapshot mode processing
  const snapsDir = path.join(repoDir, 'migratex-output', 'snapshots');
  if (!fs.existsSync(snapsDir)) {
    fs.writeFileSync(out, '', 'utf8');
    throw new Error('No Git repo detected and no snapshots available to generate patch.');
  }

  const patchParts: string[] = [];
  const snapFiles = fs.readdirSync(snapsDir).filter((s) => s.endsWith('.before'));
  for (const sfn of snapFiles) {
    const beforePath = path.join(snapsDir, sfn);
    // decode snapshot filename back to original path
    const encoded = sfn.replace(/\.before$/, '');
    const rel = decodeURIComponent(encoded.split('__').join('/'));
    const targetPath = path.join(repoDir, rel);
    const oldStr = fs.existsSync(beforePath) ? fs.readFileSync(beforePath, 'utf8') : '';
    const newStr = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, 'utf8') : '';
    const patch = createTwoFilesPatch(rel + '.before', rel, oldStr, newStr);
    if (patch && patch.trim()) patchParts.push(patch);
  }

  const final = patchParts.join('\n');
  fs.writeFileSync(out, final, 'utf8');
  return { out, mode: 'snapshot' };
}

export default { generatePatchForReport };
