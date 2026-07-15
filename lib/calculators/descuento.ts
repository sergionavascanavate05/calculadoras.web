import type { CalculatorResult } from "@/types";

export interface DescuentoInput {
  precio: number;
  descuento: number;
}

export interface DescuentoResult {
  descuento: number;
  resultados: CalculatorResult[];
}

export function calcularDescuento(input: DescuentoInput): DescuentoResult {
  const { precio, descuento } = input;
  const resultado = precio * (1 - descuento / 100);
  const redondeado = Math.round(resultado * 100) / 100;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " €" },
    { label: "Ahorro", value: Math.round((precio * descuento / 100) * 10) / 10 + " €" },
  ];
  return { descuento: redondeado, resultados };
}