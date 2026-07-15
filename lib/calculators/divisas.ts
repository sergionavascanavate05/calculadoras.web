import type { CalculatorResult } from "@/types";

export interface DivisasInput {
  cantidad: number;
  tipoIVA: number;
  modo: "anadir" | "incluir";
}

export interface DivisasResult {
  sinIVA: number;
  conIVA: number;
  iva: number;
  tipoIVA: number;
  resultados: CalculatorResult[];
}

export const DIVISAS_TIPOIVA = [
  { value: 21, label: "General (21%)" },
  { value: 10, label: "Reducido (10%)" },
  { value: 4, label: "Superreducido (4%)" },
];

export function calcularDivisas(input: DivisasInput): DivisasResult {
  const { cantidad, tipoIVA, modo } = input;
  const tipo = tipoIVA / 100;
  if (modo === "anadir") {
    const iva = cantidad * tipo;
    const conIVA = cantidad + iva;
    return { sinIVA: cantidad, conIVA, iva, tipoIVA,
      resultados: [
        { label: "Importe sin IVA", value: cantidad.toFixed(2) + " €" },
        { label: "IVA (" + tipoIVA + "%)", value: iva.toFixed(2) + " €" },
        { label: "Importe con IVA", value: conIVA.toFixed(2) + " €" },
      ],};
  }
  const sinIVA = cantidad / (1 + tipo);
  const iva = cantidad - sinIVA;
  return { sinIVA, conIVA: cantidad, iva, tipoIVA,
    resultados: [
      { label: "Importe sin IVA", value: sinIVA.toFixed(2) + " €" },
      { label: "IVA (" + tipoIVA + "%)", value: iva.toFixed(2) + " €" },
      { label: "Importe con IVA", value: cantidad.toFixed(2) + " €" },
    ],};
}