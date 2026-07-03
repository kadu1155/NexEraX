"use client";
import { clients } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n/language-context";

export function TrustedBy() {
  const { dict } = useLanguage();
  return (
    <section className="border-y border-brand-border dark:border-white/10 bg-background dark:bg-slate-950/50 py-8">
      <p className="container mb-4 text-center text-xs font-bold uppercase tracking-widest text-foreground/40">{dict.trustedBy}</p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
        <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-4 px-4">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="rounded-xl border border-brand-border dark:border-white/10 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-bold text-foreground shadow-soft whitespace-nowrap"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

