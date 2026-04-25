# Studio Copy Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the NPipeline Studio description to a more punchy, technical tone.

**Architecture:** Simple text update in a React component (`StudioSection.tsx`).

**Tech Stack:** React, Mantine, TypeScript

---

### Task 1: Update StudioSection Copy

**Files:**
- Modify: `/Users/chrisjacques/Dev/npipeline.net/app/sections/StudioSection.tsx:31-33`

- [ ] **Step 1: Apply the text change**

```tsx
// app/sections/StudioSection.tsx

// Replace:
<Text size="lg" c="dimmed" maw={600}>
  NPipeline Studio is a visual debugging companion that lets you inspect live data flowing through every node. Trace items from source to sink, inspect transforms in real time, and catch issues before they hit production.
</Text>

// With:
<Text size="lg" c="dimmed" maw={600}>
  Stop debugging in the dark. NPipeline Studio provides a high-fidelity window into your runtime, allowing you to observe data flow and inspect state as it happens. Bridge the gap between code and execution to build resilient pipelines with total clarity.
</Text>
```

- [ ] **Step 2: Verify the change**

Run: `grep -F "Stop debugging in the dark" /Users/chrisjacques/Dev/npipeline.net/app/sections/StudioSection.tsx`
Expected: Match found

- [ ] **Step 3: Run build to ensure no regressions**

Run: `npm run build` (or equivalent build command for this project)

- [ ] **Step 4: Commit**

```bash
git add app/sections/StudioSection.tsx
git commit -m "docs: update NPipeline Studio description for better tone"
```
