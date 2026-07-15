// ============================================================
// PLANTILLA: Entrada en el registro — lib/calculators/index.ts
// Añade esta línea al array CALCULATOR_REGISTRY
// ============================================================

{
  id: "[id]",
  title: "Calculadora de [Nombre]",
  description: "[Descripción para el card y meta description. Máx 120 chars]",
  slug: "/[id]",
  icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <!-- SVG de 28x28, stroke-width 1.8, clean icon -->
    <path d="..." />
  </svg>`,
  category: "[categoria]",
}

// ============================================================
// También añadir al export:
//   export { [calcularFuncion] } from "./[id]";
//   export type { [Id]Input, [Id]Result } from "./[id]";
// ============================================================