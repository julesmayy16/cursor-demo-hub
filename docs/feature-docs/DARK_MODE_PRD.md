
# Dark Mode and Theme Toggle — PRD

## Overview

Introduce a first-class dark mode and an accessible theme toggle that persists user preference, respects system settings, and avoids perceptible flicker. Establish a token-based theming foundation so future themes (e.g., high-contrast) can be added without wide component rewrites.

## Objectives

- Provide a dark theme that feels cohesive with our brand.
- Offer an explicit user-controlled theme toggle that complements system preference.
- Reduce visual regression risk by using a design-token approach rather than hard-coded colors.
- Ensure accessibility best practices for color contrast, keyboard interaction, and focus states.

## Current State (As-Is)

- Visual language uses a single light palette derived from the brand green.
- Color usage in components is mostly direct references (e.g., “dev-*” colors) without a mode-aware token layer.
- No built-in dark mode; no persisted theme preference; no toggle UI.

## Proposed Direction (To-Be)

- Adopt a themeable token layer (design tokens) that backs existing semantic color names (text, background, surface, accent, secondary) and can switch values per theme.
- Support two themes initially: “light” (default) and “dark.”
- Add an always-available theme toggle in the primary navigation surface.
- Persist user preference; on first visit, respect system preference; prevent flash of incorrect theme (FOUC).

## In Scope

- Two themes: light and dark.
- Accessible toggle UI (desktop + mobile) with clear labels and icons.
- Theming of core surfaces and text across key user journeys: home, list, and post details.
- Persisted choice and system preference handling.
- E2E-friendly attributes for robust automated testing.

## Out of Scope

- Full visual redesign or component restyle beyond colors and states.
- Additional themes (e.g., high-contrast) — future work.
- Per-post or per-page theme overrides.

## User Stories

- As a reader, I can switch between light and dark so I can read comfortably in my environment.
- As a returning reader, my chosen theme is remembered so I don't have to toggle on each visit.
- As a keyboard-only user, I can reach and operate the toggle with clear focus indication.
- As a low-vision user, colors meet contrast guidelines in both themes.

## Functional Requirements

- Theme availability: light and dark.
- Defaulting behavior:
- First visit: follow system preference.
- Subsequent visits: follow last explicit user choice.
- Persistence: store user choice locally; never require auth.
- No FOUC: the initial theme appears before content paints.
- Toggle placement: fixed in the top-right corner of the main content panel; always visible and accessible on all screen sizes (mobile and desktop).
- Toggle semantics: a single control that flips between light and dark.
- Toggle state: communicates current state and next action (e.g., icon + label/title).
- Coverage: applies to body background, primary/secondary text, links, buttons, inputs, cards/surfaces, dividers/borders, code blocks.
- States: hover, focus, active, disabled remain legible and brand-appropriate in both themes.

## Accessibility Requirements

- Contrast: WCAG AA (4.5:1 for body text, 3:1 for large text/graphics) in both themes.
- Keyboard: toggle is reachable in tab order and operable via Enter/Space.
- Focus: visible, non-color-only focus indicators with sufficient contrast.
- Semantics: use role-appropriate control semantics; expose pressed state.
- Labels: clear accessible name (e.g., “Switch to dark mode” / “Switch to light mode”).
- Target size: minimum 44×44 px touch target.

## Visual/Theming Requirements

- Brand alignment: retain current green accent lineage.
- Tokens provide semantic names and are theme-resolved. Initial tokens:
- Accent: accent (brand accent)
- Text: text-primary, text-secondary
- Background: background (app), card (surface)
- Border: border-subtle
- Initial palette values
- Light
  - accent: #06302B
  - text-primary: #06302B
  - text-secondary: rgba(6, 48, 43, 0.6)
  - background: #FEFCF6
  - card: #FFFFFF
  - border-subtle: color-mix(accent 15%, transparent)
- Dark
  - accent: #7CD4C2
  - text-primary: #E7F4F1
  - text-secondary: rgba(231, 244, 241, 0.7)
  - background: #0B1217
  - card: #111927
  - border-subtle: color-mix(accent 25%, transparent)
- Typography, spacing, and shape remain unchanged.

## Non-Functional Requirements

- Performance: no noticeable flicker or layout shift when applying the theme.
- SSR/Hydration: server and client agree on initial theme to avoid hydration warnings.
- Reliability: toggle state changes are instant; theme applies app-wide.
- Compatibility: modern evergreen browsers; graceful no-JS fallback shows system-preferred theme.

## QA & Testability

- E2E hooks:
- Toggle element exposes data-testid: "theme-toggle".
- Root element exposes current theme via data attribute (e.g., data-theme="light|dark").
- E2E scenarios (examples):
- First visit (no stored choice) follows system preference.
- Toggling updates both UI and data attribute; persists across reloads.
- Keyboard interaction toggles theme and preserves focus.
- Contrast checks pass in both themes on key pages.

## Rollout & Milestones

- Phase 1: Introduce token layer and light/dark values; add toggle; apply to global surfaces and text.
- Phase 2: Extend to interactive components (buttons, inputs, pagination) and content blocks (code, quotes).
- Phase 3: Audit and refine contrast and states; finalize documentation.

## Success Metrics

- >= 95% of sessions render without theme flash (instrument via perf markers or visual audit).
- 0 critical accessibility issues related to color/contrast in axe audits.
- < 0.02 CLS attributable to theme initialization on key pages.
- Toggle usage recorded (optional) to validate engagement.

## Risks & Mitigations

- Risk: FOUC due to late theme application — Mitigation: apply theme before main render.
- Risk: Insufficient contrast on certain surfaces — Mitigation: contrast audit and iterative tuning.
- Risk: Inconsistent component colors — Mitigation: token-only consumption; remove direct color literals over time.

## Open Questions

- Should we offer an explicit "System" option alongside Light/Dark?
- Do we want telemetry on theme selections for product insight?