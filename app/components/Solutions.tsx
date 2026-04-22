"use client";

import { Monitor, Database, Cpu, LineChart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Monitor, Database, Cpu, LineChart];
const colors = ["#C0556A", "#4A6FA5", "#C0556A", "#4A6FA5"];

export default function Solutions() {
  const { t } = useLanguage();
  const s = t.solutions;

  return (
    <section id="soluciones" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C0556A] text-sm font-semibold uppercase tracking-widest mb-4">
            {s.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4A6FA5]">{s.heading}</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">{s.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.cards.map((card, i) => {
            const Icon = icons[i];
            const color = colors[i];
            return (
              <div
                key={card.title}
                className="group flex flex-col bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {card.description}
                </p>
                <ul className="space-y-2">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
