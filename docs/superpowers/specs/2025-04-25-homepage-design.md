# NPipeline.net Homepage Design

**Date:** 2025-04-25  
**Status:** Approved

## Overview

A bold, technical landing page for NPipeline — a .NET library for building type-safe, graph-based streaming data pipelines. The site targets .NET developers and data engineers. It uses Mantine UI components with Mantine Parallax for hover-tilt effects on key cards.

## Design Direction

**Personality:** Technical and bold. Dark theme with monochrome + single teal accent. Strong code-forward aesthetic. Not a generic SaaS landing page — feels like a developer tool.

**Color System:**

| Role | Color | Hex |
|------|-------|-----|
| Background base | Deep ocean dark | `#001219` |
| Elevated surface | Slightly lighter | `#0a1a1f` |
| Primary accent | Teal | `#0A9396` |
| Headings / code identifiers | Light teal | `#b8e0dc` |
| Body text | Medium teal-gray | `#7a9a9d` |
| Secondary/dim text | Dark teal-gray | `#4a6d70` |
| Deepest dim | Muted | `#3a5558` |
| Error/fatal | Dark red | `#AE2012` |
| Warning | Amber | `#EE9B00` |

**Typography:**
- Headlines: System UI (SF Pro / Segoe UI), 34-52px, weight 800-900
- Body: System UI, 14-16px, weight 400-500
- Code/labels: SF Mono / Fira Code, 12-14px
- Section labels: 11px uppercase letter-spacing 2px
- Border radius: 4-6px (Mantine `xs` to `sm`)

**Parallax Usage:**
- Hero code card: Mantine Parallax with hover-tilt, light effect, shadow effect
- Source/Transform/Sink cards in "How It Works": hover-tilt with staggered heights
- Resilience feature rows: hover-tilt with subtle shadow shift
- All Parallax uses: `perspective` ~1000-1500, `lightEffect`, `shadowEffect`, `transitionDuration` 300ms

## Page Sections (Top to Bottom)

### 1. Navigation

**Component:** Floating pill navbar, centered, with `background: #0a1a1f`, `border: 1px solid rgba(10,147,150,0.15)`, `border-radius: 999px`.

Contents: Logo "NPipeline" (teal, bold) | Docs | Concepts | API | GitHub | "Get Started" pill button (teal background).

### 2. Hero

**Layout:** Two-column asymmetric grid (1.2fr left, 0.8fr right).

**Left column:**
- Pill badge: ".NET 8+ · C# 12+ · Open Source"
- Headline (52px, weight 900, light teal): "Streaming / pipelines / that don't explode." — "pipelines" has gradient text effect (`linear-gradient(135deg, #0A9396, #94D2BD)`)
- Subtitle paragraph (16px, body color)
- Install command in terminal-style box

**Right column:**
- Code showcase card wrapped in `<Parallax>` component with `lightEffect`, `shadowEffect`, `w={480}`
- Terminal-style header with colored dots and filename
- C# pipeline definition code with syntax highlighting

### 3. Problems Section

**Layout:** Two-column asymmetric grid (1fr left, 1.4fr right).

**Left column:**
- Section label: "THE STATUS QUO" (#AE2012)
- Headline: "Data processing shouldn't feel like this"
- Description paragraph

**Right column:**
- Red-tinted terminal card showing error log output
- FATAL badge for OutOfMemoryException
- WARN badge for DataLossException
- Red accent border and shadow

### 4. How It Works

**Layout:** Full-width section. Text intro on the left, three staggered Parallax cards below.

**Content:**
- Section label: "A BETTER WAY" (teal)
- Headline: "How NPipeline works"
- Description text

**Three Parallax cards** — Source, Transform, Sink:
- Staggered: Transform card has `margin-top: 24px` to create visual offset
- Each card: `background: linear-gradient(180deg, rgba(10,147,150,0.06), #0a1a1f)`, `border: 1px solid rgba(10,147,150,0.15)`
- All wrapped in `<Parallax>` with `lightEffect`
- Monospace uppercase label (SOURCE, TRANSFORM, SINK)
- Headline + description text

**Graph callout:** Below cards, centered text bar with teal "Graph" link

### 5. Code Showcase

**Layout:** Full-width section with terminal code block.

**Content:**
- Section label: "FLUENT API"
- Headline: "Code that reads like a diagram"
- Terminal card with full C# pipeline example (including `WithRetryOptions`)
- Code syntax highlighting: keywords in teal, identifiers in light teal, comments in dim

### 6. Performance Stats

**Layout:** Full-width section with subtle background gradient (`linear-gradient(180deg, #001219, #001a22, #001219)`).

**Content:**
- Section label: "BUILT FOR SCALE"
- Headline: "Process more data than fits in memory"
- Description paragraph

**Three stats** displayed in a flex row, centered:
- `~2MB` — Peak memory (1M records), with `~~500MB eager~~` struck-through in red
- `<1ms` — First item latency
- `90%` — Fewer GC allocations via ValueTask
- Large monospace numbers (52-56px, weight 900, teal color)

### 7. Resilience

**Layout:** Full-width section with three horizontal feature rows.

**Content:**
- Section label: "PRODUCTION READY"
- Headline: "Built for the real world"
- Description paragraph

**Three feature rows**, each wrapped in `<Parallax>`:
- Left: monospace API label (`.WithRetry()`, `.WithCircuit()`, `.OnError()`) in a subtle teal-chip
- Right: headline (light teal) + description
- Row background: `linear-gradient(135deg, rgba(10,147,150,0.06), #0a1a1f)`
- `border: 1px solid rgba(10,147,150,0.12)`, `border-radius: 6px`

### 8. Use Cases

**Layout:** Two-column grid with subtle background gradient.

**Content:**
- Section label: "VERSATILE"
- Headline: "Built for these problems"
- Six cards (2x3 grid): ETL Workflows, Real-time Streaming, Data Validation, Batch Processing, Event-Driven Systems, Microservice Integration
- Each card: headline (light teal) + description (body color)
- Card styling: `background: rgba(10,147,150,0.04)`, `border: 1px solid rgba(10,147,150,0.1)`, `border-radius: 6px`

### 9. CTA Footer

**Layout:** Centered, generous padding (100px vertical).

**Content:**
- Headline (42px, weight 900, light teal): "Ready to build better pipelines?"
- Subtitle (17px, dim): "Get started in minutes. Build your first pipeline in 15."
- Terminal-style install command with shadow: `$ dotnet add package NPipeline`
- Two CTAs: "Getting Started" (teal, filled) | "Core Concepts" (teal border, light teal text)

## Component Architecture

```
app/
├── routes/
│   └── _index.tsx          # Homepage — renders <HomePage />
├── sections/
│   ├── HeroSection.tsx
│   ├── ProblemsSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── CodeShowcaseSection.tsx
│   ├── PerformanceSection.tsx
│   ├── ResilienceSection.tsx
│   ├── UseCasesSection.tsx
│   └── CtaSection.tsx
├── components/
│   ├── FloatingNav.tsx
│   ├── CodeBlock.tsx        # Terminal-style code display with syntax highlighting
│   ├── TerminalCard.tsx     # Reusable terminal chrome wrapper (dots, filename)
│   └── ParallaxCard.tsx    # Wrapper around Mantine Parallax with preset props
├── styles/
│   └── mantine-theme.ts    # Extended theme with custom colors
└── hooks/
    └── (empty)
```

## Mantine Theme Extensions

Extend the existing theme in `mantine-theme.ts`:

```typescript
createTheme({
  primaryColor: "teal",
  defaultRadius: "xs",
  colors: {
    ocean: ['#001219', '#0a1a1f', '#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702', '#BB3E03', '#AE2012'],
  },
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontFamilyMonospace: '"SF Mono", "Fira Code", "Cascadia Code", "JetBrains Mono", monospace',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeight: '800',
  },
})
```

## Dependencies to Add

- `@gfazioli/mantine-parallax` — hover-tilt and light effects on key cards

## Key Implementation Notes

1. **Parallax import**: `import { Parallax } from '@gfazioli/mantine-parallax'` and `import '@gfazioli/mantine-parallax/styles.css'` in `root.tsx`
2. **MantineProvider**: Must wrap the app with the extended theme
3. **Dark mode**: The entire page is dark — use Mantine's dark mode or custom CSS variables
4. **Responsive**: Mobile layout collapses grids to single-column, reduces typography sizes
5. **Accessibility**: Parallax cards must work without hover (touch-enabled, keyboard-accessible per library docs)
6. **No emoji icons**: Use monospace API labels (`.WithRetry()`) or typographic elements instead
7. **Border radius**: Consistently 4-6px (Mantine `xs` to `sm`)
8. **Gradient text**: Use CSS `background-clip: text` for the hero "pipelines" gradient effect
9. **Syntax highlighting**: Implement via CSS classes in CodeBlock component — no external dependency needed