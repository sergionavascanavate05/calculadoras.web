import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guías prácticas sobre finanzas personales, nóminas, hipotecas y salud para entender los números del día a día.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Ruta de navegación" className="mb-6 text-sm">
          <Link href="/" className="text-muted hover:text-accent transition-colors">Inicio</Link>
          <span className="mx-2 text-subtle" aria-hidden="true">/</span>
          <span className="text-fg">Blog</span>
        </nav>

        <header className="mb-10">
          <h1 className="font-display font-bold text-hero text-fg tracking-tight">Blog</h1>
          <p className="mt-3 text-muted max-w-xl text-[0.9375rem] leading-relaxed">
            Guías prácticas para entender los números que aparecen en tu nómina, en tu hipoteca y
            en tus decisiones del día a día.
          </p>
        </header>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="relative group block p-6 rounded-xl border border-border bg-surface transition-all duration-350 ease-out hover:shadow-elevation-2 hover:-translate-y-0.5 hover:border-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 bg-gradient-to-br from-accent/[0.02] to-transparent" />
              <div className="relative flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-medium text-accent uppercase tracking-widest">
                  {post.category}
                </span>
                <time dateTime={post.date} className="text-xs text-muted">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-xs text-subtle">· {post.readingTime}</span>
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
      </div>
    </div>
  );
}
