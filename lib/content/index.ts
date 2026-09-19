import type { CalculatorContent } from "@/types";

import { amortizacionContent } from "./amortizacion";
import { beneficioContent } from "./beneficio";
import { caloriasContent } from "./calorias";
import { consumoCombustibleContent } from "./consumo-combustible";
import { descuentoContent } from "./descuento";
import { diasEntreFechasContent } from "./dias-entre-fechas";
import { divisasContent } from "./divisas";
import { edadContent } from "./edad";
import { fcmContent } from "./fcm";
import { hipotecaContent } from "./hipoteca";
import { imcContent } from "./imc";
import { inflacionContent } from "./inflacion";
import { interesCompuestoContent } from "./interes-compuesto";
import { ivaContent } from "./iva";
import { ivaInversoContent } from "./iva-inverso";
import { margenComercialContent } from "./margen-comercial";
import { pesoIdealContent } from "./peso-ideal";
import { porcentajeContent } from "./porcentaje";
import { prestamoContent } from "./prestamo";
import { propinaContent } from "./propina";
import { tmbContent } from "./tmb";

/** Contenido editorial de cada calculadora, indexado por su id del registro. */
export const CONTENIDO: Record<string, CalculatorContent> = {
  amortizacion: amortizacionContent,
  beneficio: beneficioContent,
  calorias: caloriasContent,
  "consumo-combustible": consumoCombustibleContent,
  descuento: descuentoContent,
  "dias-entre-fechas": diasEntreFechasContent,
  divisas: divisasContent,
  edad: edadContent,
  fcm: fcmContent,
  hipoteca: hipotecaContent,
  imc: imcContent,
  inflacion: inflacionContent,
  "interes-compuesto": interesCompuestoContent,
  iva: ivaContent,
  "iva-inverso": ivaInversoContent,
  "margen-comercial": margenComercialContent,
  "peso-ideal": pesoIdealContent,
  porcentaje: porcentajeContent,
  prestamo: prestamoContent,
  propina: propinaContent,
  tmb: tmbContent,
};

export function getContenido(id: string): CalculatorContent | undefined {
  return CONTENIDO[id];
}

/**
 * Devuelve el contenido de una calculadora o falla la compilación.
 *
 * Las páginas se generan estáticamente, así que un id sin contenido debe
 * romper el build en lugar de publicar una página a medias.
 */
export function getContenidoObligatorio(id: string): CalculatorContent {
  const contenido = CONTENIDO[id];
  if (!contenido) {
    throw new Error(`Falta el contenido editorial de la calculadora "${id}".`);
  }
  return contenido;
}
