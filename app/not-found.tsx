import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative text-center max-w-md">
        <div className="font-display font-bold text-8xl sm:text-9xl text-accent/20 leading-none">404</div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-fg tracking-tight -mt-4">
          Página no encontrada
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          La página que buscas no existe o ha sido movida. Prueba con nuestra calculadora de IMC o IVA.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary px-6 py-2.5">
            Volver al inicio
          </Link>
          <Link href="/imc" className="btn-secondary px-6 py-2.5">
            Calculadora de IMC
          </Link>
        </div>
      </div>
    </div>
  );
}