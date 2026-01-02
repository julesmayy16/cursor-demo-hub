import fs from "fs";
import path from "path";

interface IncludeOptions {
  /**
   * Base directory for resolving relative paths.
   * Defaults to process.cwd()
   */
  baseDir?: string;
  /**
   * Whether to strip the first heading (H1) from included content.
   * Useful when including a file that has its own title.
   * Defaults to true
   */
  stripFirstHeading?: boolean;
  /**
   * Maximum depth for nested includes (prevents infinite loops)
   * Defaults to 5
   */
  maxDepth?: number;
  /**
   * Whether to wrap included content in collapsible <details> elements.
   * Defaults to false
   */
  collapsible?: boolean;
}

interface ProcessResult {
  content: string;
  includedFiles: string[];
}

/**
 * Pre-processes markdown content to resolve @include directives.
 *
 * Syntax: <!-- @include: path/to/file.md -->
 *
 * Options for fine-grained control:
 * - <!-- @include: path/to/file.md | stripHeading: false -->
 * - <!-- @include: path/to/file.md | lines: 10-50 -->
 * - <!-- @include: path/to/file.md | after: ## Section Name -->
 *
 * Paths are resolved relative to the project root (or baseDir option).
 * Nested includes are supported up to maxDepth levels.
 */
export function processIncludes(
  content: string,
  options: IncludeOptions = {},
  depth = 0
): ProcessResult {
  const {
    baseDir = process.cwd(),
    stripFirstHeading = true,
    maxDepth = 5,
    collapsible = false,
  } = options;

  const includedFiles: string[] = [];

  if (depth > maxDepth) {
    console.warn(
      `[remark-include] Max include depth (${maxDepth}) exceeded. Possible circular include?`
    );
    return { content, includedFiles };
  }

  // Match: <!-- @include: path/to/file.md --> or with options
  const includePattern =
    /<!--\s*@include:\s*([^\s|>]+)(?:\s*\|\s*([^>]+?))?\s*-->/g;

  const processed = content.replace(includePattern, (match, filePath: string, optionsStr?: string) => {
    // Parse inline options
    const inlineOptions: Record<string, string | boolean> = {};
    if (optionsStr) {
      for (const opt of optionsStr.split(",")) {
        const colonIdx = opt.indexOf(":");
        if (colonIdx > 0) {
          const key = opt.slice(0, colonIdx).trim();
          const val = opt.slice(colonIdx + 1).trim();
          inlineOptions[key] = val === "false" ? false : val || true;
        }
      }
    }

    const fullPath = path.resolve(baseDir, filePath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`[remark-include] File not found: ${fullPath}`);
      return `<!-- ❌ @include ERROR: File not found: ${filePath} -->`;
    }

    includedFiles.push(fullPath);
    let fileContent = fs.readFileSync(fullPath, "utf8");

    // Handle "after" option: only include content after a specific heading
    // Users can pass "## Setup" or just "Setup" - we normalize it
    if (inlineOptions.after && typeof inlineOptions.after === "string") {
      // Strip leading # symbols and whitespace from the after value
      const afterHeading = inlineOptions.after.replace(/^#+\s*/, "").trim();
      const headingPattern = new RegExp(
        `^(#{1,6})\\s*${escapeRegex(afterHeading)}\\s*$`,
        "m"
      );
      const headingMatch = fileContent.match(headingPattern);
      if (headingMatch && headingMatch.index !== undefined) {
        fileContent = fileContent.slice(headingMatch.index);
      }
    }

    // Handle line range option: lines: 10-50
    if (inlineOptions.lines && typeof inlineOptions.lines === "string") {
      const [start, end] = inlineOptions.lines.split("-").map(Number);
      const lines = fileContent.split("\n");
      fileContent = lines
        .slice((start || 1) - 1, end || lines.length)
        .join("\n");
    }

    // Strip first heading if enabled (and not overridden)
    const shouldStripHeading =
      inlineOptions.stripHeading !== false && stripFirstHeading;
    if (shouldStripHeading) {
      // Remove first H1 and any immediately following blank lines
      fileContent = fileContent.replace(/^#\s+.+\n*/, "");
    }

    // Recursively process nested includes
    const nested = processIncludes(fileContent, options, depth + 1);
    includedFiles.push(...nested.includedFiles);

    // Check if this include should be collapsible (inline option overrides global)
    const shouldCollapse = inlineOptions.collapsible !== undefined 
      ? inlineOptions.collapsible !== false 
      : collapsible;

    if (shouldCollapse) {
      // Extract a nice label from the file path
      const fileName = path.basename(filePath, ".md");
      const label = inlineOptions.label && typeof inlineOptions.label === "string"
        ? inlineOptions.label
        : fileName.replace(/-/g, " ");
      
      return `<details>
<summary>📎 ${label}</summary>

${nested.content.trim()}

</details>`;
    }

    return `<!-- 📎 included: ${filePath} -->\n${nested.content.trim()}\n<!-- /included: ${filePath} -->`;
  });

  return { content: processed, includedFiles };
}

/**
 * Escape special regex characters in a string
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default processIncludes;
