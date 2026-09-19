import type { Metadata } from "next";
import Link from "next/link";
import PaginaLegal, { SeccionLegal } from "@/components/PaginaLegal";
import { SITIO } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento de datos personales, cookies y publicidad en Calculadoras Online.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <PaginaLegal titulo="Política de Privacidad">
      <SeccionLegal titulo="Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos recogidos a través de {SITIO.nombre} es{" "}
          <strong>{SITIO.titular}</strong>, con NIF {SITIO.nif} y domicilio en {SITIO.domicilio}.
        </p>
        <p>
          Puedes contactar para cualquier cuestión relacionada con la protección de datos en{" "}
          <strong>{SITIO.email}</strong>.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Qué datos tratamos">
        <p>
          Las calculadoras de este sitio funcionan íntegramente en tu navegador. Los valores que
          introduces (peso, altura, importes, fechas o cualquier otro dato) <strong>no se envían
          a ningún servidor, no se almacenan y no quedan registrados</strong>. Al cerrar o recargar
          la página desaparecen.
        </p>
        <p>
          No solicitamos registro ni creación de cuenta, y no recogemos nombre, correo electrónico
          ni datos identificativos salvo que nos escribas voluntariamente a la dirección de
          contacto.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Datos recogidos por terceros">
        <p>
          Utilizamos servicios de terceros que sí pueden recoger información sobre tu visita:
        </p>
        <ul className="space-y-2 pl-5 list-disc marker:text-accent">
          <li>
            <strong>Google AdSense</strong>, para mostrar publicidad. Google y sus socios pueden
            emplear cookies e identificadores para mostrar anuncios basados en tus visitas
            anteriores a este u otros sitios web.
          </li>
          <li>
            <strong>Proveedor de alojamiento</strong>, que registra datos técnicos de acceso
            (dirección IP, navegador y fecha) con fines de seguridad y funcionamiento del servicio.
          </li>
        </ul>
        <p>
          Puedes inhabilitar la publicidad personalizada en los{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            ajustes de anuncios de Google
          </a>
          , o configurar las opciones de terceros proveedores en{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            aboutads.info
          </a>
          .
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Base jurídica y finalidad">
        <p>
          El tratamiento de datos técnicos necesarios para prestar el servicio se basa en el
          interés legítimo en mantener el sitio operativo y seguro. El uso de cookies publicitarias
          y de analítica se basa en tu <strong>consentimiento</strong>, que puedes otorgar o
          retirar en cualquier momento desde el aviso de cookies.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Conservación y destinatarios">
        <p>
          No conservamos datos personales propios. Los datos que tratan los terceros mencionados se
          rigen por sus respectivas políticas de privacidad y plazos de conservación.
        </p>
        <p>
          Algunos de estos proveedores pueden realizar transferencias internacionales de datos
          fuera del Espacio Económico Europeo, amparadas en las garantías previstas en el Reglamento
          General de Protección de Datos.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Tus derechos">
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del
          tratamiento y portabilidad escribiendo a <strong>{SITIO.email}</strong>.
        </p>
        <p>
          Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una
          reclamación ante la{" "}
          <a
            href="https://www.aepd.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Agencia Española de Protección de Datos
          </a>
          .
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Cookies">
        <p>
          El detalle de las cookies utilizadas está disponible en la{" "}
          <Link href="/cookies" className="text-accent underline underline-offset-2">
            política de cookies
          </Link>
          .
        </p>
      </SeccionLegal>
    </PaginaLegal>
  );
}
