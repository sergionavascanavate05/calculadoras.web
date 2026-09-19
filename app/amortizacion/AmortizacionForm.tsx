"use client";
import { useState } from "react";
import { calcularAmortizacion } from "@/lib/calculators";
import type { AmortizacionResult } from "@/lib/calculators";
import { validarNumero, euros } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function AmortizacionForm() {
  const [capital, setCapital] = useState("");
  const [interes, setInteres] = useState("");
  const [plazo, setPlazo] = useState("");
  const [resultado, setResultado] = useState<AmortizacionResult | null>(null);
  const [verCuadro, setVerCuadro] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const c = validarNumero(capital, { min: 100, max: 100_000_000, etiqueta: "el capital", unidad: "€" });
    if (!c.ok) return setError(c.error);
    const i = validarNumero(interes, { min: 0, max: 30, etiqueta: "el interés anual", unidad: "%" });
    if (!i.ok) return setError(i.error);
    const p = validarNumero(plazo, { min: 1, max: 50, etiqueta: "el plazo", unidad: "años" });
    if (!p.ok) return setError(p.error);

    try {
      setResultado(calcularAmortizacion({ capital: c.valor, interes: i.valor, plazo: p.valor }));
      setVerCuadro(false);
    } catch {
      setError("Ocurrió un error al calcular. Inténtalo de nuevo.");
    }
  }

  function handleReset() {
    setCapital("");
    setInteres("");
    setPlazo("");
    setResultado(null);
    setVerCuadro(false);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="capital" className="block text-sm font-medium text-fg mb-1.5">Capital (€)</label>
            <input id="capital" type="number" step="1000" min="100" value={capital}
              onChange={(e) => setCapital(e.target.value)} placeholder="Ej: 150000" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="interes" className="block text-sm font-medium text-fg mb-1.5">Interés anual (%)</label>
            <input id="interes" type="number" step="0.01" min="0" max="30" value={interes}
              onChange={(e) => setInteres(e.target.value)} placeholder="Ej: 3.2" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="plazo" className="block text-sm font-medium text-fg mb-1.5">Plazo (años)</label>
            <input id="plazo" type="number" step="1" min="1" max="50" value={plazo}
              onChange={(e) => setPlazo(e.target.value)} placeholder="Ej: 25" className={CAMPO} />
          </div>
        </div>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular amortización</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>

      {resultado && (
        <>
          <ResultadoPanel resultados={resultado.resultados} />

          <button
            type="button"
            onClick={() => setVerCuadro((v) => !v)}
            aria-expanded={verCuadro}
            className="mt-4 text-sm text-accent hover:underline"
          >
            {verCuadro ? "Ocultar cuadro de amortización" : "Ver cuadro de amortización completo"}
          </button>

          {verCuadro && (
            <div className="mt-4 card p-4 overflow-x-auto max-h-[28rem] overflow-y-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="sticky top-0 bg-surface">
                  <tr>
                    {["Mes", "Cuota", "Intereses", "Capital", "Pendiente"].map((h) => (
                      <th key={h} scope="col" className="text-right first:text-left font-semibold text-fg py-2 px-2 border-b border-border-strong whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {resultado.cuadro.map((f) => (
                    <tr key={f.periodo}>
                      <td className="text-muted py-1.5 px-2 border-b border-border">{f.periodo}</td>
                      <td className="text-muted py-1.5 px-2 border-b border-border text-right whitespace-nowrap">{euros(f.cuota)}</td>
                      <td className="text-muted py-1.5 px-2 border-b border-border text-right whitespace-nowrap">{euros(f.intereses)}</td>
                      <td className="text-muted py-1.5 px-2 border-b border-border text-right whitespace-nowrap">{euros(f.capital)}</td>
                      <td className="text-fg py-1.5 px-2 border-b border-border text-right whitespace-nowrap">{euros(f.pendiente)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
