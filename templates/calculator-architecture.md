# Arquitectura de Calculadoras — Especificación Reutilizable

> **Proyecto:** Calculadoras Online
> **Framework:** Next.js 14 + TypeScript + Tailwind CSS 3
> **Basado en:** Calculadoras existentes (IMC, IVA)

---

## 1. Árbol de archivos por calculadora

Cada nueva calculadora sigue esta estructura exacta:

```
lib/calculators/
  └── [id].ts              ← Lógica pura (tipos, función de cálculo, constantes)
  └── index.ts             ← Registro global (se modifica una línea)

types/
  └── index.ts             ← Tipos compartidos (CalculatorMeta, CalculatorResult)

app/[id]/
  ├── page.tsx             ← Página con SEO + layout + formulario + contenido editorial
  └── [id]Form.tsx         ← Componente cliente: formulario, validación, resultado

components/
  ├── CalculatorCard.tsx   ← Tarjeta del grid de inicio (genérica, usa CalculatorMeta)
  ├── Header.tsx           ← Header global (no se toca)
  ├── Footer.tsx           ← Footer global (no se toca)
  ├── ThemeToggle.tsx      ← Toggle oscuro (no se toca)
  └── AdUnit.tsx           ← Componente AdSense (no se toca)

app/layout.tsx             ← Layout global, SEO base, Schema.org (no se toca)
app/sitemap.ts             ← Se añade una entrada por calculadora
app/robots.ts              ← Sin cambios
```

---

## 2. Common patterns extraídos

### 2.1 Types — `types/index.ts`

```ts
export interface CalculatorMeta {
  id: string;              // Identificador único (slug)
  title: string;           // Título visible
  description: string;     // Meta description + texto del card
  slug: string;            // Ruta (ej: "/imc")
  icon: string;            // SVG inline (28x28, stroke-width 1.8)
  category: "salud" | "finanzas" | "educacion" | "general";
}

export interface CalculatorResult {
  label: string;           // Nombre del campo resultado
  value: string;           // Valor formateado
  unit?: string;           // Unidad opcional
  description?: string;    // Descripción adicional
}
```

### 2.2 Registry — `lib/calculators/index.ts`

```ts
export const CALCULATOR_REGISTRY: CalculatorMeta[] = [
  // ... cada calculadora añade un objeto aquí
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return CALCULATOR_REGISTRY.find((c) => c.slug === "/" + slug || c.slug === slug);
}
```

**Patrón:** array + función de búsqueda. No switch, no if-else. Añadir una calculadora = añadir un objeto al array.

### 2.3 Página — `app/[id]/page.tsx`

```tsx
import type { Metadata } from "next";
import [Id]Form from "./[Id]Form";

export const metadata: Metadata = {
  title: "Calculadora de [Nombre]",
  description: "[Meta description SEO con keywords y beneficio]",
  openGraph: {
    title: "Calculadora de [Nombre] - Calculadoras Online",
    description: "[Meta description más corta para redes]",
  },
};

export default function [Id]Page() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight">
            Calculadora de [Nombre]
          </h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
            [Descripción breve de 1-2 líneas]
          </p>
        </div>

        <[Id]Form />

        {/* Artículo editorial SEO */}
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">[Pregunta frecuente 1]</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">[Respuesta]</p>
          <h2 className="font-display font-semibold text-lg text-fg mt-6">[Pregunta frecuente 2]</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">[Respuesta con enlaces internos]</p>
        </article>
      </div>
    </div>
  );
}
```

### 2.4 Formulario — `app/[id]/[Id]Form.tsx`

```tsx
"use client";
import { useState } from "react";
import { [calcularFuncion] } from "@/lib/calculators";
import type { [Id]Result } from "@/lib/calculators";

export default function [Id]Form() {
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState<[Id]Result | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    // 1. Parsear inputs
    // 2. Validar rangos (con mensajes específicos en español)
    // 3. Llamar a la función de cálculo
    // 4. setResultado(res)
  }

  function handleReset() {
    // Limpiar inputs y resultado
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-border bg-surface space-y-5">
        {/* Campos del formulario con grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">...</div>

        {/* Error */}
        {error && <p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>}

        {/* Botones */}
        <div className="flex gap-3">
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors">
            Calcular [Nombre]
          </button>
          {resultado && <button type="button" onClick={handleReset} className="px-4 py-2.5 rounded-lg border border-border text-muted text-sm hover:text-fg hover:bg-border transition-colors">Reiniciar</button>}
        </div>
      </form>

      {/* Resultados */}
      {resultado && (
        <div className="mt-6 p-6 rounded-xl border border-border bg-surface animate-slide-up">
          <div className="space-y-3">
            {resultado.resultados.map((r, i) => (
              <div key={i} className={"flex items-center justify-between py-3 px-4 rounded-lg " + (i === resultado.resultados.length - 1 ? "bg-accent/10 border border-accent/20" : "bg-bg")}>
                <span className="text-sm text-muted">{r.label}</span>
                <span className="font-display font-semibold text-fg">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

### 2.5 Lógica de cálculo — `lib/calculators/[id].ts`

```ts
import type { CalculatorResult } from "@/types";

export interface [Id]Input {
  // Campos de entrada tipados
}

export interface [Id]Result {
  // Campos de salida
  resultados: CalculatorResult[];
}

export function [calcularFuncion](input: [Id]Input): [Id]Result {
  // Lógica pura: sin efectos secundarios, sin estado, sin JSX
  // Devuelve un array de CalculatorResult para renderizar
}
```

### 2.6 CalculatorCard — `components/CalculatorCard.tsx`

```tsx
<Link href={calculator.slug}
  className="group block p-6 rounded-xl border border-border bg-surface
    hover:border-accent/30 hover:shadow-sm transition-all duration-200">
  <span className="block mb-3 text-accent" dangerouslySetInnerHTML={{ __html: calculator.icon }} />
  <h3 className="font-display font-semibold text-fg group-hover:text-accent transition-colors">
    {calculator.title}
  </h3>
  <p className="mt-1.5 text-sm text-muted leading-relaxed">{calculator.description}</p>
  <span className="inline-block mt-3 text-xs font-medium text-accent uppercase tracking-widest">
    Calcular ahora &rarr;
  </span>
</Link>
```

**No necesita cambios para nuevas calculadoras** — solo lee del `CALCULATOR_REGISTRY`.

---

## 3. Patrón de registro — paso a paso

Para añadir una calculadora `[id]`:

```
PASO 1  lib/calculators/[id].ts          ← Escribir tipos + función de cálculo
PASO 2  lib/calculators/index.ts          ← Añadir objeto al CALCULATOR_REGISTRY
                                           ← Exportar nueva función
PASO 3  app/[id]/[id]Form.tsx             ← Formulario cliente
PASO 4  app/[id]/page.tsx                 ← Página con SEO + layout + artículo editorial
PASO 5  app/sitemap.ts                    ← Añadir entrada al sitemap
PASO 6  (opcional) app/blog/[slug]/page.tsx  ← Añadir artículo de blog relacionado
PASO 7  (opcional) app/blog/page.tsx      ← Añadir entrada al listado de blog
```

### Qué NO necesita cambios

- `components/Header.tsx` — el nav es estático (Inicio, Calculadoras, Blog)
- `components/Footer.tsx` — los enlaces se añaden manualmente si se desea
- `components/ThemeToggle.tsx` — global
- `components/AdUnit.tsx` — genérico
- `app/layout.tsx` — SEO base y Schema.org ya están configurados
- `types/index.ts` — `CalculatorMeta` y `CalculatorResult` son genéricos

---

## 4. SEO y Schema

### Metadatos por página

Cada página de calculadora exporta `metadata` con:

```ts
export const metadata: Metadata = {
  title: "Calculadora de [Nombre]",
  description: "Palabra clave principal + beneficio + llamada a la acción.",
  openGraph: {
    title: "Calculadora de [Nombre] - Calculadoras Online",
    description: "Versión corta para redes sociales.",
  },
};
```

### Schema.org (global en layout)

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Calculadoras Online",
    description: "Herramientas gratuitas para calcular IMC, IVA y más...",
    url: "https://calculadoras-online.com",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://calculadoras-online.com/?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  }),
}} />
```

### Sitemap

Cada calculadora añade una entrada en `app/sitemap.ts`:

```ts
{ path: "/[id]", lastModified: new Date(), priority: 0.9 },
```

---

## 5. Template de lógica de cálculo

```ts
import type { CalculatorResult } from "@/types";

export interface [Id]Input {
  // 1. Definir campos de entrada (tipados, con unidades)
  campo1: number;
  campo2: number;
}

export interface [Id]Result {
  // 2. Definir campos de salida
  campoPrincipal: number;
  labelPrincipal: string;
  resultados: CalculatorResult[];
}

// 3. Constantes específicas (si aplica)
export const [CONSTANTES] = [
  { value: X, label: "Etiqueta X" },
  { value: Y, label: "Etiqueta Y" },
];

// 4. Función de clasificación/mapeo (si aplica)
function clasificar(valor: number): { label: string; color: string } {
  if (valor < X) return { label: "Categoría A", color: "oklch(...)" };
  if (valor < Y) return { label: "Categoría B", color: "oklch(...)" };
  return { label: "Categoría C", color: "oklch(...)" };
}

// 5. Función principal de cálculo (pura, sin efectos)
export function [calcularFuncion](input: [Id]Input): [Id]Result {
  const resultado = // fórmula matemática
  const { label, color } = clasificar(resultado);

  return {
    campoPrincipal: resultado,
    labelPrincipal: label,
    resultados: [
      { label: "Etiqueta 1", value: resultado.toFixed(X) + " ud" },
      { label: "Etiqueta 2", value: otroValor },
      { label: "Etiqueta 3", value: `${valor} €` },
    ],
  };
}
```

---

## 6. Convenciones de estilo

### CSS classes (Tailwind)

| Elemento | Clases | Origen |
|---|---|---|
| Contenedor página | `max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12` | `app/[id]/page.tsx` |
| Contenedor formulario | `max-w-2xl mx-auto` | `app/[id]/page.tsx` |
| Tarjeta formulario | `p-6 rounded-xl border border-border bg-surface space-y-5` | `[Id]Form.tsx` |
| Botón primario | `px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors` | `[Id]Form.tsx` |
| Botón secundario | `px-4 py-2.5 rounded-lg border border-border text-muted text-sm hover:text-fg hover:bg-border transition-colors` | `[Id]Form.tsx` |
| Input | `w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm` | `[Id]Form.tsx` |
| Fila resultado | `flex items-center justify-between py-3 px-4 rounded-lg bg-bg` | `[Id]Form.tsx` |
| Fila destacada | `bg-accent/10 border border-accent/20` (añadir a la última fila) | `[Id]Form.tsx` |
| Separación vertical | `space-y-5` (form), `space-y-3` (resultados) | `[Id]Form.tsx` |
| Título h1 página | `font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight` | `[Id]Form.tsx` |
| Artículo editorial | `mt-12 prose prose-sm max-w-none` | `app/[id]/page.tsx` |

### Colores (OKLCH)

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `oklch(99% 0.002 240)` | Fondo página |
| `--color-surface` | `oklch(100% 0 0)` | Tarjetas, formularios |
| `--color-fg` | `oklch(18% 0.012 250)` | Texto principal |
| `--color-muted` | `oklch(54% 0.012 250)` | Texto secundario |
| `--color-border` | `oklch(92% 0.005 250)` | Bordes |
| `--color-accent` | `oklch(58% 0.18 255)` | Botones, enlaces |
| `--color-error` | `oklch(55% 0.22 25)` | Validación |

### Validación de formularios

```ts
if (!valor || valor <= 0 || valor > LIMITE) {
  setError("Introduce un [campo] válido (1-[LÍMITE] [unidad])");
  return;
}
```

Mensajes en español, específicos del campo, con rangos visibles.

---

## 7. Checklist de nueva calculadora

- [ ] `lib/calculators/[id].ts` — tipos, función pura, constantes
- [ ] `lib/calculators/index.ts` — registro + export
- [ ] `app/[id]/[id]Form.tsx` — formulario cliente con validación
- [ ] `app/[id]/page.tsx` — página con SEO + layout + artículo editorial
- [ ] `app/sitemap.ts` — entrada en sitemap (priority: 0.9)
- [ ] Blog post en `app/blog/[slug]/page.tsx` (opcional)
- [ ] Blog listing en `app/blog/page.tsx` (opcional)
- [ ] Footer link en `components/Footer.tsx` (opcional)
- [ ] `preview/index.html` — añadir card al grid de preview (opcional)
- [ ] `README.md` — actualizar lista de calculadoras (opcional)

---

## 8. Plantillas de archivos

Ver archivos en `templates/`:

| Archivo | Descripción |
|---|---|
| `templates/calculator-logic.ts` | Plantilla de lógica de cálculo |
| `templates/calculator-form.tsx` | Plantilla de formulario cliente |
| `templates/calculator-page.tsx` | Plantilla de página con SEO |
| `templates/registry-entry.ts` | Plantilla de entrada en el registro |