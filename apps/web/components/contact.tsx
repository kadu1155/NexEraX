"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { apiUrl } from "@/lib/utils";
import { MotionSection } from "./motion-section";
import { SectionTitle } from "./section-title";
import { useLanguage } from "@/lib/i18n/language-context";

const fields = [
  ["name", "Name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
  ["businessName", "Business Name", "text"],
  ["website", "Website", "url"],
  ["budget", "Budget", "text"],
  ["projectType", "Project Type", "text"]
] as const;

export function Contact() {
  const { dict } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch(`${apiUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Lead submission failed");
      form.reset();
      setIsSubmitting(false);
      setStatus("success");
    } catch {
      setIsSubmitting(false);
      setStatus("error");
    }
  }

  return (
    <MotionSection id="contact" className="section bg-background dark:bg-slate-950/30">
      <div className="container">
        <SectionTitle 
          eyebrow={dict.contact.eyebrow} 
          title={dict.contact.title} 
          text={dict.contact.description} 
        />
        <form onSubmit={onSubmit} className="mx-auto grid max-w-4xl gap-4 rounded-xl border border-brand-border dark:border-white/10 bg-background dark:bg-slate-900 p-5 shadow-soft sm:p-8 sm:grid-cols-2">
          {fields.map(([name, label, type]) => (
            <label key={name} className="grid gap-2 text-sm font-bold">
              {label}
              <input name={name} type={type} required={name !== "website"} className="rounded-xl border border-brand-border dark:border-white/10 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40" />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">
            Message
            <textarea name="message" required rows={5} className="rounded-xl border border-brand-border dark:border-white/10 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40" />
          </label>
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-white shadow-soft transition hover:bg-brand-hover disabled:opacity-70 sm:col-span-2"
          >
            {isSubmitting ? dict.contact.fields.sending : dict.contact.fields.submit}
            <Send className="h-5 w-5" />
          </button>
          {status === "success" && (
            <p className="text-sm font-bold text-green-500 sm:col-span-2">{dict.contact.fields.success}</p>
          )}
          {status === "error" && (
            <p className="text-sm font-bold text-red-500 sm:col-span-2">{dict.contact.fields.error}</p>
          )}
        </form>
      </div>
    </MotionSection>
  );
}
