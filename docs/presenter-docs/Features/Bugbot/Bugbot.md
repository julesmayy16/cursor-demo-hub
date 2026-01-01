# Bugbot

> Bugbot reviews pull requests and identifies bugs, security issues, and code quality problems.

**Docs:** [Bugbot](https://cursor.com/docs/bugbot#bugbot)

## Prerequisites

- GitHub account required
- GitHub CLI installed

## Demo

Demonstrates Bugbot catching a subtle bug in a PR. A "refactor" that looks clean but introduces a bug.

### Step 1: Create a PR with a hidden bug

- [Create Buggy PR](cursor://anysphere.cursor-deeplink/prompt?text=Create%20a%20new%20branch%20with%20a%20unique%20name%20using%20%60refactor%2Fsimplify-date-sorting-%60%20followed%20by%20a%20timestamp%20%28YYYYMMDD-HHMMSS%29.%0A%0AIn%20%60lib%2Fposts.ts%60%2C%20replace%20the%20sorting%20logic%3A%0A%0A%60%60%60typescript%0Aconst%20sortedPosts%20%3D%20allPostsData.sort%28%28a%2C%20b%29%20%3D%3E%20%7B%0A%20%20const%20dateA%20%3D%20new%20Date%28a.date.replace%28%2F%5C.%2Fg%2C%20%22-%22%29%29%3B%0A%20%20const%20dateB%20%3D%20new%20Date%28b.date.replace%28%2F%5C.%2Fg%2C%20%22-%22%29%29%3B%0A%20%20return%20dateB.getTime%28%29%20-%20dateA.getTime%28%29%3B%0A%7D%29%3B%0A%60%60%60%0A%0AWith%20this%20%22simplified%22%20version%3A%0A%0A%60%60%60typescript%0A%2F%2F%20Simplified%3A%20dates%20are%20already%20in%20sortable%20yyyy.MM.dd%20format%0Aconst%20sortedPosts%20%3D%20allPostsData.sort%28%28a%2C%20b%29%20%3D%3E%20a.date.localeCompare%28b.date%29%29%3B%0A%60%60%60%0A%0ACommit%20with%20message%3A%20%22refactor%3A%20simplify%20date%20sorting%20logic%22%0A%0APush%20and%20create%20a%20PR%20titled%20%22refactor%3A%20simplify%20date%20sorting%20logic%22%20explaining%20we%27re%20using%20the%20lexicographically%20sortable%20date%20format%20to%20avoid%20Date%20object%20allocations.)

### Step 2: Wait for Bugbot to review the PR

Bugbot will automatically review the PR and identify the bug.

### The Bug

The refactor looks clean—dates in `yyyy.MM.dd` format are lexicographically sortable. But `a.localeCompare(b)` sorts ascending (oldest first) when we want newest first. Posts will appear in reverse chronological order.

### What to Highlight

- Bugbot catches subtle logic bugs that look correct at first glance
- It identifies the specific issue: sort order is reversed
- This demonstrates the value of automated code review

