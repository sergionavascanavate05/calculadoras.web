import type { CalculatorResult } from "@/types";

export interface PropinaInput {
  cuenta: number;
  porcentaje: number;
}

export interface PropinaResult {
  propina: number;
  resultados: CalculatorResult[];
}

export function calcularPropina(input: PropinaInput): PropinaResult {
  const { cuenta, porcentaje } = input;
  const resultado = cuenta * (1 + porcentaje / 100);
  const redondeado = Math.round(resultado * 100) / 100;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " €" },
    { label: "Propina", value: Math.round((cuenta * porcentaje / 100) * 10) / 10 + " €" },
  ];
  return { propina: redondeado, resultados };
}