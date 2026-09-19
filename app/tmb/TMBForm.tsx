"use client";
import { useState } from "react";
import { calcularTMB, NIVELES_ACTIVIDAD, SEXOS } from "@/lib/calculators";
import type { TMBResult, Sexo } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function TMBForm() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState<Sexo>("hombre");
  const [actividad, setActividad] = useState(1.375);
  const [resultado, setResultado] = useState<TMBResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const p = validarNumero(peso, { min: 20, max: 400, etiqueta: "el peso", unidad: "kg" });
    if (!p.ok) return setError(p.error);
    const a = validarNumero(altura, { min: 100, max: 250, etiqueta: "la altura", unidad: "cm" });
    if (!a.ok) return setError(a.error);
    const e2 = validarNumero(edad, { min: 15, max: 100, etiqueta: "la edad", unidad: "años" });
    if (!e2.ok) return setError(e2.error);

    setResultado(
      calcularTMB({ peso: p.valor, altura: a.valor, edad: e2.valor, sexo, actividad })
    );
  }

  function handleReset() {
    setPeso("");
    setAltura("");
    setEdad("");
    setSexo("hombre");
    setActividad(1.375);
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
            <label htmlFor="altura" className="block text-sm font-medium text-fg mb-1.5">Altura (cm)</label>
            <input id="altura" type="number" step="1" min="100" max="250" value={altura}
              onChange={(e) => setAltura(e.target.value)} placeholder="Ej: 175" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="edad" className="block text-sm font-medium text-fg mb-1.5">Edad (años)</label>
            <input id="edad" type="number" step="1" min="15" max="100" value={edad}
              onChange={(e) => setEdad(e.target.value)} placeholder="Ej: 30" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="sexo" className="block text-sm font-medium text-fg mb-1.5">Sexo</label>
            <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value as Sexo)} className={CAMPO}>
              {SEXOS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="actividad" className="block text-sm font-medium text-fg mb-1.5">Nivel de actividad física</label>
            <select id="actividad" value={actividad} onChange={(e) => setActividad(parseFloat(e.target.value))} className={CAMPO}>
              {NIVELES_ACTIVIDAD.map((n) => (
                <option key={n.value} value={n.value}>{n.label}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs text-subtle">
          Se emplea la ecuación de Mifflin-St Jeor. El resultado es una estimación estadística: el metabolismo real varía entre personas de las mismas características.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular TMB</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
