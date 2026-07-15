import type { CalculatorResult } from "@/types";

export interface CaloriasInput {
  peso: number;
  duracion: number;
}

export interface CaloriasResult {
  calorias: number;
  resultados: CalculatorResult[];
}

export function calcularCalorias(input: CaloriasInput): CaloriasResult {
  const { peso, duracion } = input;
  const resultado = peso * 0.0175 * 5 * duracion;
  const redondeado = Math.round(resultado * 100) / 100;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " kcal" },
  ];
  return { calorias: redondeado, resultados };
}