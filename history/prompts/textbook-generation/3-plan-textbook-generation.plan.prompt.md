---
id: 3
title: Plan Textbook Generation
stage: plan
date_iso: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-generation
branch: 1-textbook-generation
user: user
command: /sp.plan
labels: ["plan", "textbook", "docusaurus", "architecture"]
spec: specs/1-textbook-generation/spec.md
ticket: null
adr: null
pr: null
files_yaml: |
 - specs/1-textbook-generation/plan.md
 - specs/1-textbook-generation/research.md
 - specs/1-textbook-generation/data-model.md
 - specs/1-textbook-generation/quickstart.md
 - specs/1-textbook-generation/contracts/content-api.yaml
tests_yaml: |
 - none
---

# Prompt Text

```text
/sp.plan

Create a complete execution plan for building an AI-native textbook (WITHOUT any RAG chatbot), based on the existing /sp.specify.

CRITICAL CONSTRAINTS
- Use ONLY a native **Gemini API key**
- DO NOT use any OpenAI API, OpenAI-compatible APIs, or external_client bridges
- Gemini may be used ONLY for: optional assistance, summarization, grammar checks, or translation
- The core textbook must be statically generated and human-reviewed

OBJECTIVE
Plan the end-to-end implementation of:
1) A Docusaurus-based AI-native textbook
2) Built using Spec-Kit Plus + Claude Code for structured authoring
3) Deployed to GitHub Pages
4) NO RAG, NO VECTOR DATABASE, NO CHATBOT

Only a static, high-quality, AI-native textbook.

------------------------------------------------------------------
imple vs Flexibility

All decisions logged in: DECISIONS.md

------------------------------------------------------------------

TESTING STRATEGY (acceptance-focused)

UNIT CHECKS:
- Every chapter builds in Docusaurus
- All internal links work
- Images load correctly
- Sidebar auto-generates correctly
- All front-matter fields present

CONTENT VALIDATION:
- Each chapter has:
  - Learning objectives
  - Examples
  - Diagrams or illustrations
  - APA references
- No missing citations
- No placeholder text

ACCEPTANCE CHECKS:
- Site builds without error
- Navigation between chapters smooth
- Mobile responsive
- All assets under GitHub Pages size limits
- Proper formatting on all browsers

QUALITY BARS:
- Academic clarity level ≥ 9/10
- 0 broken links
- 100% topic alignment with Physical AI & Humanoids

------------------------------------------------------------------

DATAFLOW MAP

Claude Code / Spec-Kit Plus
        ↓
Structured .md chapters
        ↓
Docusaurus Compilation
        ↓
Static HTML/CSS/JS
        ↓
GitHub Repository
        ↓
GitHub Pages Deployment

Optional (separate & offline):
Selected Text → Gemini API (for correction/translation)

NO live data pipeline.

------------------------------------------------------------------

PHASED EXECUTION PLAN

PHASE 1 — RESEARCH
- Define objective for every chapter
- Create outline for 6 chapters
- Collect academic references
- Create citation template
- Setup DECISIONS.md

Output:
✔ Chapter blueprints
✔ References bank
✔ Prompt templates for Claude & Gemini

--------------------------------------

PHASE 2 — FOUNDATION
- Install Docusaurus
- Configure site name, theme, layout
- Enable Auto-sidebar
- Create GitHub repo
- Setup GitHub Pages deployment config
- Create base folder structure

Output:
✔ Empty working documentation website
✔ Deployment ready

--------------------------------------

PHASE 3 — ANALYSIS
- Fully complete 2 chapters:
   - Chapter 1
   - Chapter 2
- Add examples & images
- Validate citations
- Apply optional Gemini correction
- Test site rendering
- Fix formatting issues

Output:
✔ First half of book complete & live

--------------------------------------

PHASE 4 — SYNTHESIS
- Complete remaining 4 chapters
- Full site review
- Final formatting
- Optimize visuals
- Complete translations (if enabled)
- Final publish on GitHub Pages

Output:
✔ Full AI-native textbook deployed
✔ All chapters completed
✔ Locked for production

------------------------------------------------------------------

FINAL OUTPUT MUST INCLUDE

- Text-based architecture diagram
- Section-by-section execution plan
- Gemini usage rules
- Complete dataflow (Author → Site)
- Test matrix
- Phase breakdown:
  Research → Foundation → Analysis → Synthesis

END OF /sp.plan
```

# Response Text

Created a comprehensive implementation plan for the AI-native textbook generation project. The plan includes:

- Technical context with Node.js, Docusaurus, and static site architecture
- Constitution compliance check confirming all principles are satisfied
- Project structure with documentation and source code organization
- Research document outlining technology decisions and content strategy
- Data model for textbook chapters, navigation, and content format
- Quickstart guide for development workflow
- API contract for content management (reference only, as it's static)

All constitutional principles were validated both pre-design and post-design to ensure compliance with the project's core values of simplicity, technical accuracy, lightweight architecture, content-first development, standards compliance, and research-concurrent writing.

# Outcome

Successfully completed the implementation planning phase with all required artifacts generated. The plan provides a complete roadmap for implementing the Docusaurus-based AI-native textbook on Physical AI & Humanoid Robotics, with all constitutional compliance verified and technical decisions documented. The project is ready to proceed to the task generation phase.