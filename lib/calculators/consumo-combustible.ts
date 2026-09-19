import type { CalculatorResult } from "@/types";
import { euros, numero } from "@/lib/formato";

export interface ConsumoCombustibleInput {
  /** Distancia recorrida, en kilómetros. */
  kilometros: number;
  /** Combustible consumido, en litros. */
  litros: number;
  /** Precio del combustible, en euros por litro. */
  precioLitro: number;
}

export interface ConsumoCombustibleResult {
  /** Consumo medio en litros por cada 100 km. */
  consumo: number;
  /** Autonomía en kilómetros por litro. */
  kmPorLitro: number;
  costeTotal: number;
  costePorKm: number;
  coste100km: number;
  resultados: CalculatorResult[];
}

/**
 * Calcula el consumo medio real de un vehículo a partir de un repostaje
 * completo y la distancia recorrida desde el anterior.
 */
export function calcularConsumoCombustible(
  input: ConsumoCombustibleInput
): ConsumoCombustibleResult {
  const { kilometros, litros, precioLitro } = input;

  const consumo = kilometros === 0 ? 0 : (litros / kilometros) * 100;
  const kmPorLitro = litros === 0 ? 0 : kilometros / litros;
  const costeTotal = litros * precioLitro;
  const costePorKm = kilometros === 0 ? 0 : costeTotal / kilometros;
  const coste100km = costePorKm * 100;

  return {
    consumo,
    kmPorLitro,
    costeTotal,
    costePorKm,
    coste100km,
    resultados: [
      { label: "Consumo medio", value: numero(consumo, 2) + " L/100 km" },
      { label: "Autonomía", value: numero(kmPorLitro, 2) + " km/L" },
      { label: "Coste del repostaje", value: euros(costeTotal) },
      { label: "Coste por kilómetro", value: numero(costePorKm, 3) + " €/km" },
      { label: "Coste cada 100 km", value: euros(coste100km) },
    ],
  };
}
