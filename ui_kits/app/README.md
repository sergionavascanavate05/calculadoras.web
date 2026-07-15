# Applied Interface Kit — Calculadoras Online

This directory contains the applied UI surface files extracted from the source project. Each file preserves the real component implementation and demonstrates the design system tokens in context.

## Kit structure

| File | Description | Source basis |
|---|---|---|
| `index.html` | Launcher with cards linking to all component files | `app/page.tsx` (grid pattern) |
| `header.html` | Sticky header with responsive nav and theme toggle | `components/Header.tsx` |
| `footer.html` | 3-column footer with calculator, content, and legal links | `components/Footer.tsx` |
| `calculator-card.html` | CalculatorCard grid component with hover interaction | `components/CalculatorCard.tsx` |
| `imc-form.html` | Full IMC calculator form with interactive JS (real BMI calculation) | `app/imc/IMCForm.tsx`, `lib/calculators/imc.ts` |
| `iva-form.html` | Full IVA calculator form with segmented rate selector | `app/iva/IVAForm.tsx`, `lib/calculators/iva.ts` |
| `blog-card.html` | Blog post listing card with category and date | `app/blog/page.tsx` |
| `not-found.html` | 404 error page with dual CTAs | `app/not-found.tsx` |

## Design notes

- All files import `../../colors_and_type.css` for design system tokens
- Interactive forms (imc-form, iva-form) include inline JavaScript that mirrors the source React component logic
- The design system uses a single blue accent (`--color-accent: oklch(58% 0.18 255)`) applied at most twice per component
- Dark mode is supported via the `.dark` class on `<html>` — toggle it in any file to preview
- Forms include real validation logic (weight/height ranges, positive amounts) matching the source project
- Result rows use the highlighted variant (accent/10 background + accent/20 border) for the final total row

## Usage workflow

1. Open `index.html` to browse the full kit
2. Inspect individual component files for implementation details
3. Use `imc-form.html` and `iva-form.html` as reference for building new calculator forms
4. Use `header.html`, `footer.html`, and `calculator-card.html` as layout building blocks

## How to reuse this kit

### For new calculator pages

1. Copy `imc-form.html` or `iva-form.html` as a template
2. Replace the form fields, labels, and validation logic with your calculator's inputs
3. Add the new calculator logic (inline JS) following the `calcularIMC` or `calcularIVA` pattern
4. Add the entry to `lib/calculators/index.ts` following the `CALCULATOR_REGISTRY` pattern
5. Create a page following `app/imc/page.tsx` or `app/iva/page.tsx` patterns

### For new layout components

1. Copy `header.html` or `footer.html` as a starting point
2. Replace nav items, links, or columns with your content
3. The design system tokens (`--color-accent`, `--color-bg`, etc.) apply automatically via `colors_and_type.css`

### For blog/article pages

1. Copy `blog-card.html` for the listing card pattern
2. Copy `app/blog/[slug]/page.tsx` from the source project for the article page layout
3. Add new blog posts to the `BLOG_POSTS` array following the existing entries

### Integrating with the design system

All components use the design system's OKLCH color tokens and system font stacks. To customise:
- Update `colors_and_type.css` to change the palette (add `.dark` variants for dark mode)
- Add new component variants in `ui_kits/app/components/` if you need modular files
- The preview cards in `preview/` automatically reflect token changes

## Source basis

All files are adapted from the Next.js + TypeScript + Tailwind CSS 3 source project (Open Design project d131e282-ce88-4655-a566-01618ea15276). The HTML preserves the original component structure, CSS token usage, interaction patterns, and real copy. The project framework is Next.js 14 with TypeScript and Tailwind CSS 3.