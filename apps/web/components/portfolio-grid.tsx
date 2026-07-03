"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/site-data";
import { MotionSection } from "./motion-section";
import { SectionTitle } from "./section-title";
import { useLanguage } from "@/lib/i18n/language-context";

export function PortfolioGrid() {
  const { dict } = useLanguage();
  return (
    <MotionSection id="portfolio" className="section bg-slate-50 dark:bg-[#080c1a] bg-gradient-to-b from-slate-50 to-white dark:from-[#0d1230] dark:to-[#080c1a]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{dict.portfolio.eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {dict.portfolio.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            {dict.portfolio.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group overflow-hidden rounded-xl border border-slate-200 dark:border-[rgba(255,255,255,0.07)] bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-[#0f1535] dark:to-[#090d25] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.category}</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.name}</h3>
                  <ArrowUpRight className="h-6 w-6 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

