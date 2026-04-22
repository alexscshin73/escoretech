"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const h = t.header;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D4070] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start mb-10">
          <div>
            <Image
              src="/logos/logo-white.png"
              alt="S.CoreTech"
              width={140}
              height={42}
              className="h-10 w-auto mb-4"
            />
            <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs">{f.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/50 mb-4">
              {f.navLabel}
            </p>
            <ul className="space-y-2">
              {h.nav.map((label, i) => (
                <li key={label}>
                  <a
                    href={h.navHrefs[i]}
                    className="text-blue-200/70 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/50 mb-4">
              {f.contactLabel}
            </p>
            <ul className="space-y-2 text-sm text-blue-200/70">
              <li>
                <a href="mailto:info@escoretech.com.mx" className="hover:text-white transition-colors">
                  info@escoretech.com.mx
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rio+Missouri+555,+Del+Valle,+66220+San+Pedro+Garza+Garc%C3%ADa,+N.L.,+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors hover:underline underline-offset-2"
                >
                  {f.location}
                </a>
              </li>
              <li>
                <a href="tel:+528130988836" className="hover:text-white transition-colors">
                  +52-81-3098-8836
                </a>
              </li>
              <li>
                <a href="https://escoretech.com.mx" className="hover:text-white transition-colors">
                  www.escoretech.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/50 text-xs">© {year} S.CoreTech. {f.copyright}</p>
          <p className="text-blue-200/50 text-xs">Hecho en México 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
}
