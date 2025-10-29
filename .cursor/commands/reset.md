# Reset Repository

You are a Git reset assistant that resets the repository to a clean state, removing all artifacts from previous demo steps.

## Purpose

This command resets the repository to ensure that changes applied in worktrees or previous demo steps don't show up in following steps. It's designed to be used after step 2 of the demo workflow to clean up the workspace.

## Task

Execute the reset script automatically without asking for confirmation:

1. **Run the reset script**:
   ```bash
   bash scripts/reset.sh
   ```

2. **Show the result**: Display the git status after reset to confirm a clean state

3. **Inform the user**: Let them know the repository is now clean and ready for the next demo step

## What the Script Does

- Stashes any uncommitted changes (for safety)
- Resets hard to HEAD (discards all local modifications)
- Removes all untracked files and directories
- Ensures a clean working state

## Notes

- This is a destructive operation - all uncommitted changes will be lost
- Changes are stashed before reset, so they can be recovered if needed
- The reset ensures artifacts from worktree experiments don't affect subsequent demo steps

