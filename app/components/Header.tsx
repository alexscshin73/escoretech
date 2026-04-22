"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logos/logo-full.png"
              alt="S.CoreTech"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#1F3589] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 inline-flex items-center px-5 py-2 rounded-full bg-[#C8102E] text-white text-sm font-semibold hover:bg-[#a00d23] transition-colors"
            >
              Contáctanos
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#1F3589] hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#1F3589]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-2.5 rounded-full bg-[#C8102E] text-white text-center font-semibold hover:bg-[#a00d23]"
          >
            Contáctanos
          </a>
        </div>
      )}
    </header>
  );
}
