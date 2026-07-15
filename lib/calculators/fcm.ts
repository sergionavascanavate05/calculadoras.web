import type { CalculatorResult } from "@/types";

export interface FCMInput {
  edad: number;
}

export interface FCMResult {
  fcm: number;
  resultados: CalculatorResult[];
}

export function calcularFCM(input: FCMInput): FCMResult {
  const { edad } = input;
  const resultado = 220 - edad;
  const redondeado = Math.round(resultado * 100) / 100;
  const resultados: CalculatorResult[] = [
    { label: "Resultado", value: redondeado.toString() + " lpm" },
    { label: "Zona de quema de grasa (60-70%)", value: Math.round(((220 - edad) * 0.65) * 10) / 10 + " lpm" },
    { label: "Zona cardiovascular (70-85%)", value: Math.round(((220 - edad) * 0.775) * 10) / 10 + " lpm" },
  ];
  return { fcm: redondeado, resultados };
}