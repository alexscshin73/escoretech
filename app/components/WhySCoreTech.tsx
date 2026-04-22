import { MapPin, Link2, Lightbulb, Layers } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Enfoque en México",
    description:
      "Entendemos el contexto operativo y comercial del mercado mexicano. Nuestras soluciones están diseñadas para los retos reales de empresas en México.",
  },
  {
    icon: Link2,
    title: "Soluciones integradas",
    description:
      "No ofrecemos solo hardware o solo software, sino una solución conectada que une cada parte de tu operación en un solo ecosistema.",
  },
  {
    icon: Lightbulb,
    title: "Diseño simple y funcional",
    description:
      "Buscamos resolver problemas reales con tecnología clara y útil. Sin complicaciones innecesarias, enfocados en lo que realmente importa.",
  },
  {
    icon: Layers,
    title: "Visión de largo plazo",
    description:
      "Construimos una base tecnológica que puede crecer junto con el negocio del cliente. Tu crecimiento es nuestro objetivo.",
  },
];

export default function WhySCoreTech() {
  return (
    <section className="py-24 bg-[#1F3589]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] text-sm font-semibold uppercase tracking-widest mb-4">
            Nuestra diferencia
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Por qué S.CoreTech
          </h2>
          <p className="mt-4 text-blue-200/70 text-lg max-w-2xl mx-auto">
            Más que un proveedor de tecnología, somos un socio estratégico para
            el crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C8102E]/20 flex items-center justify-center mb-5">
                <Icon size={24} className="text-[#C8102E]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
