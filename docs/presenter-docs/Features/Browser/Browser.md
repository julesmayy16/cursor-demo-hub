# Browser

> Browser can navigate through the app, click on links, type into inputs, take screenshots and even monitor network traffic.

**Docs:** [Browser Capabilities](https://cursor.com/docs/agent/browser#browser-capabilities)

## Setup

Click Globe icon, select browser tab

## Demo

- [Use @Browser to test the blog app](cursor://anysphere.cursor-deeplink/prompt?text=Use%20%40Browser%20to%20test%20the%20following%3A%0A%0A1.%20Search%20for%20%22JavaScript%22%20and%20verify%20matching%20posts%20appear%0A2.%20Click%20on%20a%20post%20and%20confirm%20the%20content%20loads%0A3.%20Navigate%20back%20and%20test%20the%20year%20filter%20%28expand%202025%2C%20click%20a%20month%29%0A4.%20Take%20a%20screenshot%20of%20the%20filtered%20results.%20Save%20them%20to%20the%20%60screenshots%2F%60%20directory%20so%20we%20can%20see%20them.%0A5.%20Check%20the%20console%20for%20any%20errors)

---

## Design Sidebar

> The browser includes a design sidebar for modifying your site directly in Cursor. Design and code simultaneously with real-time visual adjustments.

**Docs:** [Design Sidebar](https://cursor.com/docs/agent/browser#design-sidebar)

Open the Design Sidebar to modify styles visually:

### 1. Right-align Posts
- Click on the posts container
- Change alignment to right
- Click Apply

### 2. Change Color of Post Title
- Click on a post title
- Change text color to `dev-peach`
- Click Apply

---

## Cleanup

Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) to undo all changes and restore the workspace to a clean state.

