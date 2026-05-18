# Style: SaaS Landing Page

Role: Senior frontend engineer and growth designer.

Outcome: Build a high-converting landing for <<ProductName>> in <<framework>> + <<language>>.

Experience goals:
- 5-second value clarity with an obvious primary CTA (trial or demo).
- Pricing transparency and objection-busting FAQ.

Required sections:
- Hero (headline, subhead, primary CTA) with social proof.
- Feature highlights with icons or animations, pricing table, FAQ, demo or signup form.
- Accessible validation and inline errors.

Accessibility and i18n:
- Keyboard-accessible hero and modal; aria-live for form errors.
- Localization placeholders; currency-aware pricing.

Performance and SEO:
- Optimized hero assets (AVIF/WebP), preconnect analytics, Organization/Product schema.
- Mobile Lighthouse target > 90.

Testing:
- Unit tests for form and pricing logic.
- Playwright scenario: signup and modal demo.
- Track Core Web Vitals in CI.

Deliverables:
- src/pages/index.tsx
- src/components/Hero.tsx, PricingTable.tsx
- src/styles/design-tokens.json
- tests/hero.test.tsx
- README with env var placeholders and local dev steps

Output: return the file tree with full contents.
