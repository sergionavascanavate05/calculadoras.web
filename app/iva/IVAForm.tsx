"use client";
import { useState } from "react";
import { calcularIVA } from "@/lib/calculators";
import { IVA_TIPOIVA } from "@/lib/calculators";
import type { IVAResult } from "@/lib/calculators";

export default function IVAForm() {
  const [cantidad, setCantidad] = useState("");
  const [tipoIVA, setTipoIVA] = useState(21);
  const [modo, setModo] = useState<"anadir" | "incluir">("anadir");
  const [resultado, setResultado] = useState<IVAResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawCantidad = cantidad.trim();
    if (!rawCantidad || rawCantidad.length > 20) {
      setError("Introduce un cantidad válido");
      setIsSubmitting(false);
      return;
    }
    const cantidadNum = parseFloat(rawCantidad);
    if (isNaN(cantidadNum) || !isFinite(cantidadNum)) {
      setError("Introduce un número válido para cantidad");
      setIsSubmitting(false);
      return;
    }

    if (cantidadNum <= 0 || cantidadNum > 999999999) {
      setError("Introduce un cantidad válido (0.01-999999999 €)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularIVA({ cantidad: cantidadNum, tipoIVA: tipoIVA, modo: modo });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setCantidad("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
          <div>
            <label htmlFor="cantidad" className="block text-sm font-medium text-fg mb-1.5">Cantidad (€)</label>
            <input id="cantidad" type="number" step="0.01" min="0.01" max="999999999"
              value={cantidad} onChange={(e) => setCantidad(e.target.value)}
              placeholder="Ej: 100"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        <div>
          <label className="block text-sm font-medium text-fg mb-2">Tipo de IVA</label>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setTipoIVA(21)}
              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all " + (tipoIVA === 21 ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg hover:border-accent/30")}>General (21%)</button>
            <button type="button" onClick={() => setTipoIVA(10)}
              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all " + (tipoIVA === 10 ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg hover:border-accent/30")}>Reducido (10%)</button>
            <button type="button" onClick={() => setTipoIVA(4)}
              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all " + (tipoIVA === 4 ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg hover:border-accent/30")}>Superreducido (4%)</button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-fg mb-2">Modo de cálculo</label>
          <div className="flex gap-2">
            <button type="button" onClick={() => setModo("anadir")}
              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all flex-1 " + (modo === "anadir" ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg")}>Añadir IVA</button>
            <button type="button" onClick={() => setModo("incluir")}
              className={"px-4 py-2 rounded-lg text-sm font-medium border transition-all flex-1 " + (modo === "incluir" ? "bg-accent text-white border-accent" : "bg-bg text-muted border-border hover:text-fg")}>IVA incluido</button>
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular IVA"}
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