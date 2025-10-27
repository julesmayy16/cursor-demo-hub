# Four Themes with Properly Styled Dropdown Selector — PRD

## Overview
Implement four distinct, cohesive themes: Light (green), Dark (teal), Purple, and Orange. Replace the binary toggle with a **properly styled, compact dropdown selector** that looks professional and fits the design. Each theme must be a complete color system, not just accent color variations.

## Objectives
- Reduce complexity to a single axis (theme).
- Preserve visual consistency via design tokens; avoid per-component rewrites.
- Ensure accessibility and strong testability.

## Current State (As-Is)
- Light and Dark themes exist with a binary toggle and persisted choice.
- Early initialization prevents theme flash (no FOUC).

## Proposed Direction (To-Be)
- Four standalone themes: Light, Dark, Purple, Orange.
- **Properly styled dropdown selector** with:
  - Small, appropriate text size (`text-sm` or `text-base`)
  - Compact padding (`px-2 py-1`)
  - Theme-aware styling (borders, background)
  - Fixed in the top-right corner (always visible on all screen sizes)
  - Professional appearance with subtle shadow for visibility
- Each theme provides a complete, cohesive color experience.
- Persist selection locally and apply before first paint.

## In Scope
- Four complete themes with comprehensive color systems.
- Properly styled dropdown selector with compact sizing.
- Persistence and early initialization (no FOUC).
- E2E-friendly attributes and root data attribute.

## Out of Scope
- System-following behavior (may be revisited later).
- Additional themes or typography/spacing changes.

## User Stories
- As a reader, I can choose among Light, Dark, Purple, or Orange.
- As a returning reader, my selection is remembered locally.
- As a keyboard-only user, I can operate the dropdown easily.
- As a low-vision user, contrast remains compliant.

## Functional Requirements
- Options: Light, Dark, Purple, Orange.
- Default theme: Light.
- Persistence: localStorage key `theme` set to one of `light|dark|purple|orange`.
- No FOUC: apply the selected theme before initial paint.
- **UI Control: Properly styled `<select>` dropdown** with:
  - Fixed positioning in top-right corner (`fixed top-4 right-4 z-50` - REQUIRED)
  - Small text size (`text-sm` class - REQUIRED)
  - Compact padding (`px-2 py-1` - REQUIRED)
  - Theme-aware colors (use `dev-*` variables)
  - Professional appearance with subtle shadow
  - Always visible on all screen sizes (mobile, tablet, desktop)
  - **MUST NOT have huge text, excessive padding, or be placed in sidebar**
- Testing exposure:
  - data-testid="theme-selector" on the control.
  - `html[data-theme]` equals the selected theme.

## Accessibility Requirements
- Native `<select>` element with proper semantics.
- Keyboard: Tab to focus, Arrow keys to navigate options, Enter to select.
- Visible focus ring with sufficient contrast.
- aria-label for screen readers.
- Compact but accessible sizing.

## Visual/Theming Requirements
- Semantic tokens: accent, text-primary, text-secondary, background, card, border-subtle.
- Theme values:
  - Light:
    - accent: #06302B
    - text-primary: #06302B
    - text-secondary: rgba(6,48,43,0.6)
    - background: #FEFCF6
    - card: #FFFFFF
  - Dark:
    - accent: #7CD4C2
    - text-primary: #E7F4F1
    - text-secondary: rgba(231,244,241,0.7)
    - background: #0B1217
    - card: #111927
  - Purple:
    - accent: #7C3AED
    - text-primary: #06302B
    - text-secondary: rgba(6,48,43,0.6)
    - background: #FEFCF6
    - card: #FFFFFF
  - Orange:
    - accent: #C2410C
    - text-primary: #06302B
    - text-secondary: rgba(6,48,43,0.6)
    - background: #FEFCF6
    - card: #FFFFFF
- Derived tokens:
  - `border-subtle` via color-mix from accent (Light/Purple/Orange: ~15%; Dark: ~25%).
  - Links and code tints derive from accent.

## Non-Functional Requirements
- No perceptible flash on load; minimal CLS.
- Selection latency < 50ms.
- Evergreen browser support; without JS defaults to Light.

## QA & Testability
- First load defaults to Light with `html[data-theme="light"]`.
- Selecting each theme updates `data-theme` and persists across reloads.
- Keyboard navigation works on the selector.
- Axe/PA11Y finds no critical issues.

## Success Metrics
- >= 95% of sessions render the chosen theme without flash.
- 0 critical accessibility issues related to the selector or contrast.

## Risks & Mitigations
- Contrast regressions: audit and adjust token values.
- Inconsistent derived styles: centralize on tokens only.

## Information Architecture & Naming
- Control label: “Theme”.
- Options: “Light”, “Dark”, “Purple”, “Orange”.
- Data attribute: `html[data-theme]` ∈ {light, dark, purple, orange}.