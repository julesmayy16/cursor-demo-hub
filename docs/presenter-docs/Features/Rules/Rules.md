# Rules

> Rules provide system-level instructions to Agent. They bundle prompts, scripts, and more together, making it easy to manage and share workflows across your team.

**Docs:** [Rules](https://cursor.com/docs/context/rules)

## Overview

Rules live in the `.cursor` directory and can be applied at the project, user, or team level. They help ensure the AI behaves consistently and follows your conventions.

---

## 1. What Rules Are For

- Define consistent behavior across the codebase
- Enforce style guides and engineering standards
- Scope behavior to specific parts of the project using glob patterns
- Govern how models communicate with you

---

## 2. Accessing Rules

**Open the Cursor menu and click Cursor Settings:**

![Open Cursor menu](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/5e10a39d-577a-4859-adde-f65b80cc87b1/ascreenshot_963cb6821197457f9f92b1a67f7e1065_text_export.jpeg)

**Click Cursor Settings (or use `Cmd+Shift+J`):**

![Click Cursor Settings](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/038b2cf4-a493-40b5-ad04-aedab7734f51/ascreenshot_188b74a6bc9d491da19eefb880b48a7b_text_export.jpeg)

**Navigate to Rules and Commands:**

![Rules and Commands section](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9c2fe195-6ed7-4cf8-9fd5-0c9c57bf2240/ascreenshot_39ef2f296e764a349ece90a428e19e32_text_export.jpeg)

---

## 3. Rule Levels

Rules can be configured at three levels:

| Level | Scope | Use Case |
|-------|-------|----------|
| **User** | Your personal settings | Rules you want globally for yourself |
| **Project** | Repository-specific | Conventions specific to this codebase |
| **Team** | Shared across team | Consistent behavior across your organization |

**User-level rules:**

![User rules](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/c6d01973-65e5-474f-9069-75494fa18265/ascreenshot_bd1d78360abf4f40a42e4d6edad0e61d_text_export.jpeg)

**Team-level rules:**

![Team rules](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/5fbb68cc-c167-44ed-91ac-c1005924c440/ascreenshot_9fae6ed27c244f93bb1ecfb408de1764_text_export.jpeg)

**Example team rule - "Never tell us we're absolutely right":**

Let's create a rule called `ai-behavior` to prevent the agent from being overly agreeable. We'll tell it to never say "You're absolutely right" — keeping responses direct and honest.

![Team rule example](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/461c2730-3dbe-467b-92a0-66fce1a9ed95/ascreenshot_a75ba376193944b5a4aa24cf61f5b81b_text_export.jpeg)

![Rule content](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/68111c63-4c20-4f58-aacc-b497bb45b23e/ascreenshot_3552310334cc43d5b27bfa5e435e61b7_text_export.jpeg)

---

## 4. Creating a Custom Rule

**Click Add Rule in Project Rules:**

![Add Rule button](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7ef5cace-806f-46ba-bc02-ed916f1e05a9/ascreenshot_2141f20ef3d04b21abe655d53f6ef99f_text_export.jpeg)

**Choose Custom Rule (or add a remote rule from GitHub):**

![Custom Rule option](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/c2f55517-6aa1-4e6c-a5e1-76c89649d1ba/ascreenshot_bf34f7b86aef4e0f906268fc49ef7e43_text_export.jpeg)

**Name your rule:**

![Name the rule](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/6aebca20-aea2-43bb-9f98-d0d5492ef034/ascreenshot_03d5672b29ef4909b90052246c36c176_text_export.jpeg)

**Write the rule content:**

![Rule content](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/e9ad485c-76c0-4cba-b16b-fa86c8ac1248/ascreenshot_85a49066c04b4590b8e1b416d928b421_text_export.jpeg)

---

## 5. Always Apply

> Use **Always Apply** for rules that should be active in every conversation.

Let's create a rule called `ai-behavior` to prevent the agent from being overly agreeable. We'll tell it to never say "You're absolutely right" — keeping responses direct and honest.

Here's the snippet you can copy and paste:

```
- Be concise and direct.
- Do not use filler language or excessive politeness.
- Never say phrases that placate the user, such as:
  - "You are absolutely right"
  - "Great question"
- If a suggestion is made, briefly explain why it is correct.
- When uncertain, state assumptions clearly instead of guessing.
```

**Select application mode from the dropdown:**

![Application mode dropdown](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/631f8a41-dd84-46f9-9289-077d4b7de87e/ascreenshot_0d4e61cfa01148c6bf1d564f71a77f97_text_export.jpeg)

**Click to choose a mode:**

![Mode options](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/3d09e8f0-366b-4e70-8561-94ddedf28543/ascreenshot_6a75177198c64509bdf13ac33a880573_text_export.jpeg)

**Select "Always Apply":**

![Always Apply selected](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/eadee6e6-bab3-49a6-8a41-30d45bcb6a8a/ascreenshot_a2c6f19cad0a4c1f9ee17a0b01cdf9b7_text_export.jpeg)

![Always Apply confirmation](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/178396fc-717b-4e6d-b1fb-993aebed9ab1/ascreenshot_af07b390a1a34366a669cf1654c4a955_text_export.jpeg)

---

## 6. Apply to Specific Files

> Glob patterns let you enforce style guides for specific parts of your codebase.
>
> For example, React components (`.tsx` files in your components directory) are frontend code with their own conventions — Tailwind for styling, specific naming patterns, component structure. You don't want those rules applying to your backend API code. This keeps your code style coherent and consistent when written by the agent.

When you want rules to apply only to specific files, use **Apply to Specific Files** with glob patterns.

**Select "Apply to Specific Files":**

![Apply to specific files](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/880fbf8e-c6a8-4efc-8f2b-3c20b7772620/ascreenshot_fbb539947b6d44229797de1d66265721_text_export.jpeg)

**Enter a glob pattern** (e.g., `**/*.tsx` to match all `.tsx` files):

![Glob pattern input](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/38d282f8-6880-431e-9701-3552da7cc6f8/ascreenshot_21901f83dd4d472980f05dd5cab5c10d_text_export.jpeg)

**Example: Target React components in the components directory:**

![Glob pattern example](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/7800623f-5cab-471d-9c52-2b93e6d33f6d/ascreenshot_f6deb3c11fd3446989cbfd81187abc82_text_export.jpeg)

| Pattern | Matches |
|---------|---------|
| `app/components/**/*.tsx` | React components (frontend) |
| `lib/**/*.ts` | Library utilities |
| `**/*.test.ts` | Test files |

---

## 7. Apply Intelligently

> Some rules are hard to target with glob patterns.
>
> Take validation: you need it on the frontend (when users type into form inputs) and on the backend (when API requests come in). You never know when a malicious user might try to send bad data, so you validate in both places — that's a security best practice. Since validation code lives in multiple directories, you let the agent decide when the rule applies.

For rules that span multiple areas, use **Apply Intelligently** with a clear description.

**Select "Apply Intelligently":**

![Apply Intelligently](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/02e275b8-802c-476e-988a-c5c5f2eff4d2/ascreenshot_8dd37298609143d491bc5655a75fdc81_text_export.jpeg)

![Apply Intelligently option](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/45b36f10-e56f-4c2d-8945-17ea2ec58bf2/ascreenshot_a54f4c5e6a4342f78894db2451f93ca0_text_export.jpeg)

**Add a description so the agent knows when to apply it:**

![Rule description](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/9cef7ea2-df85-40ae-b1e0-244addcfb3b4/ascreenshot_1d4ca932bdee41c1b8d58395437e4216_text_export.jpeg)

The agent reads the description and applies the rule when working on:
- Form inputs (frontend)
- API request bodies (backend)
- Processing user data anywhere in the codebase

![Validation rule example](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/23f95d7c-7a56-4526-a499-6b497c3d22be/ascreenshot_a181854c785d4852902b88cf6dfb16ff_text_export.jpeg)

---

## 8. Apply Manually

> Sometimes you want a rule only for a specific task.
>
> Refactoring is a good example: you want the agent to change a library or update a service, but you don't want it changing any core behavior — same functionality, cleaner code. You wouldn't want this rule always active (it would block legitimate feature work), so you tag it manually when you need it.

Use **Apply Manually** for situational rules you only need sometimes.

**Select "Apply Manually":**

![Apply Manually](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/fd04cefb-16f2-48ce-84f6-1c70aa9a74be/ascreenshot_85da4e8c180042e79035686fbb5f89fb_text_export.jpeg)

![Apply Manually selected](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/58b54402-7dfe-49b2-9762-653db0103a91/ascreenshot_0e052d44168b441e84c923644be9b2dd_text_export.jpeg)

**Example: A refactoring rule that preserves behavior:**

![Refactor rule example](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/a38cd4cd-7099-423e-b8ea-54528286ecd0/ascreenshot_2d733d071c814153a0c287d9e9aead9b_text_export.jpeg)

**To use a manual rule, open the Agent chat:**

![Open Agent chat](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/1dbae285-3e09-4412-bf09-3cab4875d2e3/ascreenshot_70e4f7d132f94a6ab11ff094aa56a84a_text_export.jpeg)

![Agent panel](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/95c40a26-9609-4303-b540-fa64387cba7b/ascreenshot_c0d2e3fb59824815a6d21649014ba417_text_export.jpeg)

![Agent view](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/519dc954-cd04-4886-90ef-f2894d82a3e5/ascreenshot_84c9b3d84e004cc98b28e20fefaaa4b7_text_export.jpeg)

**Tag the rule using `@rule-name` (in this example, `@refactor`):**

![Tag rule in chat](https://colony-recorder.s3.amazonaws.com/files/2026-01-02/cfbdeca1-fa98-4c40-838f-37fd8ee3885a/ascreenshot_1b275c847fbe4833931eb0c610129417_text_export.jpeg)

---

## Best Practices

| Do | Don't |
|----|-------|
| Keep rules small and focused | Create rules for everything |
| Apply glob patterns for targeted areas | Fill the context window with large rule files |
| Use clear, actionable instructions | Write vague or overly detailed rules |
| Test rules and iterate | Assume rules work without validation |

### Caution

- Rules fill the context window when active
- Very large rules can degrade model performance
- Use rules judiciously at both team and project levels

---

## Quick Reference

| Action | Location |
|--------|----------|
| Open Rules Settings | **Cursor Settings > Rules and Commands** |
| Create Project Rule | **Project Rules > Add Rule** |
| Create Team Rule | **Team Rules > Add Rule** |
| Tag Manual Rule | Type `@rule-name` in chat |

