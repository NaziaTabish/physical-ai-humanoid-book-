# Data Model: AI-native Textbook Generation for Physical AI & Humanoid Robotics

**Date**: 2025-12-07
**Feature**: 1-textbook-generation
**Status**: Complete

## Overview

This data model describes the content structure and relationships for the AI-native textbook on Physical AI & Humanoid Robotics. The implementation uses a static content model with no dynamic data storage requirements.

## Core Entities

### Textbook Chapter

**Description**: A structured unit of educational content covering specific topics in Physical AI & Humanoid Robotics

**Attributes**:
- `id`: Unique identifier for the chapter (e.g., "chapter-1-introduction-to-physical-ai")
- `title`: Display title of the chapter
- `wordCount`: Number of words in the chapter (between 800-1500)
- `learningObjectives`: Array of learning objectives for the chapter
- `content`: Markdown-formatted content body
- `diagrams`: Array of diagram references (max 2 per chapter)
- `references`: Array of APA-formatted references
- `examples`: Array of examples included in the chapter

**Validation Rules**:
- Word count must be between 800 and 1500 words
- Title must not be empty
- Content must be valid Markdown format
- Maximum of 2 diagrams per chapter
- All references must follow APA format

### Navigation System

**Description**: Auto-generated sidebar that allows users to browse between the 6 textbook chapters

**Attributes**:
- `chapters`: Array of chapter objects in sequence
- `previousChapter`: Reference to previous chapter in sequence
- `nextChapter`: Reference to next chapter in sequence
- `tableOfContents`: Hierarchical structure of all chapters and sections

**Validation Rules**:
- Must contain exactly 6 chapters as specified
- Chapters must follow the defined sequence
- All navigation links must be valid

### Content Format

**Description**: Markdown-based educational material with consistent formatting standards and lightweight SVG diagrams

**Attributes**:
- `formatType`: Always "markdown"
- `headings`: Hierarchical heading structure (H1, H2, H3)
- `paragraphs`: Content paragraphs with appropriate spacing
- `lists`: Bullet points and numbered lists as specified
- `diagramEmbeds`: SVG diagram embeddings within content
- `frontMatter`: Metadata fields required by Docusaurus

**Validation Rules**:
- Must follow Docusaurus Markdown requirements
- Headings must follow hierarchical structure
- All diagrams must be SVG format
- Front matter must include required fields

## Relationships

### Chapter to Navigation
- Each Textbook Chapter is referenced in the Navigation System
- Navigation System maintains sequence and relationships between chapters
- One Navigation System manages all 6 Textbook Chapters

### Chapter to Content Format
- Each Textbook Chapter follows the Content Format specification
- Content Format defines the structure for all Textbook Chapters
- All chapters must comply with the same formatting standards

## State Transitions

### Chapter States
- `draft`: Chapter is being created/edited
- `review`: Chapter is under review for accuracy
- `approved`: Chapter has passed quality checks
- `published`: Chapter is live in the textbook

### State Transition Rules
- `draft` → `review`: When initial content creation is complete
- `review` → `draft`: When changes are requested during review
- `review` → `approved`: When content passes accuracy and clarity checks
- `approved` → `published`: When chapter is deployed to live site

## Constraints

### Content Constraints
- No runtime dependencies or external API calls
- Static content only (no dynamic data)
- All content must be pre-generated
- No user-generated content or input processing

### Technical Constraints
- All diagrams must be SVG format
- Maximum file size constraints for GitHub Pages
- Mobile-responsive design requirements
- No external runtime dependencies

## Access Patterns

### Content Access
- Sequential access through navigation system
- Direct access to specific chapters via URLs
- Search functionality (if implemented through Docusaurus features)

### Performance Considerations
- Content loaded statically (no server round trips for content)
- Diagrams pre-optimized for fast loading
- Responsive design for various device sizes