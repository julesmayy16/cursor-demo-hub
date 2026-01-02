# Tab + Inline Edit (Cmd+K)

> Cursor Tab provides context-aware, multi-line code suggestions as you type. It can modify multiple lines at once, add import statements when missing, and predict your next editing location within or across files.
>
> Inline Edit (Cmd+K) lets you edit code or generate new code directly within your editor using natural language. With code selected, it edits that specific code; without a selection, it generates new code at your cursor position.

**Docs:** [Tab Overview](https://docs.cursor.com/tab/overview) | [Inline Edit](https://docs.cursor.com/en/inline-edit/overview)

## Tab Autocomplete

### Overview

Tab predicts what you want to write next and suggests complete code blocks. The more you use it, the more it learns your style.

### Demo

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

### What to Highlight

- Contextual awareness—knows what file you're in
- Uses your existing components and patterns
- Gets smarter the more you use it
- Feels like "reading your mind" for power users

---

## Inline Edit (Cmd+K)

### Overview

Select code and press `Cmd+K` to make targeted edits using natural language. Only the selected section is modified.

### Demo

**Select a section of code you want to edit and press Cmd+K to open the inline edit panel:**

![Inline edit prompt](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/825f8951-69cb-4831-9b85-ab60c8653ed3/ascreenshot_62c96380a4014cefb6e90ec6067bb135_text_export.jpeg)

**Type your instruction—"make this more colorful":**

![Type instruction](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/188b6ae4-6fe1-4211-a4b5-4986f095a52a/ascreenshot_539e37512b9e406f8ccf9c8b4f76be3d_text_export.jpeg)

**Cursor edits only the selected section and shows the diff:**

![View the diff](https://colony-recorder.s3.amazonaws.com/files/2025-12-31/6ab10cad-cd6b-4c6f-8d5e-0f118fe073a0/ascreenshot_a04a01e5a22a4b8fb7b5cad0baa7a6a6_text_export.jpeg)

### What to Highlight

- Surgical edits—only changes what you select
- Natural language instructions
- Preview changes before accepting
- Great for refactoring specific sections

---

## Best Practices

- **Tab:** Start with hints in comments or partial code to guide suggestions
- **Inline Edit:** Be specific about what you want changed
- **Combine them:** Use Tab for building, Inline Edit for refining


