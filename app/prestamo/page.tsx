import type { Metadata } from "next";
import PrestamoForm from "./PrestamoForm";

export const metadata: Metadata = {
  title: "Calculadora de Préstamos",
  description: "Calcula la cuota mensual de tu préstamos. Simulador gratuito con interés fijo.",
  openGraph: { title: "Calculadora de Préstamos - Calculadoras Online", description: "Simula tu préstamos al instante." },
};

export default function PrestamoPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="prestamo-heading">Calculadora de Préstamos</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Calcula la cuota mensual de tu préstamos según el monto, el interés anual y el plazo.</p>
        </div>
        <PrestamoForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Cómo se calcula una préstamos?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">La cuota mensual de una préstamos se calcula usando el método francés o de cuota constante. Cada mes pagas la misma cantidad, pero la proporción entre intereses y amortización varía.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Consejos</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Compara diferentes ofertas antes de decidirte. Un menor tipo de interés puede ahorrarte miles de euros durante la vida del préstamo.</p>
        </article>
      </div>
    </div>
  );
}