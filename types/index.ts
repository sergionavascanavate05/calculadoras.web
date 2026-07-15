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