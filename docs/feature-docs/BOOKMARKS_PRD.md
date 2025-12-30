# Bookmarks / Saved Posts — PRD

## Overview

Allow readers to save posts to a personal "Saved" collection that persists across browser sessions. This helps users curate content they want to revisit without relying on browser bookmarks or remembering titles.

## Objectives

- Enable quick one-click saving of any post from the list or detail view.
- Provide a dedicated way to view all saved posts.
- Persist saved posts locally so they survive page refreshes and browser restarts.
- Keep the experience lightweight — no account or sign-in required.

## Current State (As-Is)

- Users browse posts chronologically or via search/filter.
- No way to mark posts for later or build a personal reading list.
- Users must rely on browser bookmarks or memory to return to specific posts.

## Proposed Direction (To-Be)

- Add a bookmark icon/button on each post in the list and on the post detail page.
- Toggling the bookmark saves or removes the post from the user's saved collection.
- Provide a "Saved" filter or section to view only bookmarked posts.
- Persist bookmarks in the browser so they remain after closing the tab.

## In Scope

- Bookmark toggle button on post list items.
- Bookmark toggle button on individual post pages.
- Visual distinction between saved and unsaved states (filled vs outline icon).
- "Saved Posts" view accessible from the sidebar or as a filter.
- Empty state when no posts are saved.
- Local persistence (no backend required).

## Out of Scope

- User accounts or cross-device sync.
- Sharing saved collections with others.
- Organizing bookmarks into folders or custom lists.
- Export/import of bookmarks.

## User Stories

- As a reader, I can tap a bookmark icon to save a post so I can find it easily later.
- As a reader, I can tap the bookmark icon again to remove a post from my saved list.
- As a reader, I can view all my saved posts in one place so I can quickly access my reading list.
- As a returning reader, my saved posts are still there after closing and reopening the browser.
- As a new user with no saved posts, I see a helpful empty state explaining how to save posts.

## Functional Requirements

### Bookmark Toggle
- Appears on each post in the home page list.
- Appears on the post detail page (near title or metadata).
- Click/tap toggles saved state immediately.
- Visual feedback indicates current state (saved vs not saved).

### Saved Posts View
- Accessible from the sidebar navigation.
- Shows only bookmarked posts.
- Uses the same post list layout as the main view.
- Updates in real-time when bookmarks are added/removed.

### Persistence
- Saved post identifiers stored in browser local storage.
- Bookmarks persist across page refreshes and browser sessions.
- No server-side storage required.

### Empty State
- When no posts are saved, show a friendly message.
- Include guidance on how to bookmark posts.

## Visual Requirements

- Bookmark icon: outline when not saved, filled when saved.
- Icon should be recognizable (bookmark, flag, or heart shape).
- Subtle animation or transition on toggle for feedback.
- Saved Posts section uses consistent styling with existing navigation.
- Empty state should feel helpful, not bare.

## Accessibility Requirements

- Bookmark button has clear accessible label ("Save post" / "Remove from saved").
- Button is keyboard accessible and includes focus state.
- State change is announced to screen readers.

## QA & Testability

- Verify bookmark icon appears on all posts in the list.
- Verify bookmark icon appears on post detail page.
- Verify clicking toggles the visual state.
- Verify bookmarked posts appear in Saved Posts view.
- Verify removing bookmark removes post from Saved view.
- Verify bookmarks persist after page refresh.
- Verify bookmarks persist after closing and reopening browser.
- Verify empty state displays when no posts are saved.

## Success Metrics

- Bookmark functionality works on 100% of posts.
- Bookmarks persist reliably across sessions.
- No layout shifts when toggling bookmark state.

## Open Questions

- Should we limit the number of bookmarks a user can save?
- Should there be a confirmation when removing a bookmark, or just allow undo?

