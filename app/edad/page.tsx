import type { Metadata } from "next";
import EdadForm from "./EdadForm";

export const metadata: Metadata = {
  title: "Calculadora de Edad",
  description: "Calcula tu edad exacta en años, meses y días. Calculadora de edad gratuita.",
  openGraph: { title: "Calculadora de Edad - Calculadoras Online", description: "Calcula tu edad exacta al instante." },
};

export default function EdadPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="edad-heading">Calculadora de Edad</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Calcula tu edad exacta a partir de tu fecha de nacimiento. Obtén años, meses y días.</p>
        </div>
        <EdadForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Cómo calcular la edad exacta?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Para calcular la edad exacta, resta tu fecha de nacimiento de la fecha actual. El resultado son los años, meses y días que has vivido.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Curiosidades</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Tu edad en días es aproximadamente tu edad en años multiplicada por 365.25 (incluyendo años bisiestos).</p>
        </article>
      </div>
    </div>
  );
}