"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import CalculatorCard from "@/components/CalculatorCard";
import { CALCULATOR_REGISTRY } from "@/lib/calculators";
import Link from "next/link";
import { searchCalculators } from "@/lib/search";

const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const SearchModal = dynamic(() => import("@/components/SearchModal"), { ssr: false });

const STATS = [
  { value: 21, label: "Calculadoras", suffix: "" },
  { value: 100, label: "Gratuitas", suffix: "%" },
  { value: 0, label: "Registro necesario", suffix: "" },
  { value: 24, label: "Disponibles", suffix: "/7" },
];

const CATEGORIES = [
  { name: "Salud", slug: "/#salud", count: 5, color: "from-emerald-500/20 to-emerald-500/5" },
  { name: "Finanzas", slug: "/#finanzas", count: 11, color: "from-blue-500/20 to-blue-500/5" },
  { name: "General", slug: "/#general", count: 5, color: "from-violet-500/20 to-violet-500/5" },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-scale, .stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * value);
            setDisplay(value > 0 ? current.toString() + suffix : "0" + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return <span ref={ref} className="counter-value">{display}</span>;
}

function MagneticLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMouse = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const dist = Math.min(Math.sqrt(x * x + y * y) / 40, 1);
    el.style.transform = `translate(${x * 0.2 * dist}px, ${y * 0.2 * dist}px)`;
  }, []);
  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);
  return (
    <Link ref={ref} href={href} className={`magnetic-btn ${className || ""}`} onMouseMove={handleMouse} onMouseLeave={handleLeave}>
      {children}
    </Link>
  );
}

function RippleButton({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }, []);
  return (
    <Link href={href} className={`ripple-btn ${className || ""}`} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default function HomePage() {
  const calculators = CALCULATOR_REGISTRY;
  const [searchOpen, setSearchOpen] = useState(false);
  useReveal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const bar = document.getElementById("scroll-progress");
      if (bar) bar.style.width = Math.min(progress, 100) + "%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div id="scroll-progress" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16" data-od-id="hero-section">
        <ParticleField />
        <div className="gradient-mesh">
          <div className="orb" style={{ width: 500, height: 500, background: "var(--color-accent)", opacity: 0.08, top: "10%", left: "20%", animationDelay: "0s" }} />
          <div className="orb" style={{ width: 400, height: 400, background: "var(--color-accent)", opacity: 0.06, top: "50%", right: "10%", animationDelay: "-7s" }} />
          <div className="orb" style={{ width: 300, height: 300, background: "var(--color-accent)", opacity: 0.05, bottom: "10%", left: "40%", animationDelay: "-14s" }} />
        </div>
        <div className="relative max-w-content mx-auto px-4 sm:px-6 text-center z-10">
          <div className="reveal visible">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-light text-xs font-medium text-accent mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Herramientas gratuitas — sin registro
            </div>
          </div>
          <h1 className="reveal visible font-display font-bold text-display text-fg leading-[1.05] tracking-tight max-w-4xl mx-auto" data-od-id="hero-heading" style={{ transitionDelay: "100ms" }}>
            Calculadoras online
            <br />
            <span className="shimmer-text">gratuitas y precisas</span>
          </h1>
          <p className="reveal visible mt-6 text-muted text-lg max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: "200ms" }}>
            Herramientas gratuitas para calcular IMC, IVA y más. Rápidas, precisas y sin registro.
          </p>
          <div className="reveal visible mt-10 flex flex-wrap items-center justify-center gap-4" style={{ transitionDelay: "300ms" }}>
            <RippleButton href="/#calculadoras" className="btn-primary text-base px-8 py-3">
              Explorar calculadoras
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </RippleButton>
            <MagneticLink href="/imc" className="btn-secondary text-base px-8 py-3">
              Calcular IMC
            </MagneticLink>
          </div>

          {/* Search */}
          <div className="reveal visible mt-10 max-w-md mx-auto" style={{ transitionDelay: "400ms" }}>
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-3 px-4 h-12 rounded-xl border border-border bg-surface text-muted hover:text-fg hover:border-accent/30 hover:shadow-elevation-1 transition-all duration-200 text-left"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="flex-1 text-sm">Busca una calculadora...</span>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-border bg-surface text-xs text-muted font-mono">
                <span>⌘</span>K
              </kbd>
            </button>
          </div>

          <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
        <div className="scroll-indicator">
          <div className="mouse" />
        </div>
      </section>

      {/* Stats */}
      <section className="relative max-w-content mx-auto px-4 sm:px-6 -mt-10 mb-16" data-od-id="stats-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="card text-center py-8 px-4 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-display font-bold text-3xl text-accent">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-content mx-auto px-4 sm:px-6 mb-16" data-od-id="categories-section">
        <div className="text-center mb-10 reveal">
          <h2 className="font-display font-semibold text-hero text-fg">Categorías</h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">Encuentra la calculadora que necesitas por categoría.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={cat.slug}
              className="tilt-card relative group p-6 rounded-xl border border-border bg-surface overflow-hidden
                transition-all duration-350 ease-out hover:shadow-elevation-2 hover:-translate-y-0.5 reveal"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-50 group-hover:opacity-100 transition-opacity duration-350`} />
              <div className="tilt-glow" />
              <div className="relative">
                <div className="font-display font-semibold text-fg text-lg">{cat.name}</div>
                <div className="mt-1 text-sm text-muted">{cat.count} calculadoras</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculator Grid */}
      <section id="calculadoras" className="max-w-content mx-auto px-4 sm:px-6 mb-16" data-od-id="calculadoras-section">
        <div className="text-center mb-10 reveal">
          <h2 className="font-display font-semibold text-hero text-fg">Todas las calculadoras</h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">Herramientas rápidas, precisas y completamente gratuitas.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger reveal">
          {calculators.map((calc) => (
            <CalculatorCard key={calc.id} calculator={calc} />
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-content mx-auto px-4 sm:px-6 mb-16" data-od-id="why-section">
        <div className="text-center mb-10 reveal">
          <h2 className="font-display font-semibold text-hero text-fg">¿Por qué Calculadoras Online?</h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">Diseñadas para ser rápidas, precisas y accesibles desde cualquier dispositivo.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger reveal">
          {[
            { title: "100% gratuitas", desc: "Todas nuestras calculadoras son completamente gratuitas. Sin registro, sin suscripciones, sin límites.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Precisión garantizada", desc: "Fórmulas actualizadas y verificadas. Resultados precisos basados en estándares oficiales.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Sin complicaciones", desc: "Interfaz limpia y minimalista. Encuentra la herramienta que necesitas en segundos.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-fg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-content mx-auto px-4 sm:px-6 mb-16" data-od-id="cta-section">
        <div className="reveal-scale relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/10 p-10 sm:p-16 text-center">
          <div className="gradient-mesh">
            <div className="orb" style={{ width: 300, height: 300, background: "var(--color-accent)", opacity: 0.1, top: "20%", right: "10%", animationDelay: "-3s" }} />
          </div>
          <div className="relative z-10">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-fg">¿Buscas una calculadora específica?</h2>
            <p className="mt-3 text-muted max-w-lg mx-auto">
              Estamos añadiendo nuevas calculadoras cada semana. Si necesitas una herramienta concreta, escríbenos y la priorizaremos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <RippleButton href="/#calculadoras" className="btn-primary px-8 py-3">
                Ver todas las calculadoras
              </RippleButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}