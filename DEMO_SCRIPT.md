# Cursor 2.0 Demo Script

## Setup Required

### Prerequisites for Commit & PR
- GitHub account required
- GitHub CLI installed (recommended, easier to use)
- Alternative: GitHub MCP can be used if preferred

## Demo Flow

### 0. Setup Dev Environment
- **Open Terminal** - Press Shift+Command+P, type "terminal", select "Terminal: Create New Terminal"
- **Start Dev Server** - Run `pnpm run dev` in the terminal
- **Open Browser** - Navigate to the local development URL (typically http://localhost:3000)
- Explain that this is a blog application we built
- Show the current state before we make changes

### 1. Agent View (Start)
- **Start in Normal Editor View** - Begin demonstration in standard editor interface
- **Switch to Agent View** - Located at top-right corner of interface
- Introduce the fresh interface for working with agents as a first-class experience

### 2. Worktrees - Implement Dark Mode
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
- Manually open up the browser to show the results of the dark mode implementation
- Open up a new agent, select only Composer
- Use custom slash command `/commit` to commit the dark mode implementation

### 3. Browser - Extend Feature with Themes
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

### 4. Diff View
- During the process, Diff View appears
- Show how to review local diffs without switching files
- Highlight: Faster and easier code review

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

### 7. Commit & PR
- Use custom slash command `/create-pr` to create a pull request
- Open up GH, see the generated commit

## Features Covered
- ✅ Agent View
- ✅ Worktrees
- ✅ Built-in Browser
- ✅ Diff View
- ✅ Browser Screenshots & PR Images
- ✅ Voice Mode
- ✅ Composer (the intelligent coding model)
- ✅ Custom Slash Commands (`/commit`, `/create-pr`)

