# Style: Documentation / Knowledge Base

Role: Docs-focused frontend engineer.

Outcome: Documentation site with search, versioning, and API reference.

Experience goals:
- Fast, searchable docs; copy-friendly code samples.

Required features:
- Sidebar navigation, version switcher, search (lunr or algolia placeholder), API reference with code samples, copy-to-clipboard.
- Dark mode, printable layout, edit-on-github links.

Accessibility and i18n:
- Semantic markup for code blocks; keyboard-friendly search results; localized docs.

Performance and SEO:
- Static generation; pre-render docs; clean URLs.

Testing:
- Unit tests for search and TOC behavior.
- Accessibility audits for code samples.

Deliverables:
- docs/ structure
- src/components/CodeBlock.tsx
- src/pages/docs/[version]/[slug].tsx
- Sample API page with JSON schema
- README

Output: return the file tree with full contents.
