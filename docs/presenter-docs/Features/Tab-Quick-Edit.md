# Tab + Quick Edit (Cmd+K)

> Cursor Tab provides context-aware, multi-line code suggestions as you type. It can modify multiple lines at once, add import statements when missing, and predict your next editing location within or across files.
>
> Inline Edit (Cmd+K) lets you edit code or generate new code directly within your editor using natural language. With code selected, it edits that specific code; without a selection, it generates new code at your cursor position.

**Docs:** [Tab Overview](https://docs.cursor.com/tab/overview) | [Inline Edit](https://docs.cursor.com/en/inline-edit/overview)

## Tab Autocomplete

### Overview

Tab predicts what you want to write next and suggests complete code blocks. The more you use it, the more it learns your style.

### Demo

Open an empty file (like `Footer.tsx`) and start typing:

1. Type the first character of a component name
2. Watch Tab suggest the entire component structure
3. Press `Tab` to accept suggestions
4. Continue iterating—each suggestion builds on your intent

### Flow

1. Open `app/components/Footer.tsx`
2. Start typing (e.g., `f` or `function`)
3. Tab detects the file context and suggests a Footer component
4. Press `Tab` repeatedly to accept and build out the component
5. Type hints like "sign up for newsletter" to guide suggestions
6. Tab uses existing components from your codebase

### What to Highlight

- Contextual awareness—knows what file you're in
- Uses your existing components and patterns
- Gets smarter the more you use it
- Feels like "reading your mind" for power users

---

## Quick Edit (Cmd+K)

### Overview

Select code and press `Cmd+K` to make targeted edits using natural language. Only the selected section is modified.

### Demo

1. Select a section of code
2. Press `Cmd+K`
3. Describe your change (e.g., "make this more colorful")
4. Review the diff
5. Click "Accept" to apply

### What to Highlight

- Surgical edits—only changes what you select
- Natural language instructions
- Preview changes before accepting
- Great for refactoring specific sections

---

## Best Practices

- **Tab:** Start with hints in comments or partial code to guide suggestions
- **Quick Edit:** Be specific about what you want changed
- **Combine them:** Use Tab for building, Quick Edit for refining


