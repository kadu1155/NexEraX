"use client";

import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { MotionSection } from "./motion-section";
import { SectionTitle } from "./section-title";
import { useLanguage } from "@/lib/i18n/language-context";

export function Faq() {
  const { dict } = useLanguage();
  return (
    <MotionSection id="faq" className="section bg-white dark:bg-[#080c1a]">
      <div className="container max-w-4xl">
        <SectionTitle eyebrow={dict.faq.eyebrow} title={dict.faq.title} />
        <Accordion.Root type="single" collapsible className="space-y-3">
          {dict.faq.items.map(([question, answer]) => (
            <Accordion.Item key={question} value={question} className="rounded-xl border border-brand-border dark:border-white/10 bg-white dark:bg-slate-900 px-5 shadow-soft">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-bold text-foreground">
                  {question}<ChevronDown className="h-5 w-5 shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pb-5 leading-7 text-slate-600 dark:text-slate-300">{answer}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </MotionSection>
  );
}
