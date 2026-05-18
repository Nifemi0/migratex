# Style: Blog / Magazine

Role: Expert frontend engineer and content strategist.

Outcome: Build a multi-author publication with excellent readability.

Experience goals:
- Comfortable reading on mobile and desktop with a consistent typographic scale.
- Strong SEO and social sharing metadata.

Required sections:
- Home list, tag or category pages, article page with author box, related posts, comments placeholder.
- Reading mode (larger type), save-for-later, AMP or fast article option.

Accessibility and i18n:
- Semantic headings, skip links, accessible table of contents, localized dates.

Performance and SEO:
- SSR for articles; open graph images; lazy-load images and embeds; canonical tags.

Testing:
- Storybook for article elements.
- Unit tests for content components.
- E2E article read and save flow.

Deliverables:
- src/components/Article.tsx, TOC.tsx
- src/pages/[slug].tsx
- scripts/generate-og-image.js (placeholder)
- Sample article markdown with frontmatter

Output: return the file tree with full contents.
