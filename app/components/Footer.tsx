import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#152566] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/logos/logo-white.png"
              alt="S.CoreTech"
              width={140}
              height={42}
              className="h-10 w-auto mb-4"
            />
            <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs">
              Soluciones inteligentes para automatizar y optimizar tu negocio en
              México.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/50 mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-200/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/50 mb-4">
              Contacto
            </p>
            <ul className="space-y-2 text-sm text-blue-200/70">
              <li>
                <a
                  href="mailto:info@escoretech.com.mx"
                  className="hover:text-white transition-colors"
                >
                  info@escoretech.com.mx
                </a>
              </li>
              <li>Monterrey, México</li>
              <li>
                <a
                  href="https://escoretech.com.mx"
                  className="hover:text-white transition-colors"
                >
                  www.escoretech.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/50 text-xs">
            © {year} S.CoreTech. Todos los derechos reservados.
          </p>
          <p className="text-blue-200/50 text-xs">
            Hecho en México 🇲🇽
          </p>
        </div>
      </div>
    </footer>
  );
}
