# Accessibility & Localization (Copy/Paste Prompts)

## Accessibility audit
Role: WCAG 2.1 AA auditor. Given component code: <<paste code>>
Return:
- Issue list grouped by Contrast / ARIA / Keyboard / Focus order / Motion.
- Minimal code patches for each issue.
- Quick manual test checklist.

## Localization extraction
Role: i18n engineer. Given React code, extract user-facing strings into JSON keys (kebab-case). Return:
- i18n/en.json with keys/values.
- Updated component using t('key').
- Note any pluralization or date/number formatting requirements.

## ARIA plan
Suggest roles, labels, and keyboard interactions for a modal or drawer component and show an updated JSX snippet.
