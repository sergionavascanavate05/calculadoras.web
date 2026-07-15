import type { Metadata } from "next";
import CaloriasForm from "./CaloriasForm";

export const metadata: Metadata = {
  title: "Calculadora de Calorías",
  description: "Calcula las calorías que quemas según tu peso y actividad. Gratis y sin registro.",
  openGraph: { title: "Calculadora de Calorías - Calculadoras Online", description: "Calcula calorías quemadas al instante." },
};

export default function CaloriasPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="calorias-heading">Calculadora de Calorías</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Esta calculadora estima las calorías quemadas durante una actividad física basándose en tu peso corporal y el tiempo de ejercicio.</p>
        </div>
        <CaloriasForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Cómo se calculan las calorías quemadas?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">La fórmula estima el gasto calórico usando el equivalente metabólico (MET). Multiplica tu peso en kg por 0.0175, luego por el valor MET de la actividad y por los minutos de ejercicio.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Factores que afectan al gasto calórico</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">El gasto real varía según la intensidad del ejercicio, la composición corporal, la edad y el sexo. Esta calculadora ofrece una estimación general.</p>
        </article>
      </div>
    </div>
  );
}