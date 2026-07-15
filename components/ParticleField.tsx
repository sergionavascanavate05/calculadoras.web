"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const count = Math.min(12, Math.floor(window.innerWidth / 100));
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.width = p.style.height = (2 + Math.random() * 2) + "px";
      p.style.animationDuration = (20 + Math.random() * 30) + "s";
      p.style.animationDelay = (Math.random() * 25) + "s";
      el.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  return <div ref={canvasRef} className="particle-field" aria-hidden="true" />;
}