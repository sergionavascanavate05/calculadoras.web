import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calculadoras-online.com";
  const staticPages = [
    { path: "", lastModified: new Date(), priority: 1.0 },
    { path: "/imc", lastModified: new Date(), priority: 0.9 },
    { path: "/iva", lastModified: new Date(), priority: 0.9 },
    { path: "/hipoteca", lastModified: new Date(), priority: 0.9 },
    { path: "/interes-compuesto", lastModified: new Date(), priority: 0.9 },
    { path: "/prestamo", lastModified: new Date(), priority: 0.9 },
    { path: "/amortizacion", lastModified: new Date(), priority: 0.9 },
    { path: "/descuento", lastModified: new Date(), priority: 0.9 },
    { path: "/porcentaje", lastModified: new Date(), priority: 0.9 },
    { path: "/propina", lastModified: new Date(), priority: 0.9 },
    { path: "/edad", lastModified: new Date(), priority: 0.9 },
    { path: "/dias-entre-fechas", lastModified: new Date(), priority: 0.9 },
    { path: "/calorias", lastModified: new Date(), priority: 0.9 },
    { path: "/peso-ideal", lastModified: new Date(), priority: 0.9 },
    { path: "/tmb", lastModified: new Date(), priority: 0.9 },
    { path: "/fcm", lastModified: new Date(), priority: 0.9 },
    { path: "/iva-inverso", lastModified: new Date(), priority: 0.9 },
    { path: "/inflacion", lastModified: new Date(), priority: 0.9 },
    { path: "/consumo-combustible", lastModified: new Date(), priority: 0.9 },
    { path: "/divisas", lastModified: new Date(), priority: 0.9 },
    { path: "/margen-comercial", lastModified: new Date(), priority: 0.9 },
    { path: "/beneficio", lastModified: new Date(), priority: 0.9 },
    { path: "/blog", lastModified: new Date(), priority: 0.7 },
    { path: "/blog/que-es-el-imc-y-como-se-calcula", lastModified: new Date(), priority: 0.6 },
    { path: "/blog/tipos-de-iva-en-espana-2026", lastModified: new Date(), priority: 0.6 },
  ];
  return staticPages.map((page) => ({ url: baseUrl + page.path, lastModified: page.lastModified, changeFrequency: "daily" as const, priority: page.priority }));
}