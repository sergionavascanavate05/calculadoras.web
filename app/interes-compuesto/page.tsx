import type { Metadata } from "next";
import Link from "next/link";
import InteresCompuestoForm from "./InteresCompuestoForm";
import CalculatorContent from "@/components/CalculatorContent";
import { getContenidoObligatorio } from "@/lib/content";

const ID = "interes-compuesto";
const TITULO = "Calculadora de Interés Compuesto";
const DESCRIPCION = "Calcula cuánto crece tu inversión con interés compuesto y aportaciones periódicas.";
const RUTA = "/interes-compuesto";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: RUTA },
  openGraph: {
    title: `${TITULO} | Calculadoras Online`,
    description: DESCRIPCION,
    type: "website",
    url: RUTA,
    locale: "es_ES",
  },
};

export default function Pagina() {
  const contenido = getContenidoObligatorio(ID);

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <nav aria-label="Ruta de navegación" className="mb-6 text-sm">
          <Link href="/" className="text-muted hover:text-accent transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-subtle" aria-hidden="true">/</span>
          <span className="text-fg">{TITULO}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight">
            {TITULO}
          </h1>
          <p className="mt-3 text-muted text-[0.9375rem] leading-relaxed">
            {contenido.intro}
          </p>
        </header>

        <InteresCompuestoForm />

        <CalculatorContent content={contenido} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
              { "@type": "ListItem", position: 2, name: TITULO, item: RUTA },
            ],
          }),
        }}
      />
    </div>
  );
}
