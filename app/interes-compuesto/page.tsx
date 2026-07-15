import type { Metadata } from "next";
import InteresCompuestoForm from "./InteresCompuestoForm";

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto",
  description: "Calcula el crecimiento de tu inversión con interés compuesto y aportaciones periódicas. Gratis.",
  openGraph: { title: "Calculadora de Interés Compuesto - Calculadoras Online", description: "Haz crecer tu dinero. Calcula el interés compuesto." },
};

export default function InteresCompuestoPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="interes-compuesto-heading">Calculadora de Interés Compuesto</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">El interés compuesto es la fuerza más poderosa del universo financiero. Calcula cómo crece tu dinero con aportaciones periódicas.</p>
        </div>
        <InteresCompuestoForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Qué es el interés compuesto?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">El interés compuesto es el interés sobre el interés. Reinviertes los intereses generados, que a su vez generan más intereses. Con el tiempo, el crecimiento se acelera exponencialmente.</p>
          <h2 className="font-display font-semibold text-lg text-fg">La regla del 72</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Para estimar cuánto tarda tu inversión en duplicarse, divide 72 entre la tasa de interés anual. Por ejemplo, al 8% anual: 72/8 = 9 años para duplicar tu capital.</p>
        </article>
      </div>
    </div>
  );
}