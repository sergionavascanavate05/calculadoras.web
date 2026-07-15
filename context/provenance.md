# Provenance

## Source project

- **ID:** `d131e282-ce88-4655-a566-01618ea15276`
- **Name:** Quiero Crear Una Web Moderna Enfocada
- **Kind:** `other`
- **Created from:** User prompt: create a complete SEO-optimised calculator website in Next.js + TypeScript + Tailwind CSS

## Linked directory

```
C:\Users\sergi\OneDrive\Documentos\Calculafacil
```

## Extracted files

All design system artifacts were extracted by reading the 29 source project files listed in `context/source-context.md`. Key evidence sources:

- **Color tokens:** `app/globals.css` (light + dark OKLCH variables)
- **Typography:** `tailwind.config.ts` (fontFamily stacks), `app/globals.css` (body font)
- **Spacing & layout:** Tailwind utility classes throughout all components
- **Components:** `components/Header.tsx`, `components/Footer.tsx`, `components/CalculatorCard.tsx`, `components/ThemeToggle.tsx`, `components/AdUnit.tsx`
- **Forms:** `app/imc/IMCForm.tsx`, `app/iva/IVAForm.tsx`
- **Calculator logic:** `lib/calculators/imc.ts`, `lib/calculators/iva.ts`, `lib/calculators/index.ts`
- **SEO:** `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`
- **Pages:** `app/page.tsx`, `app/imc/page.tsx`, `app/iva/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/not-found.tsx`
- **Types:** `types/index.ts`
- **Framework:** `package.json`, `next.config.ts`, `postcss.config.js`, `tsconfig.json`

## Design system ID

```
user:quiero-crear-una-web-moderna-enfocada-design-system
```

## Notes

- The design system uses OKLCH color space throughout — no hex fallbacks are defined in the source.
- The "Calculadoras Online" brand name was inferred from `app/layout.tsx` metadata.
- Dark mode is opt-in with `localStorage('theme')` persistence and `prefers-color-scheme` media query fallback.
- No external design system was referenced in the source project.