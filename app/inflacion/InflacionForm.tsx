"use client";
import { useState } from "react";
import { calcularInflacion } from "@/lib/calculators";
import type { InflacionResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function InflacionForm() {
  const [importe, setImporte] = useState("");
  const [inflacion, setInflacion] = useState("");
  const [anios, setAnios] = useState("");
  const [resultado, setResultado] = useState<InflacionResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const m = validarNumero(importe, { min: 0.01, max: 1_000_000_000, etiqueta: "el importe", unidad: "€" });
    if (!m.ok) return setError(m.error);
    const f = validarNumero(inflacion, { min: -20, max: 100, etiqueta: "la inflación anual", unidad: "%" });
    if (!f.ok) return setError(f.error);
    const a = validarNumero(anios, { min: 1, max: 100, etiqueta: "los años", unidad: "años" });
    if (!a.ok) return setError(a.error);

    setResultado(calcularInflacion({ importe: m.valor, inflacion: f.valor, anios: a.valor }));
  }

  function handleReset() {
    setImporte("");
    setInflacion("");
    setAnios("");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="importe" className="block text-sm font-medium text-fg mb-1.5">Importe (€)</label>
            <input id="importe" type="number" step="0.01" min="0.01" value={importe}
              onChange={(e) => setImporte(e.target.value)} placeholder="Ej: 10000" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="inflacion" className="block text-sm font-medium text-fg mb-1.5">Inflación media anual (%)</label>
            <input id="inflacion" type="number" step="0.1" min="-20" max="100" value={inflacion}
              onChange={(e) => setInflacion(e.target.value)} placeholder="Ej: 3" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="anios" className="block text-sm font-medium text-fg mb-1.5">Años</label>
            <input id="anios" type="number" step="1" min="1" max="100" value={anios}
              onChange={(e) => setAnios(e.target.value)} placeholder="Ej: 10" className={CAMPO} />
          </div>
        </div>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular inflación</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
