import type { CalculatorResult } from "@/types";
import { numero } from "@/lib/formato";

export interface DiasEntreFechasInput {
  /** Fecha inicial en formato ISO (YYYY-MM-DD). */
  desde: string;
  /** Fecha final en formato ISO (YYYY-MM-DD). */
  hasta: string;
}

export interface DiasEntreFechasResult {
  dias: number;
  semanas: number;
  laborables: number;
  finDeSemana: number;
  /** Diferencia expresada en años, meses y días de calendario. */
  desglose: { anios: number; meses: number; dias: number };
  resultados: CalculatorResult[];
}

const MS_POR_DIA = 86_400_000;

/**
 * Calcula la diferencia entre dos fechas en días naturales, laborables y
 * su desglose en años, meses y días.
 *
 * Las fechas se interpretan en UTC para que los cambios de horario de
 * verano no introduzcan desfases de un día.
 */
export function calcularDiasEntreFechas(
  input: DiasEntreFechasInput
): DiasEntreFechasResult {
  const inicio = aFechaUTC(input.desde);
  const fin = aFechaUTC(input.hasta);

  const dias = Math.round(Math.abs(fin.getTime() - inicio.getTime()) / MS_POR_DIA);
  const semanas = dias / 7;

  const [menor, mayor] = inicio <= fin ? [inicio, fin] : [fin, inicio];
  const laborables = contarLaborables(menor, mayor);

  return {
    dias,
    semanas,
    laborables,
    finDeSemana: dias - laborables,
    desglose: desglosar(menor, mayor),
    resultados: construirResultados(dias, semanas, laborables, desglosar(menor, mayor)),
  };
}

function aFechaUTC(iso: string): Date {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(a, m - 1, d));
}

/** Cuenta los días de lunes a viernes en el intervalo, sin incluir el final. */
function contarLaborables(inicio: Date, fin: Date): number {
  let total = 0;
  const cursor = new Date(inicio.getTime());
  while (cursor < fin) {
    const dia = cursor.getUTCDay();
    if (dia !== 0 && dia !== 6) total++;
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return total;
}

function desglosar(inicio: Date, fin: Date) {
  let anios = fin.getUTCFullYear() - inicio.getUTCFullYear();
  let meses = fin.getUTCMonth() - inicio.getUTCMonth();
  let dias = fin.getUTCDate() - inicio.getUTCDate();

  if (dias < 0) {
    meses--;
    // Días del mes anterior al de la fecha final.
    dias += new Date(Date.UTC(fin.getUTCFullYear(), fin.getUTCMonth(), 0)).getUTCDate();
  }
  if (meses < 0) {
    anios--;
    meses += 12;
  }
  return { anios, meses, dias };
}

function construirResultados(
  dias: number,
  semanas: number,
  laborables: number,
  desglose: { anios: number; meses: number; dias: number }
): CalculatorResult[] {
  const partes: string[] = [];
  if (desglose.anios) partes.push(`${desglose.anios} ${desglose.anios === 1 ? "año" : "años"}`);
  if (desglose.meses) partes.push(`${desglose.meses} ${desglose.meses === 1 ? "mes" : "meses"}`);
  if (desglose.dias) partes.push(`${desglose.dias} ${desglose.dias === 1 ? "día" : "días"}`);

  return [
    { label: "Equivale a", value: partes.length ? partes.join(", ") : "0 días" },
    { label: "Semanas", value: numero(semanas, 2) },
    { label: "Días laborables (L-V)", value: numero(laborables, 0) },
    { label: "Fines de semana", value: numero(dias - laborables, 0) + " días" },
    { label: "Días totales", value: numero(dias, 0) },
  ];
}
