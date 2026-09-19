"use client";
import { useState } from "react";
import { calcularConsumoCombustible } from "@/lib/calculators";
import type { ConsumoCombustibleResult } from "@/lib/calculators";
import { validarNumero } from "@/lib/formato";
import ResultadoPanel from "@/components/ResultadoPanel";

const CAMPO =
  "w-full px-3 py-2.5 rounded-lg border border-border bg-bg text-fg placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm";

export default function ConsumoCombustibleForm() {
  const [kilometros, setKilometros] = useState("");
  const [litros, setLitros] = useState("");
  const [precio, setPrecio] = useState("");
  const [resultado, setResultado] = useState<ConsumoCombustibleResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const k = validarNumero(kilometros, { min: 1, max: 100_000, etiqueta: "los kilómetros", unidad: "km" });
    if (!k.ok) return setError(k.error);
    const l = validarNumero(litros, { min: 0.1, max: 10_000, etiqueta: "los litros", unidad: "L" });
    if (!l.ok) return setError(l.error);
    const p = validarNumero(precio, { min: 0, max: 20, etiqueta: "el precio por litro", unidad: "€" });
    if (!p.ok) return setError(p.error);

    setResultado(
      calcularConsumoCombustible({ kilometros: k.valor, litros: l.valor, precioLitro: p.valor })
    );
  }

  function handleReset() {
    setKilometros("");
    setLitros("");
    setPrecio("");
    setResultado(null);
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="kilometros" className="block text-sm font-medium text-fg mb-1.5">Kilómetros recorridos</label>
            <input id="kilometros" type="number" step="1" min="1" value={kilometros}
              onChange={(e) => setKilometros(e.target.value)} placeholder="Ej: 520" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="litros" className="block text-sm font-medium text-fg mb-1.5">Litros repostados</label>
            <input id="litros" type="number" step="0.01" min="0.1" value={litros}
              onChange={(e) => setLitros(e.target.value)} placeholder="Ej: 32.5" className={CAMPO} />
          </div>
          <div>
            <label htmlFor="precio" className="block text-sm font-medium text-fg mb-1.5">Precio por litro (€)</label>
            <input id="precio" type="number" step="0.001" min="0" value={precio}
              onChange={(e) => setPrecio(e.target.value)} placeholder="Ej: 1.55" className={CAMPO} />
          </div>
        </div>
        <p className="text-xs text-subtle">
          Para que el dato sea fiable, llena el depósito, pon el cuentakilómetros parcial a cero y vuelve a llenarlo del todo en el siguiente repostaje.
        </p>
        {error && <p className="text-sm text-error" role="alert">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="btn-primary">Calcular consumo</button>
          {resultado && <button type="button" onClick={handleReset} className="btn-secondary">Reiniciar</button>}
        </div>
      </form>
      {resultado && <ResultadoPanel resultados={resultado.resultados} />}
    </div>
  );
}
