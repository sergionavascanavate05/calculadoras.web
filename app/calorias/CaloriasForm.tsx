"use client";
import { useState } from "react";
import { calcularCalorias } from "@/lib/calculators";
import type { CaloriasResult } from "@/lib/calculators";

export default function CaloriasForm() {
  const [peso, setPeso] = useState("");
  const [duracion, setDuracion] = useState("");
  const [resultado, setResultado] = useState<CaloriasResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawPeso = peso.trim();
    if (!rawPeso || rawPeso.length > 20) {
      setError("Introduce un peso válido");
      setIsSubmitting(false);
      return;
    }
    const pesoNum = parseFloat(rawPeso);
    if (isNaN(pesoNum) || !isFinite(pesoNum)) {
      setError("Introduce un número válido para peso");
      setIsSubmitting(false);
      return;
    }
    const rawDuracion = duracion.trim();
    if (!rawDuracion || rawDuracion.length > 20) {
      setError("Introduce un duración válido");
      setIsSubmitting(false);
      return;
    }
    const duracionNum = parseFloat(rawDuracion);
    if (isNaN(duracionNum) || !isFinite(duracionNum)) {
      setError("Introduce un número válido para duración");
      setIsSubmitting(false);
      return;
    }

    if (pesoNum <= 0 || pesoNum > 500) {
      setError("Introduce un peso válido (1-500 kg)");
      setIsSubmitting(false);
      return;
    }
    if (duracionNum <= 0 || duracionNum > 1440) {
      setError("Introduce un duración válido (1-1440 min)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularCalorias({ peso: pesoNum, duracion: duracionNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setPeso("");
    setDuracion("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="peso" className="block text-sm font-medium text-fg mb-1.5">Peso (kg)</label>
            <input id="peso" type="number" step="0.1" min="1" max="500"
              value={peso} onChange={(e) => setPeso(e.target.value)}
              placeholder="Ej: 70"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="duracion" className="block text-sm font-medium text-fg mb-1.5">Duración (min)</label>
            <input id="duracion" type="number" step="1" min="1" max="1440"
              value={duracion} onChange={(e) => setDuracion(e.target.value)}
              placeholder="Ej: 30"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Calorías"}
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