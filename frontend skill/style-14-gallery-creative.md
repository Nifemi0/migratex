# Style: Gallery / Creative Showcase

Role: Frontend engineer for visual-heavy sites.

Outcome: Gallery site optimized for images and portfolios.

Experience goals:
- Show high-res work without sacrificing performance.
- Delightful browsing and lightbox experience.

Required features:
- Masonry or grid gallery; fullscreen lightbox with zoom and keyboard navigation; photographer credits and metadata; download or print placeholders.
- Image optimization: srcset, lazy load, LQIP, AVIF or WebP.

Accessibility and i18n:
- Alt text and descriptive captions; focus trap in lightbox; gesture alternatives.

Performance and SEO:
- CDN-ready image paths; prefetch low-res variants; critical CSS for above-the-fold gallery.

Testing:
- Visual regression; keyboard navigation tests; unit tests for filters.

Deliverables:
- src/components/GalleryGrid.tsx
- src/components/Lightbox.tsx
- Sample images metadata JSON
- Storybook stories

Output: return the file tree with full contents.
