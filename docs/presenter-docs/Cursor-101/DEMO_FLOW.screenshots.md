# Cursor 101 Demo Flow (with Screenshots)

An introductory walkthrough of Cursor's core features for new users.

---

## Prerequisites

Before starting the demo:

1. **Start the server:** Run [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) to launch the development server and open the blog app in the browser
2. **Reset workspace:** Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) between sections to ensure a clean state for deterministic results

---

## 1. Layout Walkthrough

> Cursor is an IDE (Integrated Development Environment) forked from VS Code, now fully built out with AI-native features.
>
> Understanding the layout helps you navigate efficiently and customize your workspace for different tasks.

<!-- @include: docs/presenter-docs/Features/Layout-Walkthrough/Layout-Walkthrough.screenshots.md | after: ## Overview, collapsible: true, label: Layout Details (with Screenshots) -->

---

## 2. Tab + Inline Edit (Cmd+K)

> Cursor Tab provides context-aware, multi-line code suggestions as you type. Inline Edit (Cmd+K) lets you edit code directly using natural language.

**Docs:** [Tab Overview](https://docs.cursor.com/tab/overview) | [Inline Edit](https://docs.cursor.com/en/inline-edit/overview)

<!-- @include: docs/presenter-docs/Features/Tab-Inline-Edit/Tab-Inline-Edit.screenshots.md | after: ## Tab Autocomplete, collapsible: true, label: Tab + Inline Edit Details (with Screenshots) -->

---

## 3. Agent Chat

> Agent Chat is the command center for agentic workflows within Cursor. An agent is a large language model (LLM) with access to tool calls—in this case, the ability to make changes directly to your codebase.

**Docs:** [Agent Chat](https://docs.cursor.com/chat/overview)

<!-- @include: docs/presenter-docs/Features/Agent/Agent-Chat/Agent-Chat.screenshots.md | after: ## Overview, collapsible: true, label: Agent Chat Details (with Screenshots) -->

---

## Quick Reference

| Action | Shortcut/Command |
|--------|------------------|
| Open Agent Chat | `Cmd+L` |
| Inline Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Reject Tab suggestion | `Escape` |
| Chat History | `Opt+Cmd+'` |
| New Chat | Click "New Chat" button |
| Add Selection to Chat | Select text + `Cmd+L` |
| Voice Input | Click microphone button |
| Start demo server | [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) |
| Reset workspace | [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) |

---

## Next Steps

After completing Cursor 101, explore:

- **[Cursor 2.0 Demo](../Cursor-2.0/)** – Advanced features like Browser, Worktrees, Bugbot
- **[Plan Mode](../Features/Agent/Plan-Mode/Plan-Mode.screenshots.md)** – Detailed implementation planning
- **[Debug Mode](../Features/Agent/Debug-Mode/Debug-Mode.screenshots.md)** – Hypothesis-driven debugging
- **[Browser](../Features/Browser/Browser.screenshots.md)** – Built-in browser testing
