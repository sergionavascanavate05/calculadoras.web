import type { MetadataRoute } from "next";
import { CALCULATOR_REGISTRY } from "@/lib/calculators";
import { SITIO } from "@/lib/config";
import { BLOG_SLUGS } from "@/lib/blog";

/**
 * Sitemap derivado del registro de calculadoras, para que no se
 * desincronice al añadir o quitar herramientas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  const base = SITIO.url.replace(/\/$/, "");

  const url = (
    ruta: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => ({ url: base + ruta, lastModified: ahora, changeFrequency, priority });

  return [
    url("", 1.0, "weekly"),
    ...CALCULATOR_REGISTRY.map((c) => url(c.slug, 0.9, "monthly")),
    url("/blog", 0.6, "weekly"),
    ...BLOG_SLUGS.map((slug) => url(`/blog/${slug}`, 0.5, "monthly")),
    url("/privacidad", 0.3, "yearly"),
    url("/cookies", 0.3, "yearly"),
    url("/aviso-legal", 0.3, "yearly"),
    url("/contacto", 0.4, "yearly"),
  ];
}
