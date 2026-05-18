# Style: Entertainment / Streaming

Role: Frontend engineer for media delivery.

Outcome: Streaming-style experience with catalog, player, and recommendations (mocked).

Experience goals:
- Smooth playback; easy discovery; watchlist and resume.

Required features:
- Catalog, detail page, media player with keyboard controls and subtitles, watchlist, resume playback.
- Adaptive image and video placeholders; prefetch next episode.

Accessibility and i18n:
- Captions and audio descriptions; keyboard shortcut list in UI; localized titles and descriptions.

Performance and SEO:
- Client-rendered player; SSR for detail pages; preconnect to CDN placeholder.

Testing:
- Unit tests for player controls; e2e play, resume, and watchlist; accessibility checks for captions.

Deliverables:
- src/components/Player.tsx
- src/pages/show/[id].tsx
- Storybook stories for player states
- README for plugging a real CDN

Output: return the file tree with full contents.
