# Agent Review

> Agent Review analyzes your uncommitted code changes and provides feedback on bugs, security issues, code quality, and best practices.

**Docs:** [Agent Review](https://cursor.com/docs/agent-review)

## Prerequisites

- No special setup required
- Works with any git repository

## Demo

Demonstrates Agent Review catching a subtle bug in local code changes before committing. A "refactor" that looks clean but introduces a bug.

### Step 1: Make code changes with a hidden bug

- [Add Feature with Bug](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20new%20function%20at%20the%20end%20of%20%60lib%2Fposts.ts%60%20to%20find%20related%20posts%20by%20shared%20tags%3A%0A%0A%60%60%60typescript%0Aexport%20function%20getRelatedPosts%28currentPost%3A%20PostData%2C%20limit%3A%20number%20%3D%203%29%3A%20PostData%5B%5D%20%7B%0A%20%20const%20allPosts%20%3D%20getAllPostIds%28%29%3B%0A%20%20const%20relatedPosts%3A%20PostData%5B%5D%20%3D%20%5B%5D%3B%0A%20%20%0A%20%20allPosts.forEach%28post%20%3D%3E%20%7B%0A%20%20%20%20if%20%28post.id%20%21%3D%3D%20currentPost.id%29%20%7B%0A%20%20%20%20%20%20%2F%2F%20Check%20if%20posts%20share%20any%20tags%0A%20%20%20%20%20%20const%20hasSharedTag%20%3D%20currentPost.tags.some%28tag%20%3D%3E%20post.tags.includes%28tag%29%29%3B%0A%20%20%20%20%20%20if%20%28hasSharedTag%29%20%7B%0A%20%20%20%20%20%20%20%20relatedPosts.push%28post%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%29%3B%0A%20%20%0A%20%20return%20relatedPosts.slice%280%2C%20limit%29%3B%0A%7D%0A%60%60%60%0A%0ADon%27t%20commit%20the%20changes%20yet.)

### Step 2: Run Agent Review

Open the Agent menu (keyboard shortcut or click the agent icon) and select **"Review Changes"**. Agent Review will analyze your uncommitted changes and provide detailed feedback.

### The Bug

The function looks correct at first glance—it finds posts that share tags with the current post. However, the tag comparison is **case-sensitive**. If the current post has tag `"React"` and another post has `"react"`, they won't be recognized as related even though they share the same topic. This will cause the "related posts" feature to miss relevant connections, reducing content discovery.

### What to Highlight

- Agent Review catches subtle bugs that pass type checking and linting
- Case-sensitivity issues are easy to miss but create poor user experience
- It analyzes your changes in the context of the entire codebase
- Provides actionable feedback on bugs, security issues, and code quality
- Faster feedback loop than waiting for PR reviews—catch issues locally
- Works seamlessly with your development workflow

### Reviewing Agent Review Output

After Agent Review completes, you'll see:

- **Summary**: High-level overview of findings
- **Issues Found**: Categorized by severity (critical, warning, info)
- **Code Context**: Specific lines and explanations for each issue
- **Suggestions**: Concrete recommendations for fixes

Review the feedback and make corrections before committing your changes.
