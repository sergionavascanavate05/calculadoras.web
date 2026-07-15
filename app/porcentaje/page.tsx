import type { Metadata } from "next";
import PorcentajeForm from "./PorcentajeForm";

export const metadata: Metadata = {
  title: "Calculadora de Porcentaje",
  description: "Calcula porcentajes al instante. Calculadora de porcentajes gratuita y fácil de usar.",
  openGraph: { title: "Calculadora de Porcentaje - Calculadoras Online", description: "Calcula porcentajes al instante." },
};

export default function PorcentajePage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="porcentaje-heading">Calculadora de Porcentaje</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Calcula rápidamente qué porcentaje representa una cantidad respecto a un total.</p>
        </div>
        <PorcentajeForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Cómo calcular un porcentaje?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Para calcular el porcentaje que representa un valor respecto a un total, divide el valor entre el total y multiplica por 100. Por ejemplo, 200 de 1000 es (200/1000) × 100 = 20%.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Usos comunes</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Los porcentajes se usan en descuentos, estadísticas, interés, impuestos, propinas y muchas otras situaciones cotidianas.</p>
        </article>
      </div>
    </div>
  );
}