import type { Metadata } from "next";
import Link from "next/link";
import PaginaLegal, { SeccionLegal } from "@/components/PaginaLegal";
import { SITIO } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cómo contactar con Calculadoras Online para sugerencias, correcciones o cuestiones sobre privacidad.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <PaginaLegal titulo="Contacto">
      <SeccionLegal titulo="Escríbenos">
        <p>
          Puedes contactar por correo electrónico en <strong>{SITIO.email}</strong>. Respondemos a
          todas las consultas, aunque el plazo puede variar.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Con qué podemos ayudarte">
        <ul className="space-y-1.5 pl-5 list-disc marker:text-accent">
          <li>
            <strong>Errores de cálculo.</strong> Si crees que una calculadora devuelve un resultado
            incorrecto, indícanos los valores que introdujiste y el resultado que esperabas. Es el
            tipo de aviso que más agradecemos.
          </li>
          <li>
            <strong>Sugerencias de nuevas calculadoras.</strong> Cuéntanos qué necesitas calcular.
          </li>
          <li>
            <strong>Correcciones de contenido.</strong> Si detectas información desactualizada,
            sobre todo en las referencias normativas, avísanos.
          </li>
          <li>
            <strong>Protección de datos.</strong> Para ejercer tus derechos de acceso,
            rectificación o supresión, consulta la{" "}
            <Link href="/privacidad" className="text-accent underline underline-offset-2">
              política de privacidad
            </Link>
            .
          </li>
          <li>
            <strong>Problemas de accesibilidad.</strong> Si encuentras alguna barrera para usar el
            sitio, indícanos qué ocurre y con qué navegador o tecnología de apoyo.
          </li>
        </ul>
      </SeccionLegal>

      <SeccionLegal titulo="Lo que no podemos ofrecer">
        <p>
          No prestamos asesoramiento financiero, fiscal, médico ni jurídico personalizado. Las
          calculadoras son herramientas informativas de uso general, y para decisiones concretas
          conviene acudir a un profesional cualificado.
        </p>
      </SeccionLegal>
    </PaginaLegal>
  );
}
