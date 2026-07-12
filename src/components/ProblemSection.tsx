import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProblemSection() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* background accent */}
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, var(--green) 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24 items-center">

          {/* Left — text */}
          <div>
            <div className="divider" />
            <p
              ref={ref1 as React.RefObject<HTMLParagraphElement>}
              className="reveal text-[0.65rem] font-medium uppercase tracking-[0.38em] mb-5"
              style={{ color: "var(--green)" }}
            >
              O Problema
            </p>
            <h2
              ref={ref2 as React.RefObject<HTMLHeadingElement>}
              className="reveal text-4xl font-black leading-tight text-white md:text-5xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              HOJE QUALQUER EMPRESA<br />
              FAZ UM VÍDEO.<br />
              <span style={{ color: "var(--green)" }}>POUCAS CAUSAM IMPACTO.</span>
            </h2>
            <p
              ref={ref3 as React.RefObject<HTMLParagraphElement>}
              className="reveal mt-8 text-base leading-relaxed text-white/70 md:text-lg"
            >
              Em poucos segundos, um cliente decide se sua empresa transmite
              profissionalismo ou não. Essa primeira impressão vale mais do que
              qualquer argumento de venda.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              É justamente aí que entra a <span className="font-semibold text-white">Drone Vision</span>.
              Não entregamos apenas imagens — entregamos o posicionamento que sua marca merece.
            </p>
          </div>

          {/* Right — visual card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm border border-white/8 bg-[rgba(5,13,26,0.8)] p-8 md:p-10">
              {/* accent corner */}
              <div className="absolute top-0 left-0 h-12 w-px" style={{ background: "var(--green)" }} />
              <div className="absolute top-0 left-0 h-px w-12" style={{ background: "var(--green)" }} />
              <div className="absolute bottom-0 right-0 h-12 w-px" style={{ background: "var(--green)" }} />
              <div className="absolute bottom-0 right-0 h-px w-12" style={{ background: "var(--green)" }} />

              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mb-6">Diferencial Drone Vision</p>

              <div className="space-y-5">
                {[
                  {
                    label: "Empresas comuns",
                    desc: "Vídeo simples, produção básica, sem impacto.",
                    bad: true,
                  },
                  {
                    label: "Com Drone Vision",
                    desc: "Produção cinematográfica aérea. Autoridade. Memória. Resultado.",
                    bad: false,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 items-start border-b border-white/6 pb-5 last:border-0 last:pb-0"
                  >
                    <div
                      className="mt-1 h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: item.bad ? "rgba(255,80,80,0.1)" : "rgba(0,255,140,0.12)",
                        border: `1px solid ${item.bad ? "rgba(255,80,80,0.3)" : "rgba(0,255,140,0.4)"}`,
                        color: item.bad ? "#ff5050" : "var(--green)",
                      }}
                    >
                      {item.bad ? "✕" : "✓"}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                      <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating tag */}
            <div
              className="absolute -bottom-5 -right-5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] rounded-sm"
              style={{ background: "var(--green)", color: "#021108" }}
            >
              Resultado garantido
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
