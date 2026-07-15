"use client";
import { useState } from "react";
import { calcularDescuento } from "@/lib/calculators";
import type { DescuentoResult } from "@/lib/calculators";

export default function DescuentoForm() {
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [resultado, setResultado] = useState<DescuentoResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawPrecio = precio.trim();
    if (!rawPrecio || rawPrecio.length > 20) {
      setError("Introduce un precio original válido");
      setIsSubmitting(false);
      return;
    }
    const precioNum = parseFloat(rawPrecio);
    if (isNaN(precioNum) || !isFinite(precioNum)) {
      setError("Introduce un número válido para precio original");
      setIsSubmitting(false);
      return;
    }
    const rawDescuento = descuento.trim();
    if (!rawDescuento || rawDescuento.length > 20) {
      setError("Introduce un descuento válido");
      setIsSubmitting(false);
      return;
    }
    const descuentoNum = parseFloat(rawDescuento);
    if (isNaN(descuentoNum) || !isFinite(descuentoNum)) {
      setError("Introduce un número válido para descuento");
      setIsSubmitting(false);
      return;
    }

    if (precioNum <= 0 || precioNum > 999999) {
      setError("Introduce un precio original válido (0.01-999999 €)");
      setIsSubmitting(false);
      return;
    }
    if (descuentoNum <= 0 || descuentoNum > 100) {
      setError("Introduce un descuento válido (0-100 %)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularDescuento({ precio: precioNum, descuento: descuentoNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setPrecio("");
    setDescuento("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="precio" className="block text-sm font-medium text-fg mb-1.5">Precio original (€)</label>
            <input id="precio" type="number" step="0.01" min="0.01" max="999999"
              value={precio} onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ej: 100"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="descuento" className="block text-sm font-medium text-fg mb-1.5">Descuento (%)</label>
            <input id="descuento" type="number" step="1" min="0" max="100"
              value={descuento} onChange={(e) => setDescuento(e.target.value)}
              placeholder="Ej: 20"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Descuentos"}
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