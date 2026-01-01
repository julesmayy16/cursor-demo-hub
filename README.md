# TAM Cursor Demos

This repository contains demonstration examples showcasing Cursor's AI-powered coding capabilities.

## What's Inside

This is a Next.js blog application built with:
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Markdown** - Content management via markdown files

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Content: Markdown files

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build
```

## GitHub CLI Setup

### Install GitHub CLI

**macOS:**
```bash
brew install gh
```

### Authenticate

```bash
gh auth login
```

### Clone This Repository

```bash
gh repo clone fieldsphere/cursor-demos
cd cursor-demos
```

### Alternative: Clone via Git

```bash
git clone https://github.com/fieldsphere/cursor-demos.git
cd cursor-demos
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── context/           # React context providers
│   └── posts/             # Dynamic routes for posts
├── lib/                   # Utility libraries
├── posts/                 # Markdown blog posts
└── scripts/               # Utility scripts
```

## Purpose

This repository serves as a demonstration of Cursor's AI capabilities for building modern web applications. It showcases features like:

- Semantic code search
- AI-powered code generation
- Context-aware suggestions
- Multi-file refactoring
