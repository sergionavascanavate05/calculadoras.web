import type { Metadata } from "next";
import DescuentoForm from "./DescuentoForm";

export const metadata: Metadata = {
  title: "Calculadora de Descuentos",
  description: "Calcula el precio final después de un descuento. Calculadora de descuentos gratuita.",
  openGraph: { title: "Calculadora de Descuentos - Calculadoras Online", description: "Calcula cuánto ahorras con un descuento." },
};

export default function DescuentoPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="descuento-heading">Calculadora de Descuentos</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Calcula cuánto pagarás después de aplicar un descuento. Ideal para compras y ofertas.</p>
        </div>
        <DescuentoForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Cómo calcular un descuento?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Multiplica el precio original por el porcentaje de descuento y divide entre 100 para obtener el ahorro. Resta el ahorro del precio original para obtener el precio final.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Consejos de compra</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Comprueba siempre el precio final antes de comprar. A veces los descuentos parecen mayores de lo que realmente son.</p>
        </article>
      </div>
    </div>
  );
}