import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export type ValidatorOptions = {
  install?: boolean;
  typecheck?: boolean;
  build?: boolean;
  test?: boolean;
};

export type ValidationStepResult = {
  name: "install" | "typecheck" | "build" | "test";
  command: string;
  success: boolean;
  skipped?: boolean;
  reason?: string;
  error?: string;
};

export type ValidatorResult = {
  success: boolean;
  packageManager: "npm" | "pnpm" | "yarn";
  steps: ValidationStepResult[];
  failedStep?: ValidationStepResult["name"];
  error?: string;
};

function detectPackageManager(cwd: string): "npm" | "pnpm" | "yarn" {
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  return "npm";
}

function binFor(cmd: "npm" | "pnpm" | "yarn" | "npx"): string {
  return process.platform === "win32" ? `${cmd}.cmd` : cmd;
}

function hasScript(cwd: string, scriptName: string): boolean {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return false;
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    return Boolean(pkg?.scripts?.[scriptName]);
  } catch {
    return false;
  }
}

function quoteArg(v: string): string {
  return /[\s"]/g.test(v) ? `"${v.replace(/"/g, '\\"')}"` : v;
}

function runCommand(cwd: string, command: string, args: string[]) {
  const line = [command, ...args].map(quoteArg).join(" ");
  const stdout = execSync(line, { cwd, encoding: "utf8", stdio: "pipe" });
  return stdout ?? "";
}

function localBin(cwd: string, name: string): string | null {
  const ext = process.platform === "win32" ? ".cmd" : "";
  const candidate = path.join(cwd, "node_modules", ".bin", `${name}${ext}`);
  return fs.existsSync(candidate) ? candidate : null;
}

export async function runValidator(cwd: string, opts?: ValidatorOptions): Promise<ValidatorResult> {
  const packageManager = detectPackageManager(cwd);
  const merged: Required<ValidatorOptions> = {
    install: opts?.install ?? false,
    typecheck: opts?.typecheck ?? true,
    build: opts?.build ?? true,
    test: opts?.test ?? true,
  };
  const steps: ValidationStepResult[] = [];

  if (merged.install) {
    const installCommand = packageManager === "npm" ? "ci" : "install";
    const step: ValidationStepResult = {
      name: "install",
      command: `${packageManager} ${installCommand}`,
      success: false,
    };
    try {
      runCommand(cwd, binFor(packageManager), [installCommand]);
      step.success = true;
      steps.push(step);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      step.error = message;
      steps.push(step);
      return { success: false, packageManager, steps, failedStep: "install", error: message };
    }
  }

  if (merged.typecheck) {
    const typecheckScriptExists = hasScript(cwd, "typecheck");
    const tsConfigExists = fs.existsSync(path.join(cwd, "tsconfig.json"));

    if (!typecheckScriptExists && !tsConfigExists) {
      steps.push({
        name: "typecheck",
        command: "typecheck",
        success: true,
        skipped: true,
        reason: "No typecheck script and no tsconfig.json found",
      });
    } else {
      const step: ValidationStepResult = {
        name: "typecheck",
        command: typecheckScriptExists ? `${packageManager} run typecheck` : "npx tsc --noEmit",
        success: false,
      };
      try {
        if (typecheckScriptExists) {
          runCommand(cwd, binFor(packageManager), ["run", "typecheck"]);
        } else {
          const localTsc = localBin(cwd, "tsc");
          if (localTsc) {
            step.command = `${localTsc} --noEmit`;
            runCommand(cwd, localTsc, ["--noEmit"]);
          } else {
            runCommand(cwd, binFor("npx"), ["tsc", "--noEmit"]);
          }
        }
        step.success = true;
        steps.push(step);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        step.error = message;
        steps.push(step);
        return { success: false, packageManager, steps, failedStep: "typecheck", error: message };
      }
    }
  }

  if (merged.build) {
    if (!hasScript(cwd, "build")) {
      steps.push({
        name: "build",
        command: `${packageManager} run build`,
        success: true,
        skipped: true,
        reason: "No build script found",
      });
    } else {
      const step: ValidationStepResult = {
        name: "build",
        command: `${packageManager} run build`,
        success: false,
      };
      try {
        runCommand(cwd, binFor(packageManager), ["run", "build"]);
        step.success = true;
        steps.push(step);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        step.error = message;
        steps.push(step);
        return { success: false, packageManager, steps, failedStep: "build", error: message };
      }
    }
  }

  if (merged.test) {
    if (!hasScript(cwd, "test")) {
      steps.push({
        name: "test",
        command: `${packageManager} run test`,
        success: true,
        skipped: true,
        reason: "No test script found",
      });
    } else {
      const step: ValidationStepResult = {
        name: "test",
        command: `${packageManager} run test`,
        success: false,
      };
      try {
        runCommand(cwd, binFor(packageManager), ["run", "test"]);
        step.success = true;
        steps.push(step);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        step.error = message;
        steps.push(step);
        return { success: false, packageManager, steps, failedStep: "test", error: message };
      }
    }
  }

  return { success: true, packageManager, steps };
}

export default runValidator;
