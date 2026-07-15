import type { CalculatorResult } from "@/types";

export interface InteresCompuestoInput {
  capital: number;
  aporte: number;
  interes: number;
  años: number;
}

export interface InteresCompuestoResult {
  interes_compuesto: number;
  resultados: CalculatorResult[];
}

export function calcularInteresCompuesto(input: InteresCompuestoInput): InteresCompuestoResult {
  const { capital, aporte, interes, años } = input;
  const resultado = capital * Math.pow(1 + interes / 100 / 12, años * 12) + aporte * (Math.pow(1 + interes / 100 / 12, años * 12) - 1) / (interes / 100 / 12);
  const redondeado = Math.round(resultado * 100) / 100;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " €" },
  ];
  return { interes_compuesto: redondeado, resultados };
}