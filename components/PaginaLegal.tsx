import Link from "next/link";
import { ACTUALIZACION_LEGAL, faltanDatosDelTitular } from "@/lib/config";

/** Envoltorio común de las páginas legales: migas, título y tipografía. */
export default function PaginaLegal({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <nav aria-label="Ruta de navegación" className="mb-6 text-sm">
          <Link href="/" className="text-muted hover:text-accent transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-subtle" aria-hidden="true">/</span>
          <span className="text-fg">{titulo}</span>
        </nav>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight">
          {titulo}
        </h1>
        <p className="mt-2 text-subtle text-sm">
          Última actualización: {ACTUALIZACION_LEGAL}
        </p>

        {faltanDatosDelTitular() && (
          <p className="mt-6 rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-fg">
            <strong>Aviso para el administrador:</strong> faltan datos del titular en{" "}
            <code className="text-xs">lib/config.ts</code>. Complétalos antes de publicar
            el sitio y de solicitar AdSense.
          </p>
        )}

        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </div>
  );
}

/** Sección con encabezado de una página legal. */
export function SeccionLegal({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display font-semibold text-lg text-fg tracking-tight">{titulo}</h2>
      <div className="mt-3 space-y-3 text-muted text-[0.9375rem] leading-relaxed">
        {children}
      </div>
    </section>
  );
}
