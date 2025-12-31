# Cursor 2.0 Demo Flow (with Screenshots)

## 1. [Introducing Composer](https://cursor.com/blog/composer)

> Composer is our new agent model designed for software engineering intelligence and speed.
>
> On our benchmarks, the model achieves frontier coding results with generation speed four times faster than similar models.

### 1.5. Introduce the Blog App

> This is a simple blog app built with Next.js, React, and Tailwind CSS. It has a sidebar for browsing posts by year and month, a search bar for filtering, and individual post pages.
>
> We'll use it as a playground to demonstrate Cursor's features.

Use `/start-demo` to launch the development server and open the app in browser.

![Start demo command](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/ea20922f-a6c4-46ba-858e-99853af00c4f/ascreenshot_773ad3dcdc3a4fe282d48cec640e128b_text_export.jpeg)

Show the current blog application and explain what we'll be building

> **📝 Note: Deep Links**
>
> Throughout this demo, clickable links like `[Use @Browser to test the blog app]` open a "Create chat with prompt" dialog that pre-fills the prompt. Click **"Create Chat"** to start the agent.

**Click a deep link in the documentation:**

![Click deep link](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/8a1918f3-c19f-466a-8045-04ab9f81bd05/ascreenshot_cffdab68a0464b6a96be0343275374c2_text_export.jpeg)

**The "Create chat with prompt" dialog appears with the prompt pre-filled:**

![Create Chat dialog example](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/e2312cfc-ccf5-4035-b895-96b641d760d7/ascreenshot_22e0f9274761456589ffe740e329f627_text_export.jpeg)

## 2. [Browser](https://cursor.com/docs/agent/browser#browser-capabilities)

> Browser can navigate through the app, click on links, type into inputs, take screenshots and even monitor network traffic.

**Click the deep link to test the blog app:**

- [Use @Browser to test the blog app](cursor://anysphere.cursor-deeplink/prompt?text=Use%20%40Browser%20to%20test%20the%20following%3A%0A%0A1.%20Search%20for%20%22JavaScript%22%20and%20verify%20matching%20posts%20appear%0A2.%20Click%20on%20a%20post%20and%20confirm%20the%20content%20loads%0A3.%20Navigate%20back%20and%20test%20the%20year%20filter%20%28expand%202025%2C%20click%20a%20month%29%0A4.%20Take%20a%20screenshot%20of%20the%20filtered%20results.%20Save%20them%20to%20the%20%60screenshots%2F%60%20directory%20so%20we%20can%20see%20them.%0A5.%20Check%20the%20console%20for%20any%20errors)

![Click the deep link](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/8a1918f3-c19f-466a-8045-04ab9f81bd05/ascreenshot_cffdab68a0464b6a96be0343275374c2_text_export.jpeg)

**Browser testing in action - the agent navigates the app, filters by month, and saves screenshots:**

![Browser agent working](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/469e34c7-5cfc-4bdc-85de-f14f7e80697d/ascreenshot_8247fa66fcdb4688b841f5fd13c1dc69_text_export.jpeg)

**The agent saves a screenshot of the filtered results:**

![Browser testing results with filtered posts](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/54d183c8-90b2-4d87-b23a-04849c45baeb/ascreenshot_a913eb41174f4d008c33ec6a9ee10b9e_text_export.jpeg)

### [Design Sidebar](https://cursor.com/docs/agent/browser#design-sidebar)
> The browser includes a design sidebar for modifying your site directly in Cursor. Design and code simultaneously with real-time visual adjustments.

Open the Design Sidebar to modify styles visually:

**Click the Design Sidebar icon in the browser panel:**

![Click Design Sidebar icon](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/617f5099-7a93-4331-95ab-0afe5d683b95/ascreenshot_5cf27aa880014ad0ad2a52edfa787147_text_export.jpeg)

**The Design Sidebar panel opens on the right:**

![Design Sidebar opens](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/50702b9f-5be9-48c1-8265-bba5a7b40691/ascreenshot_01dbf20fad6447eaa3e28595ce676ad0_text_export.jpeg)

**Click on an element in the browser to select it:**

![Click element to select](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/50702b9f-5be9-48c1-8265-bba5a7b40691/ascreenshot_01dbf20fad6447eaa3e28595ce676ad0_text_export.jpeg)

**The element is highlighted and the Design panel shows its properties:**

![Element selected with Design Sidebar](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/d9b5d351-037a-4392-8f4b-17c989b7f777/ascreenshot_23f8abfd34b34c3faccf9cd089ae17af_text_export.jpeg)

**Use the Layout controls to adjust alignment, dimensions, and spacing:**

![Design Sidebar Layout controls](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/bb5af8f3-5664-413e-a0d6-27626ad56d5c/ascreenshot_604517d0359f43edb6c1b0cece23e39d_text_export.jpeg)

**Click the Color tab to change colors:**

![Click Color tab](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/8a5e81e0-d4ef-47a6-ad40-bb08a1e4eb17/ascreenshot_4a0bbd0866b143efab8e0ce7e43089e3_text_export.jpeg)

**Select a color property to modify:**

![Select color property](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/737ef90c-633c-4bd5-974c-0cf05549a72c/ascreenshot_d6f86693e90e4ecb872d98a1435ccb16_text_export.jpeg)

**Choose a new color value:**

![Choose color value](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/0a04f657-d4cb-4c9d-9bfb-e3adb6ad90d7/ascreenshot_ace45cc3629c409db914db1aaaf6a64c_text_export.jpeg)

**Preview the color change:**

![Preview color change](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/bb62c975-bac1-4a13-8927-6440c93ec4e9/ascreenshot_07ac138f7a724eb7944921fbb932652e_text_export.jpeg)

**Confirm the color selection:**

![Confirm color selection](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/a2709bc7-854c-40b2-a8ec-e2aae38e9a62/ascreenshot_1e90605441ec4939a62188555a4e7f1b_text_export.jpeg)

**Reset to undo the color changes:**

![Reset color changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/f4768cdf-c045-41df-8ef7-73b782400d7b/ascreenshot_f7c610a899824ecdb648e39e420ac302_text_export.jpeg)

**Click Apply to save changes to code:**

![Apply button with edits pending](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/cd07effa-c4a8-4e79-a94a-036ae3c13a39/ascreenshot_a484e5cd634d4b9baddfc0b1d9e37759_text_export.jpeg)

**Right alignment of the text:**

![Right alignment of text](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/07cad5e2-e350-49e1-8cf4-b589e1f1999b/ascreenshot_3e1d296c5db345eb9c6a23bfd22830fa_text_export.jpeg)

## 3. [Plan Mode](https://cursor.com/docs/agent/planning#plan-mode)

> Plan Mode creates detailed implementation plans before writing any code.
>
> Agent researches your codebase, asks clarifying questions, and generates a reviewable plan you can edit before building.

**Click the Implement Bookmarks Feature deep link:**

- [Implement Bookmarks Feature](cursor://anysphere.cursor-deeplink/prompt?text=Product%20wants%20us%20to%20add%20a%20bookmarks%20feature%20so%20users%20can%20save%20posts%20for%20later.%20Review%20the%20requirements%20in%20%40BOOKMARKS_PRD%20and%20create%20an%20implementation%20plan.)

**Click the Agent dropdown to enable Plan Mode:**

![Click Agent dropdown](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/df96f0e0-2eef-408c-b6b5-dfde243bbd40/ascreenshot_a2224b27a2ab4e3abdccaa6d01d2db97_text_export.jpeg)

**Select "Plan" from the dropdown:**

![Enable Plan Mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/ea41b2f7-8996-4ef8-a3de-e9711695552d/ascreenshot_822f72ddb10442b096f67b16229b24e1_text_export.jpeg)

**Model selected - ready to plan:**

![Model selected](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/7ea81294-788e-42d2-a8f7-7c94d1489cf3/ascreenshot_3c09889cd2d543019e0872992e756e76_text_export.jpeg)

**The plan is generated with todos:**

![Plan generated with todos](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/a22da852-5766-4a3a-a7ad-4269ba1c34e6/ascreenshot_b74a6529b3f445369fe8ce251a2e9315_text_export.jpeg)

**Click Save to workspace to demonstrate that you can save the plan file:**

> **Pro tip:** Select Composer 1 for faster results.

![Click Build button](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/6c02f2a5-d42a-4cc2-8435-ea826e94a566/ascreenshot_1b41d1a2b2bd4456ad3947617be66b69_text_export.jpeg)

**Click Build to execute the plan:**

![Build executing](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/d30ad69f-01b7-4185-b8ae-72d4f11582ea/ascreenshot_53425668006346eebfeb18837d9f8bd4_text_export.jpeg)

## 4. [Parallel Agents (Worktrees)](https://cursor.com/docs/configuration/worktrees)

> This feature allows you to run multiple agents locally in parallel.
>
> Parallel agents run in their own worktree, allowing them to make edits, or build and test code without interfering with each other.

- [Create Sticky Bottom Banner](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20sticky%20bottom%20banner%20visible%20on%20all%20pages%20that%20says%20%22Made%20with%20love%20%E2%9D%A4%EF%B8%8F%20from%20Cursor%22%20linking%20to%20https%3A%2F%2Fcursor.com.%20Use%20the%20cream%20background%20%28bg-dev-bg%29%20with%20dark%20text%20%28text-dev-text%29%20for%20visibility%2C%20and%20add%20a%20subtle%20top%20border.)

- [Add Surprise Me Button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Surprise%20me%22%20button%20that%20opens%20a%20random%20post.%20Use%20our%20button%20component%20with%20the%20secondary%20variant%20and%20place%20it%20at%20the%20top%20right.)

- [Add Scroll-to-Top Button](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20scroll-to-top%20button%20fixed%20at%20the%20bottom-right%20that%20appears%20after%20scrolling%20and%20returns%20to%20top%20on%20click.)

**Click the "Create Sticky Bottom Banner" deep link:**

![Click Banner deep link](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/7b45482e-ba37-42c0-be95-2c3fad054649/ascreenshot_c015d5d8631448499a0924d24371a50e_text_export.jpeg)

**Select composer-1 for faster results:**

![Select composer-1](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/e7f8edcd-2d23-4f65-87f8-7a19485e52c4/ascreenshot_65de3a4317f444bdac9bae691869b6af_text_export.jpeg)

**Click the Local drop-down:**

![Click Local dropdown](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/5a8b677a-a88d-4c0f-aed5-57bf1fe2093b/ascreenshot_8e175f28ecf541a28391408f369831d6_text_export.jpeg)

**Select Worktree from the drop-down:**

![Select Worktree mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/a0639f0c-44a3-45b3-941d-7a6cff125307/ascreenshot_d2211c8d116d4b21a1224b80a264e32d_text_export.jpeg)

**Click the button to initialize the parallel agent:**

![Initialize parallel agent](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/5c2f4d3f-da59-4af2-a0a1-9fd35b55de71/ascreenshot_b15b0f19498046b58c106d19e86ea17b_text_export.jpeg)

**Repeat the same for the remaining two parallel agent prompts.**

**Multiple agents running in parallel:**

![Multiple parallel agents](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/9640c479-e1fc-4d6b-b19f-ef933cb3df0c/ascreenshot_a96a8ecfa9334bc688dc472dfa2828b8_text_export.jpeg)

**Pro tip: Click on the three dots next to an agent to pin it, so that it's easier to keep track of:**

![Agent menu with Pin option](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/902e2373-cacc-4f81-86d2-c2b3b69b14bb/ascreenshot_152f4fdb3d1f4d9b910379a923f6255a_text_export.jpeg)

**Click Apply to apply the changes from a parallel agent:**

**View the results of the applied changes:**

![View applied changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/047c5e7c-5073-4a7e-9a0b-e951bfbb74ce/ascreenshot_eef2750e6fc4481e804ff3c6047555e1_text_export.jpeg)

**Click Undo to remove those changes, showcasing that you can easily remove changes you've applied from a worktree:**

![Click Undo](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/6c959caa-79b5-4a29-9603-1057319a604a/ascreenshot_b5bd93c60b6b4412bbfb108e5882f821_text_export.jpeg)

> **Note:** When applying changes from multiple parallel agents, merge conflicts may appear. Select "Merge manually" to view the conflict. You can either ask Cursor to resolve the conflicts or click "Undo" and try applying again.

**Select "Merge manually" when conflicts appear:**

![Merge manually](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/b5262360-8c7d-43a5-be1b-76136c3e40fe/ascreenshot_0605847c7cbc449fa2d8c434907729d5_text_export.jpeg)

**View the merge conflict:**

![Merge conflict view](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/5414ca48-80d1-4f5d-b821-cd130d938fff/ascreenshot_6d022193546b4b0b9ba7b3e6034f93ca_text_export.jpeg)

**Reset to undo the changes:**

![Reset changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/f4768cdf-c045-41df-8ef7-73b782400d7b/ascreenshot_f7c610a899824ecdb648e39e420ac302_text_export.jpeg)

## 5. [Best of N (Worktrees)](https://cursor.com/docs/configuration/worktrees)

> This feature allows you to run a single prompt across multiple models at once.
>
> Use cases: learning each model's strengths, tackling high-priority bugs where you want multiple perspectives, or comparing architectural approaches.

Select 3-4 models in Worktree mode

- [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20and%20add%20a%20theme%20toggle.%20Follow%20the%20the%20%40DARK_MODE_PRD%20and%20%40DARK_MODE_PLAN)

**Click the model dropdown and toggle "Use Multiple Models":**

![Model selection with Use Multiple Models toggle](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/ce281efe-15c2-4237-8e35-0a5d398d85f3/ascreenshot_00eb46d1cc5d4da18115fd05d94ce7be_text_export.jpeg)

**Select multiple models to run the prompt:**

![Multi-model selection with checkboxes](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/a98fbd2b-8df3-475f-9156-63ee534c5da2/ascreenshot_f0a5d2c83e9f4a0e85dfa8a6b423ce15_text_export.jpeg)

**Select a model's result to compare implementations:**

![Compare implementations](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/b98265b4-177d-4dc5-ac1f-3302b2ef7844/ascreenshot_2b9310c6337a4dcda3b83cd78e68a815_text_export.jpeg)

**Apply the Dark Mode worktree:**

![Agent working on dark mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/8ccca8e5-5ef5-4de1-9be8-d4265dd2eb4b/ascreenshot_5497c0de726943d4b2c44dddf8e380a0_text_export.jpeg)

**Dark mode implemented:**

![Dark mode implemented](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/8b9886ca-966e-4875-82f0-e82c4715eeb5/ascreenshot_4d1e9dda4e19447099e3acc034c7356d_text_export.jpeg)

**View dark mode results:**

![Dark mode results](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/97d38576-acf2-4803-9efd-b9bc1748a2c2/ascreenshot_63d105658b3543218cd6d7ab23470cf2_text_export.jpeg)

## 6. Review Changes

Click "Review Changes" at top right, then `/commit`

**Click "Review Changes" button:**

![Click Review Changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/d1945eea-c0ef-41cb-b001-49eea945b76c/ascreenshot_50fc9ed2054945bb81d788f2792341c5_text_export.jpeg)

**View the diff:**

![View the diff](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/7d4fcd8d-6564-4c20-9439-8d066663cfd6/ascreenshot.jpeg)

**Type /commit to commit the changes:**

![Type /commit](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/54f45911-42e4-45bc-ae24-6f5976da402a/ascreenshot_aeb76eae3f944e159952b33198d257bd_text_export.jpeg)

## 7. Browser Screenshots & PR Images

- [Screenshots and PR](cursor://anysphere.cursor-deeplink/prompt?text=Take%20screenshots%20of%20light%20and%20dark%20mode%20using%20browser%20automation%2C%20commit%20them%2C%20and%20create%20a%20PR%20with%20the%20screenshots%20displaying%20inline.%20Follow%20%40SCREENSHOT_WORKFLOW%20and%20use%20%40Browser.%20Follow%20guidelines%20in%20%2Fcreate-pr)

**Final PR on GitHub with light and dark mode screenshots inline:**

![GitHub PR with screenshots](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/28b0afae-c8e2-4491-a536-ba05b814b108/ascreenshot.jpeg)

---

## Supplementary

### [Debug Mode](https://cursor.com/docs/agent/modes#debug)

> Debug Mode helps you find root causes and fix tricky bugs that are hard to reproduce or understand.
>
> Instead of immediately writing code, the agent generates hypotheses, adds log statements, and uses runtime information to pinpoint the exact issue before making a targeted fix.

**Enable Debug Mode in the agent settings:**

<!-- TODO: Capture screenshot showing Debug Mode toggle in agent settings panel -->
*Screenshot needed: Agent settings panel with Debug Mode toggle highlighted*

**Step 1: Introduce the bug**

- [Introduce Date Bug](cursor://anysphere.cursor-deeplink/prompt?text=In%20%60app%2Fposts%2F%5B...slug%5D%2Fpage.tsx%60%2C%20change%20%60postData.date%60%20to%20%60postData.dates%60%20on%20the%20line%20with%20%60formattedDate%60.)

<!-- TODO: Capture screenshot showing the agent making the code change -->
*Screenshot needed: Agent modifying the date field in page.tsx*

**Step 2: Reproduce the bug**
1. Click on any post from the home page
2. See the error page (Invalid Date)

<!-- TODO: Capture screenshot of the Invalid Date error page in browser -->
*Screenshot needed: Blog post page showing "Invalid Date" error*

**Step 3: Fix with Debug Mode**
Switch to Debug Mode, then:

- [Debug Invalid Date Error](cursor://anysphere.cursor-deeplink/prompt?text=When%20I%20click%20on%20a%20blog%20post%2C%20the%20page%20crashes%20with%20an%20Invalid%20Date%20error.%20Help%20me%20debug%20this.)

<!-- TODO: Capture screenshot showing Debug Mode generating hypotheses -->
*Screenshot needed: Debug Mode showing hypothesis generation and log statement insertion*

<!-- TODO: Capture screenshot showing Debug Mode identifying the root cause -->
*Screenshot needed: Debug Mode pinpointing the typo (postData.dates vs postData.date)*

### [Best of N Judge](https://forum.cursor.com/t/cursor-2-2-multi-agent-judging/145826)

> Run a prompt across multiple models, then Cursor judges and picks the best solution.

**Step 1: Select Worktree mode and choose 3-4 models**

<!-- TODO: Capture screenshot showing worktree mode with multiple models selected -->
*Screenshot needed: Model selection panel with 3-4 models checked*

**Step 2: Run the prompt**

- [Add Back to Home Link](cursor://anysphere.cursor-deeplink/prompt?text=Add%20a%20%22Back%20to%20Home%22%20link%20at%20the%20top%20of%20each%20blog%20post%20page.)

<!-- TODO: Capture screenshot showing multiple agents running in parallel -->
*Screenshot needed: Multiple agents working on the same prompt simultaneously*

**Step 3: Judge picks the best solution**

**Compare model results and judge selects the best implementation:**

![Judge comparing and selecting best model result](../../best-of-n-model-comparison.jpg)

### [Bugbot](https://cursor.com/docs/bugbot#bugbot)

> Bugbot reviews pull requests and identifies bugs, security issues, and code quality problems.

Demonstrates Bugbot catching a subtle bug in a PR. A "refactor" that looks clean but introduces a bug.

**Step 1:** Create a PR with a hidden bug

- [Create Buggy PR](cursor://anysphere.cursor-deeplink/prompt?text=Create%20a%20new%20branch%20with%20a%20unique%20name%20using%20%60refactor%2Fsimplify-date-sorting-%60%20followed%20by%20a%20timestamp%20%28YYYYMMDD-HHMMSS%29.%0A%0AIn%20%60lib%2Fposts.ts%60%2C%20replace%20the%20sorting%20logic%3A%0A%0A%60%60%60typescript%0Aconst%20sortedPosts%20%3D%20allPostsData.sort%28%28a%2C%20b%29%20%3D%3E%20%7B%0A%20%20const%20dateA%20%3D%20new%20Date%28a.date.replace%28%2F%5C.%2Fg%2C%20%22-%22%29%29%3B%0A%20%20const%20dateB%20%3D%20new%20Date%28b.date.replace%28%2F%5C.%2Fg%2C%20%22-%22%29%29%3B%0A%20%20return%20dateB.getTime%28%29%20-%20dateA.getTime%28%29%3B%0A%7D%29%3B%0A%60%60%60%0A%0AWith%20this%20%22simplified%22%20version%3A%0A%0A%60%60%60typescript%0A%2F%2F%20Simplified%3A%20dates%20are%20already%20in%20sortable%20yyyy.MM.dd%20format%0Aconst%20sortedPosts%20%3D%20allPostsData.sort%28%28a%2C%20b%29%20%3D%3E%20a.date.localeCompare%28b.date%29%29%3B%0A%60%60%60%0A%0ACommit%20with%20message%3A%20%22refactor%3A%20simplify%20date%20sorting%20logic%22%0A%0APush%20and%20create%20a%20PR%20titled%20%22refactor%3A%20simplify%20date%20sorting%20logic%22%20explaining%20we%27re%20using%20the%20lexicographically%20sortable%20date%20format%20to%20avoid%20Date%20object%20allocations.)

**Agent commits and pushes the changes:**

![Agent committing changes](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-12-30/83f85ccd-8c72-4e15-a440-a6ae1ef03b8c/ascreenshot.jpeg?tl_px=0,136&br_px=1512,982&force_format=jpeg&q=100&width=1120.0)

**Step 2:** Wait for Bugbot to review the PR

**Bugbot review on the PR showing the bug identified:**

![Bugbot review with bug identified](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-12-30/64bf21df-609f-48ff-86a4-bbc8a5f9a013/ascreenshot.jpeg?tl_px=0,136&br_px=1512,982&force_format=jpeg&q=100&width=1120.0)

**The bug:** The refactor looks clean—dates in `yyyy.MM.dd` format are lexicographically sortable. But `a.localeCompare(b)` sorts ascending (oldest first) when we want newest first. Posts will appear in reverse chronological order.

### Voice Mode

> Use voice to iterate quickly. Turn speech into prompts instantly and watch your ideas come to life.

**Access the voice recording button:**

![Voice recording button](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-12-30/0682fc95-909c-4033-b232-f4d09ba9073a/ascreenshot.jpeg?tl_px=76,0&br_px=1452,769&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,204)

**Start recording your voice prompt:**

![Start voice recording](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-12-30/83675151-8775-4088-bf43-78ce9c2a8365/ascreenshot.jpeg?tl_px=20,0&br_px=1396,769&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=523,128)

**Submit the voice prompt:**

![Submit voice prompt](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-12-30/53adf7e6-5be7-47d7-acc6-5ea331fbc2eb/ascreenshot.jpeg?tl_px=36,0&br_px=1413,769&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=524,125)

