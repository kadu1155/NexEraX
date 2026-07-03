"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight, BarChart3, Bot, BrainCircuit, CheckCircle2, CreditCard,
  MessageCircle, Search, Server, Sparkles, Zap, Star
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

// Left-side floating labels
const leftBadges = [
  { label: "Site Speed 100/100", icon: CheckCircle2, color: "text-emerald-400" },
  { label: "SEO Optimized", icon: Search, color: "text-blue-400" },
  { label: "Lightning Fast", icon: Zap, color: "text-yellow-400" },
  { label: "AI Chatbot", icon: Bot, color: "text-purple-400" },
];

// Right-side floating labels
const rightBadges = [
  { label: "WhatsApp API", icon: MessageCircle, color: "text-green-400" },
  { label: "Payment Gateway", icon: CreditCard, color: "text-blue-400" },
  { label: "Website Hosting", icon: Server, color: "text-cyan-400" },
];

const chartBars = [42, 66, 52, 86, 73, 96, 88];

export function Hero() {
  const { dict } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-28 text-foreground bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-[#080c1a] dark:via-[#0d1230] dark:to-[#0a0f22]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      {/* Neon glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[20%] h-72 w-72 rounded-full bg-blue-600/20 blur-[80px]" />
        <div className="absolute right-[15%] top-[15%] h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[30%] h-60 w-60 rounded-full bg-cyan-500/10 blur-[80px]" />
        <div className="absolute right-[25%] bottom-[10%] h-48 w-48 rounded-full bg-indigo-500/15 blur-[60px]" />
        {/* Animated ring glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[35%] top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20"
          style={{ boxShadow: "0 0 80px rgba(139,92,246,0.15), inset 0 0 80px rgba(139,92,246,0.05)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[35%] top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10"
        />
      </div>

      <div className="container relative grid min-h-[calc(100vh-112px)] items-center gap-10 pb-12 lg:grid-cols-[1fr_1.1fr]">

        {/* ── LEFT COPY ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/50 dark:border-white/10 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {dict.hero.badge}
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-6xl">
            {dict.hero.title1}<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.hero.title2}
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {dict.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 font-bold text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition hover:shadow-[0_0_36px_rgba(59,130,246,0.6)] hover:from-blue-500 hover:to-blue-400"
            >
              {dict.hero.startProject} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-4 text-sm font-bold text-slate-900 dark:text-white backdrop-blur transition dark:hover:border-blue-500/50 dark:hover:bg-white/10"
            >
              {dict.hero.viewPortfolio}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {dict.hero.stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 backdrop-blur shadow-sm dark:shadow-none"
              >
                <p className="text-xl font-black text-blue-600 dark:text-blue-400">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT DASHBOARD ── */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative hidden min-h-[560px] transform-gpu perspective-1000 lg:block"
        >
          {/* Central analytics dashboard panel */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-16 right-16 top-8 bottom-8 flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-[rgba(100,130,255,0.3)] bg-white dark:bg-transparent"
            style={{
              background: "var(--dashboard-bg)", // Handled in global css or conditional, we'll use classes
              boxShadow: "0 0 60px rgba(99,102,241,0.1), 0 0 120px rgba(99,102,241,0.05)"
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-slate-50/80 dark:bg-transparent px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <p className="text-xs font-bold text-slate-400">⬛ ANALYTICS</p>
              <div className="h-5 w-20 rounded bg-white/5 text-center text-[10px] leading-5 text-slate-500">Search Tools ▾</div>
            </div>

            <div className="relative flex-1 bg-slate-900">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                src="/hero-video.mp4" 
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
          </motion.div>

          {/* LEFT floating badges */}
          {leftBadges.map(({ label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 dark:border-[rgba(100,130,255,0.25)] dark:bg-[rgba(10,14,40,0.85)] px-3 py-2 text-xs font-bold backdrop-blur shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              style={{
                top: `${12 + i * 22}%`,
              }}
            >
              <span className={`grid h-7 w-7 place-items-center rounded-lg bg-slate-100 dark:bg-white/5 ${color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-slate-800 dark:text-white">{label}</span>
            </motion.div>
          ))}

          {/* RIGHT floating badges */}
          {rightBadges.map(({ label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              animate={{ y: [0, i % 2 === 0 ? 8 : -8, 0] }}
              transition={{ duration: 4.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 dark:border-[rgba(100,130,255,0.25)] dark:bg-[rgba(10,14,40,0.85)] px-3 py-2 text-xs font-bold backdrop-blur shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              style={{
                top: `${22 + i * 22}%`,
              }}
            >
              <span className={`grid h-7 w-7 place-items-center rounded-lg bg-slate-100 dark:bg-white/5 ${color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-slate-800 dark:text-white">{label}</span>
            </motion.div>
          ))}

          {/* Rating badge bottom right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-2 z-20 flex items-center gap-2 rounded-xl border border-yellow-500/20 bg-white/90 dark:border-[rgba(234,179,8,0.3)] dark:bg-[rgba(10,14,40,0.90)] px-3 py-2 text-xs font-bold backdrop-blur shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <div>
              <p className="text-yellow-600 dark:text-yellow-400 font-black">Rating</p>
              <p className="text-slate-800 dark:text-white">5.0 Agency</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
