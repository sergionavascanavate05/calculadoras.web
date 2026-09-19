"use client";
import { useState } from "react";
import { calcularBeneficio } from "@/lib/calculators";
import type { BeneficioResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function BeneficioForm() {
  const [ingresos, setIngresos] = useState("");
  const [variables, setVariables] = useState("");
  const [fijos, setFijos] = useState("");
  const [resultado, setResultado] = useState<BeneficioResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const i = validarNumero(ingresos, { min: 0, max: 1_000_000_000, etiqueta: "los ingresos", unidad: "€" });
    if (!i.ok) return setError(i.error);
    const v = validarNumero(variables, { min: 0, max: 1_000_000_000, etiqueta: "los costes variables", unidad: "€" });
    if (!v.ok) return setError(v.error);
    const f = validarNumero(fijos, { min: 0, max: 1_000_000_000, etiqueta: "los costes fijos", unidad: "€" });
    if (!f.ok) return setError(f.error);

    setResultado(
      calcularBeneficio({ ingresos: i.valor, costesVariables: v.valor, costesFijos: f.valor })
    );
  }

  function handleReset() {
    setIngresos("");
    setVariables("");
    setFijos("");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="ingresos" className="block text-sm font-medium text-fg mb-1.5">Ingresos sin IVA (€)</label>
            <input id="ingresos" type="number" step="0.01" min="0" value={ingresos}
              onChange={(e) => setIngresos(e.target.value)} placeholder="Ej: 10000" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="variables" className="block text-sm font-medium text-fg mb-1.5">Costes variables (€)</label>
            <input id="variables" type="number" step="0.01" min="0" value={variables}
              onChange={(e) => setVariables(e.target.value)} placeholder="Ej: 4000" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="fijos" className="block text-sm font-medium text-fg mb-1.5">Costes fijos (€)</label>
            <input id="fijos" type="number" step="0.01" min="0" value={fijos}
              onChange={(e) => setFijos(e.target.value)} placeholder="Ej: 3000" className={CAMPO} />
          </div>
        </div>
        <p className="text-xs text-subtle">
          Variables: mercancía, materia prima, comisiones y envíos. Fijos: alquiler, cuota de autónomos, salarios base y suministros. No olvides incluir tu propio sueldo.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular beneficio</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
