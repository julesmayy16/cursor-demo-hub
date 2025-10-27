# Multi-Theme Implementation Plan

## Overview
Extend the existing dark mode toggle system to support four distinct themes: Light (green), Dark (teal), Purple, and Orange. Replace the binary toggle with a **properly styled, compact dropdown selector**. Each theme provides a complete, cohesive color experience—not just accent color changes.

## Starting Point
- Dark mode toggle already exists (from DARK_MODE_PLAN implementation)
- Two themes currently: Light and Dark
- Using CSS variables for theming
- `data-theme` attribute on HTML element

## Critical Implementation Guidelines

### 1. Theme Selector - PROPERLY STYLED DROPDOWN

**IMPORTANT: The dropdown MUST be compact and professional**
- Use `text-sm` for small text (NOT default/large text)
- Use `px-2 py-1` for compact padding
- Style with theme variables for consistency
- Fixed in the top-right corner (always visible on all screen sizes)

```tsx
// CORRECT - Compact, professional dropdown with fixed positioning
<select 
  className="fixed top-4 right-4 z-50 text-sm rounded-md border border-dev-secondary bg-dev-card px-2 py-1 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent cursor-pointer hover:border-dev-accent transition-colors shadow-sm"
>
  <option value="light">☀️ Light</option>
  <option value="dark">🌙 Dark</option>
  <option value="purple">💜 Purple</option>
  <option value="orange">🔥 Orange</option>
</select>
```

**DO NOT create a dropdown that:**
- Has huge text (missing `text-sm` class)
- Has excessive padding
- Doesn't use theme variables for styling
- Isn't fixed in the top-right corner

### 2. Comprehensive Theme Colors

Each theme must be a complete color system:

```css
/* Light Theme - Keep Original Green Identity */
[data-theme="light"] {
  --color-dev-primary: #06302B;      /* Dark green for buttons */
  --color-dev-accent: #06302B;       /* Dark green for links/accents */
  --color-dev-text: #06302B;         /* Dark green text */
  --color-dev-secondary: rgba(6, 48, 43, 0.6);
  --color-dev-bg: #FEFCF6;           /* Cream background */
  --color-dev-card: #FFFFFF;         /* White cards */
}

/* Dark Theme - Already exists, keep as is */
[data-theme="dark"] {
  --color-dev-primary: #06302B;      /* Dark for buttons */
  --color-dev-accent: #7CD4C2;       /* Teal accents */
  --color-dev-text: #E7F4F1;         /* Light text */
  --color-dev-secondary: rgba(231, 244, 241, 0.7);
  --color-dev-bg: #0B1217;           /* Near black */
  --color-dev-card: #111927;         /* Dark cards */
}

/* Purple Theme - Complete Purple Experience */
[data-theme="purple"] {
  --color-dev-primary: #4C1D95;      /* Deep purple for buttons */
  --color-dev-accent: #7C3AED;       /* Bright purple for accents */
  --color-dev-text: #4C1D95;         /* Deep purple text */
  --color-dev-secondary: rgba(124, 58, 237, 0.6);
  --color-dev-bg: #FAF5FF;           /* Light purple background */
  --color-dev-card: #FFFFFF;         /* White cards */
}

/* Orange Theme - Complete Orange Experience */
[data-theme="orange"] {
  --color-dev-primary: #7C2D12;      /* Deep orange-brown for buttons */
  --color-dev-accent: #EA580C;       /* Bright orange for accents */
  --color-dev-text: #7C2D12;         /* Deep orange-brown text */
  --color-dev-secondary: rgba(124, 45, 18, 0.6);
  --color-dev-bg: #FFF7ED;           /* Light orange background */
  --color-dev-card: #FFFFFF;         /* White cards */
}
```

## Files to Modify

### 1. Replace app/components/ThemeToggle.tsx with app/components/ThemeSelector.tsx

**DELETE** the ThemeToggle component and **CREATE** ThemeSelector (positioned in top-right corner):

```tsx
"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "purple" | "orange";

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const storedTheme = root.getAttribute("data-theme") as Theme;
    setTheme(storedTheme || "light");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as Theme;
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <select 
        data-testid="theme-selector" 
        defaultValue="light" 
        className="fixed top-4 right-4 z-50 text-sm rounded-md border border-dev-secondary bg-dev-card px-2 py-1 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent shadow-sm"
        disabled
      >
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="purple">💜 Purple</option>
        <option value="orange">🔥 Orange</option>
      </select>
    );
  }

  return (
    <select 
      data-testid="theme-selector" 
      value={theme} 
      onChange={handleChange} 
      aria-label="Select theme" 
      className="fixed top-4 right-4 z-50 text-sm rounded-md border border-dev-secondary bg-dev-card px-2 py-1 text-dev-text focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent cursor-pointer hover:border-dev-accent transition-colors shadow-sm"
    >
      <option value="light">☀️ Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="purple">💜 Purple</option>
      <option value="orange">🔥 Orange</option>
    </select>
  );
}
```

### 2. Update app/layout.tsx

Replace the ThemeToggle import and usage in the root layout:

```tsx
// Change this:
import ThemeToggle from "./components/ThemeToggle";

// To this:
import ThemeSelector from "./components/ThemeSelector";

// And in the JSX, change:
<ThemeToggle />

// To:
<ThemeSelector />
```

The selector should be rendered directly in the body, not in the sidebar.

### 3. Update app/globals.css

Replace the existing theme definitions with the comprehensive ones above. Change from:

```css
:root { /* light theme */ }
.dark { /* dark theme */ }
```

To:

```css
[data-theme="light"] { /* light theme */ }
[data-theme="dark"] { /* dark theme */ }
[data-theme="purple"] { /* purple theme */ }
[data-theme="orange"] { /* orange theme */ }
```

### 4. Keep app/layout.tsx theme initialization

The existing script should work but update to handle all themes:

```tsx
<Script id="theme-init" strategy="beforeInteractive">{`
  (function(){
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || 'light';
      var root = document.documentElement;
      root.setAttribute('data-theme', theme);
      root.classList.toggle('dark', theme === 'dark');
    } catch(e) {}
  })();
`}</Script>
```

## Critical Styling Requirements

### MUST HAVE:
1. **Fixed positioning**: Use `fixed top-4 right-4 z-50` for top-right corner
2. **Small text**: Use `text-sm` class on the select
3. **Compact padding**: Use `px-2 py-1` (not `px-3 py-2`)
4. **Theme variables**: Use `border-dev-secondary`, `bg-dev-card`, `text-dev-text`
5. **Hover state**: Add `hover:border-dev-accent transition-colors`
6. **Focus ring**: Include focus-visible styles
7. **Cursor pointer**: Show it's interactive
8. **Shadow**: Use `shadow-sm` for better visibility

### MUST AVOID:
1. **Sidebar placement**: Do NOT put in sidebar (will disappear on small screens)
2. **Large text**: Do NOT omit text size class (will inherit large text)
3. **Excessive padding**: Do NOT use `px-3 py-2` or larger
4. **Fixed colors**: Do NOT hardcode colors like `border-gray-300`
5. **Too wide**: Do NOT set large min-width

## Common Implementation Mistakes to Avoid

1. **Putting in sidebar** - Selector disappears on mobile; must be fixed in top-right
2. **Forgetting `text-sm`** - Results in huge text in the dropdown
3. **Using large padding** - Makes dropdown too bulky
4. **Not updating imports in layout.tsx** - Forgetting to change from ThemeToggle to ThemeSelector
5. **Only changing accents** - Each theme needs complete color system
6. **Not testing the dropdown appearance** - Always verify it looks professional and is always visible

## Verification Checklist

✅ Dropdown is fixed in top-right corner (`fixed top-4 right-4 z-50`)
✅ Dropdown has small, appropriate text (`text-sm` class present)
✅ Dropdown has compact padding (`px-2 py-1`)
✅ Dropdown is visible on all screen sizes (mobile, tablet, desktop)
✅ Light theme keeps original green colors
✅ Purple theme has purple background AND text
✅ Orange theme has orange background AND text
✅ Dark theme remains unchanged from dark mode implementation
✅ No flash of wrong theme on page load
✅ Theme persists across refreshes
✅ Dropdown is keyboard accessible

## Testing

```javascript
// Verify dropdown styling
it('should have properly styled compact dropdown', () => {
  cy.visit('/');
  cy.get('[data-testid="theme-selector"]')
    .should('have.class', 'text-sm')
    .should('have.class', 'px-2')
    .should('have.class', 'py-1');
});

// Verify theme changes
it('should switch themes correctly', () => {
  cy.get('[data-testid="theme-selector"]').select('purple');
  cy.get('html').should('have.attr', 'data-theme', 'purple');
  cy.get('body').should('have.css', 'background-color', 'rgb(250, 245, 255)');
});
```

## Summary

This plan extends the existing dark mode implementation to a full multi-theme system with:
- A **compact, professionally styled dropdown** (with explicit `text-sm` and minimal padding)
- Four complete themes with comprehensive color systems
- Smooth migration from toggle to dropdown
- Proper persistence and no flash of wrong theme
- Clear implementation guidelines to avoid common mistakes