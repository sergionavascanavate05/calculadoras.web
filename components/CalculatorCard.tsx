"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import type { CalculatorMeta } from "@/types";

export default function CalculatorCard({ calculator }: { calculator: CalculatorMeta }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    const inner = innerRef.current;
    if (!card || !inner) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    inner.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
    card.style.setProperty("--mouse-x", (e.clientX - rect.left) / rect.width * 100 + "%");
    card.style.setProperty("--mouse-y", (e.clientY - rect.top) / rect.height * 100 + "%");
  }, []);

  const handleMouseLeave = useCallback(() => {
    const inner = innerRef.current;
    if (inner) inner.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);

  return (
    <Link
      ref={cardRef}
      href={calculator.slug}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card group relative block p-6 rounded-xl border border-border bg-surface
        transition-all duration-350 ease-out
        hover:border-accent/20 hover:shadow-elevation-2 hover:-translate-y-1
        overflow-hidden"
    >
      <div className="tilt-glow" />
      <span ref={innerRef} className="tilt-card-inner relative block" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350
          bg-gradient-to-br from-accent/[0.03] to-transparent" />
        <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-350
          ring-1 ring-accent/10" />
        <span className="relative block mb-3 text-accent transition-transform duration-350 group-hover:scale-110" style={{ width: 28, height: 28 }}>
          <span dangerouslySetInnerHTML={{ __html: calculator.icon }} />
        </span>
        <h3 className="relative font-display font-semibold text-fg group-hover:text-accent transition-colors duration-200">
          {calculator.title}
        </h3>
        <p className="relative mt-1.5 text-sm text-muted leading-relaxed">
          {calculator.description}
        </p>
        <span className="relative inline-flex items-center gap-1 mt-3 text-xs font-medium text-accent uppercase tracking-widest transition-all duration-200 group-hover:gap-2">
          Calcular ahora
          <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </span>
    </Link>
  );
}