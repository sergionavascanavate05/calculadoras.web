import type { CalculatorResult } from "@/types";

export interface EdadInput {
  año: number;
  mes: number;
  dia: number;
}

export interface EdadResult {
  resultados: CalculatorResult[];
}

export function calcularEdad(input: EdadInput): EdadResult {
  const hoy = new Date();
  const nacimiento = new Date(input.año, input.mes - 1, input.dia);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mesDiff = hoy.getMonth() - nacimiento.getMonth();
  if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
  return { resultados: [{ label: "Edad", value: edad.toString() + " años" }],};
}