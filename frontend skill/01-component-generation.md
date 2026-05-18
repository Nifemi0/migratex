# Component Generation (Copy/Paste Prompt)

Role: Senior frontend engineer.

Task: Build a reusable <<component-type>> named <<Name>> in <<framework>> + <<language>> with production-ready UX, tests, and docs.

Inputs to supply:
- Props (type + default): <<list>>
- Styling system: <<tailwind|css-modules|styled-components>>
- Supported states: idle, loading, error, disabled, empty
- Data-testid naming convention (if any)

Constraints:
- Accessibility: keyboard flows, focus-visible, ARIA labels/roles, announce errors.
- Structure: semantic HTML, minimal wrapper divs, avoid redundant nesting.
- Performance: memoize expensive bits, avoid inline anonymous functions where possible.

Deliverables (file tree):
- src/components/<<Name>>.tsx
- styles/<<Name>>.module.css (or equivalent)
- tests/<<Name>>.test.tsx (Jest + Testing Library)
- stories/<<Name>>.stories.tsx (Storybook with controls)

Output: return the file tree with full contents plus a 2-line usage example. Keep comments only for non-obvious logic.
