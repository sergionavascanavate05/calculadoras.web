import type { CalculatorResult } from "@/types";

export interface HipotecaInput {
  monto: number;
  interes: number;
  plazo: number;
}

export interface HipotecaResult {
  hipoteca: number;
  resultados: CalculatorResult[];
}

export function calcularHipoteca(input: HipotecaInput): HipotecaResult {
  const { monto, interes, plazo } = input;
  const resultado = monto * (interes / 100 / 12) * Math.pow(1 + interes / 100 / 12, plazo * 12) / (Math.pow(1 + interes / 100 / 12, plazo * 12) - 1);
  const redondeado = Math.round(resultado * 100) / 100;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " €/mes" },
    { label: "Total pagado", value: Math.round(((monto * (interes / 100 / 12) * Math.pow(1 + interes / 100 / 12, plazo * 12) / (Math.pow(1 + interes / 100 / 12, plazo * 12) - 1)) * plazo * 12) * 10) / 10 + " €" },
    { label: "Total intereses", value: Math.round((((monto * (interes / 100 / 12) * Math.pow(1 + interes / 100 / 12, plazo * 12) / (Math.pow(1 + interes / 100 / 12, plazo * 12) - 1)) * plazo * 12) - monto) * 10) / 10 + " €" },
  ];
  return { hipoteca: redondeado, resultados };
}