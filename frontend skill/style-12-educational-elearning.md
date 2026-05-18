# Style: Educational / E-learning

Role: Instructional designer and frontend engineer.

Outcome: E-learning front end with courses, lessons, quizzes, and progress.

Experience goals:
- Guide learners, keep engagement, and track progress locally.

Required features:
- Course catalog; lesson viewer (video, transcript, quiz); progress bar; certificate placeholder.
- Offline-friendly caching (service worker placeholder); accessible video controls.

Accessibility and i18n:
- Captions and transcripts; keyboard video controls; aria-live quiz feedback; localized dates and numbers.

Performance and SEO:
- Static generation for catalog; lazy-load lesson assets; prefetch next lesson.

Testing:
- Unit tests for quiz logic; e2e course completion; accessibility audits.

Deliverables:
- src/pages/courses/[slug].tsx
- src/components/Quiz.tsx
- src/lib/progress.ts
- Sample course JSON and README

Output: return the file tree with full contents.
