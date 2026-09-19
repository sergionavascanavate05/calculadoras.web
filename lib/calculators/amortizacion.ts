import type { CalculatorResult } from "@/types";
import { euros, numero } from "@/lib/formato";

export interface AmortizacionInput {
  /** Capital prestado, en euros. */
  capital: number;
  /** Tipo de interés nominal anual, en porcentaje. */
  interes: number;
  /** Plazo total, en años. */
  plazo: number;
}

export interface FilaAmortizacion {
  periodo: number;
  cuota: number;
  intereses: number;
  capital: number;
  pendiente: number;
}

export interface AmortizacionResult {
  cuota: number;
  totalIntereses: number;
  totalPagado: number;
  /** Cuadro completo, una fila por mensualidad. */
  cuadro: FilaAmortizacion[];
  resultados: CalculatorResult[];
}

/**
 * Cuadro de amortización por el sistema francés (cuota constante),
 * que es el empleado por las entidades españolas.
 */
export function calcularAmortizacion(input: AmortizacionInput): AmortizacionResult {
  const { capital, interes, plazo } = input;
  const i = interes / 100 / 12;
  const n = Math.round(plazo * 12);

  // Con interés cero la cuota es el simple reparto del capital.
  const cuota = i === 0 ? capital / n : (capital * i) / (1 - Math.pow(1 + i, -n));

  const cuadro: FilaAmortizacion[] = [];
  let pendiente = capital;
  let totalIntereses = 0;

  for (let periodo = 1; periodo <= n; periodo++) {
    const intereses = pendiente * i;
    // La última cuota absorbe el redondeo acumulado.
    const amortizado = periodo === n ? pendiente : cuota - intereses;
    pendiente = Math.max(0, pendiente - amortizado);
    totalIntereses += intereses;
    cuadro.push({ periodo, cuota: intereses + amortizado, intereses, capital: amortizado, pendiente });
  }

  const totalPagado = capital + totalIntereses;
  const primerAnio = cuadro.slice(0, Math.min(12, n));
  const capitalPrimerAnio = primerAnio.reduce((s, f) => s + f.capital, 0);

  return {
    cuota,
    totalIntereses,
    totalPagado,
    cuadro,
    resultados: [
      { label: "Cuota mensual", value: euros(cuota) },
      { label: "Capital amortizado el primer año", value: euros(capitalPrimerAnio) },
      { label: "Intereses totales", value: euros(totalIntereses) },
      { label: "Total a pagar", value: euros(totalPagado) },
      {
        label: "Intereses sobre el capital",
        value: numero((totalIntereses / capital) * 100, 1) + " %",
      },
    ],
  };
}
