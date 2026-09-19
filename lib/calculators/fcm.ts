import type { CalculatorResult } from "@/types";
import { numero } from "@/lib/formato";

export interface FCMInput {
  edad: number;
  /** Frecuencia cardíaca en reposo, opcional. Si se aporta se usa Karvonen. */
  reposo?: number;
}

export interface ZonaEntrenamiento {
  nombre: string;
  desde: number;
  hasta: number;
  descripcion: string;
}

export interface FCMResult {
  /** Fórmula clásica de Fox: 220 − edad. */
  fox: number;
  /** Fórmula de Tanaka: 208 − 0,7 × edad, más precisa en adultos. */
  tanaka: number;
  zonas: ZonaEntrenamiento[];
  resultados: CalculatorResult[];
}

const ZONAS = [
  { nombre: "Z1 · Recuperación", desde: 0.5, hasta: 0.6, descripcion: "Calentamiento y recuperación activa." },
  { nombre: "Z2 · Base aeróbica", desde: 0.6, hasta: 0.7, descripcion: "Resistencia de fondo; se puede conversar." },
  { nombre: "Z3 · Aeróbico", desde: 0.7, hasta: 0.8, descripcion: "Mejora la capacidad aeróbica. Esfuerzo sostenido." },
  { nombre: "Z4 · Umbral", desde: 0.8, hasta: 0.9, descripcion: "Cerca del umbral anaeróbico. Exigente." },
  { nombre: "Z5 · Máximo", desde: 0.9, hasta: 1.0, descripcion: "Esfuerzo máximo, solo en intervalos cortos." },
];

/**
 * Estima la frecuencia cardíaca máxima y las zonas de entrenamiento.
 *
 * Se ofrecen Fox (220 − edad), muy extendida, y Tanaka, que las revisiones
 * consideran más ajustada en adultos. Las zonas se calculan sobre Tanaka;
 * si se aporta la frecuencia en reposo se emplea el método de Karvonen,
 * basado en la frecuencia de reserva.
 */
export function calcularFCM(input: FCMInput): FCMResult {
  const { edad, reposo } = input;

  const fox = 220 - edad;
  const tanaka = 208 - 0.7 * edad;

  const usaKarvonen = typeof reposo === "number" && reposo > 0 && reposo < tanaka;
  const reserva = usaKarvonen ? tanaka - (reposo as number) : tanaka;
  const base = usaKarvonen ? (reposo as number) : 0;

  const zonas: ZonaEntrenamiento[] = ZONAS.map((z) => ({
    nombre: z.nombre,
    descripcion: z.descripcion,
    desde: Math.round(base + reserva * z.desde),
    hasta: Math.round(base + reserva * z.hasta),
  }));

  const resultados: CalculatorResult[] = [
    { label: "FC máxima (Tanaka)", value: numero(tanaka, 0) + " ppm" },
    { label: "FC máxima (Fox, 220 − edad)", value: numero(fox, 0) + " ppm" },
    ...zonas.map((z) => ({
      label: z.nombre,
      value: `${z.desde} – ${z.hasta} ppm`,
    })),
  ];

  return { fox, tanaka, zonas, resultados };
}
