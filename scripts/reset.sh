#!/usr/bin/env bash
set -euo pipefail

# Reset script for demo workflow
# Resets the repository to a clean state, removing artifacts from previous demo steps

echo "🔄 Resetting repository to clean state..."

# Get the current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📌 Current branch: $CURRENT_BRANCH"

# Check if there are any uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "📦 Stashing uncommitted changes..."
  git stash push -m "Reset: Stashed before reset on $(date +%Y-%m-%d\ %H:%M:%S)"
fi

# Reset hard to HEAD to discard any local modifications
echo "🧹 Resetting to HEAD (discarding local changes)..."
git reset --hard HEAD

# Clean untracked files and directories
echo "🗑️  Removing untracked files and directories..."
git clean -fd

# Show status to confirm clean state
echo ""
echo "✅ Reset complete! Current status:"
git status --short

echo ""
echo "💡 Repository is now in a clean state, ready for the next demo step."

