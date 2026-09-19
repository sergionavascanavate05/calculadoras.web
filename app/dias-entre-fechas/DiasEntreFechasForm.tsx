"use client";
import { useState } from "react";
import { calcularDiasEntreFechas } from "@/lib/calculators";
import type { DiasEntreFechasResult } from "@/lib/calculators";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

const ISO = /^\d{4}-\d{2}-\d{2}$/;

export default function DiasEntreFechasForm() {
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [resultado, setResultado] = useState<DiasEntreFechasResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!ISO.test(desde)) return setError("Introduce la fecha inicial.");
    if (!ISO.test(hasta)) return setError("Introduce la fecha final.");

    const a = new Date(desde);
    const b = new Date(hasta);
    if (isNaN(a.getTime()) || isNaN(b.getTime())) {
      return setError("Alguna de las fechas no es válida.");
    }

    setResultado(calcularDiasEntreFechas({ desde, hasta }));
  }

  function handleReset() {
    setDesde("");
    setHasta("");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="desde" className="block text-sm font-medium text-fg mb-1.5">Fecha inicial</label>
            <input id="desde" type="date" value={desde}
              onChange={(e) => setDesde(e.target.value)} className={CAMPO} />
          </div>
          <div>
            <label htmlFor="hasta" className="block text-sm font-medium text-fg mb-1.5">Fecha final</label>
            <input id="hasta" type="date" value={hasta}
              onChange={(e) => setHasta(e.target.value)} className={CAMPO} />
          </div>
        </div>
        <p className="text-xs text-subtle">
          Los días laborables cuentan de lunes a viernes y no descuentan festivos, que varían según la comunidad autónoma y el municipio.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular días</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
