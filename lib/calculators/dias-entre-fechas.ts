import type { CalculatorResult } from "@/types";

export interface DiasEntreFechasInput {
  valor: number;
  total: number;
}

export interface DiasEntreFechasResult {
  dias_entre_fechas: number;
  resultados: CalculatorResult[];
}

export function calcularDiasEntreFechas(input: DiasEntreFechasInput): DiasEntreFechasResult {
  const { valor, total } = input;
  const resultado = (valor / total) * 100;
  const redondeado = Math.round(resultado * 10) / 10;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + "%" },
  ];
  return { dias_entre_fechas: redondeado, resultados };
}