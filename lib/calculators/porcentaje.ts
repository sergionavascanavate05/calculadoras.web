import type { CalculatorResult } from "@/types";

export interface PorcentajeInput {
  valor: number;
  total: number;
}

export interface PorcentajeResult {
  porcentaje: number;
  resultados: CalculatorResult[];
}

export function calcularPorcentaje(input: PorcentajeInput): PorcentajeResult {
  const { valor, total } = input;
  const resultado = (valor / total) * 100;
  const redondeado = Math.round(resultado * 10) / 10;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + "%" },
  ];
  return { porcentaje: redondeado, resultados };
}