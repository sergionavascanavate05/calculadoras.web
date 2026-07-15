"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { searchCalculators, getCategories, highlightMatch, debounce } from "@/lib/search";
import type { SearchResult } from "@/lib/search";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const categories = getCategories();

  const doSearch = useCallback(
    debounce((q: string) => {
      const r = searchCalculators(q);
      setResults(r);
      setSelectedIndex(0);
    }, 100),
    []
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setActiveCategory(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    doSearch(query);
  }, [query, doSearch]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        window.location.href = results[selectedIndex].calculator.slug;
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, results, selectedIndex, onClose]);

  useEffect(() => {
    const el = listRef.current?.children[selectedIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const filtered = activeCategory
    ? results.filter((r) => r.calculator.category === activeCategory)
    : results;

  const showResults = query.trim().length > 0;
  const showSuggestions = !showResults;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-start justify-center pt-[10vh] sm:pt-[15vh]" role="dialog" aria-modal="true" aria-label="Buscar calculadoras">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-4 rounded-2xl border border-glass-border bg-glass-bg shadow-glass backdrop-blur-glass overflow-hidden animate-scale-in">
        <div className="flex items-center gap-3 px-4 h-14 border-b border-glass-border">
          <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca una calculadora..."
            className="flex-1 bg-transparent border-0 outline-none text-fg text-base placeholder:text-subtle"
            aria-label="Buscar calculadoras"
            autoComplete="off"
          />
          {query && (
            <button onClick={() => setQuery("")} className="w-6 h-6 flex items-center justify-center rounded-full bg-surface-alt text-muted hover:text-fg transition-colors text-xs" aria-label="Limpiar búsqueda">
              ✕
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md border border-border bg-surface text-xs text-muted font-mono">ESC</kbd>
        </div>

        {showSuggestions && (
          <div className="p-3">
            <p className="text-xs text-muted font-medium uppercase tracking-widest mb-2 px-2">Categorías</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setQuery(cat.label); }}
                  className="px-3 py-1.5 rounded-lg text-sm border border-border bg-surface text-muted hover:text-fg hover:border-accent/30 transition-all duration-200"
                >
                  {cat.label}
                  <span className="ml-1.5 text-xs text-subtle">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {showResults && filtered.length > 0 && (
          <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2 space-y-1" role="listbox">
            {filtered.map((result, i) => (
              <Link
                key={result.calculator.id}
                href={result.calculator.slug}
                onClick={onClose}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
                  i === selectedIndex ? "bg-accent-light text-accent" : "text-fg hover:bg-surface-alt"
                }`}
                role="option"
                aria-selected={i === selectedIndex}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface" dangerouslySetInnerHTML={{ __html: result.calculator.icon }} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm" dangerouslySetInnerHTML={{ __html: highlightMatch(result.calculator.title, query) }} />
                  <div className="text-xs text-muted truncate">{result.calculator.description}</div>
                </div>
                <span className="text-xs text-muted px-2 py-0.5 rounded-md bg-surface border border-border capitalize">{result.calculator.category}</span>
              </Link>
            ))}
          </div>
        )}

        {showResults && filtered.length === 0 && (
          <div className="p-8 text-center">
            <div className="text-3xl mb-2 opacity-30">🔍</div>
            <p className="text-muted text-sm">No se encontraron calculadoras para &quot;{query}&quot;</p>
            <p className="text-xs text-subtle mt-1">Prueba con otros términos como &quot;IMC&quot;, &quot;IVA&quot; o &quot;hipoteca&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}