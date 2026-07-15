import type { CalculatorResult } from "@/types";

export interface ConsumoCombustibleInput {
  valor: number;
  total: number;
}

export interface ConsumoCombustibleResult {
  consumo_combustible: number;
  resultados: CalculatorResult[];
}

export function calcularConsumoCombustible(input: ConsumoCombustibleInput): ConsumoCombustibleResult {
  const { valor, total } = input;
  const resultado = (valor / total) * 100;
  const redondeado = Math.round(resultado * 10) / 10;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + "%" },
  ];
  return { consumo_combustible: redondeado, resultados };
}