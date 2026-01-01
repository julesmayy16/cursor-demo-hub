# Debug Mode

> Debug Mode helps you find root causes and fix tricky bugs that are hard to reproduce or understand.
>
> Instead of immediately writing code, the agent generates hypotheses, adds log statements, and uses runtime information to pinpoint the exact issue before making a targeted fix.

**Docs:** [Debug Mode](https://cursor.com/docs/agent/modes#debug)

## Setup

Enable Debug Mode in the agent settings

<!-- TODO: Capture screenshot showing Debug Mode toggle in agent settings panel -->
*Screenshot needed: Agent settings panel with Debug Mode toggle highlighted*

## Demo

### Step 1: Introduce the bug

- [Introduce Date Bug](cursor://anysphere.cursor-deeplink/prompt?text=In%20%60app%2Fposts%2F%5B...slug%5D%2Fpage.tsx%60%2C%20change%20%60postData.date%60%20to%20%60postData.dates%60%20on%20the%20line%20with%20%60formattedDate%60.)

<!-- TODO: Capture screenshot showing the agent making the code change -->
*Screenshot needed: Agent modifying the date field in page.tsx*

### Step 2: Reproduce the bug

1. Click on any post from the home page
2. See the error page (Invalid Date)

<!-- TODO: Capture screenshot of the Invalid Date error page in browser -->
*Screenshot needed: Blog post page showing "Invalid Date" error*

### Step 3: Fix with Debug Mode

Switch to Debug Mode, then:

- [Debug Invalid Date Error](cursor://anysphere.cursor-deeplink/prompt?text=When%20I%20click%20on%20a%20blog%20post%2C%20the%20page%20crashes%20with%20an%20Invalid%20Date%20error.%20Help%20me%20debug%20this.)

<!-- TODO: Capture screenshot showing Debug Mode generating hypotheses -->
*Screenshot needed: Debug Mode showing hypothesis generation and log statement insertion*

<!-- TODO: Capture screenshot showing Debug Mode identifying the root cause -->
*Screenshot needed: Debug Mode pinpointing the typo (postData.dates vs postData.date)*

### What to Highlight

- The agent generates hypotheses about what could cause the error
- It adds log statements to gather runtime information
- It pinpoints the exact issue (typo: `postData.dates` vs `postData.date`)
- It makes a targeted fix

---

## Cleanup

Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) to undo all changes and restore the workspace to a clean state.

