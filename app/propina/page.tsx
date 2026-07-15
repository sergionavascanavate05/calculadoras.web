import type { Metadata } from "next";
import PropinaForm from "./PropinaForm";

export const metadata: Metadata = {
  title: "Calculadora de Propinas",
  description: "Calcula la propina y el total a pagar en el restaurante. Gratis.",
  openGraph: { title: "Calculadora de Propinas - Calculadoras Online", description: "Calcula la propina al instante." },
};

export default function PropinaPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="propina-heading">Calculadora de Propinas</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">Calcula cuánto dejar de propina y el total final a pagar en el restaurante.</p>
        </div>
        <PropinaForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Cuánto dejar de propina?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">En España no es obligatorio dejar propina, pero es habitual dejar entre el 5% y el 10% del total si el servicio ha sido bueno. En otros países como Estados Unidos, la propina suele ser del 15-20%.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Calcular propina entre varias personas</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Si pagáis a medias, divide el total (cuenta + propina) entre el número de comensales para saber cuánto paga cada uno.</p>
        </article>
      </div>
    </div>
  );
}