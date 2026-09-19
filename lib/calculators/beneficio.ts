import type { CalculatorResult } from "@/types";
import { euros, numero } from "@/lib/formato";

export interface BeneficioInput {
  /** Ingresos por ventas del periodo, sin IVA. */
  ingresos: number;
  /** Costes que varían con las ventas: mercancía, materia prima, comisiones. */
  costesVariables: number;
  /** Costes que no dependen del volumen: alquiler, cuotas, salarios base. */
  costesFijos: number;
}

export interface BeneficioResult {
  beneficioBruto: number;
  beneficioNeto: number;
  /** Margen neto sobre ingresos, en porcentaje. */
  margenNeto: number;
  /** Ingresos necesarios para cubrir todos los costes. */
  puntoMuerto: number;
  resultados: CalculatorResult[];
}

/**
 * Calcula beneficio bruto, neto y umbral de rentabilidad del periodo.
 *
 * El punto muerto se obtiene dividiendo los costes fijos entre la ratio
 * de margen de contribución; si esa ratio no es positiva, el negocio
 * pierde dinero en cada venta y el umbral no existe.
 */
export function calcularBeneficio(input: BeneficioInput): BeneficioResult {
  const { ingresos, costesVariables, costesFijos } = input;

  const beneficioBruto = ingresos - costesVariables;
  const beneficioNeto = beneficioBruto - costesFijos;
  const margenNeto = ingresos === 0 ? 0 : (beneficioNeto / ingresos) * 100;

  const ratioContribucion = ingresos === 0 ? 0 : beneficioBruto / ingresos;
  const puntoMuerto = ratioContribucion > 0 ? costesFijos / ratioContribucion : NaN;

  const resultados: CalculatorResult[] = [
    { label: "Beneficio bruto", value: euros(beneficioBruto) },
    { label: "Margen de contribución", value: numero(ratioContribucion * 100, 1) + " %" },
    {
      label: "Punto muerto (facturación mínima)",
      value: isNaN(puntoMuerto) ? "No alcanzable" : euros(puntoMuerto),
    },
    { label: "Margen neto", value: numero(margenNeto, 2) + " %" },
    { label: "Beneficio neto", value: euros(beneficioNeto) },
  ];

  return { beneficioBruto, beneficioNeto, margenNeto, puntoMuerto, resultados };
}
