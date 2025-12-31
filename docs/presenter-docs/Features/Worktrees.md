# Worktrees (Parallel Agents & Best of N)

This feature combines two powerful capabilities:
- **Parallel Agents:** Run multiple agents locally in parallel
- **Best of N:** Run a single prompt across multiple models at once

**Docs:** [Worktrees](https://cursor.com/docs/configuration/worktrees)

---

## Parallel Agents

> This feature allows you to run multiple agents locally in parallel.
>
> Parallel agents run in their own worktree, allowing them to make edits, or build and test code without interfering with each other.

### Setup

Select Worktree mode at bottom left (click Local dropdown → Worktree)

### Demo Prompts

Run these three prompts in parallel:

- [Create Sticky Bottom Banner](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20sticky%20bottom%20banner%20visible%20on%20all%20pages%20that%20says%20%22Made%20with%20love%20%E2%9D%A4%EF%B8%8F%20from%20Cursor%22%20linking%20to%20https%3A%2F%2Fcursor.com.%20Use%20the%20cream%20background%20%28bg-dev-bg%29%20with%20dark%20text%20%28text-dev-text%29%20for%20visibility%2C%20and%20add%20a%20subtle%20top%20border.)

- [Add Surprise Me Button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Surprise%20me%22%20button%20that%20opens%20a%20random%20post.%20Use%20our%20button%20component%20with%20the%20secondary%20variant%20and%20place%20it%20at%20the%20top%20right.)

- [Add Scroll-to-Top Button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20scroll-to-top%20button%20fixed%20at%20the%20bottom-right%20that%20appears%20after%20scrolling%20and%20returns%20to%20top%20on%20click.)

### Flow

1. Click each deep link
2. For each, select Worktree mode and click to initialize
3. Watch multiple agents run in parallel
4. Click Apply to apply changes from a parallel agent
5. Click Undo to remove changes if needed

> **Pro tip:** Click on the three dots next to an agent to pin it for easier tracking.

> **Note:** When applying changes from multiple parallel agents, merge conflicts may appear. Select "Merge manually" to view the conflict, or click "Undo" and try applying again.

---

## Best of N

> This feature allows you to run a single prompt across multiple models at once.
>
> Use cases: learning each model's strengths, tackling high-priority bugs where you want multiple perspectives, or comparing architectural approaches.

### Setup

1. Select Worktree mode at bottom left
2. Click the model dropdown and toggle "Use Multiple Models"
3. Select 3-4 models

### Demo

- [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20and%20add%20a%20theme%20toggle.%20Follow%20the%20the%20%40DARK_MODE_PRD%20and%20%40DARK_MODE_PLAN)

### Flow

1. Watch multiple implementations happen simultaneously
2. Click on the different model buttons to compare implementations
3. Select the best result, click "Apply All"
4. Click "Review Changes" at top right
5. Use `/commit` to commit the changes

---

## Cleanup

Use `/reset` to undo all changes and restore the workspace to a clean state.

