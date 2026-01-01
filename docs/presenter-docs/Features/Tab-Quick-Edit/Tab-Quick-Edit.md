# Tab + Quick Edit (Cmd+K)

> Cursor Tab provides context-aware, multi-line code suggestions as you type. It can modify multiple lines at once, add import statements when missing, and predict your next editing location within or across files.
>
> Inline Edit (Cmd+K) lets you edit code or generate new code directly within your editor using natural language. With code selected, it edits that specific code; without a selection, it generates new code at your cursor position.

**Docs:** [Tab Overview](https://docs.cursor.com/tab/overview) | [Inline Edit](https://docs.cursor.com/en/inline-edit/overview)

---

## How Tab Works

Cursor indexes your entire codebase to understand:
- Your project's conventions and patterns
- Existing components and utilities
- Import structures and dependencies

**Tab is a specialized Cursor model for autocompletion.** The more you use it, the better it becomes as you inject intent by accepting (`Tab`) or rejecting (`Escape`) suggestions.

### Tab Capabilities

| Capability | Description |
|------------|-------------|
| **Multi-line edits** | Modify multiple lines at once |
| **Auto-imports** | Add import statements when missing |
| **Cross-file jumps** | Jump within and across files for coordinated edits |
| **Contextual awareness** | Suggestions based on recent changes, linter errors, and accepted edits |

---

## Tab Autocomplete

### Overview

Tab predicts what you want to write next and suggests complete code blocks. The more you use it, the more it learns your style—each `Tab` accept or `Escape` reject teaches the model your preferences.

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

- **Codebase understanding:** Tab uses full codebase context to understand conventions
- **Contextual awareness:** Knows what file you're in, your recent changes, and linter errors
- **Learns your style:** The more you use it, the more it adapts to your preferences
- **Uses your existing patterns:** Suggestions incorporate your components and utilities
- **Feels like mind-reading:** Power users report Tab predicting exactly what they want

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
- **Accept/Reject signals:** Each `Tab` accept or `Escape` reject teaches the model your preferences
- **Quick Edit:** Be specific about what you want changed
- **Combine them:** Use Tab for building, Quick Edit for refining


