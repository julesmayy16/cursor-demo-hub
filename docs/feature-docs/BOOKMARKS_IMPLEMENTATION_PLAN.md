# Bookmarks Feature — Implementation Plan

## Overview

This document outlines the implementation plan for the bookmarks feature, allowing users to save posts for later viewing. The feature will use React Context for state management and localStorage for persistence.

## Architecture Decisions

### State Management
- **React Context API**: Create a `BookmarkContext` similar to `FilterContext` to manage bookmark state globally
- **localStorage**: Persist bookmarked post IDs in browser localStorage
- **Post Identifier**: Use post `_id` (from PostData) as the unique identifier for bookmarks

### Component Structure
- **BookmarkProvider**: Context provider wrapping the app at layout level
- **BookmarkButton**: Reusable button component for toggling bookmark state
- **SavedPostsPage**: New page/route for viewing saved posts
- **EmptyState**: Component for displaying helpful empty state messages

### Routing
- **New Route**: `/saved` for the saved posts view
- **Navigation**: Add "Saved Posts" link to sidebar navigation

## Implementation Phases

### Phase 1: Core Bookmark Infrastructure

#### 1.1 Create Bookmark Context
**File**: `app/context/BookmarkContext.tsx`

**Responsibilities**:
- Manage bookmark state (Set of post IDs)
- Load bookmarks from localStorage on mount
- Save bookmarks to localStorage on change
- Provide `isBookmarked(postId)`, `toggleBookmark(postId)`, `getBookmarkedIds()` methods

**Key Implementation Details**:
- Use `useEffect` to sync with localStorage
- Handle SSR/hydration safely (check `typeof window !== 'undefined'`)
- Use Set data structure for O(1) lookup performance
- Store as JSON array in localStorage (Set not directly serializable)

#### 1.2 Create BookmarkButton Component
**File**: `app/components/BookmarkButton.tsx`

**Responsibilities**:
- Display bookmark icon (outline vs filled)
- Handle click events to toggle bookmark
- Show visual feedback (animation/transition)
- Provide accessible labels and keyboard support

**Key Implementation Details**:
- Must be a client component (`"use client"`)
- Use SVG icons (bookmark outline/filled) or icon library
- Place button OUTSIDE any `<Link>` wrapper (per PRD critical notes)
- Include `aria-label` that changes based on state
- Add focus styles for keyboard accessibility

#### 1.3 Update Root Layout
**File**: `app/layout.tsx`

**Changes**:
- Wrap children with `BookmarkProvider`
- Ensure provider is at the root level (not inside pages)

### Phase 2: Integrate BookmarkButton into Existing Views

#### 2.1 Add BookmarkButton to Post List Items
**File**: `app/components/PostLink.tsx`

**Changes**:
- Import `BookmarkButton` component
- Add button next to post title (outside the Link wrapper)
- Pass post `_id` to BookmarkButton
- Ensure proper layout/spacing

**Layout Consideration**:
- Position button to avoid interfering with existing layout
- Consider placing it near the title or in the metadata area
- Ensure mobile responsiveness

#### 2.2 Add BookmarkButton to Post Detail Page
**File**: `app/posts/[...slug]/page.tsx`

**Changes**:
- Convert to client component or create a client wrapper component
- Add BookmarkButton near post title/metadata
- Pass post `_id` to BookmarkButton

**Note**: Since this is currently a server component, we may need to:
- Create a client component wrapper for the bookmark functionality
- Or convert relevant parts to client components

### Phase 3: Saved Posts View

#### 3.1 Create Saved Posts Page
**File**: `app/saved/page.tsx`

**Responsibilities**:
- Display all bookmarked posts
- Use same layout/styling as home page
- Show empty state when no bookmarks exist
- Filter posts to show only bookmarked ones

**Implementation**:
- Server component that fetches all posts
- Client component wrapper that filters by bookmarked IDs
- Reuse `FilteredPosts` component or create similar structure
- Include "Back to all posts" link in empty state

#### 3.2 Create Empty State Component
**File**: `app/components/BookmarkEmptyState.tsx` (optional, or inline)

**Responsibilities**:
- Display friendly message when no bookmarks exist
- Provide guidance on how to bookmark posts
- Include navigation link back to all posts

### Phase 4: Navigation Integration

#### 4.1 Add "Saved Posts" Link to Sidebar
**File**: `app/components/SideBar.tsx`

**Changes**:
- Add "Saved Posts" navigation item
- Link to `/saved` route
- Style consistently with existing navigation
- Show bookmark count (optional enhancement)

**Placement**:
- Add above or below the year/month navigation
- Consider adding an icon (bookmark icon)

### Phase 5: Polish & Accessibility

#### 5.1 Visual Polish
- Ensure bookmark icon is recognizable (bookmark shape)
- Add subtle animation/transition on toggle
- Match existing design system colors (use Cursor brand colors)
- Ensure no layout shifts when toggling

#### 5.2 Accessibility Enhancements
- Proper `aria-label` attributes ("Save post" / "Remove from saved")
- Keyboard navigation support
- Screen reader announcements for state changes
- Focus management

#### 5.3 Error Handling
- Handle localStorage quota exceeded errors gracefully
- Handle corrupted localStorage data
- Provide fallback behavior if localStorage unavailable

## File Structure

```
app/
├── context/
│   └── BookmarkContext.tsx          [NEW]
├── components/
│   ├── BookmarkButton.tsx           [NEW]
│   ├── BookmarkEmptyState.tsx       [NEW - optional]
│   ├── PostLink.tsx                 [MODIFY]
│   └── SideBar.tsx                  [MODIFY]
├── posts/
│   └── [...slug]/
│       └── page.tsx                 [MODIFY]
├── saved/
│   └── page.tsx                     [NEW]
└── layout.tsx                       [MODIFY]
```

## Technical Considerations

### localStorage Key
- Use a consistent key: `"cursor-curious-bookmarks"` or similar
- Version the key format for future migrations if needed

### Post ID Consistency
- Ensure post `_id` is stable and unique
- Current implementation uses file path-based IDs
- Verify ID format matches between list and detail views

### SSR/Hydration
- Bookmark state is client-only (localStorage)
- Handle hydration mismatches gracefully
- Consider showing loading state initially

### Performance
- Use Set for O(1) bookmark lookups
- Memoize filtered bookmark lists
- Avoid unnecessary re-renders

### Browser Compatibility
- localStorage is widely supported
- Provide graceful degradation if unavailable
- Consider IndexedDB for future if needed

## Testing Checklist

### Functional Tests
- [ ] Bookmark button appears on all posts in list view
- [ ] Bookmark button appears on post detail page
- [ ] Clicking bookmark button toggles visual state
- [ ] Bookmarked posts appear in Saved Posts view
- [ ] Removing bookmark removes post from Saved view
- [ ] Bookmarks persist after page refresh
- [ ] Bookmarks persist after closing/reopening browser
- [ ] Empty state displays when no posts are saved
- [ ] Navigation to Saved Posts works from sidebar

### Edge Cases
- [ ] Handle posts that no longer exist (orphaned bookmarks)
- [ ] Handle localStorage quota exceeded
- [ ] Handle corrupted localStorage data
- [ ] Handle multiple tabs/windows (state sync)
- [ ] Handle browser private/incognito mode

### Accessibility Tests
- [ ] Keyboard navigation works
- [ ] Screen reader announces state changes
- [ ] Focus states are visible
- [ ] ARIA labels are correct

### Visual Tests
- [ ] No layout shifts when toggling bookmark
- [ ] Icon states are visually distinct
- [ ] Animation/transition is smooth
- [ ] Mobile responsive layout works

## Success Criteria

1. ✅ Bookmark functionality works on 100% of posts
2. ✅ Bookmarks persist reliably across sessions
3. ✅ No layout shifts when toggling bookmark state
4. ✅ Accessible to keyboard and screen reader users
5. ✅ Empty state provides helpful guidance
6. ✅ Navigation is intuitive and discoverable

## Open Questions / Future Enhancements

### From PRD
- Should we limit the number of bookmarks? (Not in scope for MVP)
- Should there be confirmation when removing? (Not in scope for MVP)

### Potential Future Enhancements
- Bookmark count badge in sidebar
- Sort saved posts by date added vs date published
- Export bookmarks functionality
- Bookmark categories/folders
- Sync across devices (requires backend)

## Implementation Order

1. **Phase 1**: Core infrastructure (Context + Button)
2. **Phase 2**: Integrate into existing views
3. **Phase 3**: Saved Posts view
4. **Phase 4**: Navigation integration
5. **Phase 5**: Polish & accessibility

## Dependencies

- React Context API (already in use)
- localStorage API (browser native)
- Existing design system components
- Post data structure (`PostData` interface)

## Estimated Effort

- Phase 1: 2-3 hours
- Phase 2: 2-3 hours
- Phase 3: 2-3 hours
- Phase 4: 1 hour
- Phase 5: 2-3 hours

**Total**: ~9-13 hours

## Notes

- Follow existing code patterns (FilterContext as reference)
- Maintain consistency with existing UI/UX
- Ensure all client components have `"use client"` directive
- Test thoroughly across browsers
- Consider mobile experience throughout
