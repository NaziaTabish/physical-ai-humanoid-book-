---
id: 12
title: "Fix process not defined error"
stage: "general"
date: "2025-12-17"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "none"
branch: "main"
user: "Syed"
command: "fix process is not defined error"
labels: ["bug-fix", "frontend", "environment-variables"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files: []
tests: []
---

# Fix process is not defined error

## User Prompt
when i run backend and frontend it do not show me website it says This page crashed Try again process is not defined

## Response
Fixed the "process is not defined" error that was occurring when running the frontend. The issue was in `src/theme/Layout.js` where `process.env.BACKEND_URL` was being referenced, which is not available in the browser environment.

Changes made:
1. Updated `src/theme/Layout.js` to pass the backend URL as a prop to the Chatbot component instead of using `process.env`
2. Updated `src/components/Chatbot/Chatbot.tsx` to accept a backendUrl prop and use it for API calls
3. Removed the problematic `process.env` reference that was causing the crash

The website should now load without the "process is not defined" error.

## Outcome
The frontend now loads properly without crashing, and the Chatbot component can make API calls to the backend.
