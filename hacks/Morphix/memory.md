# Project Memory: wagmi v1 → v2 Migration Tool

## Overview
A CLI-first migration engine to upgrade TypeScript React repos from wagmi v1 to v2, prioritizing deterministic, safe codemods and clear reporting. Designed for reliability, testability, and hackathon demo readiness.

## Product Vision
- **CLI tool**: `npx migratex wagmi-v2`
- **Phases**: scan, detect, plan, codemod, flag edge cases, AI assist (flagged only), validate, report
- **Modes**: Git diff (if repo), snapshot diff (if not), auto-detect or CLI flag
- **Report**: Applied/skipped mappings, confidence, manual tasks, automation %

## Key Principles
- Deterministic first, AI second
- Zero false positives
- Skip/flag ambiguous cases
- Every codemod is testable in isolation
- Works on real TypeScript React repos
- Only use AI for flagged edge cases
- Every claim backed by tests or real repo runs

## Structure
- `src/cli/` — CLI entrypoint
- `src/scanner/` — Detects wagmi usage
- `src/codemods/` — Deterministic codemods (imports, exports, hooks, provider)
- `src/ai/` — AI edge-case assistant (planned)
- `src/validator/` — Typecheck/build/test validation
- `src/report/` — Migration report generator
- `tests/` — Fixture-driven unit/integration tests
- `migratex-output/` — Reports, patches, snapshots

## Features Implemented
- Deterministic codemods for imports, exports, hooks, provider
- Conservative mapping tables (high-confidence only)
- Skips/flags ambiguous or custom patterns
- Dry-run and apply flows
- Patch system: auto-detects Git/snapshot mode (design complete)
- Migration report (stdout, planned for file output)
- CI workflow (Node 22, TS 5.4, vitest)
- All codemods are idempotent and fixture-tested

## Remaining Features
1. **Validator Fixes**: Update validator to use execa correctly for typecheck/build/test
2. **Persistent Migration Report**: Write migrate-report.json to disk after each run
3. **Integration Test on Real Repo**: Run end-to-end on a real wagmi v1 repo, collect metrics

## Example CLI Usage
```bash
npx migratex wagmi-v2 --patch-mode auto
npx migratex wagmi-v2 --patch-mode git
npx migratex wagmi-v2 --patch-mode snapshot
```

## Example Output
- Patch written to `migratex-output/patch.diff`
- Report written to `migratex-output/migrate-report.json`
- CLI prints which patch mode was used

## Notes
- Only high-confidence mappings are applied
- Skipped mappings are reported with reasons
- AI assistant is planned for flagged files only
- Designed for hackathon demo and real-world reliability

---
_Last updated: 2026-04-16_
