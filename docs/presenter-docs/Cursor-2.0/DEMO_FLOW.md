# Cursor 2.0 Demo Flow

## 1. [Introducing Composer](https://cursor.com/blog/composer)

> Composer is our new agent model designed for software engineering intelligence and speed.
>
> On our benchmarks, the model achieves frontier coding results with generation speed four times faster than similar models.

### 1.5. Introduce the Blog App

> This is a simple blog app built with Next.js, React, and Tailwind CSS. It has a sidebar for browsing posts by year and month, a search bar for filtering, and individual post pages.
>
> We'll use it as a playground to demonstrate Cursor's features.

Use `/start-demo` to launch the development server and open the app in browser.

Show the current blog application and explain what we'll be building

## 2. [Browser](https://cursor.com/docs/agent/browser#browser-capabilities)

> Browser can navigate through the app, click on links, type into inputs, take screenshots and even monitor network traffic.

Click Globe icon, select browser tab

- [Use @Browser to test the blog app](cursor://anysphere.cursor-deeplink/prompt?text=Use%20%40Browser%20to%20test%20the%20following%3A%0A%0A1.%20Search%20for%20%22JavaScript%22%20and%20verify%20matching%20posts%20appear%0A2.%20Click%20on%20a%20post%20and%20confirm%20the%20content%20loads%0A3.%20Navigate%20back%20and%20test%20the%20year%20filter%20%28expand%202025%2C%20click%20a%20month%29%0A4.%20Take%20a%20screenshot%20of%20the%20filtered%20results.%20Save%20them%20to%20the%20%60screenshots%2F%60%20directory%20so%20we%20can%20see%20them.%0A5.%20Check%20the%20console%20for%20any%20errors)


### [Design Sidebar](https://cursor.com/docs/agent/browser#design-sidebar)
> The browser includes a design sidebar for modifying your site directly in Cursor. Design and code simultaneously with real-time visual adjustments.

Open the Design Sidebar to modify styles visually:

1. **Right-align Posts**
   - Click on the posts container
   - Change alignment to right
   - Click Apply

2. **Change Color of Post Title**
   - Click on a post title
   - Change text color to `dev-peach`
   - Click Apply

### 2.5. [Slash Commands](https://cursor.com/docs/agent/chat/commands)

> Custom commands allow you to create reusable workflows that can be triggered with a simple `/` prefix in the chat input box.
>
> These commands help standardize processes across your team and make common tasks more efficient.

Use `/reset` to undo all changes and restore the workspace to a clean state.

## 3. [Plan Mode](https://cursor.com/docs/agent/planning#plan-mode)

> Plan Mode creates detailed implementation plans before writing any code.
>
> Agent researches your codebase, asks clarifying questions, and generates a reviewable plan you can edit before building.

Enable Plan Mode in the agent settings

- [Implement Bookmarks Feature](cursor://anysphere.cursor-deeplink/prompt?text=Product%20wants%20us%20to%20add%20a%20bookmarks%20feature%20so%20users%20can%20save%20posts%20for%20later.%20Review%20the%20requirements%20in%20%40BOOKMARKS_PRD%20and%20create%20an%20implementation%20plan.)

## 4. [Parallel Agents (Worktrees)](https://cursor.com/docs/configuration/worktrees)

> This feature allows you to run multiple agents locally in parallel.
>
> Parallel agents run in their own worktree, allowing them to make edits, or build and test code without interfering with each other.

Select Worktree mode at bottom left

- [Create Sticky Bottom Banner](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20sticky%20bottom%20banner%20visible%20on%20all%20pages%20that%20says%20%22Made%20with%20love%20%E2%9D%A4%EF%B8%8F%20from%20Cursor%22%20linking%20to%20https%3A%2F%2Fcursor.com.%20Use%20the%20cream%20background%20%28bg-dev-bg%29%20with%20dark%20text%20%28text-dev-text%29%20for%20visibility%2C%20and%20add%20a%20subtle%20top%20border.)

- [Add Surprise Me Button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Surprise%20me%22%20button%20that%20opens%20a%20random%20post.%20Use%20our%20button%20component%20with%20the%20secondary%20variant%20and%20place%20it%20at%20the%20top%20right.)

- [Add Scroll-to-Top Button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20scroll-to-top%20button%20fixed%20at%20the%20bottom-right%20that%20appears%20after%20scrolling%20and%20returns%20to%20top%20on%20click.)

### 4.5. Reset
Use custom slash command `/reset` to clean workspace

## 5. [Best of N (Worktrees)](https://cursor.com/docs/configuration/worktrees)

> This feature allows you to run a single prompt across multiple models at once.
>
> Use cases: learning each model's strengths, tackling high-priority bugs where you want multiple perspectives, or comparing architectural approaches.

Select 3-4 models in Worktree mode

- [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20and%20add%20a%20theme%20toggle.%20Follow%20the%20the%20%40DARK_MODE_PRD%20and%20%40DARK_MODE_PLAN)

## 6. Review Changes
Click "Review Changes" at top right, then `/commit`

## 7. Browser Screenshots & PR Images

- [Screenshots and PR](cursor://anysphere.cursor-deeplink/prompt?text=Take%20screenshots%20of%20light%20and%20dark%20mode%20using%20browser%20automation%2C%20commit%20them%2C%20and%20create%20a%20PR%20with%20the%20screenshots%20displaying%20inline.%20Follow%20%40SCREENSHOT_WORKFLOW%20and%20use%20%40Browser.%20Follow%20guidelines%20in%20%2Fcreate-pr)

---

## Supplementary

### [Debug Mode](https://cursor.com/docs/agent/modes#debug)

> Debug Mode helps you find root causes and fix tricky bugs that are hard to reproduce or understand.
>
> Instead of immediately writing code, the agent generates hypotheses, adds log statements, and uses runtime information to pinpoint the exact issue before making a targeted fix.

Enable Debug Mode in the agent settings

**Step 1: Introduce the bug**

- [Introduce Date Bug](cursor://anysphere.cursor-deeplink/prompt?text=In%20%60app%2Fposts%2F%5B...slug%5D%2Fpage.tsx%60%2C%20change%20%60postData.date%60%20to%20%60postData.dates%60%20on%20the%20line%20with%20%60formattedDate%60.)

**Step 2: Reproduce the bug**
1. Click on any post from the home page
2. See the error page (Invalid Date)

**Step 3: Fix with Debug Mode**
Switch to Debug Mode, then:

- [Debug Invalid Date Error](cursor://anysphere.cursor-deeplink/prompt?text=When%20I%20click%20on%20a%20blog%20post%2C%20the%20page%20crashes%20with%20an%20Invalid%20Date%20error.%20Help%20me%20debug%20this.)

### [Best of N Judge](https://forum.cursor.com/t/cursor-2-2-multi-agent-judging/145826)

> Run a prompt across multiple models, then Cursor judges and picks the best solution.

Select Worktree mode, choose 3-4 models, then:

- [Add Back to Home Link](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Back%20to%20Home%22%20link%20at%20the%20top%20of%20each%20blog%20post%20page.)

### [Bugbot](https://cursor.com/docs/bugbot#bugbot)

> Bugbot reviews pull requests and identifies bugs, security issues, and code quality problems.

Demonstrates Bugbot catching a subtle bug in a PR. A "refactor" that looks clean but introduces a bug.

**Step 1:** Create a PR with a hidden bug

- [Create Buggy PR](cursor://anysphere.cursor-deeplink/prompt?text=Create%20a%20new%20branch%20with%20a%20unique%20name%20using%20%60refactor%2Fsimplify-date-sorting-%60%20followed%20by%20a%20timestamp%20%28YYYYMMDD-HHMMSS%29.%0A%0AIn%20%60lib%2Fposts.ts%60%2C%20replace%20the%20sorting%20logic%3A%0A%0A%60%60%60typescript%0Aconst%20sortedPosts%20%3D%20allPostsData.sort%28%28a%2C%20b%29%20%3D%3E%20%7B%0A%20%20const%20dateA%20%3D%20new%20Date%28a.date.replace%28%2F%5C.%2Fg%2C%20%22-%22%29%29%3B%0A%20%20const%20dateB%20%3D%20new%20Date%28b.date.replace%28%2F%5C.%2Fg%2C%20%22-%22%29%29%3B%0A%20%20return%20dateB.getTime%28%29%20-%20dateA.getTime%28%29%3B%0A%7D%29%3B%0A%60%60%60%0A%0AWith%20this%20%22simplified%22%20version%3A%0A%0A%60%60%60typescript%0A%2F%2F%20Simplified%3A%20dates%20are%20already%20in%20sortable%20yyyy.MM.dd%20format%0Aconst%20sortedPosts%20%3D%20allPostsData.sort%28%28a%2C%20b%29%20%3D%3E%20a.date.localeCompare%28b.date%29%29%3B%0A%60%60%60%0A%0ACommit%20with%20message%3A%20%22refactor%3A%20simplify%20date%20sorting%20logic%22%0A%0APush%20and%20create%20a%20PR%20titled%20%22refactor%3A%20simplify%20date%20sorting%20logic%22%20explaining%20we%27re%20using%20the%20lexicographically%20sortable%20date%20format%20to%20avoid%20Date%20object%20allocations.)

**Step 2:** Wait for Bugbot to review the PR

**The bug:** The refactor looks clean—dates in `yyyy.MM.dd` format are lexicographically sortable. But `a.localeCompare(b)` sorts ascending (oldest first) when we want newest first. Posts will appear in reverse chronological order.

### Voice Mode
Use voice to iterate quickly

