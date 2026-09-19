/**
 * Datos del sitio y del titular.
 *
 * ⚠️ ANTES DE PUBLICAR: sustituye los valores marcados como PENDIENTE.
 * El aviso legal y la política de privacidad son obligatorios (LSSI-CE y
 * RGPD) y además AdSense exige una política de privacidad válida. Dejar
 * estos marcadores sin rellenar impide que te aprueben.
 */

export const SITIO = {
  nombre: "Calculadoras Online",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://calculadoras-online.com",

  /** Nombre y apellidos o razón social del titular. */
  titular: "PENDIENTE: tu nombre y apellidos",

  /** NIF/CIF del titular. Obligatorio por el artículo 10 de la LSSI-CE. */
  nif: "PENDIENTE: tu NIF",

  /** Domicilio del titular. Obligatorio por el artículo 10 de la LSSI-CE. */
  domicilio: "PENDIENTE: tu domicilio",

  /** Correo de contacto, también para ejercer derechos RGPD. */
  email: "PENDIENTE: tu-correo@ejemplo.com",
} as const;

/** true si queda algún marcador sin rellenar. */
export function faltanDatosDelTitular(): boolean {
  return [SITIO.titular, SITIO.nif, SITIO.domicilio, SITIO.email].some((v) =>
    v.startsWith("PENDIENTE")
  );
}

export const ACTUALIZACION_LEGAL = "19 de septiembre de 2026";
