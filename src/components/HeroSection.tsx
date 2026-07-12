import { useEffect, useRef, useState } from "react";

const WHATSAPP = "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20de%20filmagem%20com%20drone.";
const INSTAGRAM = "https://www.instagram.com/dronevision";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.45}px) scale(1.12)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background with parallax */}
      <div className="absolute inset-0 z-0">
        <div
          ref={bgRef}
          className="hero-bg absolute inset-0 scale-110"
          style={{ transformOrigin: "center top" }}
        >
          {/* Video or fallback image */}
          <video
            className="h-full w-full object-cover"
            poster="/images/hero-bg.jpg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/drone-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,8,16,0.6)] via-[rgba(3,8,16,0.4)] to-[rgba(3,8,16,1)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(3,8,16,0.5)] via-transparent to-transparent" />

        {/* Scan lines */}
        <div className="absolute inset-0 scanline opacity-40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto w-full pt-32 pb-24">

        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mb-6 self-start"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s ease 0.1s",
          }}
        >
          <span className="h-px w-8" style={{ background: "var(--green)" }} />
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.38em]" style={{ color: "var(--green)" }}>
            Produções Aéreas Profissionais
          </span>
        </div>

        {/* Headline */}
        <h1
          className="max-w-5xl font-black leading-[0.95] text-white"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "0.02em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.2s",
          }}
        >
          SEU NEGÓCIO<br />
          <span style={{ color: "var(--green)", WebkitTextStroke: "0px" }}>
            MERECE
          </span>{" "}
          SER VISTO<br />
          DE UM NOVO ÂNGULO
        </h1>

        {/* Sub */}
        <p
          className="mt-8 max-w-xl text-base text-white/75 leading-relaxed md:text-lg"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.4s",
          }}
        >
          Produções aéreas cinematográficas que transformam empresas comuns em marcas memoráveis.
        </p>

        {/* Concept line */}
        <p
          className="mt-3 max-w-xl text-sm leading-relaxed"
          style={{
            color: "rgba(0,255,140,0.8)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.5s",
          }}
        >
          Não mostramos apenas o seu negócio. Revelamos o potencial que ele tem quando visto da perspectiva certa.
        </p>

        {/* Buttons */}
        <div
          className="mt-10 flex flex-wrap gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.65s",
          }}
        >
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Orçamento
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-ghost">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Ver Portfólio
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex items-center gap-3"
          style={{
            opacity: loaded ? 0.6 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          <div className="flex flex-col gap-1">
            <span className="block h-1 w-1 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="block h-1 w-1 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="block h-1 w-1 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-[0.62rem] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        className="relative z-10 border-t border-white/8 bg-[rgba(3,8,16,0.7)] backdrop-blur-md"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { num: "4K", label: "Qualidade de imagem" },
              { num: "360°", label: "Perspectiva aérea" },
              { num: "100%", label: "Segurança operacional" },
            ].map((stat) => (
              <div key={stat.label} className="py-5 px-4 text-center md:py-6 md:px-8">
                <div className="text-xl font-bold md:text-2xl" style={{ color: "var(--green)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                  {stat.num}
                </div>
                <div className="mt-0.5 text-[0.6rem] uppercase tracking-[0.22em] text-white/50 md:text-[0.65rem]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
