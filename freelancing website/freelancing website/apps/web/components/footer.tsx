"use client";
import { Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/language-context";
import { portfolio } from "@/lib/site-data";

export function Footer() {
  const { dict } = useLanguage();
  return (
    <footer className="border-t border-brand-border bg-brand-text py-12 text-white">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tighter">
            <Image src="/logo.png" alt="NexEra Logo" width={32} height={32} className="object-contain bg-white rounded-lg p-0.5" />
            NexEraX
          </Link>
          <p className="mt-3 text-slate-400">{dict.footer.tagline}</p>
        </div>
        <div>
          <h3 className="font-bold">{dict.footer.quickLinks}</h3>
          <ul className="mt-4 grid gap-2 text-sm text-slate-400">
            {Object.entries(dict.nav).filter(([k]) => k !== 'getQuote').map(([key, label]) => (
              <li key={key}>
                <Link href={`#${key.toLowerCase()}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">{dict.footer.services}</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {dict.services.items.slice(0, 6).map(([name]) => <span key={name}>{name}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">{dict.footer.contact}</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <a href="mailto:kk25technicalteam@gmail.com">kk25technicalteam@gmail.com</a>
            <a href="tel:+919923772005">+91 9923772005</a>
            <Link href={`/portfolio/${portfolio[0].slug}`}>{dict.footer.featuredWork}</Link>
          </div>
        </div>
      </div>
      <p className="container mt-10 text-sm text-slate-400">© {new Date().getFullYear()} NexEraX. {dict.footer.rights}</p>
    </footer>
  );
}

