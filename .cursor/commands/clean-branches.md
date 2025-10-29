# Clean Branches and Work Trees

Clean up local branches and git work trees to keep the repository tidy.

## Task

1. **Check current state**:
   - List all local branches with `git branch`
   - List all work trees with `git worktree list`
   - Show current branch with `git branch --show-current`

2. **Remove work trees**:
   - Use `git worktree list` to get all work tree paths
   - For each work tree (except the main one), use `git worktree remove <path>` or `git worktree remove -f <path>` if it has uncommitted changes
   - If work tree removal fails, try `git worktree remove --force <path>`
   - Work trees are typically in `~/.cursor/worktrees/<repo-name>/` directories

3. **Clean up merged branches** (optional - be careful):
   - Get list of merged branches: `git branch --merged main` or `git branch --merged`
   - Exclude the current branch and main/master from deletion
   - Delete merged branches with `git branch -d <branch-name>` for fully merged branches
   - Use `git branch -D <branch-name>` to force delete (only if needed)
   - Start with branches that are merged into main/master

4. **Clean up unmerged branches** (optional - be careful):
   - List unmerged branches: `git branch --no-merged main`
   - Only delete if explicitly safe (branches with timestamp prefixes, very old branches, etc.)
   - User should review these manually before deletion

## Safety Guidelines

- **NEVER delete**:
  - The current branch (check with `git branch --show-current`)
  - `main` or `master` branch
  - Branches that might have important work
  
- **Always prefer**:
  - Using `-d` (safe delete) over `-D` (force delete)
  - Showing what will be deleted before deleting
  - Working trees should be cleaned first, then branches

## Implementation Notes

- Work trees in `.cursor/worktrees/` are safe to remove - they're temporary checkouts
- Branches with timestamp prefixes (like `2025-10-28-*`) are often safe to delete
- Feature branches should come from user decision or be merged first
- When removing work trees, handle errors gracefully - some may need `--force`

## Example Workflow

1. List current state
2. Remove all work trees (except main repo directory)
3. List merged branches and ask user, OR auto-delete clearly safe ones (timestamp branches)
4. Show summary of what was cleaned

