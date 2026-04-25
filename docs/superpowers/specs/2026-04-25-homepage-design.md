# NPipeline Homepage Design Spec

## Overview

A compelling, dark-immersive homepage for NPipeline — a .NET streaming data pipeline library. Inspired by Filigran.io's full-bleed sections and confident typography, adapted with NPipeline's ocean-inspired color palette and smaller radius values. Targets .NET developers and data engineers.

## Visual Language

### Color Palette

| Hex | Role |
|-----|------|
| `#001219` | Primary background, darkest |
| `#005F73` | Gradient mid, subtle backgrounds |
| `#0A9396` | Primary accent — headings, links, interactive |
| `#94D2BD` | Secondary text, body copy |
| `#E9D8A6` | Highlighted text, emphasis |
| `#EE9B00` | CTAs, warm accent highlights |
| `#CA6702` | Secondary warm accent |
| `#BB3E03` | Pain point accent (spaghetti) |
| `#AE2012` | Pain point accent (deep) |
| `#9B2226` | Pain point accent (critical) |

### Design Principles

- **Dark immersive** — #001219 base with full-bleed gradient sections
- **Small radius** — `defaultRadius: "sm"` (6px) on buttons, cards, inputs
- **No visible card borders** — content flows organically, sections distinguished by background color shifts
- **Large varied typography** — Filigran-style: oversized stats, generous type sizes, strong hierarchy
- **Generous whitespace** — padding 48-64px vertical per section
- **Parallax for visual oomph** — Mantine Parallax on hero container and feature cards

### Mantine Theme Configuration

```ts
createTheme({
  primaryColor: "teal",
  defaultRadius: "sm",
  colors: {
    // Map palette into Mantine color system
    ocean: [
      "#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6",
      "#EE9B00", "#CA6702", "#BB3E03", "#AE2012", "#9B2226"
    ],
  },
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  headings: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  },
})
```

## Page Sections

### 1. Sticky Header

- Mantine `AppShell.Header` with `position: sticky`
- Left: "NPipeline" wordmark in #0A9396
- Right: nav links (Features, Performance, Code, Docs) in #94D2BD uppercase tracking
- Right: "Get Started" button (#0A9396 bg, white text)
- Glass effect via `backdrop-filter: blur(12px)` + semi-transparent bg on scroll
- Border-bottom: `1px solid #005F7330`

### 2. Hero — Split Layout

- **Background**: `linear-gradient(160deg, #001219 0%, #005F73 50%, #0A9396 100%)`
- **Left column** (60% width):
  - Label: "High-Performance · Type-Safe · Streaming" (uppercase, tracking: 3px, #94D2BD)
  - Heading: "Data Pipelines That Don't Break" (white, ~32px)
  - "That Don't Break" in #E9D8A6
  - Body text: "Build robust, graph-based streaming workflows in C#..." (#94D2BD)
  - Two buttons: "Quick Start" (#EE9B00 bg, #001219 text) + "View Docs" (border, #94D2BD)
- **Right column** (40% width):
  - Code block in dark terminal card (#0d1117 bg)
  - Syntax-highlighted NPipeline fluent API code
  - Subtle border: `1px solid #0A939630`
- **Parallax**: Entire hero section wrapped in `<Parallax>` for 3D tilt on hover

### 3. Pain Points

- **Background**: #001219
- **Section label**: "Data processing in .NET shouldn't feel like this" (uppercase tracking, #AE2012)
- **Three columns** with `border-left: 3px solid` accent:
  - Memory nightmares — #9B2226 accent, heading + description
  - Spaghetti transforms — #CA6702 accent
  - Silent failures — #EE9B00 accent
- No card backgrounds, just text with accent borders
- `gap: 24px`, descriptions in #94D2BD at 80% opacity

### 4. Pipeline Flow — Parallax Cards

- **Background**: gradient `#001219 → #001a24`
- **Section heading**: "A better way to process data" (white, 22px)
- **Subtitle**: "Graph-based architecture — complexity from composition, not accumulation." (#94D2BD)
- **Three `<Parallax>` cards** in a row with `→` arrows (#EE9B00) between them:
  1. **Sources** — gradient bg `#005F73 → #00121980`, border `#0A939630`, icon area, description
  2. **Transforms** — gradient bg `#0A9396 → #005F7380`, offset slightly upward, border `#94D2BD20`
  3. **Sinks** — gradient bg `#EE9B00 → #CA6702`, no border, dark text
- Each card: 10px border-radius, title (16-18px bold white), subtitle (9-10px, #94D2BD), "Parallax" micro-label

### 5. Streaming Performance — Big Stats

- **Background**: #001a24
- **Section label**: "Process more data than fits in memory" (uppercase tracking, #0A9396)
- **Three centered stats** with generous gap (48-64px):
  - `~2MB` — #0A9396, "Streaming peak memory", note in #9B2226 "vs 500MB eager"
  - `<1ms` — #EE9B00, "Time to first item", note in #94D2BD80
  - `90%` — #94D2BD, "Less GC pressure", note in #94D2BD80
- Stat numbers: 42-48px, font-weight 800
- Labels: 10-11px

### 6. Resilience — Parallax Card

- **Background**: #001219
- **Section heading**: "Built for the real world, where things fail" (white, 22px)
- **Single large `<Parallax>` card**:
  - Gradient bg from #005F73 range
  - Three feature briefs inside: Retry policies, Circuit breakers, Granular error handling
  - Each brief: icon + title (bold) + one-liner
- Parallax hover effect for 3D depth

### 7. Use Cases — Pills

- **Background**: #001219
- **Section label**: "Built for these problems" (uppercase tracking, #E9D8A6)
- **Six pills** in a centered flex-wrap row:
  - ETL Workflows (#005F73 bg/border, #0A9396 text)
  - Real-time Streaming (#0A9396 bg/border, #94D2BD text)
  - Data Validation (#EE9B00 bg/border, #EE9B00 text)
  - Batch Processing (#94D2BD bg/border, #94D2BD text)
  - Event-driven (#CA6702 bg/border, #CA6702 text)
  - Microservice Integration (#BB3E03 bg/border, #BB3E03 text)
- Pills: `border-radius: 20px`, `padding: 8px 20px`, semi-transparent backgrounds (20-30% opacity)

### 8. Modular Features — Grid

- **Background**: #0a0f14
- **Section label**: "Modular by design" (uppercase tracking, #0A9396)
- **Two-column grid** of 8 feature briefs:
  - Composition, Connectors, Dependency Injection, Lineage
  - Nodes, Observability, Parallelism, Testing
- Each brief: title (bold, white, 14px) + one-liner (#94D2BD80, 11px)
- No card borders, subtle row separators or micro-tint backgrounds

### 9. Code Example

- **Background**: #0a0f14
- **Section heading**: "Code that reads like a diagram" (uppercase tracking, #0A9396)
- **Subtitle**: "The compiler enforces type safety — if it compiles, it connects" (#94D2BD80)
- **Code block**:
  - `background: #0d1117`
  - `border: 1px solid #005F7320`
  - `border-radius: 8px`
  - Syntax-highlighted NPipeline pipeline definition code
  - Colors: keywords #0A9396, identifiers #E9D8A6, method calls #EE9B00, types #94D2BD, comments #005F73
  - Max-width: ~500px, centered

### 10. CTA Footer

- **Background**: gradient `#0A9396 → #005F73 → #001219`
- **Heading**: "Ready to build better pipelines?" (white, 24px, bold)
- **Subtitle**: "Get started in minutes. Build your first pipeline in 15." (#94D2BD)
- **Package command** in dark box: `dotnet add package NPipeline` (monospace, #0A9396, #0d1117 bg)
- **Two buttons**: "Getting Started" (#EE9B00 bg) + "Core Concepts" (border #94D2BD50, #94D2BD text)
- Padding: 60px vertical

## Component Architecture

### File Structure

```
app/
  styles/
    mantine-theme.ts        — Updated theme with palette + radius
  sections/
    HeroSection.tsx          — Split hero with Parallax
    PainPointsSection.tsx    — Three-column accent-border layout
    PipelineFlowSection.tsx  — Three Parallax cards with arrows
    PerformanceSection.tsx   — Big centered stats
    ResilienceSection.tsx    — Single Parallax card
    UseCasesSection.tsx      — Pill badges
    FeaturesSection.tsx      — Two-column feature grid
    CodeSection.tsx          — Syntax-highlighted code block
    CtaSection.tsx           — Call-to-action footer
  components/
    Header.tsx               — Sticky AppShell header
    HomePage.tsx             — Composes all sections
  routes/
    _index.tsx               — Updated to render HomePage
  root.tsx                   — Updated MantineProvider + Parallax styles import
```

### Key Dependencies

- `@mantine/core` (already installed, v9.0.2)
- `@mantine/hooks` (already installed, v9.0.2)
- `@gfazioli/mantine-parallax` (to install)

### Parallax Usage

- **Hero**: `<Parallax>` wrapping the hero content, moderate perspective, subtle tilt on hover
- **Pipeline cards**: Three `<Parallax>` components, one per card, with gradient backgrounds and hover 3D effect
- **Resilience card**: Single `<Parallax>` for the error-handling showcase card

Each Parallax instance:
- `perspective={800}` — moderate depth
- `rotationX={5}` / `rotationY={5}` — subtle rotation limits
- `lightEffect` enabled for a realistic sheen
- Container manages its own `w` and `h` props

### Mantine Components Used

- `AppShell`, `AppShell.Header`, `AppShell.Main` — layout
- `Container`, `Group`, `Stack` — structural layout
- `Title`, `Text` — typography
- `Button` — CTAs
- `Badge` or custom pills — use cases
- `Grid`, `Grid.Col` — responsive column layouts
- `Parallax` (from mantine-parallax) — 3D hover effects
- `Code` / custom code block — syntax highlighting

### Responsive Considerations

- Hero split becomes stacked on mobile (text above code)
- Pain points stack vertically on mobile (single column)
- Pipeline Parallax cards stack vertically on mobile (with vertical arrows)
- Stats stack or reduce font sizes on mobile
- Feature grid goes to single column on mobile
- Header collapses to burger menu on mobile (use Mantine `Burger`)

## Content Source

All section content sourced from www.npipeline.dev:
- Pain point descriptions
- Pipeline concepts (Sources, Transforms, Sinks, Graph)
- Performance numbers (~2MB, <1ms, 90%)
- Resilience features (retry, circuit breakers, granular error handling)
- Use cases (ETL, Real-time, Validation, Batch, Event-driven, Microservice)
- Modular features (Composition, Connectors, DI, Lineage, Nodes, Observability, Parallelism, Testing)
- Code example (fluent API pipeline definition)