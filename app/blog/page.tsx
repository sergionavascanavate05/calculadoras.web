import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre calculadoras online, salud, finanzas y herramientas útiles para el día a día.",
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-el-imc-y-como-se-calcula",
    title: "¿Qué es el IMC y cómo se calcula?",
    description: "Descubre todo sobre el Índice de Masa Corporal: cómo se calcula, qué significa cada categoría y sus limitaciones.",
    date: "2026-01-15",
    category: "Salud",
  },
  {
    slug: "tipos-de-iva-en-espana-2026",
    title: "Tipos de IVA en España: guía completa 2026",
    description: "Conoce los diferentes tipos de IVA en España, qué productos aplican a cada tipo y cómo calcularlos correctamente.",
    date: "2026-01-10",
    category: "Finanzas",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="font-display font-bold text-hero text-fg tracking-tight">Blog</h1>
          <p className="mt-3 text-muted max-w-xl">
            Artículos y guías sobre calculadoras, salud, finanzas y herramientas &uacute;tiles.
          </p>
        </div>

        <div className="space-y-4">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={"/blog/" + post.slug}
              className="relative group block p-6 rounded-xl border border-border bg-surface transition-all duration-350 ease-out hover:shadow-elevation-2 hover:-translate-y-0.5 hover:border-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 bg-gradient-to-br from-accent/[0.02] to-transparent" />
              <div className="relative flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-accent uppercase tracking-widest">{post.category}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h2 className="relative font-display font-semibold text-fg group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h2>
              <p className="relative mt-1.5 text-sm text-muted leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl border border-border bg-surface text-center">
          <p className="text-sm text-muted">
            Pronto añadiremos m&aacute;s art&iacute;culos. &iquest;Tienes alguna sugerencia? Escr&iacute;benos.
          </p>
        </div>
      </div>
    </div>
  );
}