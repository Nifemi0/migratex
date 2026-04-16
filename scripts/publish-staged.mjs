#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const stageRoot = fs.mkdtempSync(path.join(os.tmpdir(), "codemod-publish-"));

const include = [
  "codemod.yaml",
  "workflow.yaml",
  "README.md",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "src",
  "tests",
];

for (const rel of include) {
  const from = path.join(root, rel);
  if (!fs.existsSync(from)) continue;
  const to = path.join(stageRoot, rel);
  const stat = fs.statSync(from);
  if (stat.isDirectory()) {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.cpSync(from, to, { recursive: true });
  } else {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
  }
}

try {
  const command =
    process.platform === "win32"
      ? "cmd /c npx --yes codemod publish"
      : "npx --yes codemod publish";
  execSync(command, {
    cwd: stageRoot,
    stdio: "inherit",
    env: process.env,
  });
  process.exit(0);
} catch {
  process.exit(1);
}
