import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { transformFileImports, DEFAULT_IMPORT_RENAMING } from "../../src/codemods/imports";

const FIXTURE_DIR = path.join(__dirname, "..", "fixtures", "imports");
const TMP_DIR = path.join(__dirname, "tmp");

describe("import renaming codemod (deterministic)", () => {
  beforeEach(() => {
    if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
  });

  afterEach(() => {
    // cleanup
    if (fs.existsSync(TMP_DIR)) {
      fs.rmSync(TMP_DIR, { recursive: true, force: true });
    }
  });

  it("renames single known import in a file", async () => {
    const before = fs.readFileSync(path.join(FIXTURE_DIR, "before.tsx"), "utf8");
    const tmpFile = path.join(TMP_DIR, "before.tsx");
    fs.writeFileSync(tmpFile, before, "utf8");

    const res = await transformFileImports(tmpFile, DEFAULT_IMPORT_RENAMING);
    expect(res.changed).toBe(true);

    const after = fs.readFileSync(tmpFile, "utf8");
    const expected = fs.readFileSync(path.join(FIXTURE_DIR, "after.tsx"), "utf8");
    expect(after.trim()).toBe(expected.trim());
  });
});
