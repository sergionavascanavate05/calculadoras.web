import type { CalculatorResult } from "@/types";
import { numero } from "@/lib/formato";

export type Sexo = "hombre" | "mujer";

export interface TMBInput {
  peso: number;
  altura: number;
  edad: number;
  sexo: Sexo;
  /** Factor de actividad física; ver NIVELES_ACTIVIDAD. */
  actividad: number;
}

export interface TMBResult {
  /** Tasa metabólica basal, en kcal/día. */
  tmb: number;
  /** Gasto energético total diario, en kcal/día. */
  gastoTotal: number;
  resultados: CalculatorResult[];
}

export const NIVELES_ACTIVIDAD = [
  { value: 1.2, label: "Sedentario (poco o ningún ejercicio)" },
  { value: 1.375, label: "Ligero (ejercicio 1-3 días/semana)" },
  { value: 1.55, label: "Moderado (ejercicio 3-5 días/semana)" },
  { value: 1.725, label: "Alto (ejercicio 6-7 días/semana)" },
  { value: 1.9, label: "Muy alto (trabajo físico o doble sesión)" },
];

export const SEXOS: { value: Sexo; label: string }[] = [
  { value: "hombre", label: "Hombre" },
  { value: "mujer", label: "Mujer" },
];

/**
 * Tasa metabólica basal por la ecuación de Mifflin-St Jeor, que es la que
 * mejor se ajusta en población general según las revisiones de la Academy
 * of Nutrition and Dietetics, y gasto total aplicando el factor de actividad.
 */
export function calcularTMB(input: TMBInput): TMBResult {
  const { peso, altura, edad, sexo, actividad } = input;

  const base = 10 * peso + 6.25 * altura - 5 * edad;
  const tmb = sexo === "hombre" ? base + 5 : base - 161;
  const gastoTotal = tmb * actividad;

  return {
    tmb,
    gastoTotal,
    resultados: [
      { label: "Tasa metabólica basal (en reposo)", value: numero(tmb, 0) + " kcal/día" },
      { label: "Déficit moderado (−500 kcal)", value: numero(gastoTotal - 500, 0) + " kcal/día" },
      { label: "Superávit moderado (+300 kcal)", value: numero(gastoTotal + 300, 0) + " kcal/día" },
      { label: "Gasto energético total diario", value: numero(gastoTotal, 0) + " kcal/día" },
    ],
  };
}
