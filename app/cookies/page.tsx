import type { Metadata } from "next";
import Link from "next/link";
import PaginaLegal, { SeccionLegal } from "@/components/PaginaLegal";
import { SITIO } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Qué cookies utiliza Calculadoras Online, con qué finalidad y cómo puedes gestionarlas o desactivarlas.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <PaginaLegal titulo="Política de Cookies">
      <SeccionLegal titulo="Qué es una cookie">
        <p>
          Una cookie es un pequeño archivo de texto que un sitio web guarda en tu dispositivo
          cuando lo visitas. Sirve para recordar información sobre tu visita, como tus preferencias
          o el hecho de que ya has estado antes.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Cookies que utilizamos">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {["Tipo", "Finalidad", "¿Requiere consentimiento?"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="text-left font-semibold text-fg py-2.5 px-3 border-b border-border-strong"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2.5 px-3 border-b border-border align-top">Técnicas</td>
                <td className="py-2.5 px-3 border-b border-border align-top">
                  Recordar tu preferencia de tema claro u oscuro. Se guarda en el almacenamiento
                  local de tu navegador y no sale de tu dispositivo.
                </td>
                <td className="py-2.5 px-3 border-b border-border align-top">No</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 border-b border-border align-top">Publicitarias</td>
                <td className="py-2.5 px-3 border-b border-border align-top">
                  Google AdSense y sus socios pueden usar cookies para mostrar anuncios y medir su
                  rendimiento, incluidos anuncios personalizados según tu navegación previa.
                </td>
                <td className="py-2.5 px-3 border-b border-border align-top">Sí</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SeccionLegal>

      <SeccionLegal titulo="Cómo gestionarlas o eliminarlas">
        <p>
          Puedes configurar tu navegador para bloquear o eliminar las cookies. Ten en cuenta que
          bloquear las técnicas puede afectar a algunas funciones, como el recuerdo del tema visual.
        </p>
        <ul className="space-y-1.5 pl-5 list-disc marker:text-accent">
          <li>Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
          <li>Firefox: Ajustes → Privacidad &amp; Seguridad → Cookies y datos del sitio.</li>
          <li>Safari: Preferencias → Privacidad → Gestionar datos de sitios web.</li>
          <li>Edge: Configuración → Cookies y permisos del sitio.</li>
        </ul>
        <p>
          Para desactivar específicamente la publicidad personalizada de Google, visita los{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            ajustes de anuncios
          </a>
          .
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Más información">
        <p>
          Consulta también la{" "}
          <Link href="/privacidad" className="text-accent underline underline-offset-2">
            política de privacidad
          </Link>
          . Para cualquier duda, escríbenos a <strong>{SITIO.email}</strong>.
        </p>
      </SeccionLegal>
    </PaginaLegal>
  );
}
