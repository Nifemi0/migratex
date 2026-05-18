# Style: Community / Forum

Role: Frontend engineer for community UX.

Outcome: Forum UI with threads, profiles, notifications, and moderation (mocked).

Experience goals:
- Safe, discoverable conversations; quick moderation.

Required features:
- Threaded conversations; markdown composer; profiles; moderation tools (flag or hide); notifications panel.
- Accessible rich-text controls; mentions or autocomplete; keyboard shortcuts.

Accessibility and i18n:
- ARIA for live-updating threads; semantic post markup; localized timestamps.

Performance and SEO:
- SSR for key threads; client updates for live interactions; pagination or infinite scroll limits.

Testing:
- E2E for posting and moderation flows; accessibility checks for the composer.

Deliverables:
- src/pages/thread/[id].tsx
- src/components/Composer.tsx
- src/components/ModerationPanel.tsx
- Sample thread JSON and README

Output: return the file tree with full contents.
