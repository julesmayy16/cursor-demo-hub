import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
  readingTime?: number;
  contentHtml?: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}

function calculateReadingTime(wordCount: number): number {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function collectMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
    } else if (item.endsWith('.md') && !item.includes('.backup.')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

export function getPostsData(): { sortedPosts: PostData[]; groupedPosts: { [year: string]: { [month: string]: PostData[] } } } {
  const allFiles = collectMarkdownFiles(postsDirectory);
  
  const allPostsData: PostData[] = allFiles.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    
    const relativePath = path.relative(postsDirectory, filePath);
    const id = relativePath.replace(/\.md$/, "");
    
    const wordCount = countWords(matterResult.content);
    const readingTime = calculateReadingTime(wordCount);
    
    return {
      id,
      title: matterResult.data.title || "Untitled",
      date: matterResult.data.date || "1970.01.01",
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
      readingTime,
    };
  });
  
  // Simplified: dates are already in sortable yyyy.MM.dd format
  const sortedPosts = allPostsData.sort((a, b) => a.date.localeCompare(b.date));
  
  const groupedPosts: { [year: string]: { [month: string]: PostData[] } } = {};
  
  sortedPosts.forEach((post) => {
    const [year, month] = post.date.split(".");
    if (!year || !month) {
      return;
    }
    const monthName = new Date(parseInt(year), parseInt(month) - 1).toLocaleString("default", { month: "long" });
    
    if (!groupedPosts[year]) {
      groupedPosts[year] = {};
    }
    if (!groupedPosts[year][monthName]) {
      groupedPosts[year][monthName] = [];
    }
    groupedPosts[year][monthName].push(post);
  });
  
  return { sortedPosts, groupedPosts };
}

export function getAllPostIds(): PostData[] {
  const allFiles = collectMarkdownFiles(postsDirectory);
  
  return allFiles.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    const relativePath = path.relative(postsDirectory, filePath);
    const id = relativePath.replace(/\.md$/, "");
    
    const wordCount = countWords(matterResult.content);
    const readingTime = calculateReadingTime(wordCount);
    
    return {
      id,
      title: matterResult.data.title || "Untitled",
      date: matterResult.data.date || "1970.01.01",
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
      readingTime,
    };
  });
}

export async function getPostData(titleSlug: string): Promise<PostData | null> {
  const allPosts = getAllPostIds();
  const post = allPosts.find(
    (post) =>
      post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === titleSlug,
  );

  if (!post) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${post.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const wordCount = countWords(matterResult.content);
  const readingTime = calculateReadingTime(wordCount);

  return {
    id: post.id,
    contentHtml,
    title: matterResult.data.title || "Untitled",
    date: matterResult.data.date || "1970.01.01",
    tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
    readingTime,
  };
}
