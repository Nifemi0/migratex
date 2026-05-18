# Design System: The Quiet Authority

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Monolith."** 

Unlike standard "modern" SaaS layouts that rely on rounded pills and vibrant gradients, this system draws inspiration from high-end architecture and printed archival journals. It rejects the "interface" look in favor of a "gallery" look. 

We achieve a signature identity through:
*   **Intentional Asymmetry:** Using the 12-column grid to create unbalanced but harmonious layouts (e.g., a 5-column text block offset by a 7-column void).
*   **Brutalist Tension:** Combining the weight of Primary Navy (`#1E2030`) with the airy, expansive nature of Off White (`#F2F1EF`).
*   **Typography as Architecture:** Treatment of text not just as content, but as the primary structural element.

---

## 2. Colors
The color strategy is designed to feel "expensive" through restraint. We move away from pure black and white, using deep navies and muted greys to create a sophisticated, low-fatigue environment.

### Color Palette
*   **Primary Navy (#1E2030):** The foundation of authority. Use for hero backgrounds and primary interactions.
*   **Mid Navy (#2C3050):** Used for "secondary depth" and container backgrounds.
*   **Off White (#F2F1EF):** Our primary canvas. It feels warmer and more "editorial" than sterile white.
*   **Cool Grey (#8A8D9F):** Reserved for metadata, captions, and de-emphasized labels.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. 
Boundaries must be created through **Background Color Shifts**. For example, a section using `surface_container_low` (#F4F3F1) should sit directly against the `surface` (#FAF9F7) without a stroke. This creates a "monolithic" feel where the layout is carved out of color blocks rather than outlined.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of premium cardstock:
1.  **Base:** `surface` (#FAF9F7) - The default page color.
2.  **Raised Section:** `surface_container_low` (#F4F3F1) - For large content sections.
3.  **Floating Elements:** `surface_container_lowest` (#FFFFFF) - Reserved for high-priority cards or navigation menus to create a subtle "lift."

---

## 3. Typography
The typography system uses **Neue Montreal** to bridge the gap between classic Swiss design and contemporary digital precision.

*   **Display Large (3.5rem / 56px):** Used for hero statements. Set with `letter-spacing: -0.02em` to create a dense, authoritative "monolith" of text.
*   **Headline Large (2rem / 32px):** Used for section starts. Always provide generous `margin-bottom` (96px+) to let the headline breathe.
*   **Body Large (1.25rem / 20px):** The standard for editorial "intro" paragraphs.
*   **Body Medium (1rem / 16px):** The workhorse for long-form content. 
*   **Label Small (0.68rem / 11px):** All-caps, with `letter-spacing: 0.1em`. Used for "Eye-brow" tags and metadata.

**The Editorial Scale:** Use a 2:1 ratio for white space relative to type size. If a headline is 64px, the leading or the margin following it should be a deliberate multiple to maintain "Brutalist Tension."

---

## 4. Elevation & Depth: Tonal Layering
Since we are forbidding gradients and "pill" shapes, we achieve depth through **Tonal Stacking**.

*   **The Layering Principle:** Depth is achieved by placing a "Bright" surface on a "Low" surface. For example, a card using `surface_container_lowest` (#FFFFFF) placed on a `surface_container` (#EFEEEC) background creates a "soft lift" that feels natural and premium.
*   **The Ghost Border Fallback:** If a container lacks sufficient contrast against its background, use a "Ghost Border": a 1px stroke of `outline_variant` at **15% opacity**. This provides just enough definition for the eye without breaking the flat aesthetic.
*   **Ambient Shadows:** For floating navigation or modals, use an ultra-diffused shadow:
    *   *Value:* `0 24px 80px rgba(30, 32, 48, 0.08)`
    *   *Reason:* By using a navy-tinted shadow (Primary Navy) rather than black, the shadow feels like an ambient reflection of the brand color.

---

## 5. Components

### Buttons
*   **Style:** Flat, no gradients, no glows.
*   **Radius:** Strict `4px` to `6px` (`sm` to `md` in the scale).
*   **Primary:** Background: `primary` (#070918); Text: `on_primary` (#FFFFFF).
*   **Secondary:** Background: `outline_variant` at 20% opacity; Text: `primary`.
*   **Hover State:** Transition to `primary_container` (#1E2030) with a slight shift in background color only. No scale transforms.

### Cards & Containers
*   **Rule:** Forbid divider lines. 
*   **Strategy:** Use 48px to 64px of internal padding. Separate cards within a grid using the `surface_container_low` background color to distinguish them from the main `surface`.

### Input Fields
*   **Structure:** Bottom-border only or a subtle filled background (`surface_container_high`). 
*   **Focus State:** The label should never "jump." Use a subtle color shift of the bottom-border to `primary`.

### Studio-Specific Components
*   **The Progress Track:** For case studies, use a 2px tall horizontal bar in `primary` that spans the full width of the section, acting as both a progress indicator and a brutalist separator.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use extreme vertical whitespace (144px+) between unrelated sections to emphasize "Premium Restraint."
*   **DO** align text to a strict grid but leave 1 or 2 columns empty on the left or right to create an asymmetrical editorial feel.
*   **DO** use `label-sm` metadata in Primary Navy to anchor large blocks of Off-White space.

### Don't:
*   **DON'T** use pill-shaped buttons. They undermine the "Brutalist Tension" of the system.
*   **DON'T** use 100% black. Always use Primary Navy (#1E2030) for text to maintain tonal depth.
*   **DON'T** use standard 1px borders to separate content. If the layout feels cluttered, increase the white space instead of adding a line.
*   **DON'T** use center-aligned text for paragraphs. Editorial design thrives on the "ragged right" or "justified" look of left-aligned type.