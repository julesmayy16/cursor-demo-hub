# Worktrees (Parallel Agents & Best of N)

This feature combines two powerful capabilities:
- **Parallel Agents:** Run multiple agents locally in parallel
- **Best of N:** Run a single prompt across multiple models at once

**Docs:** [Worktrees](https://cursor.com/docs/configuration/worktrees)

---

## Parallel Agents

> This feature allows you to run multiple agents locally in parallel.
>
> Parallel agents run in their own worktree, allowing them to make edits, or build and test code without interfering with each other.

### Demo Prompts

Run these three prompts in parallel:

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

---

## Best of N

> This feature allows you to run a single prompt across multiple models at once.
>
> Use cases: learning each model's strengths, tackling high-priority bugs where you want multiple perspectives, or comparing architectural approaches.

### Setup

Select 3-4 models in Worktree mode

### Demo

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

### Review Changes

**Click "Review Changes" button:**

![Click Review Changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/d1945eea-c0ef-41cb-b001-49eea945b76c/ascreenshot_50fc9ed2054945bb81d788f2792341c5_text_export.jpeg)

**View the diff:**

![View the diff](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/7d4fcd8d-6564-4c20-9439-8d066663cfd6/ascreenshot.jpeg)

**Type /commit to commit the changes:**

![Type /commit](https://colony-recorder.s3.amazonaws.com/files/2025-12-30/54f45911-42e4-45bc-ae24-6f5976da402a/ascreenshot_aeb76eae3f944e159952b33198d257bd_text_export.jpeg)

---

## Cleanup

Use `/reset` to undo all changes and restore the workspace to a clean state.

