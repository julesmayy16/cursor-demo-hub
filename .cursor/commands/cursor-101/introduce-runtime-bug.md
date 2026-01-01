# Introduce Runtime Bug

In `app/components/FilteredPosts.tsx`, change the PostLink map to cause a runtime error:

```tsx
// Change this:
{paginatedPosts.map(({ id, title, date, tags, readingTime }) => (
  <PostLink
    key={id}
    _id={id}
    title={title}
    ...

// To this:
{paginatedPosts.map((post) => (
  <PostLink
    key={post.id}
    _id={post.id}
    title={post.author.name}
    ...
```

This creates a `TypeError: Cannot read properties of undefined (reading 'name')` because `author` doesn't exist on the post object.
