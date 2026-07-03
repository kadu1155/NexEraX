"use client";
import { MotionSection } from "./motion-section";
import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Process() {
  const { dict } = useLanguage();
  return (
    <MotionSection
      className="section bg-white dark:bg-[#080c1a] bg-gradient-to-b from-white to-slate-50 dark:from-[#080c1a] dark:to-[#0d1230]"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{dict.process.eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {dict.process.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-7">
          {dict.process.items.map((step, index) => (
            <div
              key={step}
              className="relative flex flex-col items-center rounded-2xl p-5 text-center border border-slate-200 dark:border-[rgba(255,255,255,0.07)] bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-[#0f1535] dark:to-[#090d25] shadow-sm"
            >
              <div
                className="mb-3 grid h-9 w-9 place-items-center rounded-xl font-black text-white text-sm bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
              >
                {index + 1}
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

