# Cursor 101 Demo Flow (with Screenshots)

An introductory walkthrough of Cursor's core features for new users.

---

## Prerequisites

Before starting the demo:

1. **Start the server:** Run [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) to launch the development server and open the blog app in the browser
2. **Reset workspace:** Use [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) between sections to ensure a clean state for deterministic results

---

## 1. Layout Walkthrough

> Cursor is an IDE (Integrated Development Environment) forked from VS Code, now fully built out with AI-native features.
>
> Understanding the layout helps you navigate efficiently and customize your workspace for different tasks.

### Overview

Cursor extends VS Code with AI-powered panels and features. The main areas include:

- **File Explorer** (left sidebar) - Navigate your project files
- **Editor** (center) - View and edit code
- **Terminal** (bottom panel) - Run commands
- **Agent Panel** (right sidebar) - AI chat and agent interactions

### Demo

#### Opening the Layout

**When you first open Cursor, you'll see an empty editor:**

![Empty editor view](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/c377bc6c-dc94-4b22-860c-d0d2e75d44d7/ascreenshot_48c7278b84de4699a28d05ebb26fd5e4_text_export.jpeg)

**Click "Change Layout" to customize your view:**

![Change layout button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/e3316593-b084-4137-b4af-116f8ab389aa/user_cropped_screenshot_98932f62fdf049fba2b81888f03afa41_text_export.jpeg)

**The layout options appear—Cursor is a fork of VS Code, now fully AI-native:**

![Layout options](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/943c1a7d-5482-4af0-a945-e203c06871f7/ascreenshot_125a31955a834de9a8da5e81b5f01fcb_text_export.jpeg)

**Click the layout menu to see available options:**

![Layout menu](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/e4399b7d-6d73-424a-a352-0155c5c08c75/ascreenshot_288859d0e4634752bb2ac80f34736680_text_export.jpeg)

**Click the File Explorer icon to see your project's file system:**

![File Explorer panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/242d3dc7-be71-49f7-ac50-b9f2e0241ea8/ascreenshot_86429487af914df5b897932f919030d1_text_export.jpeg)

**Click the Terminal area to open the integrated terminal:**

![Terminal panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/72dbd776-f68c-44b4-bb20-2b3a03d07510/ascreenshot_32e30b27d1d246d996e6d1b9b4265f00_text_export.jpeg)

**Click to open the Agent panel for AI chat and interactions:**

![Agent panel](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/bba84ab6-4e9b-40fd-8f81-23f9ce8687aa/ascreenshot_24230aea6b6d4529a78dc51b27e19db7_text_export.jpeg)

### Saving Custom Layouts

**Save your preferred layout for quick switching:**

![Save custom layout](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/0b440024-127a-4a9c-a66e-635e24a990cb/ascreenshot_34ab8711e7b34fe7a7956333291da849_text_export.jpeg)

**Select a saved layout from the menu:**

![Select saved layout](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/9790ac50-105b-4883-b844-9f6f6b382245/ascreenshot_6c523eaeb8fd4affa9e73a9ec3b33680_text_export.jpeg)

**Switch between different layouts as needed:**

![Switch layouts](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/60a68514-e0d3-4c24-8564-c4f457151e10/ascreenshot_70998385ba3d41ac8f38adb3d5569480_text_export.jpeg)

### What to Highlight

- Familiar VS Code experience with AI enhancements
- Customizable panel arrangement
- Quick layout switching for different workflows
- Integrated terminal for running commands alongside AI

### Tips

- Use keyboard shortcuts to toggle panels quickly
- Save different layouts for coding vs. AI-assisted tasks
- The agent panel can be resized or detached

---

## 2. Tab + Quick Edit (Cmd+K)

> Cursor Tab provides context-aware, multi-line code suggestions as you type. It can modify multiple lines at once, add import statements when missing, and predict your next editing location within or across files.
>
> Inline Edit (Cmd+K) lets you edit code or generate new code directly within your editor using natural language. With code selected, it edits that specific code; without a selection, it generates new code at your cursor position.

**Docs:** [Tab Overview](https://docs.cursor.com/tab/overview) | [Inline Edit](https://docs.cursor.com/en/inline-edit/overview)

### Tab Autocomplete

#### Overview

Tab predicts what you want to write next and suggests complete code blocks. The more you use it, the more it learns your style.

#### Demo

**Open an empty component file like `Footer.tsx`:**

![Open Footer.tsx](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ac8031b5-214a-4eec-bc5e-4bc8940253f3/ascreenshot_383cf1fcd2bd4ae68b7d027b647f584b_text_export.jpeg)

**Type the letter "F"—Tab detects you're in `Footer.tsx` and suggests the component:**

![Start typing F](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/1bfcc4dd-1210-4c58-9ecd-e10422b1ed86/ascreenshot_7f55064d30594a0ca4919082472c0bea_text_export.jpeg)

**Tab suggests a complete Footer component structure:**

![Tab suggestion appears](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/f24a173e-585a-4a87-ac86-4666154e74c3/ascreenshot_b59184c76ed2451a850314da3119a654_text_export.jpeg)

**Press Tab to accept and continue building:**

![Accept Tab suggestion](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/b01817de-9927-4086-9415-f5fa56c5458c/ascreenshot_f22ec6ad4cb44e34be69217591e84c07_text_export.jpeg)

**Keep pressing Tab—it builds out the component iteratively:**

![Continue with Tab](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/477c255d-3c30-4533-b760-be43ee9d6dc8/ascreenshot_1ea3d27f2675458aad97e0b9a8a4b4d0_text_export.jpeg)

**Click on the line above the closing footer tag and type "sign up"—Tab starts to auto-complete:**

![Type sign up hint](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/5528d5e1-84de-42c3-a331-e49f74e71ad4/ascreenshot_b09931ad6f044bc6a9bf43edec8b0c33_text_export.jpeg)

**Press Tab to accept—it uses components from your codebase to build the feature:**

![Tab uses existing components](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/62da6a67-13ce-4f91-85f3-c01c75ab7f22/ascreenshot_84318c37534a46b9885dfcd378507ae5_text_export.jpeg)

**Continue pressing Tab to iterate quickly—express ideas and Tab builds them out:**

![Rapid iteration with Tab](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/ef4d1f6f-1eb2-47d7-a0b3-5ec03550f614/ascreenshot_2b43d6343d6a4113a608b0f3b9cd3dba_text_export.jpeg)

**Type "social media links" and Tab adapts to your intent—press Tab as it auto-completes:**

![Type social media links](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/a28fd681-41b5-4dcb-9586-ee7444f06398/ascreenshot_afa69689b70f4615b2c80b730a2d9cac_text_export.jpeg)

**Tab now uses social links instead of the signup form:**

![Tab adapts to changes](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/758272fe-d046-455f-8a09-201519f74d26/ascreenshot_7314e537bfaf46008773362c88c4b62a_text_export.jpeg)

#### What to Highlight

- Contextual awareness—knows what file you're in
- Uses your existing components and patterns
- Gets smarter the more you use it
- Feels like "reading your mind" for power users

### Quick Edit (Cmd+K)

#### Overview

Select code and press `Cmd+K` to make targeted edits using natural language. Only the selected section is modified.

#### Demo

**Select a section of code you want to edit and press Cmd+K to open the quick edit panel:**

![Quick edit prompt](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/825f8951-69cb-4831-9b85-ab60c8653ed3/ascreenshot_62c96380a4014cefb6e90ec6067bb135_text_export.jpeg)

**Type your instruction—"make this more colorful":**

![Type instruction](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/188b6ae4-6fe1-4211-a4b5-4986f095a52a/ascreenshot_539e37512b9e406f8ccf9c8b4f76be3d_text_export.jpeg)

**Cursor edits only the selected section and shows the diff:**

![View the diff](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6ab10cad-cd6b-4c6f-8d5e-0f118fe073a0/ascreenshot_a04a01e5a22a4b8fb7b5cad0baa7a6a6_text_export.jpeg)

#### What to Highlight

- Surgical edits—only changes what you select
- Natural language instructions
- Preview changes before accepting
- Great for refactoring specific sections

### Best Practices

- **Tab:** Start with hints in comments or partial code to guide suggestions
- **Quick Edit:** Be specific about what you want changed
- **Combine them:** Use Tab for building, Quick Edit for refining

---

## 3. Agent Chat

> Agent Chat is the command center for agentic workflows within Cursor. An agent is a large language model (LLM) with access to tool calls—in this case, the ability to make changes directly to your codebase.

**Docs:** [Agent Chat](https://docs.cursor.com/chat/overview)

### Overview

This demo covers all the key configurations and features of Agent Chat.

### 3.1 Agent Modes

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

### 3.2 Model Selection

> You have full control over which model to use. Choose based on your task complexity and speed requirements.

- **Composer 1**: Cursor's own coding model, optimized for speed
- **Auto**: Let Cursor smartly select the best model for each task
- **Frontier models**: Claude, GPT-4, Gemini, and more

#### Quick Selection

**Click the model selector:**

![Model selector](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6d9492d4-1121-4326-9e1f-eb9c3a0e4767/ascreenshot_4a42b42d960e4ee2bfbe04b1448b1b77_text_export.jpeg)

**Choose from available models:**

![Model options with descriptions](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/89c572df-f8be-484a-a05c-6c722a9c0539/ascreenshot_d3bcce33e0d54c3cabb7268919fad54d_text_export.jpeg)

**Model categories and Auto selection:**

![Model categories](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/3da6ac1a-f444-4b03-9e94-0b95f12c9ab7/ascreenshot_eee78fef1c3344a0bdf230df0b36cdc5_text_export.jpeg)

#### Model Settings

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

### 3.3 Adding Context

> Provide the agent with relevant context so it can make informed decisions.

#### Why This Matters

Context is everything when working with AI. Without the right context, even the best model will give generic or incorrect answers. The friction of adding context—switching between apps, copying documentation from ChatGPT or Claude's web interface, pasting error messages—creates constant context switching that slows you down more than you realize.

Cursor makes adding context fast and seamless. Instead of juggling browser tabs and copy-pasting between applications, you simply type `@` and reference what you need. This eliminates the hidden productivity tax of context switching, letting you stay in flow while giving the agent exactly what it needs to help you.

#### How to Add Context

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

### 3.4 Image Upload

> Upload images as reference for the agent—mockups, screenshots, or error messages.

**Click the image upload button:**

![Image upload button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/973d29a3-c1c2-4a73-b994-f9001fe234bd/ascreenshot_f333544998ca4382845b91842a7363aa_text_export.jpeg)

**Image attached to chat:**

![Image in chat](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/be6d42f0-5ed2-4e36-8f40-0cf25fd7f64d/ascreenshot_11b8cb27c4934c7d93b4aabc9ea12cad_text_export.jpeg)

### 3.5 Voice Input

> Speak your prompts instead of typing for faster iteration.

**Click the microphone button to record:**

![Voice input button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/8042a8db-a533-4f17-940f-aeb911090485/ascreenshot_3e9e18fa2e864fed8999ec5d574998af_text_export.jpeg)

**Recording in progress:**

![Voice recording active](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/26a55931-a92b-44cc-ab12-fb56147a8e0c/ascreenshot_da89b13272b2487f876a44c048dded9e_text_export.jpeg)

### 3.6 Execution Mode

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

### 3.7 Starting the Server

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

### 3.8 Making Code Changes

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

### 3.9 Fixing Bugs from Terminal Output

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

### 3.10 Using Documentation

> Reference up-to-date library documentation so the agent uses current APIs and patterns.

#### Built-in Docs

Popular libraries are pre-indexed. Type `@docs` and search:

- [Add validation with Zod](cursor://anysphere.cursor-deeplink/prompt?text=Add%20validation%20to%20my%20search%20input%20using%20%40Zod.%20Limit%20to%20100%20characters%20and%20block%20special%20characters.)

**Search for documentation:**

![Search docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/26fd89d8-6114-4be0-bbe0-751af63d8cb3/ascreenshot_5cdb76a9e4264a72b436f840b488b1cb_text_export.jpeg)

**Select from available documentation:**

![Select Zod docs](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/7e292d12-1e4c-4f41-b7ee-85ae1cb96a15/ascreenshot_8ce804d338334971865d3c8c87c04021_text_export.jpeg)

#### Adding Custom Docs

1. Click **Add Context** > **Docs**
2. Scroll to bottom, click **Add new doc**
3. Paste a documentation URL (e.g., `https://docs.cursor.com/features/bugbot`)
4. Cursor will index it for future use

**Example URL to add:** `https://docs.cursor.com/features/bugbot`

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

### 3.11 Git Diff Context

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

### 3.12 Context Window Management

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

### 3.13 Chat History

> Access previous conversations to continue work or reference past solutions.

**Click Chat History:**

![Chat history button](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/9fa45cd2-0418-4ede-87af-00d4bfb23737/ascreenshot_4df3322b96a645f887af3af88177c98d_text_export.jpeg)

**Browse past conversations:**

![Chat history list](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6eb2b02f-c742-4da5-9d92-45f1acafb559/ascreenshot_9ad22f2ff06b4e019c11f20066f73c6d_text_export.jpeg)

### 3.14 Demo: Implementing Dark Mode

> Walk through implementing a complete feature using Agent Chat.

This demo shows the full workflow: clicking a deep link, selecting a model, running the agent, and reviewing changes.

#### Steps

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

#### What to Highlight

- Deep links pre-fill prompts for consistent demos
- Model selection affects speed and quality
- Agent reads existing code to understand patterns
- Review mode shows all changes across files
- Changes can be accepted or reverted individually

---

## Quick Reference

| Action | Shortcut/Command |
|--------|------------------|
| Open Agent Chat | `Cmd+L` |
| Quick Edit | `Cmd+K` |
| Accept Tab suggestion | `Tab` |
| Reject Tab suggestion | `Escape` |
| Chat History | `Opt+Cmd+'` |
| New Chat | Click "New Chat" button |
| Add Selection to Chat | Select text + `Cmd+L` |
| Voice Input | Click microphone button |
| Start demo server | [/start-demo](cursor://anysphere.cursor-deeplink/prompt?text=%2Fstart-demo) |
| Reset workspace | [/reset](cursor://anysphere.cursor-deeplink/prompt?text=%2Freset) |

---

## Next Steps

After completing Cursor 101, explore:

- **[Cursor 2.0 Demo](../Cursor-2.0/)** – Advanced features like Browser, Worktrees, Bugbot
- **[Plan Mode](../Features/Agent-Chat/Plan-Mode.screenshots.md)** – Detailed implementation planning
- **[Debug Mode](../Features/Agent-Chat/Debug-Mode.screenshots.md)** – Hypothesis-driven debugging
- **[Browser](../Features/Browser/Browser.screenshots.md)** – Built-in browser testing
