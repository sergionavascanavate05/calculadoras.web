"use client";
import { useState } from "react";
import { calcularIMC } from "@/lib/calculators";
import type { IMCResult } from "@/lib/calculators";

export default function IMCForm() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<IMCResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setIsSubmitting(true);
    const rawPeso = peso.trim();
    if (!rawPeso || rawPeso.length > 20) {
      setError("Introduce un peso válido");
      setIsSubmitting(false);
      return;
    }
    const pesoNum = parseFloat(rawPeso);
    if (isNaN(pesoNum) || !isFinite(pesoNum)) {
      setError("Introduce un número válido para peso");
      setIsSubmitting(false);
      return;
    }
    const rawAltura = altura.trim();
    if (!rawAltura || rawAltura.length > 20) {
      setError("Introduce un altura válido");
      setIsSubmitting(false);
      return;
    }
    const alturaNum = parseFloat(rawAltura);
    if (isNaN(alturaNum) || !isFinite(alturaNum)) {
      setError("Introduce un número válido para altura");
      setIsSubmitting(false);
      return;
    }

    if (pesoNum <= 0 || pesoNum > 500) {
      setError("Introduce un peso válido (1-500 kg)");
      setIsSubmitting(false);
      return;
    }
    if (alturaNum <= 0 || alturaNum > 300) {
      setError("Introduce un altura válido (1-300 cm)");
      setIsSubmitting(false);
      return;
    }

    if (!navigator.onLine) {
      setError("Sin conexión a Internet. Comprueba tu conexión y vuelve a intentarlo.");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = calcularIMC({ peso: pesoNum, altura: alturaNum });
      setResultado(res);
    } catch (e) {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
    setIsSubmitting(false);
  }

  function handleReset() {
    setPeso("");
    setAltura("");
    setResultado(null);
    setError("");
    setIsSubmitting(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="peso" className="block text-sm font-medium text-fg mb-1.5">Peso (kg)</label>
            <input id="peso" type="number" step="0.1" min="1" max="500"
              value={peso} onChange={(e) => setPeso(e.target.value)}
              placeholder="Ej: 70"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
          <div>
            <label htmlFor="altura" className="block text-sm font-medium text-fg mb-1.5">Altura (cm)</label>
            <input id="altura" type="number" step="0.5" min="1" max="300"
              value={altura} onChange={(e) => setAltura(e.target.value)}
              placeholder="Ej: 175"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm" />
          </div>
        </div>
        {error && (<p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>{error}</p>)}
        <div className="flex gap-3">
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Calculando..." : "Calcular IMC"}
          </button>
          {resultado && (<button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>)}
        </div>
      </form>
      {resultado && (
        <div className="mt-6 card p-6 animate-slide-up">
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold text-white" style={{ backgroundColor: resultado.color }}>{resultado.imc}</div>
            <p className="mt-2 font-display font-semibold text-fg">{resultado.clasificacion}</p>
          </div>
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