# MigrateX: wagmi v1 -> v2 codemod package

Production-ready deterministic migration package for wagmi v1 to v2, built for Codemod Registry and CLI workflows.

## Published package

```bash
npx codemod @nifemi0/wagmi-v1-to-v2
```

Current published version: `0.1.2`

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
- Fixture-tested codemods and integration coverage

## Real repo validation

Validated with automated dry-runs on real open-source wagmi v1 repositories.

| Repository | wagmi version | Files using wagmi | Files scanned | Files changed | Unresolved |
| --- | --- | ---: | ---: | ---: | ---: |
| [`fiveoutofnine/tx.cool`](https://github.com/fiveoutofnine/tx.cool) | `^1.3.9` | 1 | 48 | 0 | 0 |
| [`Bubble-Protocol/seedling`](https://github.com/Bubble-Protocol/seedling) | `^1.4.12` | 3 | 63 | 0 | 0 |
| [`PinataCloud/pinata-nft-minting-app-template`](https://github.com/PinataCloud/pinata-nft-minting-app-template) | `^1.3.11` | 2 | 8 | 0 | 0 |

### Apply-mode validation (real writes, non-dry-run)

Validated with cloned repositories and `wagmi-v2 --apply`:

| Repository | wagmi version | Files changed | Changed files |
| --- | --- | ---: | --- |
| [`bnb-chain/greenfield-data-marketplace-frontend`](https://github.com/bnb-chain/greenfield-data-marketplace-frontend) | `^0.12.12` | 1 | `src/hooks/useWallet.ts` |
| [`LIT-Protocol/lit-pkp-auth-demo`](https://github.com/LIT-Protocol/lit-pkp-auth-demo) | `^0.12.8` | 1 | `src/hooks/useAuthenticate.ts` |
| [`rabbitholegg/gateway`](https://github.com/rabbitholegg/gateway) | `1.4.2` | 0 | — |
| [`web3sheet/web3sheet`](https://github.com/web3sheet/web3sheet) | `1.x` | 0 | — |

Captured output summary:

```json
[
  {
    "repo": "fiveoutofnine/tx.cool",
    "wagmiVersion": "^1.3.9",
    "filesUsingWagmi": 1,
    "filesScanned": 48,
    "filesChanged": 0,
    "unresolved": 0
  },
  {
    "repo": "Bubble-Protocol/seedling",
    "wagmiVersion": "^1.4.12",
    "filesUsingWagmi": 3,
    "filesScanned": 63,
    "filesChanged": 0,
    "unresolved": 0
  },
  {
    "repo": "PinataCloud/pinata-nft-minting-app-template",
    "wagmiVersion": "^1.3.11",
    "filesUsingWagmi": 2,
    "filesScanned": 8,
    "filesChanged": 0,
    "unresolved": 0
  }
]
```

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
