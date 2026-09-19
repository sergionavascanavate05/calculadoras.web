import type { CalculatorResult } from "@/types";
import { euros, numero } from "@/lib/formato";

export interface MargenComercialInput {
  /** Coste de adquisición o producción, sin IVA. */
  coste: number;
  /** Precio de venta, sin IVA. */
  precio: number;
}

export interface MargenComercialResult {
  beneficio: number;
  /** Margen sobre el precio de venta, en porcentaje. */
  margen: number;
  /** Marcaje sobre el coste (markup), en porcentaje. */
  marcaje: number;
  /** Multiplicador que hay que aplicar al coste para llegar al precio. */
  multiplicador: number;
  resultados: CalculatorResult[];
}

/**
 * Calcula margen y marcaje a partir de coste y precio de venta.
 *
 * El margen se calcula sobre el PRECIO y el marcaje sobre el COSTE: son
 * dos indicadores distintos y confundirlos es el error habitual al fijar
 * precios. Ambos importes deben introducirse sin IVA.
 */
export function calcularMargenComercial(
  input: MargenComercialInput
): MargenComercialResult {
  const { coste, precio } = input;
  const beneficio = precio - coste;
  const margen = precio === 0 ? 0 : (beneficio / precio) * 100;
  const marcaje = coste === 0 ? 0 : (beneficio / coste) * 100;
  const multiplicador = coste === 0 ? 0 : precio / coste;

  return {
    beneficio,
    margen,
    marcaje,
    multiplicador,
    resultados: [
      { label: "Beneficio por unidad", value: euros(beneficio) },
      { label: "Margen (sobre precio de venta)", value: numero(margen, 2) + " %" },
      { label: "Marcaje / markup (sobre coste)", value: numero(marcaje, 2) + " %" },
      { label: "Multiplicador sobre coste", value: "× " + numero(multiplicador, 3) },
    ],
  };
}
