"use client";

import { MotionSection } from "./motion-section";
import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Services() {
  const { dict } = useLanguage();
  return (
    <MotionSection
      id="services"
      className="section bg-white dark:bg-[#080c1a] bg-gradient-to-b from-white to-slate-50 dark:from-[#080c1a] dark:to-[#0d1230]"
    >
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-indigo-600 dark:text-indigo-400">{dict.services.eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {dict.services.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            {dict.services.description}
          </p>
        </div>

        {/* 5-Column Grid exactly like reference */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {dict.services.items.map(([name, Icon, description]) => (
            <div
              key={name}
              className="group flex flex-col gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default border border-slate-200 dark:border-[rgba(255,255,255,0.07)] bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-[#0f1535] dark:to-[#090d25] shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-[rgba(99,102,241,0.35)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:shadow-[0_0_24px_rgba(99,102,241,0.1),inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              {/* Icon */}
              <div
                className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 dark:bg-[rgba(99,102,241,0.12)] border border-blue-100 dark:border-[rgba(99,102,241,0.2)]"
              >
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-indigo-300 transition-colors" />
              </div>

              {/* Name */}
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{name}</h3>

              {/* Description */}
              <p className="text-xs leading-5 text-slate-600 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
