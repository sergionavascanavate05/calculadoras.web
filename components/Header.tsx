"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Calculadoras", href: "/#calculadoras" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ease-out ${
        scrolled
          ? "bg-glass-bg backdrop-blur-glass border-b border-glass-border shadow-glass"
          : "bg-transparent"
      }`}
      data-od-id="site-header"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-fg hover:text-accent transition-all duration-200"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-white text-sm font-bold">#</span>
          Calculadoras
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-accent bg-accent-light font-medium"
                    : "text-muted hover:text-fg hover:bg-surface-alt"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-fg hover:bg-surface transition-all duration-200"
            aria-label="Menú"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden glass border-t border-glass-border animate-slide-up">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent bg-accent-light font-medium"
                      : "text-muted hover:text-fg hover:bg-surface-alt"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}