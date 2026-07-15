"use client";
import { useState } from "react";
import { calcularEdad } from "@/lib/calculators";
import type { EdadResult } from "@/lib/calculators";

export default function EdadForm() {
  const [año, setAño] = useState("");
  const [mes, setMes] = useState("");
  const [dia, setDia] = useState("");
  const [resultado, setResultado] = useState<EdadResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawAño = año.trim();
    if (!rawAño || rawAño.length > 20) {
      setError("Introduce un año de nacimiento válido");
      setIsSubmitting(false);
      return;
    }
    const añoNum = parseFloat(rawAño);
    if (isNaN(añoNum) || !isFinite(añoNum)) {
      setError("Introduce un número válido para año de nacimiento");
      setIsSubmitting(false);
      return;
    }
    const rawMes = mes.trim();
    if (!rawMes || rawMes.length > 20) {
      setError("Introduce un mes de nacimiento válido");
      setIsSubmitting(false);
      return;
    }
    const mesNum = parseFloat(rawMes);
    if (isNaN(mesNum) || !isFinite(mesNum)) {
      setError("Introduce un número válido para mes de nacimiento");
      setIsSubmitting(false);
      return;
    }
    const rawDia = dia.trim();
    if (!rawDia || rawDia.length > 20) {
      setError("Introduce un día de nacimiento válido");
      setIsSubmitting(false);
      return;
    }
    const diaNum = parseFloat(rawDia);
    if (isNaN(diaNum) || !isFinite(diaNum)) {
      setError("Introduce un número válido para día de nacimiento");
      setIsSubmitting(false);
      return;
    }

    if (añoNum <= 0 || añoNum > 2100) {
      setError("Introduce un año de nacimiento válido (1900-2100 )");
      setIsSubmitting(false);
      return;
    }
    if (mesNum <= 0 || mesNum > 12) {
      setError("Introduce un mes de nacimiento válido (1-12 )");
      setIsSubmitting(false);
      return;
    }
    if (diaNum <= 0 || diaNum > 31) {
      setError("Introduce un día de nacimiento válido (1-31 )");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularEdad({ año: añoNum, mes: mesNum, dia: diaNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setAño("");
    setMes("");
    setDia("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="año" className="block text-sm font-medium text-fg mb-1.5">Año de nacimiento</label>
            <input id="año" type="number" step="1" min="1900" max="2100"
              value={año} onChange={(e) => setAño(e.target.value)}
              placeholder="Ej: 1990"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="mes" className="block text-sm font-medium text-fg mb-1.5">Mes de nacimiento</label>
            <input id="mes" type="number" step="1" min="1" max="12"
              value={mes} onChange={(e) => setMes(e.target.value)}
              placeholder="Ej: 5"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="dia" className="block text-sm font-medium text-fg mb-1.5">Día de nacimiento</label>
            <input id="dia" type="number" step="1" min="1" max="31"
              value={dia} onChange={(e) => setDia(e.target.value)}
              placeholder="Ej: 15"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Edad"}
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