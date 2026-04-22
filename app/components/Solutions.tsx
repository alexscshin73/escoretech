import { Monitor, Database, Cpu, LineChart } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "Kiosk & POS",
    description:
      "Soluciones para autoservicio y punto de venta que mejoran la experiencia del cliente y optimizan la operación del negocio.",
    features: [
      "Mejor experiencia para clientes",
      "Mayor eficiencia en la operación",
      "Reducción de tiempos de espera",
    ],
    color: "#C8102E",
  },
  {
    icon: Database,
    title: "ERP & CRM",
    description:
      "Control total de tu operación, inventario y gestión comercial con información centralizada en tiempo real.",
    features: [
      "Información centralizada",
      "Mejor seguimiento del negocio",
      "Control de inventario",
    ],
    color: "#1F3589",
  },
  {
    icon: Cpu,
    title: "Automatización Operativa",
    description:
      "Optimización de procesos e integración entre sistemas para eliminar errores manuales y ganar eficiencia.",
    features: [
      "Optimización de procesos",
      "Integración entre sistemas",
      "Reducción de errores manuales",
    ],
    color: "#C8102E",
  },
  {
    icon: LineChart,
    title: "Data & Smart Infrastructure",
    description:
      "Uso estratégico de datos como base para nuevos servicios digitales y crecimiento escalable del negocio.",
    features: [
      "Uso estratégico de datos",
      "Base para servicios digitales",
      "Escalabilidad para el futuro",
    ],
    color: "#1F3589",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C8102E] text-sm font-semibold uppercase tracking-widest mb-4">
            Qué ofrecemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F3589]">
            Nuestras Soluciones
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Tecnología integrada para resolver los retos reales de tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="group flex flex-col bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${sol.color}15` }}
                >
                  <Icon size={24} style={{ color: sol.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {sol.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {sol.description}
                </p>
                <ul className="space-y-2">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: sol.color }}
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
