import fs from "fs";
import path from "path";
import { remark } from "remark";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export interface DocEntry {
  slug: string[];
  title: string;
  isDirectory: boolean;
  children?: DocEntry[];
}

export interface DocData {
  slug: string[];
  title: string;
  contentHtml: string;
}

const docsDirectory = path.join(process.cwd(), "docs/presenter-docs");

/**
 * Extract title from markdown content (first H1) or filename
 */
function extractTitle(content: string, filename: string): string {
  const isScreenshots = filename.endsWith(".screenshots.md");
  const match = content.match(/^#\s+(.+)$/m);
  
  let title: string;
  if (match && match[1]) {
    title = match[1].trim();
  } else {
    title = filename.replace(/\.screenshots\.md$/, "").replace(/\.md$/, "").replace(/-/g, " ");
  }
  
  if (isScreenshots) {
    // Avoid duplicating "(with Screenshots)" if already in title
    if (!title.toLowerCase().includes("screenshot")) {
      title += " (with Screenshots)";
    }
  }
  
  return title;
}

/**
 * Build a tree structure of all docs
 */
export function getDocsTree(dir: string = docsDirectory, basePath: string[] = []): DocEntry[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const items = fs.readdirSync(dir);
  const entries: DocEntry[] = [];

  for (const item of items) {
    // Skip hidden files and non-md files (except directories)
    if (item.startsWith(".")) {continue;}
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const children = getDocsTree(fullPath, [...basePath, item]);
      if (children.length > 0) {
        entries.push({
          slug: [...basePath, item],
          title: item.replace(/-/g, " "),
          isDirectory: true,
          children,
        });
      }
    } else if (item.endsWith(".md")) {
      const content = fs.readFileSync(fullPath, "utf8");
      const title = extractTitle(content, item);
      entries.push({
        slug: [...basePath, item.replace(/\.md$/, "")],
        title,
        isDirectory: false,
      });
    }
  }

  return entries.sort((a, b) => {
    // README/Start Here first
    const aIsReadme = a.slug[a.slug.length - 1]?.toLowerCase() === "readme";
    const bIsReadme = b.slug[b.slug.length - 1]?.toLowerCase() === "readme";
    if (aIsReadme && !bIsReadme) {return -1;}
    if (!aIsReadme && bIsReadme) {return 1;}
    
    // Directories first, then alphabetically
    if (a.isDirectory && !b.isDirectory) {return -1;}
    if (!a.isDirectory && b.isDirectory) {return 1;}
    return a.title.localeCompare(b.title);
  });
}

/**
 * Get all doc slugs for static generation
 */
export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];

  function collectSlugs(entries: DocEntry[]) {
    for (const entry of entries) {
      if (entry.isDirectory && entry.children) {
        collectSlugs(entry.children);
      } else if (!entry.isDirectory) {
        slugs.push(entry.slug);
      }
    }
  }

  collectSlugs(getDocsTree());
  return slugs;
}

/**
 * Get doc content by slug
 */
export async function getDocData(slug: string[]): Promise<DocData | null> {
  const filePath = `${path.join(docsDirectory, ...slug)  }.md`;

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const title = extractTitle(content, slug[slug.length - 1] || "");

  const processedContent = await remark()
    .use(gfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title,
    contentHtml,
  };
}

/**
 * Get breadcrumb data for navigation
 */
export function getBreadcrumbs(slug: string[]): Array<{ title: string; href: string; isClickable: boolean }> {
  const breadcrumbs: Array<{ title: string; href: string; isClickable: boolean }> = [
    { title: "Presenter Docs", href: "/presenter-docs", isClickable: true },
  ];

  // Add intermediate folder paths as non-clickable (they don't have pages)
  let currentPath = "/presenter-docs";
  for (let i = 0; i < slug.length - 1; i++) {
    currentPath += `/${  slug[i]}`;
    breadcrumbs.push({
      title: slug[i]?.replace(/-/g, " ") || "",
      href: currentPath,
      isClickable: false, // Folders don't have index pages, so don't link to them
    });
  }

  return breadcrumbs;
}

