# Quickstart Guide: AI-native Textbook Development

**Date**: 2025-12-07
**Feature**: 1-textbook-generation

## Overview

This guide provides a quick start for developing the AI-native textbook on Physical AI & Humanoid Robotics. It covers the essential setup and development workflow.

## Prerequisites

- Node.js LTS installed
- npm or pnpm package manager
- Git for version control
- Text editor or IDE
- GitHub account for deployment

## Setup Instructions

### 1. Clone and Initialize Repository

```bash
git clone [your-repository-url]
cd [repository-name]
npm install
```

### 2. Install Docusaurus

```bash
npm init docusaurus@latest .
# Select "classic" template
```

### 3. Verify Installation

```bash
npm start
```

This should start a local development server at http://localhost:3000

## Development Workflow

### Creating a New Chapter

1. Create a new Markdown file in the `/docs` directory:
   ```bash
   cp docs/intro.md docs/chapter-x-topic-name.md
   ```

2. Add content following the required structure:
   ```markdown
   ---
   id: chapter-x-topic-name
   title: Chapter Title
   sidebar_position: X
   ---

   # Chapter Title

   Learning objectives:
   - Objective 1
   - Objective 2

   ## Section 1

   Content here...

   ## Section 2

   More content...
   ```

3. Update `sidebars.js` to include the new chapter in the navigation

### Adding Diagrams

1. Place SVG diagrams in `/static/img/svg-diagrams/`
2. Reference them in your Markdown:
   ```markdown
   ![Diagram Description](/img/svg-diagrams/diagram-name.svg)
   ```

### Building and Testing

```bash
# Build for development
npm run build

# Test locally
npm run serve
```

## Deployment

### GitHub Pages Setup

1. Configure `docusaurus.config.js` for GitHub Pages:
   ```javascript
   deploymentBranch: 'gh-pages',
   ```

2. Deploy using:
   ```bash
   GIT_USER=<Your GitHub username> npm run deploy
   ```

## Content Guidelines

### Writing Standards

- Maintain 800-1500 words per chapter
- Use professional, minimal language
- Include learning objectives at the start
- Add examples and diagrams where appropriate
- Follow APA citation format

### Quality Checks

Before committing changes, ensure:
- All links work correctly
- Diagrams load properly
- Content follows word count requirements
- Mobile responsiveness is maintained
- No placeholder text remains

## Common Commands

```bash
# Start local development server
npm start

# Build static files
npm run build

# Serve built files locally
npm run serve

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Common Issues

- **Slow build times**: Check for large image files or complex diagrams
- **Broken links**: Verify all internal links use proper Docusaurus format
- **Mobile display issues**: Test with browser dev tools' mobile view
- **GitHub Pages deployment**: Ensure deployment branch is configured correctly