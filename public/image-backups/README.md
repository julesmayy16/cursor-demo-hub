# AWS Image Backups

This folder contains local backups of all images hosted on AWS S3 (colony-recorder.s3.amazonaws.com).

## Purpose

These are backup copies in case the original AWS-hosted images become unavailable or change.
The documentation currently references the original AWS URLs, but these local copies can be
used as replacements if needed.

## Folder Structure

- **Agent/Agent-Chat/**: 64 images
- **Agent/Ask-Mode/**: 1 images
- **Agent/Plan-Mode/**: 6 images
- **Browser/**: 15 images
- **Cursor-2.0/**: 2 images
- **Getting-Started/**: 4 images
- **Layout-Walkthrough/**: 10 images
- **Rules/**: 29 images
- **Tab-Inline-Edit/**: 13 images
- **Worktrees/**: 20 images

## Files

- **MANIFEST.json**: Complete mapping of local filenames to original URLs and source files
- **Image files**: Organized by feature, named with pattern: `{alt-text}-{uuid-prefix}.{ext}`

## Statistics

- Total unique images: 164
- Organized: 2026-01-02T17:17:41.520Z

## Usage

To switch from AWS URLs to local backups, update the markdown files to reference
`/image-backups/{folder}/{filename}` instead of the S3 URLs. The MANIFEST.json file
contains the mapping needed to make this change.
