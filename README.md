# MigrateX: wagmi v1 -> v2 codemod package

Production-ready deterministic migration package for wagmi v1 to v2, built for Codemod Registry and CLI workflows.

## Published package

```bash
npx codemod @nifemi0/wagmi-v1-to-v2
```

Current published version: `0.1.5`

Repository: https://github.com/Nifemi0/migratex

## What it does

- Scans repository usage of `wagmi`
- Runs conservative deterministic codemods
- Skips ambiguous cases instead of risky edits
- Writes migration outputs to `migratex-output/`
  - `migrate-report.json`
  - `migrate-summary.txt`
  - patch output (Git/snapshot mode support)

## Safety model

- Deterministic-first, no broad guesses
- Unknown/low-confidence patterns are skipped and reported
- Dry-run default behavior
- No incorrect transformations observed in reviewed apply-mode diffs

## Real Repository Validation

Batch apply-mode validation on real repositories (with v1-only scope gating):

- Repositories tested: 7
- Repositories in-scope (`wagmi@1.x`): 3
- Source files scanned in-scope (ts/tsx/js/jsx): 451
- Files using wagmi in-scope: 28
- Code files modified by codemods in-scope: 7
- Aggregate automation coverage in-scope (code files changed / files using wagmi): 25.0%
- False positives observed in reviewed diffs: 0

### Case study: `Tytandoteth/MAGBaseBridge`

Repository: https://github.com/Tytandoteth/MAGBaseBridge  
Files scanned: 38  
Files using wagmi: 14  
Files modified: 5 (`src/main.tsx` and 4 test files)  
Automation coverage: 35.7%  
False positives: 0  
Skipped/unsupported cases: 1

Validation:
- Typecheck/build on this repo: blocked by pre-existing upstream TS issues outside codemod edits
- Build check on real repo run (`LIT-Protocol/lit-pkp-auth-demo`): passed

### Apply-mode validation (real writes, non-dry-run)

Validated with cloned repositories and `wagmi-v2 --apply`:

| Repository | wagmi version | Files changed | Changed files |
| --- | --- | ---: | --- |
| [`Tytandoteth/MAGBaseBridge`](https://github.com/Tytandoteth/MAGBaseBridge) | `^1.4.7` | 5 | `src/main.tsx`, `src/__tests__/App.test.tsx`, `src/__tests__/BridgeInterface.test.tsx`, `src/__tests__/ConnectWallet.test.tsx`, `src/__tests__/WalletButton.test.tsx` |
| [`rabbitholegg/gateway`](https://github.com/rabbitholegg/gateway) | `1.4.2` | 1 | `contexts/ConnectKitProvider.tsx` |
| [`gerardcastell/insurechain`](https://github.com/gerardcastell/insurechain) | `^1.4.0` | 1 | `apps/client-web/config/WagmiConfigProvider.tsx` |
| [`bnb-chain/greenfield-data-marketplace-frontend`](https://github.com/bnb-chain/greenfield-data-marketplace-frontend) | `^0.12.12` | 0 | out-of-scope (v0) |
| [`LIT-Protocol/lit-pkp-auth-demo`](https://github.com/LIT-Protocol/lit-pkp-auth-demo) | `^0.12.8` | 0 | out-of-scope (v0) |

## Example Outputs

Generated in `migratex-output/`:
- `migrate-report.json`
- `migrate-summary.txt`
- `patch.diff` (when patch generation is run)

## Testing

- Fixture tests for deterministic codemods (`tests/codemods/*`)
- Integration test for report persistence (`tests/integration/report-persistence.test.ts`)
- Optional real-repo integration test (`tests/integration/real-repo.test.ts`)
- CI workflow validation (`npm run codemod:workflow:validate`)

## Limitations / skipped patterns

- Current deterministic rules intentionally target high-confidence wagmi v1 patterns only.
- Ambiguous wrappers and non-standard abstractions are skipped and reported instead of edited.
- This favors zero-risk edits over broad automation; AI-assisted edge-case handling remains opt-in.

## Local development

```bash
npm install
npm run build
npm test
```

Run local CLI directly:

```bash
node dist/src/cli/index.js wagmi-v2
node dist/src/cli/index.js wagmi-v2 --apply
node dist/src/cli/index.js validate
```

## Codemod workflow commands

Validate package/workflow:

```bash
npm run codemod:workflow:validate
```

Run local workflow package:

```bash
npm run codemod:workflow:run
```

Or with Codemod CLI directly:

```bash
npx codemod workflow validate -w workflow.yaml
npx codemod workflow run -w workflow.yaml
```

## Release and publish

Release quality gate:

```bash
npm run release:verify
```

Authenticate:

```bash
npx codemod login
```

Publish (recommended staged publish to avoid local package bloat):

```bash
npm run publish:staged
```

Direct publish:

```bash
npx codemod publish
```

## CI/CD

- CI: `.github/workflows/ci.yml`
  - build
  - test
  - codemod workflow validation
- Publish: `.github/workflows/publish.yml`
  - tag trigger: `v*`
  - OIDC trusted publishing via `codemod/publish-action@v1`

## Project structure

- `codemod.yaml` - Codemod package metadata
- `workflow.yaml` - workflow entrypoint
- `src/` - scanner, codemods, orchestrator, validator, reporting
- `tests/` - fixture/unit/integration tests
- `scripts/publish-staged.mjs` - staged publish helper

## Notes

- Package is published under user scope: `@nifemi0/wagmi-v1-to-v2`.
- If Codemod CLI asks for shell-step approvals during package execution, approve the workflow steps to proceed.

