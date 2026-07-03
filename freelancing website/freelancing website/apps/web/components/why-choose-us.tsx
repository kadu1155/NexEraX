"use client";

import { MotionSection } from "./motion-section";
import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function WhyChooseUs() {
  const { dict } = useLanguage();
  return (
    <MotionSection
      className="section bg-slate-50 dark:bg-[#111418] bg-gradient-to-b from-slate-50 to-white dark:from-[#111418] dark:to-[#0d1117]"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">

          {/* LEFT: Copy */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-orange-600 dark:text-orange-400">{dict.whyChooseUs.eyebrow}</p>
            <h2 className="text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl" dangerouslySetInnerHTML={{ __html: dict.whyChooseUs.title }} />
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600 dark:text-slate-400">
              {dict.whyChooseUs.description}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:from-orange-500 hover:to-orange-400"
            >
              {dict.whyChooseUs.button}
            </a>
          </div>

          {/* RIGHT: 3x3 Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {dict.whyChooseUs.items.map(({ label, Icon }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-0.5 border border-slate-200 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-[#1a1d26] dark:to-[#14171f] shadow-sm hover:shadow-md hover:border-orange-400 dark:hover:border-[rgba(249,115,22,0.3)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] dark:hover:shadow-[0_0_20px_rgba(249,115,22,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 dark:bg-[rgba(249,115,22,0.10)] border border-orange-100 dark:border-[rgba(249,115,22,0.15)]"
                >
                  <Icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </MotionSection>
  );
}
