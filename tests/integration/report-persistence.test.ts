import fs from "fs";
import os from "os";
import path from "path";
import { describe, it, expect } from "vitest";
import { runMigration } from "../../src/orchestrator/index";

function writeJson(filePath: string, value: unknown) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), "utf8");
}

describe("migration report persistence", () => {
  it("writes migrate-report.json to disk for wagmi migrations", async () => {
    const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "migratex-report-"));
    const srcDir = path.join(tmpRoot, "src");
    const outDir = path.join(tmpRoot, "migratex-output");
    fs.mkdirSync(srcDir, { recursive: true });

    writeJson(path.join(tmpRoot, "package.json"), {
      name: "tmp-wagmi-app",
      version: "1.0.0",
      dependencies: {
        wagmi: "^1.4.0",
      },
    });

    fs.writeFileSync(
      path.join(srcDir, "App.tsx"),
      "import { useAccount } from 'wagmi';\nexport function App(){const a = useAccount(); return <div>{String(a)}</div>}\n",
      "utf8",
    );

    const result = await runMigration(tmpRoot, { apply: false, outDir });
    const jsonPath = path.join(outDir, "migrate-report.json");
    expect(fs.existsSync(jsonPath)).toBe(true);
    expect((result as any).reportPaths?.jsonPath).toBe(jsonPath);

    const report = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    expect(report.scan?.wagmiVersion).toBe("^1.4.0");
    expect(report.plan?.target).toBe("wagmi-v2");

    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });
});
