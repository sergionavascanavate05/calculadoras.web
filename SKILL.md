---
name: Calculadoras Online Design System
description: Design system and skill for building Spanish-language SEO-optimised calculator websites with Next.js, TypeScript, and Tailwind CSS. Clean modern utility style with OKLCH blue accent palette, system fonts, light/dark mode, and accessible form components.
user-invocable: true
---

# Calculadoras Online Design System

## What is inside

- **DESIGN.md** — Full 9-section design system documentation (theme, color, typography, spacing, layout, components, motion, voice, anti-patterns)
- **colors_and_type.css** — Tokenized CSS custom properties with OKLCH + hex values, light + dark mode, type stacks, spacing scale, radii, and animations
- **preview/** — 6 focused preview cards (colors-primary, typography-specimens, spacing-tokens, components-buttons, brand-assets, radius-shadows)
- **assets/** — 6 preserved SVG icons (IMC, IVA, moon, sun, hamburger, close)
- **build/** — 4 runtime build assets (icon-imc, icon-iva, icon-moon, icon-sun)
- **ui_kits/app/** — Applied interface kit with 8 component files (header, footer, calculator-card, blog-card, imc-form, iva-form, not-found, index)
- **source_examples/** — 7 substantive original component snapshots with full source code preserved
- **templates/** — Calculator architecture spec + 4 paste-ready templates for generating new calculators
- **calculadoras.json** — Central config file listing all calculators with SEO, fields, logic, and editorial content
- **scripts/generate-calculators.js** — Auto-generator: run `npm run generate` to create all files from the JSON config
- **context/provenance.md** — Source project provenance and extraction notes

## Source context

This design system was extracted from Open Design project `d131e282-ce88-4655-a566-01618ea15276` ("Quiero Crear Una Web Moderna Enfocada"). The source is a Next.js 14 + TypeScript + Tailwind CSS 3 website at `https://calculadoras-online.com` (Spanish locale, es-ES).

### Key evidence files

| File | What it provides |
|---|---|
| `app/globals.css` | Light + dark OKLCH color tokens |
| `tailwind.config.ts` | Font stacks, animations, max-width |
| `components/Header.tsx` | Sticky header, responsive nav, theme toggle |
| `components/Footer.tsx` | 3-column footer, link sections, copyright |
| `components/CalculatorCard.tsx` | Card pattern, hover interaction, CTA styling |
| `app/imc/IMCForm.tsx` | Form layout, validation, result display |
| `app/iva/IVAForm.tsx` | Segmented buttons, mode toggle, result rows |
| `components/ThemeToggle.tsx` | Dark/light mode, localStorage persistence |
| `components/AdUnit.tsx` | Google AdSense wrapper |
| `lib/calculators/imc.ts` | BMI formula with WHO classification |
| `lib/calculators/iva.ts` | VAT calculation with 3 Spanish rates |
| `app/layout.tsx` | SEO metadata, Schema.org, OpenGraph |

## When to use this skill

Use this design system when building:

- **Spanish-language calculator websites** — IMC, IVA, or any extensible calculator tool
- **SEO-optimised utility sites** — Google AdSense monetisation, Schema.org markup, sitemap
- **Next.js + Tailwind projects** — the tokens map directly to Tailwind's `theme.extend.colors`
- **Multi-calculator platforms** — the `CALCULATOR_REGISTRY` pattern supports 100+ calculators
- **Light/dark mode projects** — OKLCH palette with full dark mode support

## How to use

### 1. Apply the design system

```bash
od design-system apply user:calculadoras-online-design-system
```

### 2. Import tokens

```html
<link rel="stylesheet" href="colors_and_type.css">
```

Or import into Tailwind config:

```ts
// tailwind.config.ts
colors: {
  bg: "var(--color-bg)",
  surface: "var(--color-surface)",
  fg: "var(--color-fg)",
  muted: "var(--color-muted)",
  border: "var(--color-border)",
  accent: "var(--color-accent)",
  "accent-hover": "var(--color-accent-hover)",
  "accent-light": "var(--color-accent-light)",
}
```

### 3. Activate dark mode

Add `class="dark"` to `<html>`. The source project also persists to `localStorage('theme')`.

### 4. Review the preview cards

Open `preview/` to inspect:
- `colors-primary.html` — full palette with light + dark values
- `typography-specimens.html` — type scale, font stacks, usage examples
- `spacing-tokens.html` — spacing scale, radius, layout max-width
- `components-buttons.html` — all component variants
- `brand-assets.html` — SVG icons, logo, brand identity, SEO metadata
- `radius-shadows.html` — border radius tokens and elevation

### 5. Explore the UI kit

Open `ui_kits/app/index.html` for a launcher into the 8 component files, each with real tokens and interactive JS.

## Design system highlights

- **OKLCH color space** — Perceptually uniform palette; no hex guessing
- **Single blue accent** — `oklch(58% 0.18 255)` at most twice per screen
- **System font stack** — Zero-latency rendering (SF Pro / -apple-system)
- **Dark mode first-class** — Every token has a `.dark` variant
- **4px spacing scale** — Tailwind-compatible, 1200px max-width content
- **Form validation** — Specific error messages, focus rings, result animations
- **AdSense ready** — AdUnit component with slot configuration
- **SEO preconfigured** — Schema.org, OpenGraph, Twitter Cards, sitemap, robots.txt