#!/usr/bin/env node

/**
 * Script to download AWS S3 images from documentation files as local backups.
 * These backups are stored in /public/image-backups/ organized by feature folder.
 * 
 * Usage:
 *   node scripts/download-aws-images.mjs [target]
 * 
 * Examples:
 *   node scripts/download-aws-images.mjs docs/presenter-docs/Features/Browser/Browser.md
 *   node scripts/download-aws-images.mjs docs/presenter-docs/Features/Worktrees/
 *   node scripts/download-aws-images.mjs  # (no args = scan all docs)
 * 
 * The script will:
 *   1. Find all AWS S3 image URLs in the target markdown file(s)
 *   2. Download them to public/image-backups/{feature-folder}/
 *   3. Use the alt text to create readable filenames with a hash suffix
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const BACKUP_DIR = path.join(ROOT_DIR, 'public', 'image-backups');

// Regex to match markdown image syntax with AWS S3 URLs
const IMAGE_REGEX = /!\[([^\]]*)\]\((https:\/\/colony-recorder\.s3\.amazonaws\.com[^)]+)\)/g;

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findMarkdownFiles(fullPath, files);
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Get target files based on command line argument
 */
function getTargetFiles(targetArg) {
  if (!targetArg) {
    // No argument: scan all docs
    return findMarkdownFiles(DOCS_DIR);
  }
  
  const targetPath = path.isAbsolute(targetArg) 
    ? targetArg 
    : path.resolve(process.cwd(), targetArg);
  
  if (!fs.existsSync(targetPath)) {
    console.error(`❌ Target not found: ${targetPath}`);
    process.exit(1);
  }
  
  const stat = fs.statSync(targetPath);
  
  if (stat.isFile()) {
    if (!targetPath.endsWith('.md')) {
      console.error(`❌ Target must be a markdown file: ${targetPath}`);
      process.exit(1);
    }
    return [targetPath];
  }
  
  if (stat.isDirectory()) {
    return findMarkdownFiles(targetPath);
  }
  
  return [];
}

/**
 * Extract image references from a markdown file
 */
function extractImageRefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const images = [];
  let match;
  
  // Reset regex lastIndex for each file
  IMAGE_REGEX.lastIndex = 0;
  
  while ((match = IMAGE_REGEX.exec(content)) !== null) {
    images.push({
      altText: match[1],
      url: match[2],
      sourceFile: path.relative(ROOT_DIR, filePath)
    });
  }
  
  return images;
}

/**
 * Get the feature folder from a source file path
 * e.g., "docs/presenter-docs/Features/Agent/Agent-Chat/Agent-Chat.md" -> "Agent/Agent-Chat"
 */
function getFeatureFolder(sourceFile) {
  const parts = sourceFile.split('/');
  const featuresIdx = parts.indexOf('Features');
  
  if (featuresIdx !== -1 && featuresIdx < parts.length - 1) {
    // Get path after "Features" up to (but not including) the filename
    const featureParts = parts.slice(featuresIdx + 1, -1);
    if (featureParts.length > 0) {
      return featureParts.join('/');
    }
    // If file is directly in Features folder, use its name without extension
    return parts[parts.length - 1].replace('.md', '');
  }
  
  // For non-Features docs, use the folder structure after presenter-docs
  const presenterIdx = parts.indexOf('presenter-docs');
  if (presenterIdx !== -1 && presenterIdx < parts.length - 1) {
    const subParts = parts.slice(presenterIdx + 1, -1);
    if (subParts.length > 0) {
      return subParts.join('/');
    }
  }
  
  // Fallback: use parent directory name
  return path.basename(path.dirname(sourceFile));
}

/**
 * Generate a safe filename from URL and context
 */
function generateFilename(imageRef) {
  const url = new URL(imageRef.url);
  const pathParts = url.pathname.split('/');
  const originalFilename = pathParts[pathParts.length - 1];
  
  // Create a short hash from the URL for uniqueness
  const hash = crypto.createHash('md5').update(imageRef.url).digest('hex').slice(0, 8);
  
  // Create a readable name from alt text or fallback
  let baseName = imageRef.altText
    ? imageRef.altText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 50)
    : 'image';
  
  // Get extension from original filename
  const ext = path.extname(originalFilename) || '.jpeg';
  
  return `${baseName}-${hash}${ext}`;
}

/**
 * Download a file from URL
 */
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(destPath);
        downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(destPath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
      }
      reject(err);
    });
  });
}

/**
 * Main function
 */
async function main() {
  const targetArg = process.argv[2];
  
  if (targetArg === '--help' || targetArg === '-h') {
    console.log(`
Usage: node scripts/download-aws-images.mjs [target]

Download AWS S3 images from documentation files as local backups.

Arguments:
  target    Optional. Path to a markdown file or directory to scan.
            If omitted, scans all files in docs/

Examples:
  node scripts/download-aws-images.mjs docs/presenter-docs/Features/Browser/Browser.md
  node scripts/download-aws-images.mjs docs/presenter-docs/Features/Worktrees/
  node scripts/download-aws-images.mjs
`);
    process.exit(0);
  }
  
  const targetFiles = getTargetFiles(targetArg);
  
  if (targetArg) {
    console.log(`🎯 Scanning specific target: ${targetArg}\n`);
  } else {
    console.log('🔍 Scanning all documentation for AWS S3 images...\n');
  }
  
  console.log(`Found ${targetFiles.length} markdown file(s)\n`);
  
  if (targetFiles.length === 0) {
    console.log('No markdown files found.');
    process.exit(0);
  }
  
  // Extract all image references
  const allImages = [];
  for (const file of targetFiles) {
    const images = extractImageRefs(file);
    allImages.push(...images);
  }
  
  // Deduplicate by URL
  const uniqueUrls = new Map();
  for (const img of allImages) {
    if (!uniqueUrls.has(img.url)) {
      uniqueUrls.set(img.url, img);
    }
  }
  
  console.log(`Found ${allImages.length} image references (${uniqueUrls.size} unique)\n`);
  
  if (uniqueUrls.size === 0) {
    console.log('No AWS S3 images found in the target file(s).');
    process.exit(0);
  }
  
  // Download each unique image
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  let index = 0;
  
  for (const [url, imageRef] of uniqueUrls) {
    index++;
    
    // Determine the feature folder for organization
    const featureFolder = getFeatureFolder(imageRef.sourceFile);
    const destDir = path.join(BACKUP_DIR, featureFolder);
    
    // Create feature subdirectory if needed
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    const filename = generateFilename(imageRef);
    const destPath = path.join(destDir, filename);
    const relativeDest = path.relative(ROOT_DIR, destPath);
    
    // Check if already downloaded
    if (fs.existsSync(destPath)) {
      console.log(`⏭️  [${index}/${uniqueUrls.size}] Already exists: ${relativeDest}`);
      skipped++;
      continue;
    }
    
    try {
      process.stdout.write(`📥 [${index}/${uniqueUrls.size}] Downloading: ${relativeDest}... `);
      await downloadFile(url, destPath);
      console.log('✅');
      downloaded++;
    } catch (error) {
      console.log(`❌ ${error.message}`);
      failed++;
    }
    
    // Small delay to be nice to the server
    await new Promise(r => setTimeout(r, 100));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`📥 Downloaded: ${downloaded}`);
  console.log(`⏭️  Skipped (already exists): ${skipped}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📁 Backup location: ${BACKUP_DIR}`);
  console.log('='.repeat(60));
}

main().catch(console.error);
