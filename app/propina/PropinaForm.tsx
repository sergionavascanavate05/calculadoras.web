"use client";
import { useState } from "react";
import { calcularPropina } from "@/lib/calculators";
import type { PropinaResult } from "@/lib/calculators";

export default function PropinaForm() {
  const [cuenta, setCuenta] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [resultado, setResultado] = useState<PropinaResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawCuenta = cuenta.trim();
    if (!rawCuenta || rawCuenta.length > 20) {
      setError("Introduce un total de la cuenta válido");
      setIsSubmitting(false);
      return;
    }
    const cuentaNum = parseFloat(rawCuenta);
    if (isNaN(cuentaNum) || !isFinite(cuentaNum)) {
      setError("Introduce un número válido para total de la cuenta");
      setIsSubmitting(false);
      return;
    }
    const rawPorcentaje = porcentaje.trim();
    if (!rawPorcentaje || rawPorcentaje.length > 20) {
      setError("Introduce un propina válido");
      setIsSubmitting(false);
      return;
    }
    const porcentajeNum = parseFloat(rawPorcentaje);
    if (isNaN(porcentajeNum) || !isFinite(porcentajeNum)) {
      setError("Introduce un número válido para propina");
      setIsSubmitting(false);
      return;
    }

    if (cuentaNum <= 0 || cuentaNum > 999999) {
      setError("Introduce un total de la cuenta válido (0.01-999999 €)");
      setIsSubmitting(false);
      return;
    }
    if (porcentajeNum <= 0 || porcentajeNum > 100) {
      setError("Introduce un propina válido (0-100 %)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularPropina({ cuenta: cuentaNum, porcentaje: porcentajeNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setCuenta("");
    setPorcentaje("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cuenta" className="block text-sm font-medium text-fg mb-1.5">Total de la cuenta (€)</label>
            <input id="cuenta" type="number" step="0.01" min="0.01" max="999999"
              value={cuenta} onChange={(e) => setCuenta(e.target.value)}
              placeholder="Ej: 45.50"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="porcentaje" className="block text-sm font-medium text-fg mb-1.5">Propina (%)</label>
            <input id="porcentaje" type="number" step="1" min="0" max="100"
              value={porcentaje} onChange={(e) => setPorcentaje(e.target.value)}
              placeholder="Ej: 10"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Propinas"}
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