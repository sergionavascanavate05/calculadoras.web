"use client";
import { useState } from "react";
import { calcularHipoteca } from "@/lib/calculators";
import type { HipotecaResult } from "@/lib/calculators";

export default function HipotecaForm() {
  const [monto, setMonto] = useState("");
  const [interes, setInteres] = useState("");
  const [plazo, setPlazo] = useState("");
  const [resultado, setResultado] = useState<HipotecaResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawMonto = monto.trim();
    if (!rawMonto || rawMonto.length > 20) {
      setError("Introduce un monto válido");
      setIsSubmitting(false);
      return;
    }
    const montoNum = parseFloat(rawMonto);
    if (isNaN(montoNum) || !isFinite(montoNum)) {
      setError("Introduce un número válido para monto");
      setIsSubmitting(false);
      return;
    }
    const rawInteres = interes.trim();
    if (!rawInteres || rawInteres.length > 20) {
      setError("Introduce un interés anual válido");
      setIsSubmitting(false);
      return;
    }
    const interesNum = parseFloat(rawInteres);
    if (isNaN(interesNum) || !isFinite(interesNum)) {
      setError("Introduce un número válido para interés anual");
      setIsSubmitting(false);
      return;
    }
    const rawPlazo = plazo.trim();
    if (!rawPlazo || rawPlazo.length > 20) {
      setError("Introduce un plazo válido");
      setIsSubmitting(false);
      return;
    }
    const plazoNum = parseFloat(rawPlazo);
    if (isNaN(plazoNum) || !isFinite(plazoNum)) {
      setError("Introduce un número válido para plazo");
      setIsSubmitting(false);
      return;
    }

    if (montoNum <= 0 || montoNum > 999999999) {
      setError("Introduce un monto válido (1000-999999999 €)");
      setIsSubmitting(false);
      return;
    }
    if (interesNum <= 0 || interesNum > 30) {
      setError("Introduce un interés anual válido (0.1-30 %)");
      setIsSubmitting(false);
      return;
    }
    if (plazoNum <= 0 || plazoNum > 50) {
      setError("Introduce un plazo válido (1-50 años)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularHipoteca({ monto: montoNum, interes: interesNum, plazo: plazoNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setMonto("");
    setInteres("");
    setPlazo("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="monto" className="block text-sm font-medium text-fg mb-1.5">Monto (€)</label>
            <input id="monto" type="number" step="1000" min="1000" max="999999999"
              value={monto} onChange={(e) => setMonto(e.target.value)}
              placeholder="Ej: 150000"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="interes" className="block text-sm font-medium text-fg mb-1.5">Interés anual (%)</label>
            <input id="interes" type="number" step="0.1" min="0.1" max="30"
              value={interes} onChange={(e) => setInteres(e.target.value)}
              placeholder="Ej: 3.5"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="plazo" className="block text-sm font-medium text-fg mb-1.5">Plazo (años)</label>
            <input id="plazo" type="number" step="1" min="1" max="50"
              value={plazo} onChange={(e) => setPlazo(e.target.value)}
              placeholder="Ej: 25"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Hipoteca"}
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