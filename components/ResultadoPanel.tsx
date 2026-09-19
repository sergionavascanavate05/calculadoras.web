import type { CalculatorResult } from "@/types";

/**
 * Panel de resultados compartido por las calculadoras.
 *
 * Destaca la última fila, que por convención es el dato principal que el
 * usuario ha venido a buscar.
 */
export default function ResultadoPanel({ resultados }: { resultados: CalculatorResult[] }) {
  return (
    <div className="mt-6 card p-6 animate-slide-up">
      <div className="space-y-2" role="status" aria-live="polite">
        {resultados.map((r, i) => (
          <div
            key={r.label}
            className={
              "flex items-center justify-between gap-4 py-3 px-4 rounded-lg " +
              (i === resultados.length - 1
                ? "bg-accent/10 border border-accent/20"
                : "bg-bg")
            }
          >
            <span className="text-sm text-muted">{r.label}</span>
            <span className="font-display font-semibold text-fg text-right">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
