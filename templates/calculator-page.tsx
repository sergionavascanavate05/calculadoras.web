// ============================================================
// PLANTILLA: Página de calculadora — app/[id]/page.tsx
// Copia este archivo y reemplaza:
//   [Id]     → nombre del tipo (ej: "Hipoteca")
//   [id]     → slug del tipo (ej: "hipoteca")
//   [Nombre] → nombre visible en español (ej: "Hipoteca")
//   [keywords] → palabras clave SEO
// ============================================================

import type { Metadata } from "next";
import [Id]Form from "./[Id]Form";

export const metadata: Metadata = {
  title: "Calculadora de [Nombre]",
  description:
    "Calcula [keywords] gratis. [Beneficio principal para el usuario].",
  openGraph: {
    title: "Calculadora de [Nombre] - Calculadoras Online",
    description:
      "Calcula [keywords] gratis. [Descripción corta para redes].",
  },
};

export default function [Id]Page() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1
            className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight"
            data-od-id="[id]-heading"
          >
            Calculadora de [Nombre]
          </h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
            [Descripción de 1-2 líneas explicando qué hace la calculadora y para quién es útil.]
          </p>
        </div>

        <[Id]Form />

        {/*
          ==============================================================
          ARTÍCULO EDITORIAL SEO
          Contenido informativo que responde preguntas frecuentes.
          Mejora el posicionamiento en buscadores y la retención.
          ==============================================================
        */}
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">
            ¿Qué es [Nombre]?
          </h2>
          <p className="text-muted text-sm leading-relaxed mt-2">
            [Explicación del concepto, cómo funciona, por qué es importante.
            Incluir palabras clave de forma natural. 2-3 párrafos.]
          </p>

          <h2 className="font-display font-semibold text-lg text-fg mt-6">
            ¿Cómo se calcula [Nombre]?
          </h2>
          <p className="text-muted text-sm leading-relaxed mt-2">
            [Explicación de la fórmula o método de cálculo.
            Incluir ejemplo práctico con números reales.]
          </p>

          <h2 className="font-display font-semibold text-lg text-fg mt-6">
            Limitaciones
          </h2>
          <p className="text-muted text-sm leading-relaxed mt-2">
            [Advertencias sobre las limitaciones del cálculo.
            Recomendar consulta profesional si aplica.]
          </p>
        </article>
      </div>
    </div>
  );
}