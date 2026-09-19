import type { CalculatorResult } from "@/types";
import { euros, numero } from "@/lib/formato";

export interface InflacionInput {
  /** Importe de partida, en euros de hoy. */
  importe: number;
  /** Inflación media anual, en porcentaje. */
  inflacion: number;
  /** Número de años transcurridos. */
  anios: number;
}

export interface InflacionResult {
  /** Poder adquisitivo del importe tras el periodo. */
  valorReal: number;
  /** Cantidad necesaria en el futuro para comprar lo mismo que hoy. */
  equivalente: number;
  perdida: number;
  /** Porcentaje de poder adquisitivo perdido. */
  perdidaPorcentaje: number;
  resultados: CalculatorResult[];
}

/**
 * Calcula el efecto de la inflación sobre un importe a lo largo del tiempo.
 *
 * Se ofrecen las dos lecturas complementarias: cuánto valdrá realmente ese
 * dinero (poder adquisitivo) y cuánto haría falta para mantener la misma
 * capacidad de compra.
 */
export function calcularInflacion(input: InflacionInput): InflacionResult {
  const { importe, inflacion, anios } = input;
  const factor = Math.pow(1 + inflacion / 100, anios);

  const valorReal = importe / factor;
  const equivalente = importe * factor;
  const perdida = importe - valorReal;
  const perdidaPorcentaje = importe === 0 ? 0 : (perdida / importe) * 100;

  return {
    valorReal,
    equivalente,
    perdida,
    perdidaPorcentaje,
    resultados: [
      { label: `Poder de compra dentro de ${numero(anios, 0)} años`, value: euros(valorReal) },
      { label: "Pérdida de poder adquisitivo", value: euros(perdida) },
      { label: "Porcentaje perdido", value: numero(perdidaPorcentaje, 1) + " %" },
      { label: "Necesitarás tener", value: euros(equivalente) },
    ],
  };
}
