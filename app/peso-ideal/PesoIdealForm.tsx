"use client";
import { useState } from "react";
import { calcularPesoIdeal } from "@/lib/calculators";
import type { PesoIdealResult } from "@/lib/calculators";

export default function PesoIdealForm() {
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [resultado, setResultado] = useState<PesoIdealResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawAltura = altura.trim();
    if (!rawAltura || rawAltura.length > 20) {
      setError("Introduce un altura válido");
      setIsSubmitting(false);
      return;
    }
    const alturaNum = parseFloat(rawAltura);
    if (isNaN(alturaNum) || !isFinite(alturaNum)) {
      setError("Introduce un número válido para altura");
      setIsSubmitting(false);
      return;
    }
    const rawEdad = edad.trim();
    if (!rawEdad || rawEdad.length > 20) {
      setError("Introduce un edad válido");
      setIsSubmitting(false);
      return;
    }
    const edadNum = parseFloat(rawEdad);
    if (isNaN(edadNum) || !isFinite(edadNum)) {
      setError("Introduce un número válido para edad");
      setIsSubmitting(false);
      return;
    }

    if (alturaNum <= 0 || alturaNum > 300) {
      setError("Introduce un altura válido (50-300 cm)");
      setIsSubmitting(false);
      return;
    }
    if (edadNum <= 0 || edadNum > 120) {
      setError("Introduce un edad válido (1-120 años)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularPesoIdeal({ altura: alturaNum, edad: edadNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setAltura("");
    setEdad("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="altura" className="block text-sm font-medium text-fg mb-1.5">Altura (cm)</label>
            <input id="altura" type="number" step="0.5" min="50" max="300"
              value={altura} onChange={(e) => setAltura(e.target.value)}
              placeholder="Ej: 170"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-fg mb-1.5">Edad</label>
            <input id="edad" type="number" step="1" min="1" max="120"
              value={edad} onChange={(e) => setEdad(e.target.value)}
              placeholder="Ej: 30"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Peso Ideal"}
          </button>
          {resultado && (<button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>)}
        </div>
      </form>
      {resultado && (
        <div className="mt-6 card p-6 animate-slide-up">
          <div className="space-y-2">
            {resultado.resultados.map((r, i) => (
              <div key={i} className={"flex items-center justify-between py-3 px-4 rounded-lg " + (i === resultado.resultados.length - 1 ? "bg-accent/10 border border-accent/20" : "bg-bg")}>
                <span className="text-sm text-muted">{r.label}</span>
                <span className="font-display font-semibold text-fg">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}