"use client";
import { useState } from "react";
import { calcularPesoIdeal } from "@/lib/calculators";
import type { PesoIdealResult, SexoPeso } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function PesoIdealForm() {
  const [altura, setAltura] = useState("");
  const [sexo, setSexo] = useState<SexoPeso>("hombre");
  const [resultado, setResultado] = useState<PesoIdealResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const a = validarNumero(altura, { min: 130, max: 230, etiqueta: "la altura", unidad: "cm" });
    if (!a.ok) return setError(a.error);

    setResultado(calcularPesoIdeal({ altura: a.valor, sexo }));
  }

  function handleReset() {
    setAltura("");
    setSexo("hombre");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="altura" className="block text-sm font-medium text-fg mb-1.5">Altura (cm)</label>
            <input id="altura" type="number" step="1" min="130" max="230" value={altura}
              onChange={(e) => setAltura(e.target.value)} placeholder="Ej: 175" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="sexo" className="block text-sm font-medium text-fg mb-1.5">Sexo</label>
            <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value as SexoPeso)} className={CAMPO}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </div>
        </div>
        <p className="text-xs text-subtle">
          Las cuatro fórmulas dan resultados distintos porque ninguna es exacta. Se muestran juntas a propósito: no existe un único peso ideal.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular peso ideal</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
