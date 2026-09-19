"use client";
import { useState } from "react";
import { calcularMargenComercial } from "@/lib/calculators";
import type { MargenComercialResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function MargenComercialForm() {
  const [coste, setCoste] = useState("");
  const [precio, setPrecio] = useState("");
  const [resultado, setResultado] = useState<MargenComercialResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const c = validarNumero(coste, { min: 0, max: 100_000_000, etiqueta: "el coste", unidad: "€" });
    if (!c.ok) return setError(c.error);
    const p = validarNumero(precio, { min: 0.01, max: 100_000_000, etiqueta: "el precio de venta", unidad: "€" });
    if (!p.ok) return setError(p.error);

    setResultado(calcularMargenComercial({ coste: c.valor, precio: p.valor }));
  }

  function handleReset() {
    setCoste("");
    setPrecio("");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="coste" className="block text-sm font-medium text-fg mb-1.5">Coste sin IVA (€)</label>
            <input id="coste" type="number" step="0.01" min="0" value={coste}
              onChange={(e) => setCoste(e.target.value)} placeholder="Ej: 70" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="precio" className="block text-sm font-medium text-fg mb-1.5">Precio de venta sin IVA (€)</label>
            <input id="precio" type="number" step="0.01" min="0.01" value={precio}
              onChange={(e) => setPrecio(e.target.value)} placeholder="Ej: 100" className={CAMPO} />
          </div>
        </div>
        <p className="text-xs text-subtle">Introduce ambos importes sin IVA: el impuesto no forma parte de tu ingreso.</p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular margen</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
