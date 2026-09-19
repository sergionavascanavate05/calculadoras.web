import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { CALCULATOR_REGISTRY } from "@/lib/calculators";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      locale: "es_ES",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const relacionadas = post.related
    .map((id) => CALCULATOR_REGISTRY.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const fecha = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <nav aria-label="Ruta de navegación" className="mb-6 text-sm">
          <Link href="/" className="text-muted hover:text-accent transition-colors">Inicio</Link>
          <span className="mx-2 text-subtle" aria-hidden="true">/</span>
          <Link href="/blog" className="text-muted hover:text-accent transition-colors">Blog</Link>
        </nav>

        <article>
          <header>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium text-accent uppercase tracking-widest">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-xs text-muted">{fecha}</time>
              <span className="text-xs text-subtle">· {post.readingTime} de lectura</span>
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight">
              {post.title}
            </h1>
            <p className="mt-3 text-muted text-[0.9375rem] leading-relaxed">{post.description}</p>
          </header>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display font-semibold text-xl text-fg tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 text-muted text-[0.9375rem] leading-relaxed">{p}</p>
                ))}
              </section>
            ))}
          </div>
        </article>

        {relacionadas.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display font-semibold text-lg text-fg tracking-tight">
              Calculadoras relacionadas
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {relacionadas.map((c) => (
                <li key={c.id}>
                  <Link
                    href={c.slug}
                    className="inline-block rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg hover:border-accent hover:text-accent transition-colors"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            inLanguage: "es-ES",
          }),
        }}
      />
    </div>
  );
}
