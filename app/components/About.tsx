import { Zap, Puzzle, TrendingUp, BarChart3 } from "lucide-react";

const pillars = [
  { icon: Zap, label: "Automatización" },
  { icon: Puzzle, label: "Integración" },
  { icon: TrendingUp, label: "Eficiencia operativa" },
  { icon: BarChart3, label: "Soluciones escalables" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-[#C8102E] text-sm font-semibold uppercase tracking-widest mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1F3589] leading-tight mb-6">
              Tecnología pensada
              <br />
              para México
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              S.CoreTech es una empresa enfocada en soluciones de automatización
              para el mercado mexicano. Diseñamos e integramos tecnología para
              mejorar la operación, reducir fricción en los procesos y ayudar a
              nuestros clientes a crecer con herramientas más simples, eficientes
              y escalables.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Entendemos el contexto operativo y comercial de México. No ofrecemos
              solo hardware o solo software, sino una solución conectada y pensada
              para los retos reales de cada negocio.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C8102E]/20 hover:bg-[#C8102E]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1F3589]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8102E]/10 transition-colors">
                  <Icon size={24} className="text-[#1F3589] group-hover:text-[#C8102E] transition-colors" />
                </div>
                <span className="font-semibold text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
