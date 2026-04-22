"use client";

import { Zap, Puzzle, TrendingUp, BarChart3 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Zap, Puzzle, TrendingUp, BarChart3];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#C8102E] text-sm font-semibold uppercase tracking-widest mb-4">
              {a.label}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1F3589] leading-tight mb-6">
              {a.heading1}
              <br />
              {a.heading2}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{a.body1}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{a.body2}</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {a.pillars.map((label, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={label}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C8102E]/20 hover:bg-[#C8102E]/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1F3589]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8102E]/10 transition-colors">
                    <Icon size={24} className="text-[#1F3589] group-hover:text-[#C8102E] transition-colors" />
                  </div>
                  <span className="font-semibold text-gray-800">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
