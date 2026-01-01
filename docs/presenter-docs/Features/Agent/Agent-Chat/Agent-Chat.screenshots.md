# Agent Chat

> Agent Chat is the command center for agentic workflows within Cursor. An agent is a large language model (LLM) with access to tool calls—in this case, the ability to make changes directly to your codebase.

**Docs:** [Agent Chat](https://docs.cursor.com/chat/overview)

## Overview

This demo covers all the key configurations and features of Agent Chat.

---

## 1. Agent Modes

> Cursor provides different modes optimized for different tasks. Choose the right mode for your workflow.

| Mode | Use Case |
|------|----------|
| **Agent** | Execute code changes across your codebase (default) |
| **Plan** | Create editable implementation plans for complex features |
| **Debug** | Find, test, and resolve difficult bugs |
| **Ask** | Learn about the codebase without making changes (read-only) |

**Click the mode dropdown to see available options:**

![Agent mode selector](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/add45b19-efa5-401f-9b3e-6568c88002cc/ascreenshot_7f3bc9ab4f9f4909827f54a755ba02a5_text_export.jpeg)

**Select from Agent, Plan, Debug, or Ask mode:**

![Mode options](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/24d857cc-a885-40bf-ba6b-2d8793af7c4b/ascreenshot_56883a28a241433180502a3952fb7b3a_text_export.jpeg)

---

## 2. Model Selection

> You have full control over which model to use. Choose based on your task complexity and speed requirements.

- **Composer 1**: Cursor's own coding model, optimized for speed
- **Auto**: Let Cursor smartly select the best model for each task
- **Frontier models**: Claude, GPT-4, Gemini, and more

### Quick Selection

**Click the model selector:**

![Model selector](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6d9492d4-1121-4326-9e1f-eb9c3a0e4767/ascreenshot_4a42b42d960e4ee2bfbe04b1448b1b77_text_export.jpeg)

**Choose from available models:**

![Model options with descriptions](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/89c572df-f8be-484a-a05c-6c722a9c0539/ascreenshot_d3bcce33e0d54c3cabb7268919fad54d_text_export.jpeg)

**Model categories and Auto selection:**

![Model categories](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/3da6ac1a-f444-4b03-9e94-0b95f12c9ab7/ascreenshot_eee78fef1c3344a0bdf230df0b36cdc5_text_export.jpeg)

### Model Settings

For more control, configure models in **Cursor Settings > Models**:

1. Open **Cursor** menu > **Cursor Settings**
2. Navigate to **Models**
3. Click **View All Models** to see all available options
4. Enable or disable models based on your needs

**Open Cursor Settings:**

![Cursor menu](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/7b291b90-32be-4bd6-8618-a0f5a9affcb8/ascreenshot_cb1a5f2a68494d81b7277e098814dde8_text_export.jpeg)

**Click Cursor Settings:**

![Cursor Settings option](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/9fc7edd9-d4b6-4e87-be84-fa0c06dfceb1/ascreenshot_34d9bf59b9d04dd784eaf08ad0ff2015_text_export.jpeg)

**Navigate to Models section:**

![Models section](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/80c8b2a3-f69e-4ad4-8a13-292cd2715a01/ascreenshot_d64d1b6eb0a14506a3946b92b68dca16_text_export.jpeg)

**Click View All Models:**

![View All Models button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/d7a25fd5-0ed0-4e36-817a-2ddc2aa0aff8/ascreenshot_77fc6dc3e4db465a886736a5edb053c0_text_export.jpeg)

**Enable or disable models:**

![Model list with toggles](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/0d849348-fdca-4e56-bd33-48c10ea6a23a/ascreenshot_d5aed38462d34f5a80062a9373f9a2cb_text_export.jpeg)

---

## 3. Adding Context

> Provide the agent with relevant context so it can make informed decisions.

Use the **Add Context** button (or type `@`) to include:

- **Files** – Specific files to reference or modify
- **Folders** – Entire directories for broader context
- **Docs** – Up-to-date documentation from popular libraries
- **Terminal** – Terminal output for debugging errors
- **Past Chats** – Reference previous conversations

**Click the Add Context button:**

![Add Context button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/4a72196f-3a51-4643-9680-4b184b74850d/ascreenshot_2efecad5ca954d529b508f6674085525_text_export.jpeg)

**Context options menu:**

![Context options](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/3318391f-67d4-4eaf-9e1f-184dc30a32d3/ascreenshot_d1fd1056e182499bab344956cbead8dc_text_export.jpeg)

**Available context types:**

![Context types expanded](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/e346e9f7-5a4b-4b48-b333-eac11960993a/ascreenshot_b7deefa673cb4831a1eb898512a4185b_text_export.jpeg)

---

## 4. Image Upload

> Upload images as reference for the agent—mockups, screenshots, or error messages.

**Click the image upload button:**

![Image upload button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/973d29a3-c1c2-4a73-b994-f9001fe234bd/ascreenshot_f333544998ca4382845b91842a7363aa_text_export.jpeg)

**Image attached to chat:**

![Image in chat](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/be6d42f0-5ed2-4e36-8f40-0cf25fd7f64d/ascreenshot_11b8cb27c4934c7d93b4aabc9ea12cad_text_export.jpeg)

---

## 5. Voice Input

> Speak your prompts instead of typing for faster iteration.

**Click the microphone button to record:**

![Voice input button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/8042a8db-a533-4f17-940f-aeb911090485/ascreenshot_3e9e18fa2e864fed8999ec5d574998af_text_export.jpeg)

**Recording in progress:**

![Voice recording active](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/26a55931-a92b-44cc-ab12-fb56147a8e0c/ascreenshot_da89b13272b2487f876a44c048dded9e_text_export.jpeg)

---

## 6. Execution Mode

> Choose where your agent runs based on your needs.

| Mode | Description |
|------|-------------|
| **Local** | Runs on your machine with full access to local files |
| **Cloud** | Runs on Cursor's cloud infrastructure |
| **Worktree** | Run parallel agents in isolated worktrees (advanced) |

**Local execution mode:**

![Local mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/06af6fea-5eb1-48e6-9389-954880cf14fb/ascreenshot_35a259941d424639bc1f9cb56f04050c_text_export.jpeg)

**Cloud execution mode:**

![Cloud mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/39a7a562-783f-47e8-900a-03d75256a534/ascreenshot_ab9096f4aab9456b9837f02ff17687e0_text_export.jpeg)

**Worktree mode (advanced):**

![Worktree mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/28f433df-7fd8-4269-9659-74b5516afe49/ascreenshot_28dadbe1e9844a5db280ad8d0bee9835_text_export.jpeg)

---

## 7. Starting the Server

> Let the agent handle common tasks like starting your development server.

- [Start the development server](cursor://anysphere.cursor-deeplink/prompt?text=Start%20the%20server)

The agent will inspect your project configuration and run the appropriate command.

**Agent requests permission to run terminal command:**

![Terminal permission request](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/13fdcc39-a3b8-488d-885f-2985fed3258d/ascreenshot_12c4608a968f4599966264b31d6fe208_text_export.jpeg)

**Terminal command options:**

![Terminal options - Ask, Sandbox, Run Everything](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/0c9f3f5c-dd57-43dd-95e9-4e67fba3954a/ascreenshot_f19cefe3fb1c44ec97ee1dc21856b2a1_text_export.jpeg)

**Configure default terminal permissions in Cursor Settings > Agents:**

![Cursor Settings menu](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/9a95eaca-1cf9-4b41-b01d-977506c4df40/ascreenshot_6e963106273142eeacd809e378260338_text_export.jpeg)

![Agent settings](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/5b4eb62d-c16b-4ef6-99fb-b04e829b31f1/ascreenshot_6496d08355d94ca88afafc86af48ed24_text_export.jpeg)

![Terminal permission settings](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/dbeaf96f-350a-44df-ae3b-52ca276e610f/ascreenshot_bc2f1f92e0854736985972f6b92eceec_text_export.jpeg)

**Server running in browser:**

![App running in browser](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/05c83c5e-c1a0-4713-a9c5-ccdb11343cc3/ascreenshot_cf3e83aae81444d9a0f760427e61ad19_text_export.jpeg)

---

## 8. Making Code Changes

> Reference specific files when asking for changes to help the agent find the right code immediately.

- [Change sidebar background to blue](cursor://anysphere.cursor-deeplink/prompt?text=Change%20the%20background%20color%20of%20the%20sidebar%20to%20blue%20%40SideBar.tsx)

**Reference a file in your prompt:**

![File reference in prompt](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/5238c67e-094b-4967-8735-b310e9649e58/ascreenshot_978e47c4b6d04fa2bae7dc037d2d5b19_text_export.jpeg)

**Agent identifies the correct component:**

![Agent finds component](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/345c6473-e31f-473f-ac5b-a971d64112b8/ascreenshot_75a8961f8ace4147980a6fb4644aea2f_text_export.jpeg)

**Review changes with the diff view:**

![Review changes button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ccf2ced0-63da-48b8-b826-26b3023ee30f/ascreenshot_135dfd31a6ca4536baaa3d6dc37548d6_text_export.jpeg)

**Diff view showing changes:**

![Diff view](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/428647b4-0587-415b-a6f1-656a5dbb7fee/ascreenshot_5b4305b5f46549aca6f0272a2c5071f9_text_export.jpeg)

**Undo changes if needed:**

![Undo changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ff1e8f4e-251c-4af1-907f-49813c556212/ascreenshot_248d76266b5e4ee480bd26a6ce4c6223_text_export.jpeg)

---

## 9. Fixing Bugs from Terminal Output

> Quickly fix bugs by piping terminal errors directly into the agent.

**Step 1:** Introduce a bug (for demo purposes)
- Use [/introduce-runtime-bug](cursor://anysphere.cursor-deeplink/prompt?text=%2Fintroduce-runtime-bug) slash command

**Step 2:** View the error

**Error displayed in browser:**

![Runtime error in browser](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ca9a0d44-6b1f-4abc-a9fe-dcc99695c841/ascreenshot_f40e1bedc9a144d6b5e2c4b625cde655_text_export.jpeg)

**Open the terminal panel:**

![Open terminal panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/e258b03f-7709-4fe4-af59-00bfe08bdc9d/ascreenshot_2c3f1e2ea0fa451eb531d3fce266a558_text_export.jpeg)

**Select the terminal with the error:**

![Select terminal](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6290c97c-9468-43c4-bcb1-88585427587f/ascreenshot_2f359fc3c0d1431897aaa3e636f88f85_text_export.jpeg)

**Step 3:** Send error to agent

**Select the error text:**

![Select error text](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/72da8eb3-ff19-431a-83de-51a05b19282e/ascreenshot_d11e8c63b5134b95adc98bfcfcd235e7_text_export.jpeg)

**Error added to chat context (Cmd+L):**

![Error in chat context](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/0547a575-9759-4472-a058-ee4a049a1379/ascreenshot_23f593b414c64e7cab596f12fb69c08f_text_export.jpeg)

**File location highlighted:**

![File location shown](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/995cc90a-8967-4e3d-8644-a3dfccedd6e1/ascreenshot_697fa104c9de4900b26e7d1c7e19f48d_text_export.jpeg)

**Submit to have the agent fix it:**

![Submit fix request](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/b4235ec0-5c4e-4d46-b536-0ad7bab78dcc/ascreenshot_0052089e24ff4cc4986cad50dfac470c_text_export.jpeg)

---

## 10. Using Documentation

> Reference up-to-date library documentation so the agent uses current APIs and patterns.

### Built-in Docs

Popular libraries are pre-indexed. Type `@docs` and search:

- [Add validation with Zod](cursor://anysphere.cursor-deeplink/prompt?text=Add%20validation%20to%20my%20search%20input%20using%20%40Zod.%20Limit%20to%20100%20characters%20and%20block%20special%20characters.)

**Search for documentation:**

![Search docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/26fd89d8-6114-4be0-bbe0-751af63d8cb3/ascreenshot_5cdb76a9e4264a72b436f840b488b1cb_text_export.jpeg)

**Select from available documentation:**

![Select Zod docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/7e292d12-1e4c-4f41-b7ee-85ae1cb96a15/ascreenshot_8ce804d338334971865d3c8c87c04021_text_export.jpeg)

### Adding Custom Docs

1. Click **Add Context** > **Docs**
2. Scroll to bottom, click **Add new doc**
3. Paste the documentation URL
4. Cursor will index it for future use

**Click Add new doc:**

![Add new doc option](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/8bc4a64e-0f34-4a40-914b-455ab7387e81/ascreenshot_ffd8ba97f58140098b9ae7216226d158_text_export.jpeg)

**Paste documentation URL:**

![Paste doc URL](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/d04e2734-301c-4f51-a8ae-43e0acb11447/ascreenshot_016377d8c04a4658bcebe6fb3645fddc_text_export.jpeg)

**URL pasted and ready to index:**

![URL ready](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/806f1075-2bcc-4a82-9fb0-3d2afa1fdaa3/ascreenshot_5c368afe404d4ebf89fef51e06716014_text_export.jpeg)

**Documentation indexing:**

![Indexing docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/a9a104ae-335e-496f-9968-2fef13453964/ascreenshot_809042fce6be440cba1099db2b08f169_text_export.jpeg)

**Documentation indexed and available:**

![Docs indexed](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6ba9464b-b265-4d94-a9b9-712d88524a61/ascreenshot_88fcd841431942a88c06226f2257fc5a_text_export.jpeg)

---

## 11. Git Diff Context

> Review changes against your main branch and generate commit messages.

Use `@Git (Diff with Main Branch)` to:
- Understand what your feature branch changed
- Generate commit messages based on actual changes
- Get an overview of your current work status

- [Explain changes against main](cursor://anysphere.cursor-deeplink/prompt?text=Explain%20the%20changes%20that%20have%20been%20made%20%40Git%20%28Diff%20with%20Main%20Branch%29)

**Select Git Diff context:**

![Git diff context](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/9d577950-142b-42a9-9e7e-d6183f8f7a07/ascreenshot_c9ddd696b4f04594b201c34854759d44_text_export.jpeg)

**Agent explains the changes:**

![Changes explained](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/b982a96a-1fb2-455d-a4e8-fc7d44d100b6/ascreenshot_6233e904aa604d668d076d274207808d_text_export.jpeg)

---

## Context Window Management

> Monitor your agent's context usage to ensure optimal performance.

**View context usage indicator:**

![Context window indicator](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/45163e8f-520f-4c3b-9aab-4718fb1c421b/ascreenshot_05d0a5248eed4ecaa2704da84a1b3861_text_export.jpeg)

As conversations grow, the context window fills up. When it reaches capacity:
1. Cursor summarizes the conversation
2. Resets with the summary as context
3. Continues the task seamlessly

**Best Practice:** Use atomic tasks—one focused task per agent session. Start new agents for new tasks to keep context clean.

**Start a new agent:**

![New agent button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/a75bb952-ba21-41d0-b802-3b82a31cd4ee/ascreenshot_ba3d9f1fc8964fad943056efc7434309_text_export.jpeg)

---

## Chat History

> Access previous conversations to continue work or reference past solutions.

**Click Chat History:**

![Chat history button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/9fa45cd2-0418-4ede-87af-00d4bfb23737/ascreenshot_4df3322b96a645f887af3af88177c98d_text_export.jpeg)

**Browse past conversations:**

![Chat history list](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6eb2b02f-c742-4da5-9d92-45f1acafb559/ascreenshot_9ad22f2ff06b4e019c11f20066f73c6d_text_export.jpeg)

---

## 12. Demo: Implementing Dark Mode

> Walk through implementing a complete feature using Agent Chat.

This demo shows the full workflow: clicking a deep link, selecting a model, running the agent, and reviewing changes.

### Steps

- [Implement Dark Mode](cursor://anysphere.cursor-deeplink/prompt?text=Implement%20dark%20mode%20for%20this%20blog%20app.%20Add%20a%20theme%20toggle%20button%20and%20persist%20the%20user%27s%20preference.)

**Click the deep link to open the prompt:**

![Click Implement Dark Mode](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/7997f380-b64a-4914-8544-6745df34631f/ascreenshot_b14b1ebbc3af482ea91d90f757ef3979_text_export.jpeg)

**Click Create Chat:**

![Create Chat dialog](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/b43e8d68-7afa-4fbc-8d43-14e483e0dc45/ascreenshot_cbdca248fee040099d983a60ca1d507a_text_export.jpeg)

**Click the model dropdown:**

![Model dropdown](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/e74195e7-ff1e-41b3-ad34-48a8b4f10b0a/ascreenshot_3986a89130fd4b648bc97ecd13dae879_text_export.jpeg)

**Select composer-1 for faster results:**

![Select composer-1](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/273d22ff-ad48-4207-b842-6c39038a6cf0/ascreenshot_739b8c3a3308474090b9222b52b21fae_text_export.jpeg)

**Agent implements the feature:**

![Agent working](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6999f238-0115-4395-8f5c-c90699ad96bc/ascreenshot_bd6d07fdca3a421b8fc201117f098d40_text_export.jpeg)

**Click Review to see all changes:**

![Click Review](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/52e4014d-39ae-4366-80af-03e34f025b2e/ascreenshot_57effbc16bd544228b648a8f9805e3db_text_export.jpeg)

**Review changes across files:**

![Review scope](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ce091767-ab13-4eb3-b614-42117722373b/ascreenshot_2be9d139bb6a4bf1b06f1f857922ce74_text_export.jpeg)

### What to Highlight

- Deep links pre-fill prompts for consistent demos
- Model selection affects speed and quality
- Agent reads existing code to understand patterns
- Review mode shows all changes across files
- Changes can be accepted or reverted individually

---

## Quick Reference

| Action | Shortcut |
|--------|----------|
| Open Chat | `Cmd+L` |
| New Chat | Click "New Chat" button |
| Chat History | `Opt+Cmd+'` |
| Add Selection to Chat | Select text + `Cmd+L` |
| Voice Input | Click microphone button |

