"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#4A6FA5]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D4070] via-[#4A6FA5] to-[#5B7FA8]" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#C0556A]/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C0556A] inline-block" />
              {h.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              {h.headline1}
              <br />
              <span className="text-[#C0556A]">{h.headline2}</span>{" "}
              {h.headline3}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/80 max-w-lg mb-10 leading-relaxed">
              {h.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#soluciones"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C0556A] text-white font-semibold hover:bg-[#A8445A] transition-all hover:gap-3"
              >
                {h.cta1}
                <ArrowRight size={18} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={18} />
                {h.cta2}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10" />
              <div className="absolute inset-8 rounded-full bg-white/5 border border-white/10" />
              <Image
                src="/logos/logo-icon.png"
                alt="S.CoreTech"
                width={200}
                height={200}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {h.stats.map((item) => (
            <div
              key={item.value}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <span className="text-white font-bold text-base sm:text-lg">{item.value}</span>
              <span className="text-blue-200/70 text-xs mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
