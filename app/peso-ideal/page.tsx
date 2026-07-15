import type { Metadata } from "next";
import PesoIdealForm from "./PesoIdealForm";

export const metadata: Metadata = {
  title: "Calculadora de Peso Ideal",
  description: "Calcula tu peso ideal según tu altura y edad. Fórmula de Devine. Gratis.",
  openGraph: { title: "Calculadora de Peso Ideal - Calculadoras Online", description: "Descubre tu peso ideal al instante." },
};

export default function PesoIdealPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="peso-ideal-heading">Calculadora de Peso Ideal</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">El peso ideal es una estimación del peso saludable para una persona según su altura. La fórmula de Devine es una de las más utilizadas.</p>
        </div>
        <PesoIdealForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Qué es el peso ideal?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">El peso ideal es un rango estimado en el que una persona tiene menor riesgo de problemas de salud asociados al peso. Existen varias fórmulas; la de Devine es una de las más usadas en el ámbito clínico.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Limitaciones</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">El peso ideal es una estimación. No tiene en cuenta la composición corporal (músculo vs grasa), la complexión ósea ni la distribución de la grasa.</p>
        </article>
      </div>
    </div>
  );
}