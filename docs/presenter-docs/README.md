# Start Here

Welcome to the **Cursor Demo Repository**—a standardized, scalable resource for demonstrating Cursor's features.

---

<details open>
<summary>Getting Started</summary>

### Prerequisites

1. **Install Cursor** — Download from [cursor.com](https://cursor.com) if you haven't already

### Clone and Open

**Option 1: Clone via terminal**

```bash
git clone https://github.com/fieldsphere/cursor-demos.git
cd cursor-demos
cursor .
```

**Option 2:** [Clone from Cursor](cursor://anysphere.cursor-deeplink/prompt?text=Clone%20the%20repository%20https%3A%2F%2Fgithub.com%2Ffieldsphere%2Fcursor-demos.git)

<details>
<summary>Screenshots for cloning from Cursor</summary>

1\. Click here

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/3b38f913-5e02-4073-b35b-6b30642fb3c9/ascreenshot_fe3775afd50a486185d518ad2bda0658_text_export.jpeg)

2\. Click here

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/83227571-4066-446a-8704-8d85ed62c206/ascreenshot_eac2d5f16417497984d40b55c6bda4e9_text_export.jpeg)

3\. Click "text field"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/1205a986-7ad6-441e-8bf5-bd28dec964f5/ascreenshot_6e8087d4edc74948adb2822a94144536_text_export.jpeg)

4\. Click "Open"

![](https://colony-recorder.s3.amazonaws.com/files/2026-01-01/bda94460-5959-4210-bec6-d1c0acac950f/ascreenshot_db0b94d2b57548db8b1ea5783bbe86e9_text_export.jpeg)

</details>

### First Run

Once the repository is open in Cursor:

1. Run [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) to install dependencies, start the server, and open the app
2. Wait for the blog app to appear in Cursor's built-in browser
3. You're ready to demo!

</details>

<details open>
<summary>Where to Start</summary>

The best way to learn these demos is to **run through them yourself using the screenshot versions**. Each demo guide has a `.md` version with step-by-step visuals—follow along and practice before presenting live.

| Demo | Description |
|------|-------------|
| **[Cursor 101](./Cursor-101/)** | Intro demo: Layout, Tab + Inline Edit, Agent Chat |
| **[Cursor 2.0](./Cursor-2.0/)** | Advanced demo: Browser, Worktrees, Bugbot |
| **[Features](./Features/)** | Modular guides to pick and choose from |

</details>

<details open>
<summary>Quick Reference</summary>

| Action | Shortcut / Command |
|--------|-------------------|
| Open Agent Chat | `Cmd+L` |
| Inline Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Chat History | `Opt+Cmd+'` |
| Add selection to chat | Select + `Cmd+L` |
| Start demo session | [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) |
| Start app only | [/start-app](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-app) |
| Reset workspace | [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) |

</details>

<details>
<summary>Deep Links</summary>

Throughout the documentation, you'll see clickable links like [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20for%20this%20blog%20application.%20Add%20a%20toggle%20in%20the%20header%20and%20persist%20the%20preference.). These are **deep links** that open a "Create chat with prompt" dialog with the prompt pre-filled.

**How to use them:**
1. Click the deep link in the documentation
2. Click **"Create Chat"** in the dialog that appears
3. Select your model (recommend **composer-1** for speed)
4. Submit to run the agent

**Why deep links matter:**
- **Consistency** – Every presenter uses the exact same prompts
- **Reproducibility** – Results are predictable across demos
- **Speed** – No typing required, just click and go

[Deep Links Documentation](https://cursor.com/docs/integrations/deeplinks)

</details>

<details>
<summary>Slash Commands</summary>

This repository includes pre-configured slash commands accessible from Agent Chat. Type `/` in the chat to see available commands.

### [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo)

**Use this when beginning a demo session.**

What it does:
1. Fetches the latest from `main`
2. Creates a uniquely timestamped branch (`demo-run-YYYYMMDD-HHMMSS`)
3. Starts the Next.js development server
4. Opens the app in Cursor's built-in browser

This ensures every demo starts from a clean, traceable state.

### [/start-app](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-app)

**Use this when you just want to start the server** (without creating a new branch).

What it does:
1. Kills any processes running on ports 3000-3009
2. Starts the dev server in the background
3. Opens `http://localhost:3000` in Cursor's built-in browser

Use this for quick restarts or when continuing work on an existing branch.

### [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset)

**Use this between demo sections to restore a clean state.**

What it does:
1. Stashes any uncommitted changes (for safety)
2. Resets the repository to HEAD (discards local modifications)
3. Removes all untracked files and directories

⚠️ **Recommendation:** Run [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) between features to ensure each demo step starts from a clean slate.

</details>

<details>
<summary>The Demo App</summary>

This repository contains a **blog application** built with Next.js, TypeScript, and Tailwind CSS. You don't need to understand the app deeply to demo—just follow the guides.

If you want to explore the codebase structure, [ask Cursor about the application](cursor://anysphere.cursor-deeplink/prompt?text=Explain%20the%20structure%20of%20this%20application.%20What%20are%20the%20main%20components%2C%20how%20is%20the%20routing%20set%20up%2C%20and%20where%20does%20the%20content%20come%20from%3F).

</details>

<details>
<summary>Philosophy</summary>

This repository is a **medium to demonstrate Cursor's features**, not a showcase of every possible use case.

The goal is to enable **anyone**—Account Executives, Technical Account Managers, AI Deployment Managers, or anyone else (technical or non-technical)—to confidently demo Cursor without having to create their own repository structure, demo scripts, or workflows from scratch. Across hundreds of employees, this eliminates massive duplication of effort.

**What this repo is:**
- A standardized way to show Cursor 101 and 201 demos
- A systematic guide to Cursor's key features
- A consistent, reproducible demo experience
- A learning tool for mastering Cursor's capabilities

**What this repo is not:**
- A showcase for every industry or use case
- A replacement for custom demos tailored to specific customer needs

If someone says, *"This isn't applicable to us—we use Java and don't build web apps,"* that's the signal to bring in a **Field Engineer**. The Field Engineering team has created demos for different languages, frameworks, and use cases. This repository simply ensures everyone can demo Cursor's core features quickly and consistently.

</details>

<details>
<summary>Why This Structure Scales</summary>

This repository is organized around **features**, not use cases. Each Cursor feature (Browser, Worktrees, Bugbot, etc.) has its own standalone guide in the `Features/` directory. These modular guides can then be composed into different demo flows (Cursor 101, Cursor 2.0, etc.).

**The key insight:** A feature can apply to many use cases, and a use case may resonate more with certain audiences. But by documenting features independently, we can:

- **Add new features once** and have them available for all demo flows
- **Update a feature guide** without touching every demo that uses it
- **Mix and match** features into custom sequences as needed
- **Maintain consistency** across all presenters and demos

This is not use-case specific by design. When a customer needs a demo tailored to their specific stack or workflow, that's a job for Field Engineering. This repository ensures that any feature we want to demo in a standardized way can be done scalably and consistently—without requiring deep technical expertise or custom preparation.

**Handling ad-hoc requests:** Let's say you're giving a Cursor 101 demo and someone asks, *"Can you show me the Browser?"* or *"What about Parallel Agents?"* Instead of scrambling, you can navigate to that feature in the `Features/` directory and walk through its guide. Each feature has its own self-contained flow with prompts and screenshots, so you can demo it on the spot without needing to know all the technical details.

The goal is that even with limited knowledge of Cursor's inner workings, you can still show people how to use it effectively. When deeper technical questions arise—advanced configurations, edge cases, or complex integrations—that's when you bring in Field Engineering or another technical resource.

</details>

<details>
<summary>Tips for a Great Demo</summary>

1. **Practice with screenshots first** – Run through the `.md` guides to learn the flow
2. **Run [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) at the beginning** – Creates a clean, traceable branch
3. **Run [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) between sections** – Ensures each feature demo starts fresh
4. **Use deep links** – Click, don't type, for consistent prompts
5. **Use composer-1** – Fastest model for live demos
6. **Check the browser** – Cursor's built-in browser shows your changes immediately
7. **Know when to escalate** – If the customer needs a use-case-specific demo, bring in Field Engineering

</details>
