import Link from "next/link";
import { CALCULATOR_REGISTRY } from "@/lib/calculators";
import type { CalculatorContent as Content } from "@/types";

/**
 * Renderiza el contenido editorial de una calculadora: guía, tabla de
 * referencia, preguntas frecuentes y fuentes.
 *
 * Las FAQ usan <details>/<summary> en lugar de un acordeón con JavaScript:
 * son accesibles por teclado de serie, funcionan sin JS y no provocan
 * desplazamiento de diseño (CLS) al hidratar.
 */
export default function CalculatorContent({ content }: { content: Content }) {
  const relacionadas = (content.related ?? [])
    .map((slug) => CALCULATOR_REGISTRY.find((c) => c.id === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <article className="mt-14 space-y-10">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display font-semibold text-xl text-fg tracking-tight">
              {section.heading}
            </h2>

            {section.paragraphs?.map((p, i) => (
              <p key={i} className="mt-3 text-muted text-[0.9375rem] leading-relaxed">
                {p}
              </p>
            ))}

            {section.list && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted text-[0.9375rem] leading-relaxed pl-5 relative"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.table && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {section.table.headers.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="text-left font-semibold text-fg py-2.5 px-3 border-b border-border-strong whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="text-muted py-2.5 px-3 border-b border-border align-top"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {content.faq.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-xl text-fg tracking-tight">
              Preguntas frecuentes
            </h2>
            <div className="mt-4 divide-y divide-border border-t border-border">
              {content.faq.map((item) => (
                <details key={item.q} className="group py-3">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-fg font-medium text-[0.9375rem] leading-relaxed">
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-45"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-2 pr-8 text-muted text-[0.9375rem] leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {relacionadas.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-xl text-fg tracking-tight">
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

        {content.sources && content.sources.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-base text-fg tracking-tight">
              Fuentes
            </h2>
            <ul className="mt-3 space-y-1.5">
              {content.sources.map((s) => (
                <li key={s.url} className="text-sm">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {content.disclaimer && (
          <p className="text-subtle text-xs leading-relaxed border-t border-border pt-5">
            {content.disclaimer}
          </p>
        )}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </>
  );
}
