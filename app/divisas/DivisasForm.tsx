"use client";
import { useState } from "react";
import { calcularDivisas } from "@/lib/calculators";
import type { DivisasResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function DivisasForm() {
  const [cantidad, setCantidad] = useState("");
  const [tasa, setTasa] = useState("");
  const [comision, setComision] = useState("0");
  const [resultado, setResultado] = useState<DivisasResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const c = validarNumero(cantidad, { min: 0.01, max: 1_000_000_000, etiqueta: "la cantidad" });
    if (!c.ok) return setError(c.error);
    const t = validarNumero(tasa, { min: 0.000001, max: 1_000_000, etiqueta: "el tipo de cambio" });
    if (!t.ok) return setError(t.error);
    const k = validarNumero(comision, { min: 0, max: 100, etiqueta: "la comisión", unidad: "%" });
    if (!k.ok) return setError(k.error);

    setResultado(calcularDivisas({ cantidad: c.valor, tasa: t.valor, comision: k.valor }));
  }

  function handleReset() {
    setCantidad("");
    setTasa("");
    setComision("0");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="cantidad" className="block text-sm font-medium text-fg mb-1.5">Cantidad a cambiar</label>
            <input id="cantidad" type="number" step="0.01" min="0.01" value={cantidad}
              onChange={(e) => setCantidad(e.target.value)} placeholder="Ej: 1000" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="tasa" className="block text-sm font-medium text-fg mb-1.5">Tipo de cambio</label>
            <input id="tasa" type="number" step="0.0001" min="0.000001" value={tasa}
              onChange={(e) => setTasa(e.target.value)} placeholder="Ej: 1.0850" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="comision" className="block text-sm font-medium text-fg mb-1.5">Comisión (%)</label>
            <input id="comision" type="number" step="0.01" min="0" max="100" value={comision}
              onChange={(e) => setComision(e.target.value)} placeholder="Ej: 1.5" className={CAMPO} />
          </div>
        </div>
        <p className="text-xs text-subtle">
          El tipo de cambio lo introduces tú, de modo que puedes comparar la cotización interbancaria con la que te ofrece realmente tu banco. Esta herramienta no consulta cotizaciones en tiempo real.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Convertir</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
