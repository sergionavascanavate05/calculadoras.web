// ============================================================
// PLANTILLA: Lógica de cálculo — lib/calculators/[id].ts
// Copia este archivo y reemplaza:
//   [Id]     → nombre del tipo (ej: "Hipoteca")
//   [id]     → slug del tipo (ej: "hipoteca")
//   [calcularFuncion] → nombre de la función (ej: "calcularHipoteca")
// ============================================================

import type { CalculatorResult } from "@/types";

// --- Interfaces de entrada y salida ---

export interface [Id]Input {
  campo1: number;
  campo2: number;
  // Añadir más campos según la calculadora
}

export interface [Id]Result {
  // Campos específicos del resultado
  resultadoPrincipal: number;
  resultados: CalculatorResult[];
}

// --- Constantes específicas (opcional) ---
// Ejemplo: TIPOS_IMP u otras constantes

// --- Función de clasificación (opcional) ---
// function clasificar(valor: number): { label: string; color: string } {
//   if (valor < X) return { label: "Categoría A", color: "oklch(55% 0.15 145)" };
//   if (valor < Y) return { label: "Categoría B", color: "oklch(60% 0.18 80)" };
//   return { label: "Categoría C", color: "oklch(50% 0.22 25)" };
// }

// --- Función principal de cálculo ---

export function [calcularFuncion](input: [Id]Input): [Id]Result {
  const { campo1, campo2 } = input;

  // Validación de entrada
  if (!campo1 || campo1 <= 0) {
    throw new Error("El campo 1 debe ser mayor que 0");
  }
  if (!campo2 || campo2 <= 0) {
    throw new Error("El campo 2 debe ser mayor que 0");
  }

  // Fórmula de cálculo
  const resultado = campo1 * campo2; // ← REEMPLAZAR con la fórmula real

  // Resultados formateados
  const resultados: CalculatorResult[] = [
    { label: "Etiqueta 1", value: resultado.toFixed(2) },
    { label: "Etiqueta 2", value: (resultado * 0.15).toFixed(2) + " €" },
    { label: "Resultado final", value: (resultado * 1.15).toFixed(2) + " €" },
  ];

  return {
    resultadoPrincipal: resultado,
    resultados,
  };
}