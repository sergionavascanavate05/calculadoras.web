# Calculadoras Online — Premium Design System

> **Design System ID:** `user:quiero-crear-una-web-moderna-enfocada-design-system`
> **Surface:** Web (responsive)
> **Inspiration:** Stripe, Linear, Vercel, Apple — refined utility
> **Language:** es-ES

---

## 1. Visual Theme & Atmosphere

Premium utility meets modern SaaS. The design feels fast, precise, and trustworthy — like a high-end financial dashboard or developer tool, but approachable for a general audience. Every pixel serves clarity.

**Mood:** Clean, luminous, precise. Light mode is cool and airy (`oklch(98.5% 0.002 240)`); dark mode is deep and rich (`oklch(10% 0.01 260)`). The accent is a vibrant periwinkle-blue (`oklch(62% 0.22 265)`) that reads as both premium and friendly.

**Key differentiators:**
- Glassmorphism surfaces for navigation and overlays
- Layered elevation with organic OKLCH shadows
- Monospace numerics for all calculator results
- Spring-based motion for interactive elements
- Subtle glow effects on accent interactions

---

## 2. Color — Refined OKLCH Palette

### Light mode

| Token | OKLCH | Usage |
|---|---|---|
| `--color-bg` | `oklch(98.5% 0.002 240)` | Page background |
| `--color-surface` | `oklch(100% 0 0)` | Cards, forms, elevated surfaces |
| `--color-surface-alt` | `oklch(97% 0.003 240)` | Alternate surface, hover states |
| `--color-fg` | `oklch(15% 0.015 260)` | Primary text |
| `--color-muted` | `oklch(52% 0.015 260)` | Secondary text, metadata |
| `--color-subtle` | `oklch(70% 0.01 260)` | Placeholder text, disabled |
| `--color-border` | `oklch(90% 0.005 260)` | Default borders |
| `--color-border-strong` | `oklch(82% 0.008 260)` | Hover borders, active |
| `--color-accent` | `oklch(62% 0.22 265)` | Primary action, links |
| `--color-accent-hover` | `oklch(56% 0.24 265)` | Button hover |
| `--color-accent-active` | `oklch(50% 0.25 265)` | Button active/pressed |
| `--color-accent-light` | `oklch(92% 0.06 265)` | Selection highlight, subtle bg |
| `--color-accent-glow` | `oklch(62% 0.22 265 / 0.2)` | Focus ring, glow effect |
| `--color-error` | `oklch(52% 0.22 25)` | Validation error |
| `--color-success` | `oklch(55% 0.18 150)` | Success state |
| `--color-warning` | `oklch(60% 0.18 80)` | Warning state |

### Dark mode

| Token | OKLCH | Usage |
|---|---|---|
| `--color-bg` | `oklch(10% 0.01 260)` | Page background |
| `--color-surface` | `oklch(14% 0.012 260)` | Cards, elevated surfaces |
| `--color-surface-alt` | `oklch(17% 0.012 260)` | Alternate surface |
| `--color-fg` | `oklch(93% 0.005 260)` | Primary text |
| `--color-muted` | `oklch(58% 0.01 260)` | Secondary text |
| `--color-subtle` | `oklch(45% 0.01 260)` | Placeholder text |
| `--color-border` | `oklch(24% 0.008 260)` | Default borders |
| `--color-border-strong` | `oklch(32% 0.008 260)` | Hover borders |
| `--color-accent` | `oklch(65% 0.2 265)` | Primary action |
| `--color-accent-hover` | `oklch(70% 0.2 265)` | Button hover |
| `--color-accent-active` | `oklch(60% 0.22 265)` | Button active |
| `--color-accent-light` | `oklch(22% 0.08 265)` | Selection highlight |
| `--color-accent-glow` | `oklch(65% 0.2 265 / 0.15)` | Focus ring |
| `--color-error` | `oklch(55% 0.2 25)` | Validation error |
| `--color-success` | `oklch(58% 0.18 150)` | Success |
| `--color-warning` | `oklch(62% 0.18 80)` | Warning |

### Glass tokens

| Token | Light | Dark |
|---|---|---|
| `--glass-bg` | `oklch(100% 0 0 / 0.7)` | `oklch(14% 0.012 260 / 0.7)` |
| `--glass-border` | `oklch(90% 0.005 260 / 0.5)` | `oklch(24% 0.008 260 / 0.5)` |
| `--glass-blur` | `12px` | `16px` |
| `--glass-shadow` | `0 4px 24px oklch(0% 0 0 / 0.06)` | `0 4px 24px oklch(0% 0 0 / 0.2)` |

### Elevation & Shadows

| Token | Light | Dark |
|---|---|---|
| `--elevation-1` | `0 1px 3px rgb(0 0 0 / 0.06), 0 1px 2px rgb(0 0 0 / 0.04)` | `0 1px 3px rgb(0 0 0 / 0.2), 0 1px 2px rgb(0 0 0 / 0.1)` |
| `--elevation-2` | `0 4px 12px rgb(0 0 0 / 0.08), 0 2px 4px rgb(0 0 0 / 0.04)` | `0 4px 12px rgb(0 0 0 / 0.25), 0 2px 4px rgb(0 0 0 / 0.15)` |
| `--elevation-3` | `0 8px 30px rgb(0 0 0 / 0.1), 0 4px 8px rgb(0 0 0 / 0.05)` | `0 8px 30px rgb(0 0 0 / 0.3), 0 4px 8px rgb(0 0 0 / 0.2)` |
| `--elevation-4` | `0 16px 50px rgb(0 0 0 / 0.12), 0 6px 16px rgb(0 0 0 / 0.06)` | `0 16px 50px rgb(0 0 0 / 0.35), 0 6px 16px rgb(0 0 0 / 0.2)` |
| `--elevation-hover` | `0 12px 40px rgb(0 0 0 / 0.14), 0 4px 12px rgb(0 0 0 / 0.06)` | `0 12px 40px rgb(0 0 0 / 0.35), 0 4px 12px rgb(0 0 0 / 0.2)` |

---

## 3. Typography

### Font stacks

| Role | Stack |
|---|---|
| Display / headings | `Inter Display, -apple-system, "SF Pro Display", system-ui, sans-serif` |
| Body / UI | `Inter, -apple-system, "SF Pro Text", system-ui, sans-serif` |
| Mono / code | `"JetBrains Mono", "SF Mono", ui-monospace, Menlo, monospace` |
| Numeric | `"JetBrains Mono", "SF Mono", ui-monospace, monospace` |

### Type scale

```
Display:  clamp(2.5rem, 5vw, 4rem)    → 700 weight, -0.03em tracking, 1.05 line-height
Hero:     clamp(2rem, 4vw, 3rem)       → 600 weight, -0.02em tracking, 1.1 line-height
h1:       clamp(1.5rem, 3vw, 2.25rem)  → 600 weight, -0.015em tracking, 1.1 line-height
h2:       1.25rem                       → 600 weight, -0.015em tracking, 1.2 line-height
h3:       1.125rem                      → 600 weight, 1.3 line-height
Body:     0.9375rem (15px)             → 400 weight, 1.6 line-height
Small:    0.8125rem (13px)             → 400 weight, 1.5 line-height
Caption:  0.6875rem (11px)             → 500 weight, 0.04em tracking uppercase
Numeric:  1.5rem                        → 500 weight, -0.02em tracking, tabular-nums
```

### Numeric (calculator results)

All calculator outputs use `font-family: var(--font-numeric)` with `font-variant-numeric: tabular-nums` for consistent digit widths. This prevents layout shift when numbers change and gives a precise, financial-tool feel.

---

## 4. Spacing & Layout

### Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Micro gaps |
| `--space-2` | 8px | Tight gaps |
| `--space-3` | 12px | Element spacing |
| `--space-4` | 16px | Section padding (x) |
| `--space-5` | 20px | Form group gap |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section padding (y) |
| `--space-10` | 40px | Large gaps |
| `--space-12` | 48px | Section margin |
| `--space-16` | 64px | Hero padding |
| `--space-20` | 80px | Major section |
| `--space-24` | 96px | Page top |

### Border radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Badges, small elements |
| `--radius-md` | 8px | Inputs, small buttons |
| `--radius-lg` | 12px | Buttons, segmented controls |
| `--radius-xl` | 16px | Cards, forms, sections |
| `--radius-2xl` | 20px | Modals, large containers |
| `--radius-full` | 9999px | Pills, avatars, toggles |

### Z-index scale

| Token | Value |
|---|---|
| `--z-base` | 0 |
| `--z-dropdown` | 100 |
| `--z-sticky` | 200 |
| `--z-header` | 300 |
| `--z-overlay` | 400 |
| `--z-modal` | 500 |
| `--z-toast` | 600 |

---

## 5. Components

### Button — Primary

```tsx
<button className="btn-primary">{label}</button>
```

- Background: `--color-accent` → `--color-accent-hover` on hover → `--color-accent-active` on press
- Box-shadow: `--elevation-1` resting, `--elevation-3` on hover with 1px Y translate
- Transition: `all 200ms cubic-bezier(0.25, 0.1, 0.25, 1)`
- Inner inset highlight for depth

### Button — Secondary

```tsx
<button className="btn-secondary">{label}</button>
```

- Transparent background, `--color-border` border
- Hover: `--color-surface` background, `--color-border-strong` border, `--elevation-1` shadow

### Card

```tsx
<div className="card">{children}</div>
<div className="card card-glow">{children}</div>  {/* with accent glow */}
```

- Background: `--color-surface`
- Border: `--color-border` → `--color-border-strong` on hover
- Radius: `--radius-xl`
- Hover: `--elevation-2` shadow, -2px Y translate, smooth transition
- Glow variant: accent border with `--color-accent-glow` box-shadow

### Glass surface

```tsx
<div className="glass">{children}</div>
```

- Background: `--glass-bg` (translucent surface)
- Backdrop-filter: `blur(var(--glass-blur))`
- Border: 1px `--glass-border`
- Shadow: `--glass-shadow`

### Input

```tsx
<input className="input" />
<input className="input input-error" />  {/* error state */}
```

- Border: 1.5px `--color-border`
- Focus: `--color-accent` border + 3px `--color-accent-glow` ring
- Error: `--color-error` border + 3px error glow ring
- Border-radius: `--radius-md`

### Focus ring

```css
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

---

## 6. Motion & Interaction

### Timing

| Token | Value | Easing |
|---|---|---|
| Instant | 0ms | — |
| Fast | 100ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Normal | 200ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Slow | 350ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Spring | — | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

### Transition presets

```css
--transition-fade: opacity 200ms ease;
--transition-slide: transform 200ms ease-out;
--transition-scale: transform 200ms spring;
--transition-all: all 200ms ease-out;
--transition-fast: all 100ms ease-out;
--transition-slow: all 350ms ease;
```

### Animations

```css
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
```

- `.animate-fade-in`: 350ms ease-out
- `.animate-slide-up`: 350ms ease-out
- `.animate-scale-in`: 350ms spring (for modals, results)

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

---

## 7. Background System

### Light mode default
- Solid `--color-bg` base
- Subtle `--color-surface-alt` alternating sections
- Glassmorphism for overlays and sticky headers

### Dark mode default
- Deep `--color-bg` base (`oklch(10% 0.01 260)`)
- Slightly lighter `--color-surface` for cards
- Rich glassmorphism with 16px blur

### Reusable background patterns
- `.glass` — frosted glass surface for headers, overlays, modals
- `.card` — elevated surface with hover lift
- `.card-glow` — card with accent glow on hover

---

## 8. Voice & Brand

### Brand identity
- **Name:** Calculadoras Online
- **Tagline:** Herramientas gratuitas para calcular IMC, IVA y más.
- **Tone:** Clear, helpful, authoritative. No jargon, no fluff.
- **Locale:** es-ES

### Numeric presentation
- All calculator results use `font-family: var(--font-numeric)` with `font-variant-numeric: tabular-nums`
- Results are displayed in monospace for precision and visual distinction
- The last result row is highlighted with `--color-accent` at 10% opacity

---

## 9. Implementation notes

### CSS classes available
- `.btn-primary`, `.btn-secondary` — Button variants
- `.card`, `.card-glow` — Card variants
- `.glass` — Glassmorphism surface
- `.input` — Text input
- `.input-error` — Input error state
- `.text-numeric` — Monospace numeric text
- `.animate-fade-in`, `.animate-slide-up`, `.animate-scale-in` — Animation classes

### Tailwind config extensions
- `shadow-elevation-1/2/3`, `shadow-glass` — Box shadows
- `font-display`, `font-body`, `font-mono`, `font-numeric` — Font families
- `text-display`, `text-hero`, `text-numeric` — Font sizes
- `animate-fade-in`, `animate-slide-up`, `animate-scale-in` — Animations
- `rounded-sm/md/lg/xl/2xl` — Border radius
- `backdrop-blur-glass` — Glass blur

### Accessibility
- WCAG AA contrast on all text/background combinations
- `:focus-visible` ring with `--color-accent` at 2px
- `prefers-reduced-motion` reduces all animations to 0.01ms
- Semantic HTML structure preserved

---

## 10. Anti-patterns

- ❌ No aggressive gradients or purple/violet backgrounds
- ❌ No generic emoji feature icons
- ❌ No left-border accent cards
- ❌ No hand-drawn SVG illustrations
- ❌ No Inter, Roboto, or Arial as display faces (Inter is acceptable as body)
- ❌ No invented metrics
- ❌ No filler copy
- ❌ No gradient backgrounds (use solid + elevation for depth)
- ❌ No warm beige/cream/peach backgrounds
- ❌ No design/demo controls in product UI
- ❌ No floating panels or tweaks UI
- ❌ No rainbow/spread spectrum color usage — one accent only
- ❌ No `transform: translate3d` or `will-change` on every element — use only where it creates value
- ❌ No heavy WebGL or canvas effects — keep it lightweight