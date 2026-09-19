"use client";
import { useState } from "react";
import { calcularFCM } from "@/lib/calculators";
import type { FCMResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function FCMForm() {
  const [edad, setEdad] = useState("");
  const [reposo, setReposo] = useState("");
  const [resultado, setResultado] = useState<FCMResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const a = validarNumero(edad, { min: 10, max: 100, etiqueta: "la edad", unidad: "años" });
    if (!a.ok) return setError(a.error);

    let fcReposo: number | undefined;
    if (reposo.trim()) {
      const r = validarNumero(reposo, { min: 30, max: 120, etiqueta: "la frecuencia en reposo", unidad: "ppm" });
      if (!r.ok) return setError(r.error);
      fcReposo = r.valor;
    }

    setResultado(calcularFCM({ edad: a.valor, reposo: fcReposo }));
  }

  function handleReset() {
    setEdad("");
    setReposo("");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-fg mb-1.5">Edad (años)</label>
            <input id="edad" type="number" step="1" min="10" max="100" value={edad}
              onChange={(e) => setEdad(e.target.value)} placeholder="Ej: 35" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="reposo" className="block text-sm font-medium text-fg mb-1.5">
              FC en reposo (ppm) <span className="text-subtle font-normal">· opcional</span>
            </label>
            <input id="reposo" type="number" step="1" min="30" max="120" value={reposo}
              onChange={(e) => setReposo(e.target.value)} placeholder="Ej: 60" className={CAMPO} />
          </div>
        </div>
        <p className="text-xs text-subtle">
          Si indicas tu frecuencia en reposo, las zonas se calculan por el método de Karvonen, que se ajusta mejor a tu condición física. Mídela al despertar, antes de levantarte.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular zonas</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
