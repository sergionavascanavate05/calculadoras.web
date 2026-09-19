/** Utilidades de formato y validación compartidas por las calculadoras. */

/**
 * El español no agrupa los millares en números de cuatro cifras, que es lo
 * que Intl aplica por defecto en es-ES. En tablas de resultados eso produce
 * columnas inconsistentes ("3131,70 €" junto a "77.666,18 €"), así que
 * forzamos la agrupación siempre.
 */
const AGRUPAR = { useGrouping: "always" } as const;

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  ...AGRUPAR,
});

/** Formatea un importe en euros con separadores españoles: 1.234,56 €. */
export function euros(valor: number): string {
  return eur.format(valor);
}

/** Formatea un número con separadores españoles y decimales opcionales. */
export function numero(valor: number, decimales = 2): string {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimales,
    ...AGRUPAR,
  }).format(valor);
}

/** Formatea un porcentaje: 12,5 %. */
export function porcentaje(valor: number, decimales = 2): string {
  return numero(valor, decimales) + " %";
}

export interface RangoNumerico {
  min: number;
  max: number;
  /** Nombre del campo tal y como aparece en el mensaje de error. */
  etiqueta: string;
  /** Unidad mostrada en el mensaje de error, p. ej. "€" o "años". */
  unidad?: string;
}

export type ResultadoValidacion =
  | { ok: true; valor: number }
  | { ok: false; error: string };

/**
 * Valida la entrada de texto de un campo numérico y la convierte a número.
 *
 * Centraliza la comprobación que antes se repetía en cada formulario:
 * campo vacío, longitud desmesurada, valor no numérico y fuera de rango.
 */
export function validarNumero(
  entrada: string,
  rango: RangoNumerico
): ResultadoValidacion {
  const limpio = entrada.trim().replace(",", ".");

  if (!limpio) {
    return { ok: false, error: `Introduce ${rango.etiqueta}.` };
  }
  if (limpio.length > 20) {
    return { ok: false, error: `El valor de ${rango.etiqueta} es demasiado largo.` };
  }

  const valor = parseFloat(limpio);
  if (isNaN(valor) || !isFinite(valor)) {
    return { ok: false, error: `Introduce un número válido en ${rango.etiqueta}.` };
  }

  if (valor < rango.min || valor > rango.max) {
    const unidad = rango.unidad ? ` ${rango.unidad}` : "";
    return {
      ok: false,
      error: `${capitalizar(rango.etiqueta)} debe estar entre ${numero(rango.min)}${unidad} y ${numero(rango.max)}${unidad}.`,
    };
  }

  return { ok: true, valor };
}

function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
