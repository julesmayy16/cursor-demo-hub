#!/usr/bin/env bash
set -euo pipefail

BASE_PORT="${1:-3000}"
mapfile -t WTS < <(git worktree list --porcelain | awk '/^worktree / {print $2}')

pids=()

i=0
for wt in "${WTS[@]}"; do
  port=$((BASE_PORT + i))
  branch="$(git -C "$wt" rev-parse --abbrev-ref HEAD || echo "detached")"
  label="$(basename "$wt") [$branch] :$port"

  echo "Starting $label"
  (cd "$wt" && NEXT_PUBLIC_LABEL="$label" VITE_LABEL="$label" PORT="$port" pnpm run dev -- -p "$port") &
  pids+=($!)
  i=$((i+1))
done

echo "Launched ${#pids[@]} dev servers. Press Ctrl+C to stop all."
trap 'kill "${pids[@]}" 2>/dev/null || true' EXIT
wait

