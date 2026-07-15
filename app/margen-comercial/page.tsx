import type { Metadata } from "next";
import MargenComercialForm from "./MargenComercialForm";

export const metadata: Metadata = {
  title: "Calculadora de Margen Comercial",
  description: "Calcula el margen comercial de cualquier importe al tipo general (21%), reducido (10%) o superreducido (4%). Incluye o excluye el IVA automáticamente.",
  openGraph: { title: "Calculadora de Margen Comercial - Calculadoras Online", description: "Calcula el margen comercial de cualquier importe. Tipos: general 21%, reducido 10%, superreducido 4%." },
};

export default function MargenComercialPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="margen-comercial-heading">Calculadora de Margen Comercial</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Calcula el margen comercial de cualquier importe al tipo general, reducido o superreducido. Puedes calcular el margen comercial incluido o añadirlo al importe base.</p>
        </div>
        <MargenComercialForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">Tipos de IVA en España</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">En España existen tres tipos de IVA: el tipo general del 21% que se aplica a la mayoría de productos y servicios; el tipo reducido del 10% para alimentos, transporte y vivienda; y el tipo superreducido del 4% para pan, leche, frutas, medicamentos y libros.</p>
          <h2 className="font-display font-semibold text-lg text-fg">¿Cómo se calcula?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Para añadir el IVA: multiplica el importe base por el porcentaje de IVA y súmalo. Para obtener la base desde un importe con IVA incluido: divide entre 1 + el porcentaje en decimal.</p>
        </article>
      </div>
    </div>
  );
}