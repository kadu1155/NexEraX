"use client";
import { CheckCircle2 } from "lucide-react";
import { MotionSection } from "./motion-section";
import { useLanguage } from "@/lib/i18n/language-context";

export function Pricing() {
  const { dict } = useLanguage();
  return (
    <MotionSection id="pricing" className="section bg-slate-50 dark:bg-[#080c1a] bg-gradient-to-b from-slate-50 to-white dark:from-[#0d1230] dark:to-[#080c1a]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{dict.pricing.eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {dict.pricing.title}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.pricing.items.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 border ${plan.featured ? 'border-blue-500 shadow-xl dark:shadow-[0_0_40px_rgba(99,102,241,0.2)] dark:border-[rgba(99,102,241,0.6)] bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-[#1a2560] dark:to-[#0f1845]' : 'border-slate-200 dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-[#0f1535] dark:to-[#090d25]'}`}
            >
              {/* Most popular badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1 text-xs font-bold text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                    {dict.pricing.popular}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
              </div>

              <p className="mb-6 text-4xl font-black text-slate-900 dark:text-white">{plan.price}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-3 font-bold transition-all ${
                  plan.featured
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                    : "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {dict.pricing.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

