# Testing & CI (Copy/Paste Prompts)

## Unit tests
Generate Jest + React Testing Library tests for <<Component>> covering:
- Props matrix and default props
- Events and aria/state assertions
- Accessibility: role/name, focus order, key interactions

## E2E scenario
Playwright script: signup -> email verification (mock) -> dashboard arrival. Use resilient selectors (data-testid) and include assertions.

## PR helper
Given diff or summary: <<paste>>
Return: title, summary bullets, migration steps, risk level, test plan checklist.

CI hint: prefer deterministic seeds, no network reliance; flag any flaky patterns you notice.
