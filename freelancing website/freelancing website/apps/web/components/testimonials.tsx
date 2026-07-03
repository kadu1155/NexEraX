"use client";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { MotionSection } from "./motion-section";
import { SectionTitle } from "./section-title";
import { useLanguage } from "@/lib/i18n/language-context";

export function Testimonials() {
  const { dict } = useLanguage();
  return (
    <MotionSection className="section bg-background dark:bg-slate-950/50">
      <div className="container">
        <SectionTitle eyebrow={dict.testimonials.eyebrow} title={dict.testimonials.title} />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-xl border border-brand-border dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-soft">
              <div className="mb-4 flex gap-1 text-yellow-400">{Array.from({ length: item.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="leading-7 text-slate-600 dark:text-slate-400">"{item.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary font-black text-white">{item.name[0]}</div>
                <div><p className="font-bold">{item.name}</p><p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

