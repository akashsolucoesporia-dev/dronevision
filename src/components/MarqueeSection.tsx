const tags = [
  "Filmagem com Drone",
  "Fotografia Aérea",
  "Drone Profissional",
  "Captação Aérea",
  "Vídeo Institucional",
  "Marketing Imobiliário",
  "Inspeção Aérea",
  "4K Cinematográfico",
  "Agronegócio",
  "Cobertura de Eventos",
  "Edição Profissional",
  "Conteúdo Premium",
];

export default function MarqueeSection() {
  const repeated = [...tags, ...tags];

  return (
    <div className="relative overflow-hidden border-y border-white/6 py-5" style={{ background: "rgba(0,255,140,0.03)" }}>
      <div className="marquee-track gap-12 items-center">
        {repeated.map((tag, i) => (
          <span key={i} className="flex shrink-0 items-center gap-12">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/60 whitespace-nowrap">
              {tag}
            </span>
            <span className="h-1 w-1 rounded-full shrink-0" style={{ background: "var(--green)", opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
