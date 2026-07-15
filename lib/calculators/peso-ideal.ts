import type { CalculatorResult } from "@/types";

export interface PesoIdealInput {
  altura: number;
  edad: number;
}

export interface PesoIdealResult {
  peso_ideal: number;
  resultados: CalculatorResult[];
}

export function calcularPesoIdeal(input: PesoIdealInput): PesoIdealResult {
  const { altura, edad } = input;
  const resultado = 50 + 0.91 * (altura - 152.4);
  const redondeado = Math.round(resultado * 10) / 10;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " kg" },
  ];
  return { peso_ideal: redondeado, resultados };
}