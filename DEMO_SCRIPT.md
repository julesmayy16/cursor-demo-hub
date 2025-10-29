# Cursor 2.0 Demo Script

## Setup Required

### Prerequisites for Commit & PR
- GitHub account required
- GitHub CLI installed

## Demo Flow

### 0. Setup Dev Environment
- Use the `/start-app` command to automatically:
  - Clean any processes running on ports 3000-3009
  - Start the development server in the background
  - Open the application in Chrome at http://localhost:3000
- Explain that this is a blog application we built
- Show the current state before we make changes

### 1. Agent View (Start)
- **Start in Normal Editor View** - Begin demonstration in standard editor interface
- **Switch to Agent View** - Located at top-middle of interface:
**Screenshot

### 2. Worktrees
- Click on the toggle at the bottom left underneath chat window, select Worktree

- **Task:** Implement multiple front-end features at once and create PRs
- **Deep Link (Banner):** [Sticky bottom banner](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20sticky%20bottom%20banner%20that%20says%20Made%20with%20love%20%3Aheart-emoji%3A%20from%20Cursor%2C%20linking%20to%20https%3A%2F%2Fcursor.com%2C%20and%20it%20should%20be%20sticky%20and%20immediately%20visible.)
- **Prompt Text (Banner):**
  ```
  Add a sticky bottom banner visible on all pages that says "Made with love ❤️ from Cursor" linking to https://cursor.com. 
  ```

- **Deep Link (Surprise me button):** [Surprise me button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Surprise%20me%22%20button%20that%20opens%20a%20random%20post.%20Use%20our%20button%20component%20with%20the%20secondary%20variant%20and%20place%20it%20at%20the%20top%20right.)
- **Prompt Text (Surprise me button):**
  ```
  Add a "Surprise me" button that opens a random post. Use our button component with the secondary variant and place it at the top right.
  ```
- **Deep Link (Scroll-to-top):** [Scroll-to-top button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20scroll-to-top%20button%20fixed%20at%20the%20bottom-right%20of%20the%20page.)
- **Prompt Text (Scroll-to-top):**
  ```
  Add a scroll-to-top button fixed at the bottom-right that appears after scrolling and returns to top on click. 
  ```
- Demonstrate implementing multiple features simultaneously
- Show how different models approach these tasks
- Highlight: Parallel implementations and comparison
- **Note:** Setup details TBD and WIP — still iterating on this workflow

- Add a banner at the bottom that says Made with love :heart-emoji: from Cursor, with a link to the Cursor website; banner should be sticky and immediately visible
- Add a scroll to the top button at the bottom right of the page

### 2.5. Reset - Clean Workspace
- Use custom slash command `/reset` to clean the workspace

### 3. Best of N - Implement Dark Mode
- Click on the toggle at the bottom left underneath chat window, select Worktree
- Select 3-4 models to run in parallel
- **Task:** Implement dark mode
- **Deep Link:** [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20and%20add%20a%20theme%20toggle.%20Follow%20the%20the%20%40DARK_MODE_PRD%20and%20%40DARK_MODE_PLAN)
- **Prompt Text:**
  ```
  Implement dark mode and add a theme toggle. Follow the the @DARK_MODE_PRD and @DARK_MODE_PLAN
  ```
- Watch multiple implementations happen simultaneously
- Click on the different model buttons in the chat to view the different implementations 
- Select Composer's result, click "Apply All" in the bottom right

### 3.5. Review Changes
- Click the "Review Changes" button at the top right of the agent window
- Showcase that you can see all changes across files in a single window, much like you would in a code review tool
- Manually open up the browser to show the results of the dark mode implementation
- Use custom slash command `/commit` to commit the dark mode implementation

### 4. Browser - Extend Feature with Themes
- Open a new agent tab
- **Task:** Add orange and purple theme options
- **Deep Link:** [Add Themes](cursor://anysphere.cursor-deeplink/prompt?text=Add%20orange%20and%20purple%20theme%20options%20to%20the%20theme%20system.%20Follow%20the%20instructions%20in%20%40MULTI_THEME_PRD%20and%20%40MULTI_THEME_PLAN)

- **Prompt Text:**
  ```
  Add orange and purple theme options to the theme system. Follow the instructions in @MULTI_THEME_PRD and @MULTI_THEME_PLAN
  ```
- IMPORTANT: Click the Globe icon in the chat and select the browser tab
- Run the prompt to demonstrate the theme updates in real time via the browser
- Use custom slash command `/commit` to commit the theme system changes

### 5. Browser Screenshots & PR with Images
- Open a new agent tab
- **Task:** Take screenshots of all themes and create a PR with inline images
- **Deep Link:** [Screenshots & PR](cursor://anysphere.cursor-deeplink/prompt?text=Take%20screenshots%20of%20all%20four%20themes%20using%20browser%20automation%2C%20commit%20them%2C%20and%20create%20a%20PR%20with%20the%20screenshots%20displaying%20inline.%20Follow%20%40SCREENSHOT_WORKFLOW%20and%20use%20%40Browser.%20Follow%20guidelines%20in%20%2Fcreate-pr)
- **Prompt Text:**
  ```
  Take screenshots of all four themes using browser automation, commit them, and create a PR with the screenshots displaying inline. Follow @SCREENSHOT_WORKFLOW and use @Browser. Follow guidelines in /create-pr
  ```
- The agent will:
  1. Capture screenshots of each theme using browser automation
  2. Save them to the project directory
  3. Commit them to the current branch
  4. Create a PR with properly formatted image URLs
- **Show:** Images displaying inline in the GitHub PR description
- Highlight: Programmatic screenshot workflow without manual drag-and-drop

### 6. Voice Mode
- Use voice to quickly adjust code
- Demonstrate: "Turn speech into prompts instantly"
- Show iteration speed improvement

## Features Covered
- ✅ Agent View
- ✅ Worktrees (WIP)
- ✅ Best of N
- ✅ Built-in Browser
- ✅ Diff View
- ✅ Browser Screenshots & PR Images
- ✅ Voice Mode
- ✅ Composer (the intelligent coding model)
- ✅ Custom Slash Commands (`/commit`, `/create-pr`, `/reset`)

---

Create set up scripts to set up + clean up demos

----
Cursor Shortcuts CheatSheet:

Command + P (search for and open files)
Command + Shift + P (search for ...? like running MD preview)