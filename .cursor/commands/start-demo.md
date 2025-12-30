# Start Demo

Prepare a clean demo environment by creating a new timestamped demo-run branch and starting the application.

## Task

1. **Ensure we're up to date with origin main**:
   - Fetch latest from origin: `git fetch origin`
   - If currently on a different branch, switch to main: `git checkout main`
   - Pull latest changes: `git pull origin main`
   - If there are uncommitted changes, stash them first: `git stash push -m "startdemo: stashing changes"`

2. **Create a new timestamped demo-run branch**:
   - Always create a branch with timestamp: `demo-run-YYYYMMDD-HHMMSS`
   - Use `git checkout -b demo-run-YYYYMMDD-HHMMSS`
   - This ensures each demo is uniquely identified and traceable

3. **Start the application**:
   - Run the existing `/start-app` slash command
   - This will handle:
     - Killing processes on ports 3000-3009 
     - Starting the dev server
     - Opening Cursor's browser at localhost:3000

## Example Flow

```
# Current branch: feature-xyz with uncommitted changes
$ git stash push -m "startdemo: stashing changes"
$ git checkout main
$ git fetch origin
$ git pull origin main
$ git checkout -b demo-run-YYYYMMDD-HHMMSS
# Now run /start-app command
```

## Notes

- Always creates a uniquely timestamped demo branch from latest main
- Branch format: `demo-run-YYYYMMDD-HHMMSS` for easy identification
- Stashes any uncommitted work to prevent loss
- Port cleanup is handled by the start-app command, so no duplication
- To return to previous work after demo: `git checkout - && git stash pop`