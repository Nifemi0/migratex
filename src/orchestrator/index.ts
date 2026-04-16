import fs from 'fs';
import path from 'path';
import { scanRepo } from '../scanner/index.js';
import { runImportCodemod } from '../codemods/imports.js';
import { runRenamedExportsCodemod } from '../codemods/renamedExports.js';
import { runImportCodemodDry, runRenamedExportsCodemodDry, runProviderCodemodDry } from '../codemods/dryRunner.js';
import { runProviderCodemod } from '../codemods/provider.js';
import { generateReport } from '../report/index.js';

export async function runMigration(cwd: string, opts?: { apply?: boolean; outDir?: string }) {
  const outDir = opts?.outDir ?? path.join(cwd, 'migratex-output');
  const scan = await scanRepo(cwd);

  if (!scan.wagmiVersion) {
    const report = { ok: false, reason: 'wagmi not found', scan };
    const reportPaths = generateReport(outDir, report);
    return { ...report, reportPaths };
  }

  const plan = {
    target: 'wagmi-v2',
    steps: [
      { id: 'imports', description: 'Rename known imports', confidence: 0.95 },
      { id: 'renamedExports', description: 'Rename known exported names', confidence: 0.9 },
      { id: 'provider', description: 'Provider/client setup updates', confidence: 0.85 },
      { id: 'hooks', description: 'Hook option signature renames', confidence: 0.9 }
    ]
  };

  let importsRes: any;
  let exportsRes: any;
  let providerRes: any;

  if (opts?.apply) {
    // run dry to collect files to snapshot
    const importsDry = await runImportCodemodDry(cwd, undefined as any);
    const exportsDry = await runRenamedExportsCodemodDry(cwd, undefined as any);
    const providerDry = await runProviderCodemodDry(cwd);

    const filesToSnapshot = new Set<string>();
    (importsDry.results || []).forEach((r: any) => { if (r.changed) filesToSnapshot.add(r.filePath); });
    (exportsDry.results || []).forEach((r: any) => { if (r.changed) filesToSnapshot.add(r.filePath); });
    (providerDry.results || []).forEach((r: any) => { if (r.changed) filesToSnapshot.add(r.filePath); });

    if (filesToSnapshot.size > 0) {
      const snapsDir = path.join(outDir, 'snapshots');
      if (!fs.existsSync(snapsDir)) fs.mkdirSync(snapsDir, { recursive: true });
      for (const f of Array.from(filesToSnapshot)) {
        try {
          const txt = fs.readFileSync(f, 'utf8');
          const rel = path.relative(cwd, f);
          const snapName = rel.split(path.sep).join('__') + '.before';
          fs.writeFileSync(path.join(snapsDir, snapName), txt, 'utf8');
        } catch (e) {
          // ignore snapshot write failures
        }
      }
    }

    importsRes = await runImportCodemod(cwd, undefined as any);
    exportsRes = await runRenamedExportsCodemod(cwd, undefined as any);
    providerRes = await runProviderCodemod(cwd);
    // run hooks codemod (apply)
    const { runHookCodemod } = await import('../codemods/hooks.js');
    const hooksResApply = await runHookCodemod(cwd);
    var hooksRes = hooksResApply;
  } else {
    importsRes = await runImportCodemodDry(cwd, undefined as any);
    exportsRes = await runRenamedExportsCodemodDry(cwd, undefined as any);
    providerRes = await runProviderCodemodDry(cwd);
    const { runHookCodemodDry } = await import('../codemods/dryRunner.js');
    const hooksResDry = await runHookCodemodDry(cwd);
    var hooksRes = hooksResDry;
  }

  const unresolved: any[] = [];
  // collect diagnostics
  (importsRes.results || []).forEach((r: any) => { if (r.diagnostics && r.diagnostics.length) unresolved.push(r); });
  (exportsRes.results || []).forEach((r: any) => { if (r.diagnostics && r.diagnostics.length) unresolved.push(r); });
  (providerRes.results || []).forEach((r: any) => { if (r.diagnostics && r.diagnostics.length) unresolved.push(r); });
  (hooksRes.results || []).forEach((r: any) => { if (r.diagnostics && r.diagnostics.length) unresolved.push(r); });


  const report = {
    repo: cwd,
    scan,
    plan,
    imports: importsRes,
    renamedExports: exportsRes,
    provider: providerRes,
    hooks: hooksRes,
    unresolved,
    applied: !!opts?.apply
  };

  const reportPaths = generateReport(outDir, report);
  return { ...report, reportPaths };
}

export default { runMigration };
