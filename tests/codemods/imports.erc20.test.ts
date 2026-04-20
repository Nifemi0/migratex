import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { transformFileImports, DEFAULT_IMPORT_RENAMING } from "../../src/codemods/imports";

const FIXTURE_DIR = path.join(__dirname, "..", "fixtures", "imports");
const TMP_DIR = path.join(__dirname, "tmp_erc20");

describe("import renaming codemod - erc20ABI migration", () => {
  beforeEach(() => {
    if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
  });

  afterEach(() => {
    if (fs.existsSync(TMP_DIR)) fs.rmSync(TMP_DIR, { recursive: true, force: true });
  });

  it("moves erc20ABI import to viem erc20Abi", async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, "before-erc20.ts"), "utf8");
    const tmpFile = path.join(TMP_DIR, "before-erc20.ts");
    fs.writeFileSync(tmpFile, before, "utf8");

    const res = await transformFileImports(tmpFile, DEFAULT_IMPORT_RENAMING);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, "utf8");
    const normalized = after.replace(/\s+/g, " ").trim();
    expect(normalized).toContain("import { readContract } from 'wagmi';");
    expect(normalized).toContain("import { erc20Abi } from 'viem';");
    expect(normalized).toContain("readContract({ abi: erc20Abi })");
    expect(normalized).not.toContain("erc20ABI");
  });
});
