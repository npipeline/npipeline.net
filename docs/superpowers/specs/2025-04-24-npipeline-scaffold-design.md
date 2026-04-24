# NPipeline Website Scaffold Design

> Date: 2025-04-24
> Project: npipeline.net

## Goal

Scaffold a modern, maintainable NPipeline marketing website using React Router v7 in Framework mode, React 19, Vite, Mantine v9, and TypeScript. Deployed as a SPA to GitHub Pages with automated CI/CD.

## Architecture

React Router v7 Framework mode provides file-based routing, server capabilities, and build tooling. Since GitHub Pages only serves static files, we configure it as an **SPA with SSR disabled** (`ssr: false`), which outputs a static `index.html` that handles client-side routing.

Mantine v9 provides the UI foundation (theme provider, core components, CSS modules).

## File Structure

```
npipeline.net/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions: build + deploy to Pages
├── app/
│   ├── root.tsx                # Root layout (Mantine provider, meta, links)
│   ├── routes.ts               # Route definitions (RR7)
│   ├── routes/
│   │   ├── _index.tsx          # Home page (/)
│   │   └── about.tsx           # Example secondary page (/about)
│   └── styles/
│       └── mantine-theme.ts    # Custom Mantine theme overrides
├── public/
│   └── favicon.ico             # Placeholder favicon
├── docs/                       # Design docs & plans
├── vite.config.ts
├── react-router.config.ts      # RR7 framework config (SPA mode)
├── tsconfig.json
├── package.json
└── .gitignore
```

## Key Configuration Decisions

| Concern | Decision | Rationale |
|---------|----------|-----------|
| **SSR** | `ssr: false` in `react-router.config.ts` | GitHub Pages is static-only; must be SPA. |
| **Base URL** | `basename: "/npipeline.net"` in Vite + RR config | GitHub Pages serves from repo name path. |
| **Mantine CSS** | `@mantine/core` + `@mantine/hooks` | Core UI components and utilities. |
| **Styling** | Mantine CSS modules / inline styles | No additional CSS preprocessor needed for scaffold. |
| **Type safety** | Strict TypeScript + RR7 generated types | `route.ts` for typed routes. |
| **Deploy trigger** | Push to `main` | Branch-based auto-deploy. |

## Trade-offs Considered

1. **Framework mode vs. library mode** -> Chose Framework mode because it provides file-based routing, zero-config Vite integration, and future upgrade path. Library mode would require more manual Vite/React setup.
2. **SPA vs. prerendering** -> SPA is required for GH Pages compatibility with client-side routing. Prerendering could be added later if moving to Netlify/Vercel, but is out of scope.
3. **Mantine v9 vs. v8 or other libs** -> v9 is latest and React 19-compatible.

## Next Steps

1. Write implementation plan
2. Scaffold project files
3. Configure build & deploy pipeline
4. Verify build succeeds
