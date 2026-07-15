import Link from "next/link";
import { CALCULATOR_REGISTRY } from "@/lib/calculators";

export default function Footer() {
  const calculators = CALCULATOR_REGISTRY;

  return (
    <footer className="relative mt-24 pt-16 pb-10 border-t border-border bg-surface" data-od-id="site-footer">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-fg hover:text-accent transition-colors mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-white text-sm font-bold">#</span>
              Calculadoras
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Herramientas gratuitas para calcular IMC, IVA y más. Rápidas, precisas y sin registro.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-fg mb-4">Calculadoras</h3>
            <ul className="space-y-2.5">
              {calculators.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link href={c.slug} className="text-sm text-muted hover:text-accent transition-colors duration-200">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-fg mb-4">Contenido</h3>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors duration-200">Blog</Link></li>
              <li><Link href="/#calculadoras" className="text-sm text-muted hover:text-accent transition-colors duration-200">Todas las calculadoras</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm text-fg mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link href="/privacidad" className="text-sm text-muted hover:text-accent transition-colors duration-200">Política de privacidad</Link></li>
              <li><Link href="/contacto" className="text-sm text-muted hover:text-accent transition-colors duration-200">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Calculadoras Online. Herramientas gratuitas para tus cálculos diarios.
          </p>
        </div>
      </div>
    </footer>
  );
}