import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { transformFileRenamedExports, DEFAULT_EXPORT_RENAMING } from "../../src/codemods/renamedExports";

const FIXTURE_DIR = path.join(__dirname, "..", "fixtures", "renamed-exports");
const TMP_DIR = path.join(__dirname, "tmp_renamed");

describe("renamed exports codemod (namespace & re-export)", () => {
  beforeEach(() => {
    if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
  });

  afterEach(() => {
    if (fs.existsSync(TMP_DIR)) fs.rmSync(TMP_DIR, { recursive: true, force: true });
  });

  it("renames property access on namespace import", async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, "before-namespace.tsx"), "utf8");
    const tmpFile = path.join(TMP_DIR, "before-namespace.tsx");
    fs.writeFileSync(tmpFile, before, "utf8");

    const res = await transformFileRenamedExports(tmpFile, DEFAULT_EXPORT_RENAMING);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, "utf8");
    const expected = fs.readFileSync(path.join(FIXTURE_DIR, "after-namespace.tsx"), "utf8");
    expect(after.trim()).toBe(expected.trim());
  });

  it("renames re-export from module", async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, "before-reexport.ts"), "utf8");
    const tmpFile = path.join(TMP_DIR, "before-reexport.ts");
    fs.writeFileSync(tmpFile, before, "utf8");

    const res = await transformFileRenamedExports(tmpFile, DEFAULT_EXPORT_RENAMING);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, "utf8");
    const expected = fs.readFileSync(path.join(FIXTURE_DIR, "after-reexport.ts"), "utf8");
    expect(after.trim()).toBe(expected.trim());
  });
});
