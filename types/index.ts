export interface CalculatorMeta {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  category: "salud" | "finanzas" | "educacion" | "general";
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
}

export interface CalculatorResult {
  label: string;
  value: string;
  unit?: string;
  description?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface CalculatorContent {
  /** Párrafo de entrada, bajo el H1. */
  intro: string;
  sections: ContentSection[];
  faq: FAQItem[];
  /** Slugs de calculadoras relacionadas, sin barra inicial. */
  related?: string[];
  /** Fuentes citadas: refuerzan E-E-A-T de cara a Google y AdSense. */
  sources?: { label: string; url: string }[];
  /** Aviso legal/sanitario al pie del contenido. */
  disclaimer?: string;
}
