import type { CalculatorResult } from "@/types";

export interface TMBInput {
  peso: number;
  altura: number;
}

export interface TMBResult {
  tmb: number;
  clasificacion: string;
  color: string;
  resultados: CalculatorResult[];
}

function clasificarTMB(valor: number): { clasificacion: string; color: string } {
  if (valor < 16) return { clasificacion: "Delgadez severa", color: "oklch(55% 0.2 30)" };
  if (valor < 17) return { clasificacion: "Delgadez moderada", color: "oklch(60% 0.18 40)" };
  if (valor < 18.5) return { clasificacion: "Delgadez leve", color: "oklch(65% 0.15 50)" };
  if (valor < 25) return { clasificacion: "Normal", color: "oklch(55% 0.15 145)" };
  if (valor < 30) return { clasificacion: "Sobrepeso", color: "oklch(60% 0.18 80)" };
  if (valor < 35) return { clasificacion: "Obesidad grado I", color: "oklch(55% 0.2 30)" };
  if (valor < 40) return { clasificacion: "Obesidad grado II", color: "oklch(50% 0.22 25)" };
  if (valor < Infinity) return { clasificacion: "Obesidad grado III", color: "oklch(45% 0.25 20)" };
  return { clasificacion: "Desconocido", color: "oklch(50% 0 0)" };
}

export function calcularTMB(input: TMBInput): TMBResult {
  const { peso, altura } = input;
  const resultado = peso / ((altura / 100) ** 2);
  const redondeado = Math.round(resultado * 10) / 10;
  const { clasificacion, color } = clasificarTMB(redondeado);
  const resultados: CalculatorResult[] = [
    { label: "Tu TMB", value: redondeado.toString() },
    { label: "Clasificación", value: clasificacion },
    { label: "Peso saludable mínimo", value: Math.round((18.5 * ((altura / 100) ** 2)) * 10) / 10 + " kg" },
    { label: "Peso saludable máximo", value: Math.round((24.9 * ((altura / 100) ** 2)) * 10) / 10 + " kg" },
  ];
  return { tmb: redondeado, clasificacion, color, resultados };
}