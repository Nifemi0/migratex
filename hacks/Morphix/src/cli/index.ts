#!/usr/bin/env node
import path from "path";
import { scanRepo } from "../scanner/index.js";
import { runImportCodemod, DEFAULT_IMPORT_RENAMING } from "../codemods/imports.js";
import { runValidator } from "../validator/index.js";
import { runMigration } from "../orchestrator/index.js";
import { generatePatchForReport } from "../utils/git.js";

async function main() {
  const argv = process.argv.slice(2);
  const cwd = process.cwd();

  const cmd = argv[0] || "help";

  if (cmd === "scan") {
    const report = await scanRepo(cwd);
    console.log(JSON.stringify(report, null, 2));
    process.exit(0);
  }

  if (cmd === "codemod:imports") {
    const mapping = DEFAULT_IMPORT_RENAMING;
    const result = await runImportCodemod(cwd, mapping);
    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
  }

  if (cmd === "wagmi-v2" || cmd === "migrate") {
    // flags: --apply to actually write changes
    const apply = argv.includes("--apply");
    console.log(`Starting migration (apply=${apply})`);
    const res = await runMigration(cwd, { apply, outDir: undefined });
    console.log(JSON.stringify(res, null, 2));
    if ((res as any).reportPaths?.jsonPath) {
      console.log(`Report written to ${(res as any).reportPaths.jsonPath}`);
    }
    process.exit(0);
  }

  if (cmd === "validate") {
    const res = await runValidator(cwd);
    console.log("Validator result:", res);
    process.exit(0);
  }

  if (cmd === "generate-patch") {
    const reportPath = path.join(cwd, 'migratex-output', 'migrate-report.json');
    // parse --patch-mode (auto|git|snapshot)
    let patchMode: 'auto' | 'git' | 'snapshot' = 'auto';
    const pmArg = argv.find(a => a.startsWith('--patch-mode'));
    if (pmArg) {
      if (pmArg.includes('=')) {
        const v = pmArg.split('=')[1];
        if (v === 'git' || v === 'snapshot' || v === 'auto') patchMode = v as any;
      } else {
        const idx = argv.indexOf(pmArg);
        if (idx >= 0 && idx + 1 < argv.length) {
          const v = argv[idx + 1];
          if (v === 'git' || v === 'snapshot' || v === 'auto') patchMode = v as any;
        }
      }
    }

    try {
      console.log('Generating patch...');
      const res: any = generatePatchForReport(reportPath, undefined, cwd, patchMode as any);
      if (res.mode === 'git') console.log('Git repo detected. Using git diff mode.');
      else if (res.mode === 'snapshot') console.log('No git repo detected. Using snapshot diff mode.');
      else if (res.mode === 'none') console.log('No files changed; wrote empty patch.');
      console.log('Patch written to', res.out);
      process.exit(0);
    } catch (e) {
      console.error('Failed to generate patch:', e && (e as any).message ? (e as any).message : e);
      process.exit(2);
    }
  }

  console.log("Usage: migratex <command>");
  console.log("Commands:");
  console.log("  scan             Scan repository for wagmi usage");
  console.log("  codemod:imports  Run import-renaming codemod (safe, mapping-driven)");
  console.log("  wagmi-v2         Run full wagmi-v2 migration (use --apply to write changes)");
  console.log("  validate         Run validator (install + typecheck stub)");
  process.exit(1);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(2);
});
