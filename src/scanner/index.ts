import fs from "fs";
import path from "path";
import fg from "fast-glob";

export type ScannerReport = {
  packageManager: "npm" | "pnpm" | "yarn" | "unknown";
  wagmiVersion: string | null;
  wagmiMajor: number | null;
  inScope: boolean;
  filesUsingWagmi: Array<{
    path: string;
    importNames: string[];
    confidence: number;
    providerUsage?: string[];
    hooksUsed?: string[];
  }>;
  actionablePatterns: {
    total: number;
    byPattern: Record<string, number>;
  };
};

function detectPackageManager(cwd: string): ScannerReport["packageManager"] {
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "package-lock.json"))) return "npm";
  return "unknown";
}

function parseWagmiMajor(version: string | null): number | null {
  if (!version) return null;
  const match = version.match(/\d+/);
  if (!match) return null;
  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

function countMatches(src: string, pattern: RegExp) {
  const matches = src.match(pattern);
  return matches ? matches.length : 0;
}

export async function scanRepo(cwd: string): Promise<ScannerReport> {
  const pkgPath = path.join(cwd, "package.json");
  let wagmiVersion: string | null = null;
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
      if (deps["wagmi"]) wagmiVersion = String(deps["wagmi"]);
    } catch {
      wagmiVersion = null;
    }
  }
  const wagmiMajor = parseWagmiMajor(wagmiVersion);
  const inScope = wagmiMajor === 1;

  const patterns = ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"];
  const entries = await fg(patterns, { cwd, absolute: true, ignore: ["node_modules/**", "dist/**"] });

  const filesUsingWagmi: ScannerReport["filesUsingWagmi"] = [];
  const actionableByPattern: Record<string, number> = {
    hookRenames: 0,
    wagmiConfigToProvider: 0,
    useNetworkExact: 0,
    queryOptionsTopLevel: 0,
    erc20AbiImport: 0,
    configureChainsUsage: 0,
    removedProviderImports: 0,
    prepareHooks: 0,
  };
  const importRegex = /from\s+['\"]wagmi['\"]/g;
  const requireRegex = /require\(['\"]wagmi['\"]\)/g;
  const namedImportRegex = /import\s+{([^}]+)}\s+from\s+['\"]wagmi['\"]/;

  for (const file of entries) {
    const src = fs.readFileSync(file, "utf8");
    if (importRegex.test(src) || requireRegex.test(src)) {
      const match = namedImportRegex.exec(src);
      const importNames: string[] =
        match && match[1]
          ? match[1]
              .split(",")
              .map((s) => s.trim().split(" as ")[0].trim())
              .filter(Boolean)
          : [];
      const confidence = importNames.length > 0 ? 0.95 : 0.6;

      // detect provider usage
      const providerUsage: string[] = [];
      if (/WagmiProvider/.test(src)) providerUsage.push("WagmiProvider");
      if (/WagmiConfig/.test(src)) providerUsage.push("WagmiConfig");
      if (/createClient\(/.test(src)) providerUsage.push("createClient");

      // detect hook usages with a lightweight regex only in files that import wagmi
      const hooks = new Set<string>();
      const hookRegex = /\buse[A-Z][A-Za-z0-9_]*/g;
      let m: RegExpExecArray | null;
      while ((m = hookRegex.exec(src)) !== null) {
        hooks.add(m[0]);
      }

      filesUsingWagmi.push({
        path: file,
        importNames,
        confidence,
        providerUsage,
        hooksUsed: Array.from(hooks),
      });

      // Pattern counters (scoring denominator should be actionable patterns, not files).
      const hookRenameSymbols = [
        'useWallet',
        'useContractRead',
        'useContractReads',
        'useContractWrite',
        'useContractEvent',
        'useContractInfiniteReads',
        'useFeeData',
        'useSwitchNetwork',
        'useSigner',
        'useProvider',
        'useWaitForTransaction',
      ];
      for (const symbol of hookRenameSymbols) {
        actionableByPattern.hookRenames += countMatches(
          src,
          new RegExp(`\\b${symbol}\\b`, 'g'),
        );
      }

      actionableByPattern.wagmiConfigToProvider += countMatches(src, /\bWagmiConfig\b/g);
      actionableByPattern.useNetworkExact += countMatches(src, /\buseNetwork\s*\(\s*\)/g);
      actionableByPattern.queryOptionsTopLevel += countMatches(
        src,
        /\b(enabled|staleTime|cacheTime|gcTime|retry|retryDelay|refetchInterval|refetchOnMount|refetchOnReconnect|refetchOnWindowFocus|select|suspense)\s*:/g,
      );
      actionableByPattern.erc20AbiImport += countMatches(src, /\berc20ABI\b/g);
      actionableByPattern.configureChainsUsage += countMatches(src, /\bconfigureChains\s*\(/g);
      actionableByPattern.removedProviderImports += countMatches(src, /from\s+['"]wagmi\/providers\/[^'"]+['"]/g);
      actionableByPattern.prepareHooks += countMatches(
        src,
        /\b(usePrepareContractWrite|usePrepareSendTransaction|usePrepareContractWrite)\b/g,
      );
    }
  }

  const actionableTotal = Object.values(actionableByPattern).reduce((acc, value) => acc + value, 0);

  return {
    packageManager: detectPackageManager(cwd),
    wagmiVersion,
    wagmiMajor,
    inScope,
    filesUsingWagmi,
    actionablePatterns: {
      total: actionableTotal,
      byPattern: actionableByPattern,
    },
  };
}
