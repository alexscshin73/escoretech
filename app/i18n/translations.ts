export type Locale = "es" | "en" | "ko";

export const translations = {
  es: {
    header: {
      nav: ["Inicio", "Nosotros", "Soluciones", "Contacto"],
      navHrefs: ["#inicio", "#nosotros", "#soluciones", "#contacto"],
      cta: "Contáctanos",
    },
    hero: {
      badge: "Monterrey, México",
      headline1: "Automatización",
      headline2: "inteligente",
      headline3: "para negocios en México",
      sub: "S.CoreTech ayuda a empresas y comercios a mejorar su operación con soluciones de Kiosk, POS, ERP, CRM y automatización conectada.",
      cta1: "Conoce nuestras soluciones",
      cta2: "Contáctanos",
      stats: [
        { value: "Kiosk & POS", label: "Autoservicio" },
        { value: "ERP & CRM", label: "Gestión empresarial" },
        { value: "Automatización", label: "Procesos operativos" },
        { value: "Data & BI", label: "Inteligencia de negocio" },
      ],
    },
    about: {
      label: "Sobre Nosotros",
      heading1: "Tecnología pensada",
      heading2: "para México",
      body1:
        "S.CoreTech es una empresa enfocada en soluciones de automatización para el mercado mexicano. Diseñamos e integramos tecnología para mejorar la operación, reducir fricción en los procesos y ayudar a nuestros clientes a crecer con herramientas más simples, eficientes y escalables.",
      body2:
        "Entendemos el contexto operativo y comercial de México. No ofrecemos solo hardware o solo software, sino una solución conectada y pensada para los retos reales de cada negocio.",
      pillars: ["Automatización", "Integración", "Eficiencia operativa", "Soluciones escalables"],
    },
    solutions: {
      label: "Qué ofrecemos",
      heading: "Nuestras Soluciones",
      sub: "Tecnología integrada para resolver los retos reales de tu negocio.",
      cards: [
        {
          title: "Kiosk & POS",
          description:
            "Soluciones para autoservicio y punto de venta que mejoran la experiencia del cliente y optimizan la operación del negocio.",
          features: [
            "Mejor experiencia para clientes",
            "Mayor eficiencia en la operación",
            "Reducción de tiempos de espera",
          ],
        },
        {
          title: "ERP & CRM",
          description:
            "Control total de tu operación, inventario y gestión comercial con información centralizada en tiempo real.",
          features: [
            "Información centralizada",
            "Mejor seguimiento del negocio",
            "Control de inventario",
          ],
        },
        {
          title: "Automatización Operativa",
          description:
            "Optimización de procesos e integración entre sistemas para eliminar errores manuales y ganar eficiencia.",
          features: [
            "Optimización de procesos",
            "Integración entre sistemas",
            "Reducción de errores manuales",
          ],
        },
        {
          title: "Data & Smart Infrastructure",
          description:
            "Uso estratégico de datos como base para nuevos servicios digitales y crecimiento escalable del negocio.",
          features: [
            "Uso estratégico de datos",
            "Base para servicios digitales",
            "Escalabilidad para el futuro",
          ],
        },
      ],
    },
    why: {
      label: "Nuestra diferencia",
      heading: "Por qué S.CoreTech",
      sub: "Más que un proveedor de tecnología, somos un socio estratégico para el crecimiento de tu negocio.",
      items: [
        {
          title: "Enfoque en México",
          description:
            "Entendemos el contexto operativo y comercial del mercado mexicano. Nuestras soluciones están diseñadas para los retos reales de empresas en México.",
        },
        {
          title: "Soluciones integradas",
          description:
            "No ofrecemos solo hardware o solo software, sino una solución conectada que une cada parte de tu operación en un solo ecosistema.",
        },
        {
          title: "Diseño simple y funcional",
          description:
            "Buscamos resolver problemas reales con tecnología clara y útil. Sin complicaciones innecesarias, enfocados en lo que realmente importa.",
        },
        {
          title: "Visión de largo plazo",
          description:
            "Construimos una base tecnológica que puede crecer junto con el negocio del cliente. Tu crecimiento es nuestro objetivo.",
        },
      ],
    },
    contact: {
      label: "Hablemos",
      heading: "Contáctanos",
      sub: "Si quieres conocer más sobre nuestras soluciones o explorar una oportunidad de colaboración, estaremos encantados de hablar contigo.",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      location: "Rio Missouri 555, Del Valle, 66220 San Pedro Garza García, N.L.",
      whatsappLabel: "WhatsApp",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@empresa.com",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o pregunta...",
      nameLabel: "Nombre",
      emailFieldLabel: "Email",
      messageLabel: "Mensaje",
      submit: "Enviar mensaje",
      successTitle: "¡Mensaje enviado!",
      successSub: "Nos pondremos en contacto contigo muy pronto.",
    },
    footer: {
      tagline: "Soluciones inteligentes para automatizar y optimizar tu negocio en México.",
      navLabel: "Navegación",
      contactLabel: "Contacto",
      location: "Rio Missouri 555, Del Valle, 66220 San Pedro Garza García, N.L.",
      copyright: "Todos los derechos reservados.",
    },
  },

  en: {
    header: {
      nav: ["Home", "About", "Solutions", "Contact"],
      navHrefs: ["#inicio", "#nosotros", "#soluciones", "#contacto"],
      cta: "Contact Us",
    },
    hero: {
      badge: "Monterrey, Mexico",
      headline1: "Intelligent",
      headline2: "automation",
      headline3: "for businesses in Mexico",
      sub: "S.CoreTech helps companies and retailers improve their operations with Kiosk, POS, ERP, CRM and connected automation solutions.",
      cta1: "Explore our solutions",
      cta2: "Contact us",
      stats: [
        { value: "Kiosk & POS", label: "Self-service" },
        { value: "ERP & CRM", label: "Business management" },
        { value: "Automation", label: "Operational processes" },
        { value: "Data & BI", label: "Business intelligence" },
      ],
    },
    about: {
      label: "About Us",
      heading1: "Technology built",
      heading2: "for Mexico",
      body1:
        "S.CoreTech is a company focused on automation solutions for the Mexican market. We design and integrate technology to improve operations, reduce process friction, and help our clients grow with simpler, more efficient and scalable tools.",
      body2:
        "We understand the operational and commercial context of Mexico. We don't offer just hardware or just software — we offer a connected solution designed for the real challenges of each business.",
      pillars: ["Automation", "Integration", "Operational efficiency", "Scalable solutions"],
    },
    solutions: {
      label: "What we offer",
      heading: "Our Solutions",
      sub: "Integrated technology to solve the real challenges of your business.",
      cards: [
        {
          title: "Kiosk & POS",
          description:
            "Self-service and point-of-sale solutions that enhance customer experience and optimize business operations.",
          features: [
            "Better customer experience",
            "Greater operational efficiency",
            "Reduced waiting times",
          ],
        },
        {
          title: "ERP & CRM",
          description:
            "Full control of your operations, inventory and commercial management with centralized real-time information.",
          features: [
            "Centralized information",
            "Better business tracking",
            "Inventory control",
          ],
        },
        {
          title: "Operational Automation",
          description:
            "Process optimization and system integration to eliminate manual errors and gain efficiency.",
          features: [
            "Process optimization",
            "System integration",
            "Reduction of manual errors",
          ],
        },
        {
          title: "Data & Smart Infrastructure",
          description:
            "Strategic use of data as a foundation for new digital services and scalable business growth.",
          features: [
            "Strategic use of data",
            "Foundation for digital services",
            "Scalability for the future",
          ],
        },
      ],
    },
    why: {
      label: "Our difference",
      heading: "Why S.CoreTech",
      sub: "More than a technology provider, we are a strategic partner for your business growth.",
      items: [
        {
          title: "Focus on Mexico",
          description:
            "We understand the operational and commercial context of the Mexican market. Our solutions are designed for the real challenges of businesses in Mexico.",
        },
        {
          title: "Integrated solutions",
          description:
            "We don't offer just hardware or just software, but a connected solution that unites every part of your operation in a single ecosystem.",
        },
        {
          title: "Simple and functional design",
          description:
            "We seek to solve real problems with clear and useful technology. No unnecessary complications, focused on what truly matters.",
        },
        {
          title: "Long-term vision",
          description:
            "We build a technological foundation that can grow along with the client's business. Your growth is our goal.",
        },
      ],
    },
    contact: {
      label: "Let's talk",
      heading: "Contact Us",
      sub: "If you want to learn more about our solutions or explore a collaboration opportunity, we'd love to hear from you.",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Rio Missouri 555, Del Valle, 66220 San Pedro Garza García, N.L.",
      whatsappLabel: "WhatsApp",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Tell us about your project or question...",
      nameLabel: "Name",
      emailFieldLabel: "Email",
      messageLabel: "Message",
      submit: "Send message",
      successTitle: "Message sent!",
      successSub: "We will get in touch with you very soon.",
    },
    footer: {
      tagline: "Smart solutions to automate and optimize your business in Mexico.",
      navLabel: "Navigation",
      contactLabel: "Contact",
      location: "Rio Missouri 555, Del Valle, 66220 San Pedro Garza García, N.L.",
      copyright: "All rights reserved.",
    },
  },

  ko: {
    header: {
      nav: ["홈", "소개", "솔루션", "문의"],
      navHrefs: ["#inicio", "#nosotros", "#soluciones", "#contacto"],
      cta: "문의하기",
    },
    hero: {
      badge: "멕시코 몬테레이",
      headline1: "멕시코 비즈니스를 위한",
      headline2: "스마트 자동화",
      headline3: "솔루션",
      sub: "S.CoreTech는 키오스크, POS, ERP, CRM 및 연결된 자동화 솔루션으로 기업과 상점의 운영 효율을 높여드립니다.",
      cta1: "솔루션 알아보기",
      cta2: "문의하기",
      stats: [
        { value: "Kiosk & POS", label: "셀프서비스" },
        { value: "ERP & CRM", label: "기업 관리" },
        { value: "자동화", label: "운영 프로세스" },
        { value: "Data & BI", label: "비즈니스 인텔리전스" },
      ],
    },
    about: {
      label: "회사 소개",
      heading1: "멕시코 시장을 위한",
      heading2: "기술 솔루션",
      body1:
        "S.CoreTech는 멕시코 시장에 특화된 자동화 솔루션 전문 기업입니다. 운영 효율을 높이고, 프로세스의 마찰을 줄이며, 더 단순하고 효율적이며 확장 가능한 도구로 고객의 성장을 지원합니다.",
      body2:
        "멕시코의 운영 및 상업적 맥락을 깊이 이해합니다. 단순한 하드웨어나 소프트웨어가 아닌, 각 비즈니스의 실제 과제를 위한 통합 솔루션을 제공합니다.",
      pillars: ["자동화", "시스템 통합", "운영 효율화", "확장 가능한 솔루션"],
    },
    solutions: {
      label: "제공 솔루션",
      heading: "솔루션",
      sub: "비즈니스의 실제 과제를 해결하는 통합 기술.",
      cards: [
        {
          title: "키오스크 & POS",
          description:
            "고객 경험을 향상시키고 비즈니스 운영을 최적화하는 셀프서비스 및 포인트오브세일 솔루션.",
          features: [
            "향상된 고객 경험",
            "운영 효율 극대화",
            "대기 시간 단축",
          ],
        },
        {
          title: "ERP & CRM",
          description:
            "실시간으로 중앙화된 정보를 통한 운영, 재고 및 영업 관리의 완전한 통제.",
          features: [
            "정보 중앙화",
            "비즈니스 추적 개선",
            "재고 관리",
          ],
        },
        {
          title: "운영 자동화",
          description:
            "프로세스 최적화와 시스템 간 통합으로 수동 오류를 제거하고 효율성을 높입니다.",
          features: [
            "프로세스 최적화",
            "시스템 간 통합",
            "수동 오류 감소",
          ],
        },
        {
          title: "데이터 & 스마트 인프라",
          description:
            "새로운 디지털 서비스와 확장 가능한 비즈니스 성장을 위한 전략적 데이터 활용.",
          features: [
            "전략적 데이터 활용",
            "디지털 서비스 기반 구축",
            "미래를 위한 확장성",
          ],
        },
      ],
    },
    why: {
      label: "차별화 포인트",
      heading: "S.CoreTech를 선택하는 이유",
      sub: "단순한 기술 공급자가 아닌, 비즈니스 성장을 위한 전략적 파트너입니다.",
      items: [
        {
          title: "멕시코 시장 전문성",
          description:
            "멕시코 시장의 운영 및 상업적 맥락을 깊이 이해합니다. 솔루션은 멕시코 기업의 실제 과제를 위해 설계되었습니다.",
        },
        {
          title: "통합 솔루션",
          description:
            "하드웨어만 또는 소프트웨어만이 아닌, 운영의 모든 부분을 하나의 생태계로 연결하는 통합 솔루션을 제공합니다.",
        },
        {
          title: "단순하고 실용적인 설계",
          description:
            "명확하고 유용한 기술로 실제 문제를 해결합니다. 불필요한 복잡함 없이 진정으로 중요한 것에 집중합니다.",
        },
        {
          title: "장기적 비전",
          description:
            "고객 비즈니스와 함께 성장할 수 있는 기술 기반을 구축합니다. 고객의 성장이 우리의 목표입니다.",
        },
      ],
    },
    contact: {
      label: "문의하기",
      heading: "연락처",
      sub: "솔루션에 대해 더 알고 싶거나 협력 기회를 탐색하고 싶다면 언제든지 연락해 주세요.",
      emailLabel: "이메일",
      locationLabel: "위치",
      location: "Rio Missouri 555, Del Valle, 66220 San Pedro Garza García, N.L.",
      whatsappLabel: "WhatsApp",
      namePlaceholder: "이름",
      emailPlaceholder: "이메일@회사.com",
      messagePlaceholder: "프로젝트 또는 질문에 대해 알려주세요...",
      nameLabel: "이름",
      emailFieldLabel: "이메일",
      messageLabel: "메시지",
      submit: "메시지 보내기",
      successTitle: "메시지가 전송되었습니다!",
      successSub: "곧 연락드리겠습니다.",
    },
    footer: {
      tagline: "멕시코 비즈니스를 위한 스마트 자동화 솔루션.",
      navLabel: "메뉴",
      contactLabel: "연락처",
      location: "Rio Missouri 555, Del Valle, 66220 San Pedro Garza García, N.L.",
      copyright: "모든 권리 보유.",
    },
  },
} as const;

