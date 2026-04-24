# NPipeline Website Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a React Router v7 Framework SPA with Mantine, TypeScript, and GitHub Pages deployment.

**Architecture:** React Router v7 in Framework mode with SSR disabled outputs a static SPA. Mantine provides UI components. GitHub Actions builds and deploys to GitHub Pages.

**Tech Stack:** React 19, React Router v7 (Framework mode), Vite, Mantine (latest stable), TypeScript, GitHub Pages

---

### Task 1: Create package.json

**Files:**
- Create: `package.json`

- [ ] **Step 1: Write package.json**

Use `"type": "module"` for ESM. Include `react`, `react-dom`, `react-router`, `@mantine/core`, `@mantine/hooks`, and dev dependencies for TypeScript, Vite, and React Router dev server.

Key scripts:
- `"dev": "react-router dev"`
- `"build": "react-router build"`
- `"typecheck": "tsc --noEmit"`

- [ ] **Step 2: Commit**

```bash
git add package.json
git commit -m "chore: initialize package.json with dependencies"
```

---

### Task 2: Configure TypeScript

**Files:**
- Create: `tsconfig.json`

- [ ] **Step 1: Write tsconfig.json**

Enable strict mode, JSX react-jsx, moduleResolution bundler, target ES2022, and include `app/` and `.react-router/` (for generated types).

- [ ] **Step 2: Commit**

```bash
git add tsconfig.json
git commit -m "chore: add TypeScript configuration"
```

---

### Task 3: Configure Vite

**Files:**
- Create: `vite.config.ts`

- [ ] **Step 1: Write vite.config.ts**

Import `@react-router/dev/vite` and `vite-tsconfig-paths`. Export default with React Router plugin. Set `base: '/npipeline.net/'` for GitHub Pages subdirectory deployment.

- [ ] **Step 2: Commit**

```bash
git add vite.config.ts
git commit -m "chore: configure Vite with React Router plugin"
```

---

### Task 4: Configure React Router Framework (SSR disabled)

**Files:**
- Create: `react-router.config.ts`

- [ ] **Step 1: Write react-router.config.ts**

Export config with `ssr: false` to build as SPA. Include `appDirectory: "app"`.

- [ ] **Step 2: Commit**

```bash
git add react-router.config.ts
git commit -m "chore: configure React Router for SPA mode"
```

---

### Task 5: Create app directory structure

**Files:**
- Create: `app/root.tsx`
- Create: `app/routes.ts`
- Create: `app/routes/_index.tsx`
- Create: `app/routes/about.tsx`
- Create: `app/styles/mantine-theme.ts`

- [ ] **Step 1: Write root.tsx**

Import `Links`, `Meta`, `Outlet`, `Scripts`, `ScrollRestoration` from `react-router`. Integrate `MantineProvider` from `@mantine/core`. Import custom theme. Set up basic HTML shell.

- [ ] **Step 2: Write routes.ts**

Define the route tree using route helpers. Home route at `/` and about route at `/about`.

- [ ] **Step 3: Write _index.tsx**

Simple home page component with Mantine components (e.g., `Container`, `Title`, `Text`).

- [ ] **Step 4: Write about.tsx**

Simple about page component.

- [ ] **Step 5: Write mantine-theme.ts**

Define a basic Mantine theme override object.

- [ ] **Step 6: Commit**

```bash
git add app/
git commit -m "feat: create app structure with routes and Mantine integration"
```

---

### Task 6: Add GitHub Actions workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Write deploy.yml**

Trigger on `push` to `main`. Job steps: checkout, setup Node.js (latest LTS), install dependencies, build, upload artifact, deploy to GitHub Pages using `actions/deploy-pages`.

Configure appropriate permissions (`contents: read`, `pages: write`, `id-token: write`).

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Pages deployment workflow"
```

---

### Task 7: Add .gitignore

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Write .gitignore**

Ignore `node_modules/`, `dist/`, `.react-router/`, `.cache/`, `*.log`, `.env`.

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore"
```

---

### Task 8: Create placeholder public assets

**Files:**
- Create: `public/.gitkeep` (or a simple favicon)

- [ ] **Step 1: Create public directory placeholder**

Ensure `public/` exists for static assets.

- [ ] **Step 2: Commit**

```bash
git add public/
git commit -m "chore: add public directory for static assets"
```

---

### Task 9: Install dependencies and verify build

**Files:**
- Modify: `package-lock.json` (via npm install)

- [ ] **Step 1: Install dependencies**

Run: `npm install`

- [ ] **Step 2: Type check**

Run: `npm run typecheck`
Expected: No errors.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: Build succeeds, outputs to `build/` directory.

- [ ] **Step 4: Commit lock file**

```bash
git add package-lock.json
git commit -m "chore: install dependencies"
```

---

## Self-Review

- **Spec coverage:** All configuration requirements (SPA mode, base URL, Mantine, TypeScript, deployment) are covered.
- **Placeholder scan:** No TBD/TODO placeholders found.
- **Type consistency:** All file paths and configurations are consistent.
