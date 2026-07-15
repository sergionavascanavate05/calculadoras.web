# Calculadoras Online — Design System Package

A complete Open Design design system extracted from the "Quiero Crear Una Web Moderna Enfocada" project (d131e282-ce88-4655-a566-01618ea15276). This package documents the visual language, components, tokens, and interaction patterns used by **Calculadoras Online**, a Spanish-language SEO-optimised website hosting free online calculator tools.

## Product Overview

**Calculadoras Online** is a utility website that provides free online calculators (IMC/BMI, IVA/VAT) to Spanish-speaking users arriving from Google Search. The product prioritises:

- **Speed** — Lightweight system font stack, minimal CSS, fast page loads
- **Clarity** — One tool per page, clear form labels, specific error messages
- **Monetisation** — Google AdSense integration with slot-based AdUnit component
- **Extensibility** — `CALCULATOR_REGISTRY` pattern supporting 100+ calculators
- **SEO** — Schema.org WebSite, OpenGraph, Twitter Cards, sitemap, robots.txt

### Product Context

| Attribute | Value |
|---|---|
| Brand | Calculadoras Online |
| URL | https://calculadoras-online.com |
| Language | es-ES |
| Framework | Next.js 14 + TypeScript + Tailwind CSS 3 |
| Monetisation | Google AdSense |
| Calculators | IMC (BMI), IVA (VAT) — extensible registry |
| Dark mode | localStorage + prefers-color-scheme |

## Source context

The design system was extracted from 29 source files in the project workspace. Key evidence:

| Evidence | Location | What it provides |
|---|---|---|
| Color tokens | `app/globals.css` | Light + dark OKLCH variables |
| Typography | `tailwind.config.ts`, `app/globals.css` | Font stacks, type scale, font smoothing |
| Components | `components/Header.tsx`, `Footer.tsx`, `CalculatorCard.tsx`, `ThemeToggle.tsx`, `AdUnit.tsx` | All UI components |
| Forms | `app/imc/IMCForm.tsx`, `app/iva/IVAForm.tsx` | Form layout, validation, result display |
| Calculator logic | `lib/calculators/imc.ts`, `lib/calculators/iva.ts` | BMI formula, VAT calculation |
| SEO | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` | Metadata, Schema.org, sitemap |
| Pages | `app/page.tsx`, `app/imc/page.tsx`, `app/iva/page.tsx`, `app/blog/page.tsx`, `app/not-found.tsx` | Page layouts |
| Types | `types/index.ts` | CalculatorMeta, BlogPostMeta, CalculatorResult |

## Package Contents

| Path | Description |
|---|---|
| `DESIGN.md` | Full 9-section design system documentation |
| `colors_and_type.css` | Tokenized CSS custom properties (OKLCH + hex, light + dark) |
| `SKILL.md` | Open Design skill definition with YAML frontmatter |
| `context/provenance.md` | Source project provenance and extraction notes |
| `assets/` | 6 preserved SVG icons (imc, iva, moon, sun, hamburger, close) |
| `build/` | 4 runtime build assets (icon-imc, icon-iva, icon-moon, icon-sun) |
| `templates/` | Arquitectura reutilizable + 4 plantillas para generar nuevas calculadoras |
| `scripts/generate-calculators.js` | Generador automático: crea todos los archivos desde `calculadoras.json` |
| `calculadoras.json` | Configuración centralizada de todas las calculadoras del sitio |
| `preview/` | 6 focused preview cards (see manifest below) |
| `source_examples/` | 7 substantive original component snapshots (CalculatorCard, ThemeToggle, AdUnit, IMC logic, IVA logic, Types, Registry) |
| `ui_kits/app/` | Applied interface kit with 8 component files |

## Preview Manifest

Every `preview/*.html` card is a focused, self-contained review surface. Open each in the Design Files panel:

| Preview card | Path | Review purpose | Source-backed components |
|---|---|---|---|
| Colors primary | `preview/colors-primary.html` | Full palette: 12 light tokens + 8 dark tokens with OKLCH and hex values | `app/globals.css` |
| Typography specimens | `preview/typography-specimens.html` | Type scale (h1→meta), font stacks, specimens from real page copy | `tailwind.config.ts`, `app/page.tsx`, `app/imc/page.tsx` |
| Spacing tokens | `preview/spacing-tokens.html` | Spacing scale (4px→64px), border radius, max-width, Tailwind context table | All component files |
| Components | `preview/components-buttons.html` | All button variants, inputs, result rows, CalculatorCard | `components/CalculatorCard.tsx`, `app/imc/IMCForm.tsx`, `app/iva/IVAForm.tsx` |
| Brand assets | `preview/brand-assets.html` | SVG icons, logo, brand identity, SEO metadata table | `assets/*.svg`, `components/Header.tsx`, `app/layout.tsx` |
| Radius & shadows | `preview/radius-shadows.html` | Border radius tokens, elevation, focus ring, Tailwind context | `app/imc/IMCForm.tsx`, `components/CalculatorCard.tsx` |

## Preserved assets

- `assets/icon-imc.svg` — Bar chart icon for IMC calculator (from `lib/calculators/index.ts`)
- `assets/icon-iva.svg` — Line chart icon for IVA calculator (from `lib/calculators/index.ts`)
- `assets/icon-moon.svg` — Dark mode icon (from `components/ThemeToggle.tsx`)
- `assets/icon-sun.svg` — Light mode icon (from `components/ThemeToggle.tsx`)
- `assets/icon-hamburger.svg` — Mobile menu icon (from `components/Header.tsx`)
- `assets/icon-close.svg` — Close menu icon (from `components/Header.tsx`)

### Templates for new calculators

| File | Description |
|---|---|
| `templates/calculator-architecture.md` | Full architecture spec with common patterns, conventions, and checklist |
| `templates/calculator-logic.ts` | Plantilla de lógica de cálculo (`lib/calculators/[id].ts`) |
| `templates/calculator-form.tsx` | Plantilla de formulario cliente (`app/[id]/[Id]Form.tsx`) |
| `calculator-page.tsx` | Plantilla de página con SEO + artículo editorial (`app/[id]/page.tsx`) |
| `registry-entry.ts` | Plantilla de entrada en el registro (`lib/calculators/index.ts`) |

### Generator

| File | Description |
|---|---|
| `calculadoras.json` | Central config — define todas las calculadoras, SEO, campos, lógica y contenido editorial |
| `scripts/generate-calculators.js` | Script Node.js que lee el JSON y genera todos los archivos automáticamente |

**Uso:**

```bash
# 1. Añade o edita una calculadora en calculadoras.json
# 2. Ejecuta:
npm run generate
```

Esto regenera:
- `lib/calculators/[id].ts` — lógica de cálculo
- `app/[id]/[Id]Form.tsx` — formulario interactivo
- `app/[id]/page.tsx` — página con SEO
- `lib/calculators/index.ts` — registro + exports
- `app/sitemap.ts` — entradas del sitemap

### Build assets

- `build/icon-imc.svg` — Bar chart icon (copy from assets/)
- `build/icon-iva.svg` — Line chart icon (copy from assets/)
- `build/icon-moon.svg` — Dark mode icon (copy from assets/)
- `build/icon-sun.svg` — Light mode icon (copy from assets/)

## ui_kits/app/ — Applied interface kit

The `ui_kits/app/` directory contains 8 component files that demonstrate the design system tokens in context:

| File | Description |
|---|---|
| `index.html` | Kit launcher with links to all component files |
| `header.html` | Sticky header with responsive nav and theme toggle |
| `footer.html` | 3-column footer with calculator, content, and legal links |
| `calculator-card.html` | CalculatorCard grid component |
| `imc-form.html` | Full IMC calculator form with interactive JS |
| `iva-form.html` | Full IVA calculator form with segmented rate selector |
| `blog-card.html` | Blog post listing card with category and date |
| `not-found.html` | 404 error page with dual CTAs |

## Reuse workflow

### To review the design system

1. Open `preview/index.html` for the combined overview
2. Inspect individual preview cards from the manifest above
3. Open `ui_kits/app/index.html` to browse component implementations

### To apply the design system to a new project

```bash
# Apply via Open Design
od design-system apply user:calculadoras-online-design-system

# Or manually import
cp colors_and_type.css <your-project>/styles/
```

### To extend with new calculators

1. Add a calculator entry to `lib/calculators/index.ts` following the `CALCULATOR_REGISTRY` pattern
2. Create a form component following `IMCForm.tsx` or `IVAForm.tsx` patterns
3. Create a page following `app/imc/page.tsx` or `app/iva/page.tsx` patterns
4. The design system tokens apply automatically via Tailwind's `theme.extend.colors`

## License

Design system extracted from user project "Quiero Crear Una Web Moderna Enfocada" (d131e282-ce88-4655-a566-01618ea15276).