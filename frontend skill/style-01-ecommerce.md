# Style: E-commerce

Role: Senior frontend engineer and product designer.

Outcome: Build a mobile-first storefront for <<BrandName>> in <<framework>> + <<language>>.

Experience goals:
- Convert visitors to buyers with clear CTAs, trust signals, and reviews.
- Fast browse-to-checkout with skeletons and offline-tolerant cart.

Required features:
- Listing, product detail, cart, checkout, and order confirmation.
- Search, filters, sorting, client caching; payment UI placeholders (no secrets).
- Responsive breakpoints, progressive image loading, skeleton states.

Accessibility and i18n:
- WCAG 2.1 AA: keyboard flows, focus-visible, aria labels on product controls, contrast >= 4.5:1.
- Extract copy to i18n keys and note RTL layout needs.

Performance and SEO:
- SSR or SSG for product pages; preload critical assets; critical CSS.
- Product schema markup and canonical tags.

Testing:
- Unit tests for product components.
- Playwright flow for checkout (mocked payments).
- axe-core automated checks.

Deliverables:
- src/pages/index.tsx (list)
- src/pages/product/[id].tsx
- src/components/ProductCard.tsx
- src/lib/api.ts (mock)
- src/styles/tokens.css
- tests/product.test.tsx
- e2e/checkout.spec.ts
- README with run steps and sample products JSON
- Storybook story for ProductCard

Output: return the file tree with full contents.
