"use client";
import { useState } from "react";
import { calcularCalorias, ACTIVIDADES } from "@/lib/calculators";
import type { CaloriasResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function CaloriasForm() {
  const [peso, setPeso] = useState("");
  const [duracion, setDuracion] = useState("");
  const [met, setMet] = useState(3.5);
  const [resultado, setResultado] = useState<CaloriasResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const p = validarNumero(peso, { min: 20, max: 400, etiqueta: "el peso", unidad: "kg" });
    if (!p.ok) return setError(p.error);
    const d = validarNumero(duracion, { min: 1, max: 1440, etiqueta: "la duración", unidad: "min" });
    if (!d.ok) return setError(d.error);

    setResultado(calcularCalorias({ peso: p.valor, duracion: d.valor, met }));
  }

  function handleReset() {
    setPeso("");
    setDuracion("");
    setMet(3.5);
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="peso" className="block text-sm font-medium text-fg mb-1.5">Peso (kg)</label>
            <input id="peso" type="number" step="0.1" min="20" max="400" value={peso}
              onChange={(e) => setPeso(e.target.value)} placeholder="Ej: 72" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="duracion" className="block text-sm font-medium text-fg mb-1.5">Duración (minutos)</label>
            <input id="duracion" type="number" step="1" min="1" max="1440" value={duracion}
              onChange={(e) => setDuracion(e.target.value)} placeholder="Ej: 45" className={CAMPO} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="actividad" className="block text-sm font-medium text-fg mb-1.5">Actividad</label>
            <select id="actividad" value={met} onChange={(e) => setMet(parseFloat(e.target.value))} className={CAMPO}>
              {ACTIVIDADES.map((a) => (
                <option key={a.label} value={a.value}>{a.label}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs text-subtle">
          Se emplean los valores MET del Compendium of Physical Activities. El resultado es una estimación poblacional: el gasto real varía según la condición física y la eficiencia de cada persona.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular calorías</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
