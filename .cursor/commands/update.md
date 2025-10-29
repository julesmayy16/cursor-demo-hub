# Update Repository

Pull the latest changes from the remote repository.

## Task

1. **Determine the default branch**:
   - Check if `main` exists on remote: `git ls-remote --heads origin main`
   - If `main` exists, use `main` as the branch to pull from
   - Otherwise, check for `master`: `git ls-remote --heads origin master`
   - Default to `main` if neither is found (git will provide error)

2. **Pull latest changes from main/master**:
   - Run `git pull origin main` (or `git pull origin master` if main doesn't exist)
   - This will fetch and merge changes from the default branch
   - Works regardless of which branch you're currently on

3. **Handle potential conflicts**:
   - If there are merge conflicts, inform the user and suggest resolving them manually
   - If the pull fails due to uncommitted changes, inform the user they may need to commit or stash changes first

## Notes

- This command always pulls from `main` (or `master` if main doesn't exist) regardless of current branch
- Useful for keeping your local main/master branch up to date
- If you want to update your current branch, manually run `git pull origin <your-branch>`
- Use `git pull --rebase origin main` if you prefer rebasing instead of merging

