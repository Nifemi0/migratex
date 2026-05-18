# Style: Portfolio / Personal Showcase

Role: Expert frontend engineer and visual designer.

Outcome: Build a portfolio for <<PersonName>> with strong project storytelling.

Experience goals:
- Spotlight craftsmanship and outcomes.
- Delightful yet fast galleries.

Required sections:
- Hero with bio, featured project carousel.
- Project pages with gallery, process, results; lightbox with keyboard navigation.
- Download or print-friendly case-study PDFs (placeholder).

Accessibility and i18n:
- Alt text conventions, skip links, focusable carousel controls, high-contrast mode.

Performance and SEO:
- Preload hero images; lazy-load galleries with srcset; structured data (Person, CreativeWork).

Testing:
- Visual regression (Storybook or Playwright).
- Unit tests for share and contact components.
- Lightbox keyboard navigation tests.

Deliverables:
- src/components/ProjectCard.tsx
- src/pages/projects/[slug].tsx
- scripts/generate-printable.js
- Storybook stories
- README with content strategy notes

Output: return the file tree with full contents.
