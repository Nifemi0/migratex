import fs from "fs";
import path from "path";
import { describe, it, expect } from "vitest";
import { runMigration } from "../../src/orchestrator/index";

const realRepoPath = process.env.REAL_WAGMI_V1_REPO;

describe.skipIf(!realRepoPath)("real wagmi v1 repo integration", () => {
  it("runs end-to-end in dry mode and writes a report", async () => {
    const repoPath = path.resolve(realRepoPath as string);
    expect(fs.existsSync(repoPath)).toBe(true);

    const outDir = path.join(repoPath, "migratex-output");
    const result = await runMigration(repoPath, { apply: false, outDir });
    const reportPath = path.join(outDir, "migrate-report.json");

    expect(fs.existsSync(reportPath)).toBe(true);
    expect((result as any).scan?.wagmiVersion).toBeTruthy();
  });
});
