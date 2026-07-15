import type { Metadata } from "next";
import IMCForm from "./IMCForm";

export const metadata: Metadata = {
  title: "Calculadora de IMC",
  description: "Calcula tu imc gratis. Descubre si tu peso es saludable según la clasificación de la OMS.",
  openGraph: { title: "Calculadora de IMC - Calculadoras Online", description: "Calcula tu imc gratis. Clasificación OMS, peso saludable y rango recomendado." },
};

export default function IMCPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="imc-heading">Calculadora de IMC</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">El imc es una medida que relaciona el peso y la altura para estimar si tu peso se encuentra dentro de un rango saludable.</p>
        </div>
        <IMCForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Qué es el imc?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">El Índice de Masa Corporal es un indicador simple de la relación entre el peso y la talla. Se utiliza frecuentemente para identificar problemas de peso en adultos. La Organización Mundial de la Salud (OMS) establece las categorías: bajo peso (&amp;lt;18.5), normal (18.5-24.9), sobrepeso (25-29.9) y obesidad (&amp;ge;30).</p>
          <h2 className="font-display font-semibold text-lg text-fg">Limitaciones</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">El imc no mide grasa corporal directamente. Atletas con mucha masa muscular pueden tener un imc alto sin tener exceso de grasa. Consulta siempre a un profesional de la salud para una evaluación completa.</p>
        </article>
      </div>
    </div>
  );
}