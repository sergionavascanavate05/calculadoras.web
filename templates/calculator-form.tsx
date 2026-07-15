// ============================================================
// PLANTILLA: Formulario de calculadora — app/[id]/[Id]Form.tsx
// Copia este archivo y reemplaza:
//   [Id]     → nombre del tipo (ej: "Hipoteca")
//   [id]     → slug del tipo (ej: "hipoteca")
//   [calcularFuncion] → nombre de la función (ej: "calcularHipoteca")
//   [Nombre] → nombre visible en español (ej: "Hipoteca")
// ============================================================

"use client";

import { useState } from "react";
import { [calcularFuncion] } from "@/lib/calculators";
import type { [Id]Result } from "@/lib/calculators";

export default function [Id]Form() {
  // --- Estado del formulario ---
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const [resultado, setResultado] = useState<[Id]Result | null>(null);
  const [error, setError] = useState("");

  // --- Manejo del envío ---
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const val1 = parseFloat(campo1);
    const val2 = parseFloat(campo2);

    // Validación específica con mensajes en español
    if (!val1 || val1 <= 0 || val1 > 10000) {
      setError("Introduce un valor válido para el campo 1 (1-10.000)");
      return;
    }
    if (!val2 || val2 <= 0 || val2 > 100) {
      setError("Introduce un valor válido para el campo 2 (1-100)");
      return;
    }

    try {
      const res = [calcularFuncion]({ campo1: val1, campo2: val2 });
      setResultado(res);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al calcular");
    }
  }

  // --- Reinicio ---
  function handleReset() {
    setCampo1("");
    setCampo2("");
    setResultado(null);
    setError("");
  }

  // --- Renderizado ---
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl border border-border bg-surface space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="campo1" className="block text-sm font-medium text-fg mb-1.5">
              Campo 1 (unidad)
            </label>
            <input
              id="campo1"
              type="number"
              step="0.1"
              min="1"
              max="10000"
              value={campo1}
              onChange={(e) => setCampo1(e.target.value)}
              placeholder="Ej: 100"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg
                placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30
                focus:border-accent transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="campo2" className="block text-sm font-medium text-fg mb-1.5">
              Campo 2 (unidad)
            </label>
            <input
              id="campo2"
              type="number"
              step="0.1"
              min="1"
              max="100"
              value={campo2}
              onChange={(e) => setCampo2(e.target.value)}
              placeholder="Ej: 50"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg
                placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30
                focus:border-accent transition-all text-sm"
            />
          </div>
        </div>

        {error && (
          <p className="text-sm" style={{ color: "oklch(55% 0.22 25)" }}>
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-medium
              hover:bg-accent-hover transition-colors"
          >
            Calcular [Nombre]
          </button>
          {resultado && (
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 rounded-lg border border-border text-muted text-sm
                hover:text-fg hover:bg-border transition-colors"
            >
              Reiniciar
            </button>
          )}
        </div>
      </form>

      {resultado && (
        <div className="mt-6 p-6 rounded-xl border border-border bg-surface animate-slide-up">
          <div className="space-y-3">
            {resultado.resultados.map((r, i) => (
              <div
                key={i}
                className={
                  "flex items-center justify-between py-3 px-4 rounded-lg " +
                  (i === resultado.resultados.length - 1
                    ? "bg-accent/10 border border-accent/20"
                    : "bg-bg")
                }
              >
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