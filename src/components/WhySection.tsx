import { useScrollReveal } from "../hooks/useScrollReveal";

const benefits = [
  { icon: "⚡", title: "Equipamentos profissionais", desc: "Drones de última geração com câmeras cinematográficas 4K/6K." },
  { icon: "🎞️", title: "Qualidade cinematográfica", desc: "Produção no nível de grandes marcas internacionais." },
  { icon: "🤝", title: "Atendimento personalizado", desc: "Briefing completo e acompanhamento próximo em cada projeto." },
  { icon: "🛡️", title: "Segurança operacional", desc: "Piloto certificado ANAC, seguindo todas as normas vigentes." },
  { icon: "✂️", title: "Edição profissional", desc: "Pós-produção com color grading e trilha sonora exclusiva." },
  { icon: "🚀", title: "Entrega rápida", desc: "Prazos cumpridos com rigor e pontualidade garantida." },
  { icon: "📍", title: "Toda a região", desc: "Atendimento em toda a região com mobilidade e estrutura própria." },
];

export default function WhySection() {
  const titleRef = useScrollReveal();

  return (
    <section id="diferenciais" className="relative py-28 md:py-36" style={{ background: "rgba(4,9,18,0.9)" }}>
      <div className="glow-line absolute top-0 left-0 right-0" />

      {/* bg glow */}
      <div className="pointer-events-none absolute -left-72 top-1/3 h-[600px] w-[600px] rounded-full opacity-4"
        style={{ background: "radial-gradient(circle, var(--green) 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="divider" />
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.38em] mb-4" style={{ color: "var(--green)" }}>
              Por que Drone Vision
            </p>
            <h2
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className="reveal text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              NÃO ENTREGAMOS<br />
              ARQUIVOS.<br />
              <span style={{ color: "var(--green)" }}>ENTREGAMOS<br />RESULTADOS.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-white/65 md:text-lg">
              Cada produção é desenvolvida com foco no resultado final — mais autoridade,
              valorização da marca e impacto comercial real.
            </p>

            {/* Big quote */}
            <div className="mt-10 border-l-2 pl-6" style={{ borderColor: "var(--green)" }}>
              <p className="text-sm italic leading-relaxed text-white/60 md:text-base">
                "Não mostramos apenas o seu negócio. Revelamos o potencial que ele tem quando visto da perspectiva certa."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--green)" }}>
                — Drone Vision
              </p>
            </div>
          </div>

          {/* Right — benefit list */}
          <div className="space-y-0 divide-y divide-white/6">
            {benefits.map((b, i) => (
              <BenefitRow key={b.title} benefit={b} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitRow({
  benefit,
  delay,
}: {
  benefit: { icon: string; title: string; desc: string };
  delay: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal group flex items-start gap-5 py-6 transition-colors duration-300 hover:bg-[rgba(0,255,140,0.02)] px-3 -mx-3 cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-base transition-all duration-300 group-hover:scale-110"
        style={{ background: "rgba(0,255,140,0.08)", border: "1px solid rgba(0,255,140,0.2)" }}
      >
        {benefit.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">{benefit.title}</h3>
          <span
            className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "var(--green)" }}
          >
            ✓
          </span>
        </div>
        <p className="mt-1.5 text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
      </div>
    </div>
  );
}
