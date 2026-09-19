import type { CalculatorResult } from "@/types";
import { numero } from "@/lib/formato";

export interface DivisasInput {
  /** Cantidad a convertir, en la divisa de origen. */
  cantidad: number;
  /** Unidades de divisa destino por cada unidad de origen. */
  tasa: number;
  /** Comisión o diferencial aplicado por la entidad, en porcentaje. */
  comision: number;
}

export interface DivisasResult {
  /** Conversión a la tasa introducida, sin comisiones. */
  bruto: number;
  /** Importe efectivamente recibido tras aplicar la comisión. */
  neto: number;
  comisionAplicada: number;
  /** Tasa real resultante una vez descontada la comisión. */
  tasaEfectiva: number;
  resultados: CalculatorResult[];
}

/**
 * Convierte un importe entre divisas aplicando una tasa introducida por
 * el usuario y el diferencial que cobra la entidad.
 *
 * No consulta cotizaciones en tiempo real: la tasa la aporta quien calcula.
 * Esto permite comparar la tasa interbancaria con la que ofrece realmente
 * un banco o una casa de cambio, que es donde está el coste oculto.
 */
export function calcularDivisas(input: DivisasInput): DivisasResult {
  const { cantidad, tasa, comision } = input;

  const bruto = cantidad * tasa;
  const comisionAplicada = bruto * (comision / 100);
  const neto = bruto - comisionAplicada;
  const tasaEfectiva = cantidad === 0 ? 0 : neto / cantidad;

  return {
    bruto,
    neto,
    comisionAplicada,
    tasaEfectiva,
    resultados: [
      { label: "Conversión a la tasa indicada", value: numero(bruto, 2) },
      { label: `Comisión (${numero(comision, 2)} %)`, value: "− " + numero(comisionAplicada, 2) },
      { label: "Tasa efectiva real", value: numero(tasaEfectiva, 4) },
      { label: "Recibes", value: numero(neto, 2) },
    ],
  };
}
