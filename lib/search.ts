import type { CalculatorMeta } from "@/types";
import { CALCULATOR_REGISTRY } from "@/lib/calculators";

export interface SearchResult {
  calculator: CalculatorMeta;
  score: number;
  matches: { field: string; value: string }[];
}

const CATEGORY_LABELS: Record<string, string> = {
  salud: "Salud",
  finanzas: "Finanzas",
  educacion: "Educación",
  general: "General",
};

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "");
}

function scoreMatch(query: string, text: string): number {
  const q = normalize(query);
  const t = normalize(text);
  if (t === q) return 100;
  if (t.startsWith(q)) return 80;
  if (t.includes(q)) return 60;
  const words = q.split(/\s+/);
  const matches = words.filter((w) => t.includes(w)).length;
  if (matches > 0) return (matches / words.length) * 40;
  return 0;
}

export function searchCalculators(query: string): SearchResult[] {
  if (!query || query.trim().length < 1) return [];

  const q = query.trim();
  const results: SearchResult[] = [];

  for (const calc of CALCULATOR_REGISTRY) {
    let maxScore = 0;
    const matches: { field: string; value: string }[] = [];

    const fields = [
      { field: "title", value: calc.title },
      { field: "description", value: calc.description },
      { field: "category", value: CATEGORY_LABELS[calc.category] || calc.category },
      { field: "id", value: calc.id.replace(/-/g, " ") },
    ];

    for (const f of fields) {
      const score = scoreMatch(q, f.value);
      if (score > 0) {
        matches.push({ ...f, value: f.value });
        maxScore = Math.max(maxScore, score);
      }
    }

    if (maxScore >= 20) {
      results.push({ calculator: calc, score: maxScore, matches });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 20);
}

export function getCategories(): { id: string; label: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const calc of CALCULATOR_REGISTRY) {
    counts[calc.category] = (counts[calc.category] || 0) + 1;
  }
  return Object.entries(counts).map(([id, count]) => ({
    id,
    label: CATEGORY_LABELS[id] || id,
    count,
  }));
}

export function highlightMatch(text: string, query: string): string {
  if (!query) return text;
  const q = normalize(query);
  const t = normalize(text);
  if (!q || !t) return text;

  const idx = t.indexOf(q);
  if (idx === -1) return text;

  const start = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const end = text.slice(idx + q.length);
  return `${start}<mark class="search-highlight">${match}</mark>${end}`;
}

export function debounce<T extends (...args: never[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}