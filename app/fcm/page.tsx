import type { Metadata } from "next";
import FCMForm from "./FCMForm";

export const metadata: Metadata = {
  title: "Calculadora de Frecuencia Cardíaca Máxima",
  description: "Calcula tu frecuencia cardíaca máxima y zonas de entrenamiento. Gratis.",
  openGraph: { title: "Calculadora de Frecuencia Cardíaca Máxima - Calculadoras Online", description: "Entrena en tu zona óptima." },
};

export default function FCMPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight" data-od-id="fcm-heading">Calculadora de Frecuencia Cardíaca Máxima</h1>
          <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">La frecuencia cardíaca máxima (FCM) es el número máximo de latidos por minuto durante el ejercicio. Conócela para entrenar de forma segura y efectiva.</p>
        </div>
        <FCMForm />
        <article className="mt-12 prose prose-sm max-w-none">
          <h2 className="font-display font-semibold text-lg text-fg">¿Qué es la frecuencia cardíaca máxima?</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">La frecuencia cardíaca máxima (FCM) es el número máximo de latidos por minuto que tu corazón puede alcanzar durante el ejercicio. La fórmula más común es 220 menos tu edad.</p>
          <h2 className="font-display font-semibold text-lg text-fg">Zonas de entrenamiento</h2>
          <p className="text-muted text-sm leading-relaxed mt-2">Zona de salud (50-60%): actividad ligera. Zona de quema de grasa (60-70%): ejercicio moderado. Zona aeróbica (70-85%): mejora cardiovascular. Zona anaeróbica (85-100%): esfuerzo máximo.</p>
        </article>
      </div>
    </div>
  );
}