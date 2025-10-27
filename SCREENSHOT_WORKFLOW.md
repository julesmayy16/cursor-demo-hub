# Screenshot Workflow Guide

This guide explains how to capture screenshots and include them in GitHub Pull Requests so they display inline in the PR description.

## Overview

When creating a PR that showcases visual changes (like theme changes, UI updates, etc.), you can include screenshots directly in the PR description. This requires:
1. Taking screenshots using browser automation
2. Committing them to your PR branch
3. Referencing them correctly in the PR description

## Step-by-Step Process

### 1. Capture Screenshots Using Browser Automation

Use the browser tools to navigate your app and capture screenshots:

```bash
# Navigate to your local dev server
# Take full-page screenshots for each state you want to show
```

**Example workflow:**
- Navigate to `http://localhost:3000`
- **Important:** Since theme preference is saved in localStorage, explicitly select light mode if it's not already active
- Take screenshot: `theme-light.png`
- Change theme to dark mode (using the theme selector)
- Take screenshot: `theme-dark.png`
- Change theme to purple mode
- Take screenshot: `theme-purple.png`
- Change theme to orange mode
- Take screenshot: `theme-orange.png`

### 2. Save Screenshots Locally

The browser saves screenshots to a temp directory. Copy them to your project root:

```bash
cp /var/folders/[temp-path]/theme-*.png .
```

Verify they exist:
```bash
ls -lh theme-*.png
```

### 3. Stage Screenshots

Add the screenshot files to git:

```bash
git add theme-*.png
```

### 4. Commit Screenshots

Commit the screenshots along with your code changes:

```bash
git commit -m "feat(ui): add theme changes and screenshots"
```

### 5. Push to Remote Branch

Push your branch (including screenshots) to GitHub:

```bash
git push -u origin your-branch-name
```

### 6. Create PR with Screenshot References

When creating the PR, reference the images using GitHub blob URLs:

**Important:** Use this URL format:
```
https://github.com/<owner>/<repo>/blob/<branch-name>/<image-path>?raw=true
```

**Example:**
```markdown
## Screenshots

![Light Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-light.png?raw=true)
![Dark Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-dark.png?raw=true)
![Purple Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-purple.png?raw=true)
![Orange Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-orange.png?raw=true)
```

### Using GitHub CLI

```bash
gh pr create \
  --title "Your PR Title" \
  --body "$(cat <<EOF
## What Changed

- Description of changes

## Screenshots

![Light Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-light.png?raw=true)
![Dark Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-dark.png?raw=true)
![Purple Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-purple.png?raw=true)
![Orange Theme](https://github.com/sashakhad/cursor-2.0-demo-repo/blob/demo-run-2/theme-orange.png?raw=true)
EOF
)"
```

## Important Notes

### ⚠️ Theme Persistence
- The theme preference is saved in localStorage and persists across page loads
- **Always explicitly select the theme you want** before taking a screenshot
- Don't assume the page loads in a specific theme state

### ✅ DO:
- Commit screenshots to the same branch as your PR
- Use absolute GitHub blob URLs with `?raw=true` parameter
- Include the branch name in the URL path
- Reference committed files (not uncommitted changes)
- Explicitly set each theme before capturing its screenshot

### ❌ DON'T:
- Use relative paths (they won't work in PR descriptions)
- Use base64 encoded images (too large, GitHub won't render)
- Reference images from different branches
- Try to upload images programmatically without committing them

## URL Format Breakdown

```
https://github.com/<owner>/<repo>/blob/<branch-name>/<file-path>?raw=true
                              └─────┬─────┘  └────┬────┘  └────┬────┘
                                  required    required    required
```

- **owner**: GitHub username or organization
- **repo**: Repository name
- **branch-name**: The branch containing the screenshots
- **file-path**: Path to the image file (relative to repo root)
- **?raw=true**: Tells GitHub to serve the raw file content

## Troubleshooting

### Images not showing in PR
- Verify the images are committed to the branch
- Check that the branch name in the URL matches your PR branch
- Ensure the `?raw=true` parameter is included
- Verify the file paths are correct (case-sensitive)

### Images showing broken
- Check the commit SHA - the images might be in a different commit
- Verify the images actually exist in the branch
- Try copying the image URL directly in your browser to verify it's accessible

## Deep Link for Prompt

To create a deep link that prompts the agent to follow this workflow:

```
cursor://anysphere.cursor-deeplink/prompt?text=Take%20screenshots%20of%20all%20themes%20using%20browser%20automation%2C%20commit%20them%20to%20the%20PR%20branch%2C%20and%20create%20a%20PR%20with%20the%20screenshots%20displaying%20inline.%20Follow%20%40SCREENSHOT_WORKFLOW
```

