# Dark Mode + Accessible Theme Toggle

## What we’ll do

- Add Tailwind dark mode via class strategy and switch the existing `dev-*` palette to CSS variables so components automatically theme without edits.
- Define light/dark variable sets in `app/globals.css`.
- Prevent flash-of-wrong-theme with a tiny inline script in `app/layout.tsx` that sets the initial theme before hydration and exposes `data-theme` for tests.
- Create an accessible `ThemeToggle` component with `data-testid` and proper ARIA, positioned in the top-right corner of the main content panel (always visible on all screen sizes).
- Introduce a dedicated `dev-surface` token for accent surfaces that must remain green in light mode but map to a neutral dark surface in dark mode. Use this for sections that currently have green backgrounds so they do not get flattened to cream.

## Files to change

- `tailwind.config.ts`: enable `darkMode: "class"`; map `dev-*` colors to CSS variables.
- `app/globals.css`: define light/dark CSS variables for `--color-dev-*` and keep existing base/utilities.
- `app/layout.tsx`: add `suppressHydrationWarning` and an inline `beforeInteractive` script to apply the theme class early; set `data-theme`; position the ThemeToggle in the top-right of the main content area.
- `app/components/ThemeToggle.tsx`: new client component.

## Key edits (concise)

- tailwind.config.ts
```ts
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dev-primary": "var(--color-dev-primary)",
        "dev-accent": "var(--color-dev-accent)",
        "dev-text": "var(--color-dev-text)",
        "dev-secondary": "var(--color-dev-secondary)",
        "dev-bg": "var(--color-dev-bg)",
        "dev-card": "var(--color-dev-card)",
        "dev-surface": "var(--color-dev-surface)",
      },
    },
  },
};
```

- app/globals.css
```css
:root {
  --color-dev-primary: #06302b;      /* Dark green - for buttons/active states */
  --color-dev-accent: #06302b;       /* Same as primary in light mode */
  --color-dev-text: #06302b;         /* Dark green text */
  --color-dev-secondary: rgba(6, 48, 43, 0.6);  /* Muted dark green */
  --color-dev-bg: #fefcf6;           /* Cream background */
  --color-dev-card: #ffffff;         /* White card background */
  --color-dev-surface: #06302b;      /* Green accent surface (remains green in light) */
}
.dark {
  --color-dev-primary: #06302b;      /* KEEP dark green for buttons/active states */
  --color-dev-accent: #7cd4c2;       /* Bright teal for links/highlights */
  --color-dev-text: #e7f4f1;         /* Very light text for readability */
  --color-dev-secondary: rgba(231, 244, 241, 0.7);  /* Muted light text */
  --color-dev-bg: #0b1217;           /* Very dark background (near black) */
  --color-dev-card: #111927;         /* Slightly lighter dark for cards */
  --color-dev-surface: #111927;      /* Neutral dark surface in dark mode */
}
```

**IMPORTANT**: 
- `dev-primary` is used for buttons and active states, NOT backgrounds
- `dev-bg` is the main background color for content areas
- In dark mode, `dev-primary` should remain dark for button backgrounds
- Preserve green accent sections in light mode by using `bg-dev-surface` (do NOT replace these with `bg-dev-bg`/cream). In dark mode those same sections should use a neutral dark surface via `bg-dev-surface`.

- app/layout.tsx (apply theme before hydration)
```tsx
import Script from "next/script";

<html lang="en" suppressHydrationWarning>
  <body>...
    <Script id="theme-init" strategy="beforeInteractive">{`
      (function(){
        try {
          var stored = localStorage.getItem('theme');
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          var theme = stored || (mql.matches ? 'dark' : 'light');
          var root = document.documentElement;
          root.setAttribute('data-theme', theme);
          root.classList.toggle('dark', theme === 'dark');
        } catch(e) {}
      })();
    `}</Script>
  </body>
</html>
```

- app/components/ThemeToggle.tsx
```tsx
"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const next: Theme = isDark ? "light" : "dark";

  const toggle = () => {
    const root = document.documentElement;
    const nowDark = next === "dark";
    root.classList.toggle("dark", nowDark);
    root.setAttribute("data-theme", nowDark ? "dark" : "light");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setTheme(nowDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-testid="theme-toggle"
      className="fixed top-4 right-4 z-50 rounded-md p-2 text-dev-text hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent bg-dev-card shadow-sm"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
```

- app/layout.tsx (render toggle in the root layout)
```tsx
import ThemeToggle from "./components/ThemeToggle";
// ... in the body, after the main content wrapper
<body>
  <ThemeToggle />
  {/* rest of content */}
</body>
```


## Critical Implementation Notes

**COMMON MISTAKES TO AVOID:**
1. **DO NOT use `bg-dev-primary` for main content areas** - Use `bg-dev-bg` for standard content, or `bg-dev-surface` for accent sections that should be green in light mode
2. **DO NOT use light colors for `dev-primary` in dark mode** - It's for buttons, keep it dark (#06302b)
3. **DO NOT hardcode `text-white`** - Always use `text-dev-text` for theme compatibility, EXCEPT on `bg-dev-surface` where you should use `text-white dark:text-dev-text` for proper contrast across themes
4. **VERIFY that `FilteredPosts.tsx` (and similar accent sections) use `bg-dev-surface`** instead of `bg-dev-primary` or `bg-dev-bg` so green is preserved in light mode

**CORRECT USAGE:**
- Main content background: `bg-dev-bg` (cream in light, near-black in dark)
- Text color: `text-dev-text` (dark green in light, off-white in dark)
- Button backgrounds: `bg-dev-primary` (dark green in both themes)
- Links and accents: `text-dev-accent` (dark green in light, teal in dark)
- Accent surface sections: `bg-dev-surface` (dark green in light, neutral dark in dark)
- Accent surface text: `text-white dark:text-dev-text`

## Accessibility & testing

- Uses a semantic button with `aria-pressed`, focus ring, keyboard support, and clear labels.
- Persistent preference via `localStorage`; respects system preference on first visit.
- E2E-friendly: toggle has `data-testid="theme-toggle"`; current theme is on `html[data-theme]`.

## Verification Checklist

After implementation, verify:
1. ✅ Light mode: Cream background (#fefcf6) with dark green text (#06302b)
2. ✅ Dark mode: Near-black background (#0b1217) with light text (#e7f4f1)
3. ✅ Accent sections (e.g., FilteredPosts main container) use `bg-dev-surface` NOT `bg-dev-primary` or `bg-dev-bg`
4. ✅ No hardcoded `text-white` - all text uses theme variables
5. ✅ Buttons keep dark green background (#06302b) in BOTH themes
6. ✅ Links are dark green in light mode, teal in dark mode
7. ✅ Green accent surfaces are preserved in light mode (not flattened to cream)

# Contract Alignment with Multi-Theme

- Root element: `html`
- Always set `data-theme` to `light` or `dark`.
- Only set the `dark` class when `data-theme === 'dark'`.
- Keep Tailwind `darkMode: 'class'` and CSS variables driven by `[data-theme]`.

Acceptance checks:
- On first visit: if system prefers dark, `html[data-theme="dark"].dark` is present; else `html[data-theme="light"]` and no `dark` class.
- Toggling persists to localStorage and round-trips on reload without FOUC.