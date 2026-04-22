"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/translations";

const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  ko: "한",
};

// Fixed widths per nav slot based on longest label across all locales
// Slot 0: Inicio / Home / 홈
// Slot 1: Nosotros / About / 소개
// Slot 2: Soluciones / Solutions / 솔루션
// Slot 3: Contacto / Contact / 문의
const NAV_WIDTHS = ["w-[62px]", "w-[78px]", "w-[92px]", "w-[78px]"];

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo — h-14 × 1.2 ≈ 68px */}
          <a href="#inicio" className="flex items-center shrink-0">
            <Image
              src="/logos/logo-full.png"
              alt="S.CoreTech"
              width={260}
              height={78}
              className="h-[68px] w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {t.header.nav.map((label, i) => (
              <a
                key={i}
                href={t.header.navHrefs[i]}
                className={`inline-flex justify-center text-sm font-medium text-gray-600 hover:text-[#4A6FA5] transition-colors ${NAV_WIDTHS[i]}`}
              >
                {label}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1 py-1">
              {(["es", "en", "ko"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
                    locale === l
                      ? "bg-[#4A6FA5] text-white"
                      : "text-gray-500 hover:text-[#4A6FA5]"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[#C0556A] text-white text-sm font-semibold hover:bg-[#A8445A] transition-colors whitespace-nowrap"
            >
              {t.header.cta}
            </a>
          </nav>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-0.5 border border-gray-200 rounded-full px-1 py-1">
              {(["es", "en", "ko"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${
                    locale === l ? "bg-[#4A6FA5] text-white" : "text-gray-500"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-[#4A6FA5] hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-4 space-y-1">
          {t.header.nav.map((label, i) => (
            <a
              key={i}
              href={t.header.navHrefs[i]}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#4A6FA5]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-2.5 rounded-full bg-[#C0556A] text-white text-center font-semibold hover:bg-[#A8445A]"
          >
            {t.header.cta}
          </a>
        </div>
      )}
    </header>
  );
}
