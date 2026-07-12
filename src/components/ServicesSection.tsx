import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: "🎬",
    title: "Filmagens Aéreas",
    desc: "Captação cinematográfica em 4K com estabilização profissional.",
  },
  {
    icon: "📸",
    title: "Fotografia Aérea",
    desc: "Imagens aéreas de alta resolução para uso comercial e editorial.",
  },
  {
    icon: "🏟️",
    title: "Cobertura de Eventos",
    desc: "Registros épicos de grandes eventos, shows e festivais.",
  },
  {
    icon: "🏘️",
    title: "Marketing Imobiliário",
    desc: "Valorize imóveis e empreendimentos com visão privilegiada.",
  },
  {
    icon: "🏗️",
    title: "Obras e Construção",
    desc: "Acompanhamento e documentação profissional de obras.",
  },
  {
    icon: "🏢",
    title: "Empresas",
    desc: "Vídeos institucionais que elevam a autoridade da sua marca.",
  },
  {
    icon: "🌾",
    title: "Agronegócio",
    desc: "Monitoramento e divulgação de propriedades rurais.",
  },
  {
    icon: "🔍",
    title: "Inspeções",
    desc: "Inspeções técnicas aéreas com segurança e precisão.",
  },
  {
    icon: "📱",
    title: "Redes Sociais",
    desc: "Conteúdo aéreo impactante para dominar o feed digital.",
  },
];

export default function ServicesSection() {
  const titleRef = useScrollReveal();

  return (
    <section id="servicos" className="relative py-28 md:py-36" style={{ background: "rgba(5,13,26,0.6)" }}>
      {/* top glow line */}
      <div className="glow-line absolute top-0 left-0 right-0" />
      <div className="glow-line absolute bottom-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="divider" />
          <p
            className="text-[0.65rem] font-medium uppercase tracking-[0.38em] mb-4"
            style={{ color: "var(--green)" }}
          >
            O Que Fazemos
          </p>
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="reveal text-4xl font-black leading-tight text-white md:text-6xl max-w-3xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            CAPTAÇÃO AÉREA PARA<br />
            <span style={{ color: "var(--green)" }}>NEGÓCIOS</span> QUE QUEREM LIDERAR.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: { icon: string; title: string; desc: string };
  delay: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal group relative overflow-hidden border border-white/6 p-6 md:p-7 transition-all duration-400 hover:border-[rgba(0,255,140,0.3)] hover:bg-[rgba(0,255,140,0.03)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* hover accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "var(--green)" }}
      />
      <div className="absolute top-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
        style={{ background: "var(--green)" }} />

      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-white/55 leading-relaxed">{service.desc}</p>
    </div>
  );
}
