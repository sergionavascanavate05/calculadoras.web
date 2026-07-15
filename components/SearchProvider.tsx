"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("@/components/SearchModal"), { ssr: false });

export default function SearchProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <SearchModal open={open} onClose={() => setOpen(false)} />
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[400] w-12 h-12 rounded-full bg-accent text-white shadow-elevation-3 hover:shadow-elevation-hover hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
        aria-label="Buscar calculadoras (Ctrl+K)"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </>
  );
}