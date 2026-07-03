"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const links = ["Services", "Portfolio", "Pricing", "FAQ", "Contact"];

export function Header() {
  const { theme, setTheme } = useTheme();
  const { dict, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 23, 42, 0.65)"
          : "rgba(15, 23, 42, 0.15)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none"
      }}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="NexEra Logo"
            width={40}
            height={40}
            className="rounded-xl object-contain bg-white"
          />
          <span className="text-lg font-black text-white">NexEraX</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {Object.entries(dict.nav).filter(([k]) => k !== 'getQuote').map(([key, label]) => (
            <a
              key={key}
              href={`#${key.toLowerCase()}`}
              className="text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="h-9 cursor-pointer rounded-lg bg-transparent px-2 text-xs font-bold text-slate-400 outline-none transition-colors hover:bg-white/5 hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <option value="en" className="bg-slate-900">EN</option>
            <option value="mr" className="bg-slate-900">MR</option>
            <option value="hi" className="bg-slate-900">HI</option>
          </select>
          {/* Theme toggle */}
          {mounted ? (
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Sun className="hidden h-4 w-4 dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </button>
          ) : (
            <div className="h-9 w-9 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.08)" }} />
          )}

          {/* CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all sm:inline-flex"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              boxShadow: "0 0 16px rgba(59,130,246,0.3)"
            }}
          >
            <Zap className="h-3.5 w-3.5" />
            {dict.nav.getQuote}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(8, 12, 26, 0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <nav className="container flex flex-col gap-1 py-4">
            {Object.entries(dict.nav).filter(([k]) => k !== 'getQuote').map(([key, label]) => (
              <a
                key={key}
                href={`#${key.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" }}
            >
              {dict.nav.getQuote}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
