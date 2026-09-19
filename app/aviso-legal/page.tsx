import type { Metadata } from "next";
import PaginaLegal, { SeccionLegal } from "@/components/PaginaLegal";
import { SITIO } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Datos identificativos del titular, condiciones de uso y limitación de responsabilidad de Calculadoras Online.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <PaginaLegal titulo="Aviso Legal">
      <SeccionLegal titulo="Datos identificativos">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la
          Información y de Comercio Electrónico, se informa de los siguientes datos:
        </p>
        <ul className="space-y-1.5 pl-5 list-disc marker:text-accent">
          <li><strong>Titular:</strong> {SITIO.titular}</li>
          <li><strong>NIF:</strong> {SITIO.nif}</li>
          <li><strong>Domicilio:</strong> {SITIO.domicilio}</li>
          <li><strong>Correo electrónico:</strong> {SITIO.email}</li>
          <li><strong>Sitio web:</strong> {SITIO.url}</li>
        </ul>
      </SeccionLegal>

      <SeccionLegal titulo="Objeto del sitio">
        <p>
          {SITIO.nombre} ofrece herramientas de cálculo gratuitas con fines informativos y
          divulgativos. El acceso es libre y no requiere registro.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Limitación de responsabilidad">
        <p>
          Los resultados que devuelven las calculadoras son <strong>estimaciones orientativas</strong>{" "}
          y no constituyen asesoramiento financiero, fiscal, médico, nutricional ni jurídico.
        </p>
        <p>
          En particular: las calculadoras financieras no son ofertas vinculantes y las condiciones
          reales las fija cada entidad; las calculadoras de salud son herramientas de cribado
          general y no sustituyen el criterio de un profesional sanitario; y las referencias
          normativas pueden quedar desactualizadas por cambios legislativos.
        </p>
        <p>
          Antes de tomar cualquier decisión con consecuencias económicas, sanitarias o legales,
          consulta con un profesional cualificado. El titular no se hace responsable de las
          decisiones adoptadas a partir de los resultados de estas herramientas.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Propiedad intelectual">
        <p>
          Los contenidos, el diseño y el código de este sitio son titularidad de {SITIO.titular},
          salvo que se indique otra cosa. Queda prohibida su reproducción con fines comerciales sin
          autorización expresa.
        </p>
        <p>
          Las marcas, logotipos y denominaciones de terceros que puedan aparecer pertenecen a sus
          respectivos titulares y se mencionan únicamente a título informativo.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Enlaces a terceros">
        <p>
          Este sitio puede contener enlaces a páginas externas y muestra publicidad servida por
          terceros. El titular no controla ni responde de sus contenidos ni de sus políticas de
          privacidad.
        </p>
      </SeccionLegal>

      <SeccionLegal titulo="Legislación aplicable">
        <p>
          Las presentes condiciones se rigen por la legislación española. Para la resolución de
          cualquier controversia serán competentes los juzgados y tribunales que correspondan
          conforme a la normativa aplicable.
        </p>
      </SeccionLegal>
    </PaginaLegal>
  );
}
