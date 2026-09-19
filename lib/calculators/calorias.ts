import type { CalculatorResult } from "@/types";
import { numero } from "@/lib/formato";

export interface CaloriasInput {
  peso: number;
  /** Duración de la actividad, en minutos. */
  duracion: number;
  /** Equivalente metabólico de la actividad; ver ACTIVIDADES. */
  met: number;
}

export interface CaloriasResult {
  calorias: number;
  /** Kilocalorías por minuto de actividad. */
  porMinuto: number;
  resultados: CalculatorResult[];
}

/**
 * Valores MET (equivalente metabólico) del Compendium of Physical
 * Activities. Un MET equivale al gasto en reposo; una actividad de 8 MET
 * consume ocho veces esa energía.
 */
export const ACTIVIDADES = [
  { value: 2.5, label: "Caminar lento (3 km/h)" },
  { value: 3.5, label: "Caminar a paso ligero (5 km/h)" },
  { value: 4.0, label: "Tareas domésticas" },
  { value: 4.5, label: "Bicicleta suave (16 km/h)" },
  { value: 5.0, label: "Baile" },
  { value: 5.5, label: "Natación recreativa" },
  { value: 6.0, label: "Entrenamiento de fuerza vigoroso" },
  { value: 7.0, label: "Correr suave (8 km/h)" },
  { value: 8.0, label: "Bicicleta moderada (20 km/h)" },
  { value: 8.5, label: "Fútbol" },
  { value: 9.8, label: "Correr (10 km/h)" },
  { value: 11.5, label: "Correr rápido (12 km/h)" },
  { value: 12.0, label: "Natación intensa" },
];

/**
 * Calcula el gasto calórico de una actividad por el método MET:
 * kcal = MET × 3,5 × peso(kg) ÷ 200 × minutos.
 */
export function calcularCalorias(input: CaloriasInput): CaloriasResult {
  const { peso, duracion, met } = input;

  const porMinuto = (met * 3.5 * peso) / 200;
  const calorias = porMinuto * duracion;

  return {
    calorias,
    porMinuto,
    resultados: [
      { label: "Gasto por minuto", value: numero(porMinuto, 1) + " kcal/min" },
      { label: "Intensidad de la actividad", value: numero(met, 1) + " MET" },
      { label: "Calorías quemadas", value: numero(calorias, 0) + " kcal" },
    ],
  };
}
