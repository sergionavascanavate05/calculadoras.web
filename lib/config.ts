/**
 * Datos del sitio y del titular.
 *
 * Los datos personales se leen de variables de entorno en lugar de estar
 * escritos aquí: el repositorio es público y el NIF y el domicilio
 * quedarían en el historial de git de forma permanente.
 *
 * Configúralas en Vercel → Settings → Environment Variables, o en un
 * archivo .env.local para desarrollo (ese archivo está en .gitignore).
 *
 * El aviso legal y la política de privacidad son obligatorios (LSSI-CE
 * artículo 10 y RGPD), y AdSense exige una política de privacidad válida.
 * Mientras falten, las páginas legales muestran un aviso visible.
 */

const PENDIENTE = "PENDIENTE";

export const SITIO = {
  nombre: "Calculadoras Online",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://calculadoras-online.com",

  /** Nombre y apellidos o razón social del titular. */
  titular: process.env.NEXT_PUBLIC_TITULAR || PENDIENTE,

  /** NIF/CIF del titular. Obligatorio por el artículo 10 de la LSSI-CE. */
  nif: process.env.NEXT_PUBLIC_NIF || PENDIENTE,

  /** Domicilio del titular. Puede ser un apartado de correos. */
  domicilio: process.env.NEXT_PUBLIC_DOMICILIO || PENDIENTE,

  /** Correo de contacto, también para ejercer derechos RGPD. */
  email: process.env.NEXT_PUBLIC_EMAIL_CONTACTO || PENDIENTE,
} as const;

/** true si queda algún dato del titular sin configurar. */
export function faltanDatosDelTitular(): boolean {
  return [SITIO.titular, SITIO.nif, SITIO.domicilio, SITIO.email].some(
    (v) => v === PENDIENTE
  );
}

export const ACTUALIZACION_LEGAL = "19 de septiembre de 2026";
