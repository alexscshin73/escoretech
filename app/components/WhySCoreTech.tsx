"use client";

import { MapPin, Link2, Lightbulb, Layers } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [MapPin, Link2, Lightbulb, Layers];

export default function WhySCoreTech() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section className="py-24 bg-[#1F3589]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] text-sm font-semibold uppercase tracking-widest mb-4">
            {w.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">{w.heading}</h2>
          <p className="mt-4 text-blue-200/70 text-lg max-w-2xl mx-auto">{w.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {w.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="flex flex-col p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8102E]/20 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#C8102E]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
