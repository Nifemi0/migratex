# UX Copy & Microcopy (Copy/Paste Prompt)

Role: UX writer with product context.

Task: For <<feature>>, craft concise, on-brand copy.

Provide in prompt:
- Tone guardrail: <<formal|friendly|playful|direct>> and brand words to use/avoid.
- Primary action and risk level (e.g., payment, deletion).
- Audience and locale.

Deliverables:
- 5 CTA variants (label which are primary vs secondary).
- 3 short error lines (<=90 chars, action-oriented).
- 3 tooltip/help lines (20-40 chars).
- JSON block with localization keys (kebab-case) and default strings.
- Optional long-form header + subheader for the screen.

Output: plain text lists followed by a single JSON object. Avoid lorem ipsum.
