"use client";
import { useState } from "react";
import { calcularConsumoCombustible } from "@/lib/calculators";
import type { ConsumoCombustibleResult } from "@/lib/calculators";

export default function ConsumoCombustibleForm() {
  const [valor, setValor] = useState("");
  const [total, setTotal] = useState("");
  const [resultado, setResultado] = useState<ConsumoCombustibleResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawValor = valor.trim();
    if (!rawValor || rawValor.length > 20) {
      setError("Introduce un valor válido");
      setIsSubmitting(false);
      return;
    }
    const valorNum = parseFloat(rawValor);
    if (isNaN(valorNum) || !isFinite(valorNum)) {
      setError("Introduce un número válido para valor");
      setIsSubmitting(false);
      return;
    }
    const rawTotal = total.trim();
    if (!rawTotal || rawTotal.length > 20) {
      setError("Introduce un total válido");
      setIsSubmitting(false);
      return;
    }
    const totalNum = parseFloat(rawTotal);
    if (isNaN(totalNum) || !isFinite(totalNum)) {
      setError("Introduce un número válido para total");
      setIsSubmitting(false);
      return;
    }

    if (valorNum <= 0 || valorNum > 999999999) {
      setError("Introduce un valor válido (0-999999999 )");
      setIsSubmitting(false);
      return;
    }
    if (totalNum <= 0 || totalNum > 999999999) {
      setError("Introduce un total válido (0-999999999 )");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularConsumoCombustible({ valor: valorNum, total: totalNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setValor("");
    setTotal("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="valor" className="block text-sm font-medium text-fg mb-1.5">Valor</label>
            <input id="valor" type="number" step="0.01" min="0" max="999999999"
              value={valor} onChange={(e) => setValor(e.target.value)}
              placeholder="Ej: 200"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="total" className="block text-sm font-medium text-fg mb-1.5">Total</label>
            <input id="total" type="number" step="0.01" min="0" max="999999999"
              value={total} onChange={(e) => setTotal(e.target.value)}
              placeholder="Ej: 1000"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Consumo de Combustible"}
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