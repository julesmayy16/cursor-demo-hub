# Cursor 2.0 Demo Flow (with Screenshots)

## 1. [Introducing Composer](https://cursor.com/blog/composer)

> Composer is our new agent model designed for software engineering intelligence and speed.
>
> On our benchmarks, the model achieves frontier coding results with generation speed four times faster than similar models.

### 1.5. Introduce the Blog App

> This is a simple blog app built with Next.js, React, and Tailwind CSS. It has a sidebar for browsing posts by year and month, a search bar for filtering, and individual post pages.
>
> We'll use it as a playground to demonstrate Cursor's features.

Use [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) to launch the development server and open the app in browser.

![Start demo command](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/ea20922f-a6c4-46ba-858e-99853af00c4f/ascreenshot_773ad3dcdc3a4fe282d48cec640e128b_text_export.jpeg)

Show the current blog application and explain what we'll be building

---

## 2. [Browser](https://cursor.com/docs/agent/browser#browser-capabilities)

> Browser can navigate through the app, click on links, type into inputs, take screenshots and even monitor network traffic.

<!-- @include: docs/presenter-docs/Features/Browser/Browser.screenshots.md | after: ## Demo, collapsible: true, label: Browser Details (with Screenshots) -->

---

## 3. [Plan Mode](https://cursor.com/docs/agent/planning#plan-mode)

> Plan Mode creates detailed implementation plans before writing any code.
>
> Agent researches your codebase, asks clarifying questions, and generates a reviewable plan you can edit before building.

**Click the Implement Bookmarks Feature deep link:**

- [Implement Bookmarks Feature](cursor://anysphere.cursor-deeplink/prompt?text=Product%20wants%20us%20to%20add%20a%20bookmarks%20feature%20so%20users%20can%20save%20posts%20for%20later.%20Review%20the%20requirements%20in%20%40BOOKMARKS_PRD%20and%20create%20an%20implementation%20plan.)

<!-- @include: docs/presenter-docs/Features/Agent/Plan-Mode/Plan-Mode.screenshots.md | after: ## Demo, collapsible: true, label: Plan Mode Details (with Screenshots) -->

---

## 4. [Parallel Agents (Worktrees)](https://cursor.com/docs/configuration/worktrees)

> This feature allows you to run multiple agents locally in parallel.
>
> Parallel agents run in their own worktree, allowing them to make edits, or build and test code without interfering with each other.

<!-- @include: docs/presenter-docs/Features/Worktrees/Worktrees.screenshots.md | after: ## Parallel Agents, lines: 1-80, collapsible: true, label: Parallel Agents Details (with Screenshots) -->

### 4.5. Reset
Use custom slash command [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) to clean workspace

---

## 5. [Best of N (Worktrees)](https://cursor.com/docs/configuration/worktrees)

> This feature allows you to run a single prompt across multiple models at once.
>
> Use cases: learning each model's strengths, tackling high-priority bugs where you want multiple perspectives, or comparing architectural approaches.

<!-- @include: docs/presenter-docs/Features/Worktrees/Worktrees.screenshots.md | after: ## Best of N, collapsible: true, label: Best of N Details (with Screenshots) -->

---

## 6. Review Changes
Click "Review Changes" at top right, then `/commit`

## 7. Browser Screenshots & PR Images

- [Screenshots and PR](cursor://anysphere.cursor-deeplink/prompt?text=Take%20screenshots%20of%20light%20and%20dark%20mode%20using%20browser%20automation%2C%20commit%20them%2C%20and%20create%20a%20PR%20with%20the%20screenshots%20displaying%20inline.%20Follow%20%40SCREENSHOT_WORKFLOW%20and%20use%20%40Browser.%20Follow%20guidelines%20in%20%2Fcreate-pr)

**Final PR on GitHub with light and dark mode screenshots inline:**

![GitHub PR with screenshots](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/28b0afae-c8e2-4491-a536-ba05b814b108/ascreenshot.jpeg)

---

## Supplementary

### [Debug Mode](https://cursor.com/docs/agent/modes#debug)

> Debug Mode helps you find root causes and fix tricky bugs that are hard to reproduce or understand.

<!-- @include: docs/presenter-docs/Features/Agent/Debug-Mode/Debug-Mode.screenshots.md | after: ## Setup, collapsible: true, label: Debug Mode Details (with Screenshots) -->

### [Best of N Judge](https://forum.cursor.com/t/cursor-2-2-multi-agent-judging/145826)

> Run a prompt across multiple models, then Cursor judges and picks the best solution.

**Step 1: Select Worktree mode and choose 3-4 models**

**Step 2: Run the prompt**

- [Add Back to Home Link](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Back%20to%20Home%22%20link%20at%20the%20top%20of%20each%20blog%20post%20page.)

**Step 3: Judge picks the best solution**

**Compare model results and judge selects the best implementation:**

![Judge comparing and selecting best model result](../../best-of-n-model-comparison.jpg)

### [Bugbot](https://cursor.com/docs/bugbot#bugbot)

> Bugbot reviews pull requests and identifies bugs, security issues, and code quality problems.

<!-- @include: docs/presenter-docs/Features/Bugbot/Bugbot.screenshots.md | after: ## Demo, collapsible: true, label: Bugbot Details (with Screenshots) -->

### Voice Mode

> Use voice to iterate quickly. Turn speech into prompts instantly and watch your ideas come to life.

<!-- @include: docs/presenter-docs/Features/Agent/Voice-Mode/Voice-Mode.screenshots.md | after: ## Demo, collapsible: true, label: Voice Mode Details (with Screenshots) -->
