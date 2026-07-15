import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-el-imc-y-como-se-calcula",
    title: "¿Qué es el IMC y cómo se calcula?",
    description:
      "Descubre todo sobre el Índice de Masa Corporal: cómo se calcula, qué significa cada categoría y sus limitaciones.",
    date: "2026-01-15",
    category: "Salud",
    content: [
      "El Índice de Masa Corporal (IMC) es una medida que relaciona el peso y la altura de una persona. Se utiliza como herramienta de cribado para identificar posibles problemas de peso en adultos.",
      "La fórmula del IMC es simple: divide tu peso en kilogramos entre el cuadrado de tu altura en metros (kg/m²). El resultado es un número que se clasifica en diferentes categorías según la Organización Mundial de la Salud.",
      "Categorías del IMC: Bajo peso (&lt;18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidad grado I (30-34.9), Obesidad grado II (35-39.9) y Obesidad grado III (&ge;40).",
      "Es importante recordar que el IMC es un indicador, no un diagnóstico definitivo. Atletas, personas mayores o mujeres embarazadas pueden tener lecturas que no reflejan su composición corporal real.",
      "Para un cálculo preciso de tu IMC, utiliza nuestra calculadora de IMC gratuita. Recuerda complementar los resultados con una consulta profesional.",
    ],
  },
  {
    slug: "tipos-de-iva-en-espana-2026",
    title: "Tipos de IVA en España: guía completa 2026",
    description:
      "Conoce los diferentes tipos de IVA en España, qué productos aplican a cada tipo y cómo calcularlos correctamente.",
    date: "2026-01-10",
    category: "Finanzas",
    content: [
      "El IVA (Impuesto sobre el Valor Añadido) es un impuesto indirecto que grava el consumo de productos y servicios. En España existen tres tipos principales que debes conocer.",
      "Tipo general (21%): Se aplica a la mayoría de productos y servicios, incluyendo electrónica, ropa, vehículos, servicios profesionales y hostelería.",
      "Tipo reducido (10%): Afecta a alimentos no básicos, transporte de viajeros, vivienda (obra nueva y rehabilitación), servicios de restauración y suministros de agua.",
      "Tipo superreducido (4%): Se aplica a pan, harina, leche, queso, huevos, frutas, verduras, medicamentos para uso humano, libros y periódicos.",
      "Para calcular el IVA rápidamente, usa nuestra calculadora de IVA online. Te permite añadir o extraer el IVA de cualquier cantidad al instante.",
    ],
  },
];

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mb-6"
        >
          &larr; Volver al blog
        </Link>

        <article>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-accent uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-xs text-muted">{post.date}</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-fg tracking-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-muted leading-relaxed">{post.description}</p>

          <div className="mt-8 space-y-4">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-fg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-10 p-5 rounded-xl border border-border bg-surface">
          <p className="text-sm text-muted text-center">
            &iquest;Te ha sido &uacute;til? Prueba nuestra{" "}
            <Link href="/imc" className="text-accent hover:underline">
              calculadora de IMC
            </Link>{" "}
            o{" "}
            <Link href="/iva" className="text-accent hover:underline">
              calculadora de IVA
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}