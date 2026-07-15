"use client";
import { useState } from "react";
import { calcularInteresCompuesto } from "@/lib/calculators";
import type { InteresCompuestoResult } from "@/lib/calculators";

export default function InteresCompuestoForm() {
  const [capital, setCapital] = useState("");
  const [aporte, setAporte] = useState("");
  const [interes, setInteres] = useState("");
  const [años, setAños] = useState("");
  const [resultado, setResultado] = useState<InteresCompuestoResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawCapital = capital.trim();
    if (!rawCapital || rawCapital.length > 20) {
      setError("Introduce un capital inicial válido");
      setIsSubmitting(false);
      return;
    }
    const capitalNum = parseFloat(rawCapital);
    if (isNaN(capitalNum) || !isFinite(capitalNum)) {
      setError("Introduce un número válido para capital inicial");
      setIsSubmitting(false);
      return;
    }
    const rawAporte = aporte.trim();
    if (!rawAporte || rawAporte.length > 20) {
      setError("Introduce un aporte mensual válido");
      setIsSubmitting(false);
      return;
    }
    const aporteNum = parseFloat(rawAporte);
    if (isNaN(aporteNum) || !isFinite(aporteNum)) {
      setError("Introduce un número válido para aporte mensual");
      setIsSubmitting(false);
      return;
    }
    const rawInteres = interes.trim();
    if (!rawInteres || rawInteres.length > 20) {
      setError("Introduce un interés anual válido");
      setIsSubmitting(false);
      return;
    }
    const interesNum = parseFloat(rawInteres);
    if (isNaN(interesNum) || !isFinite(interesNum)) {
      setError("Introduce un número válido para interés anual");
      setIsSubmitting(false);
      return;
    }
    const rawAños = años.trim();
    if (!rawAños || rawAños.length > 20) {
      setError("Introduce un años válido");
      setIsSubmitting(false);
      return;
    }
    const añosNum = parseFloat(rawAños);
    if (isNaN(añosNum) || !isFinite(añosNum)) {
      setError("Introduce un número válido para años");
      setIsSubmitting(false);
      return;
    }

    if (capitalNum <= 0 || capitalNum > 999999999) {
      setError("Introduce un capital inicial válido (1-999999999 €)");
      setIsSubmitting(false);
      return;
    }
    if (aporteNum <= 0 || aporteNum > 999999) {
      setError("Introduce un aporte mensual válido (0-999999 €)");
      setIsSubmitting(false);
      return;
    }
    if (interesNum <= 0 || interesNum > 100) {
      setError("Introduce un interés anual válido (0.1-100 %)");
      setIsSubmitting(false);
      return;
    }
    if (añosNum <= 0 || añosNum > 100) {
      setError("Introduce un años válido (1-100 años)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularInteresCompuesto({ capital: capitalNum, aporte: aporteNum, interes: interesNum, años: añosNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setCapital("");
    setAporte("");
    setInteres("");
    setAños("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="capital" className="block text-sm font-medium text-fg mb-1.5">Capital inicial (€)</label>
            <input id="capital" type="number" step="100" min="1" max="999999999"
              value={capital} onChange={(e) => setCapital(e.target.value)}
              placeholder="Ej: 10000"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="aporte" className="block text-sm font-medium text-fg mb-1.5">Aporte mensual (€)</label>
            <input id="aporte" type="number" step="50" min="0" max="999999"
              value={aporte} onChange={(e) => setAporte(e.target.value)}
              placeholder="Ej: 500"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="interes" className="block text-sm font-medium text-fg mb-1.5">Interés anual (%)</label>
            <input id="interes" type="number" step="0.1" min="0.1" max="100"
              value={interes} onChange={(e) => setInteres(e.target.value)}
              placeholder="Ej: 8"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="años" className="block text-sm font-medium text-fg mb-1.5">Años</label>
            <input id="años" type="number" step="1" min="1" max="100"
              value={años} onChange={(e) => setAños(e.target.value)}
              placeholder="Ej: 10"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular Interés Compuesto"}
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