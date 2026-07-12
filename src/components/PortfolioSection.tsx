import { useRef, useState } from "react";

const INSTAGRAM = "https://www.instagram.com/dronevision";

const items = [
  {
    image: "/images/work-1.jpg",
    category: "Turismo & Natureza",
    title: "Cachoeiras e Aventura",
  },
  {
    image: "/images/work-2.jpg",
    category: "Marketing Imobiliário",
    title: "Loteamentos & Imóveis",
  },
  {
    image: "/images/work-3.jpg",
    category: "Eventos",
    title: "Cobertura Aquática",
  },
  {
    image: "/images/portfolio-1.jpg",
    category: "Agronegócio",
    title: "Vista Aérea de Propriedades",
  },
  {
    image: "/images/portfolio-2.jpg",
    category: "Eventos Náuticos",
    title: "Alta Velocidade nos Rios",
  },
];

function TiltCard({ item }: { item: (typeof items)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ rotateX: -y * 12, rotateY: x * 16, scale: 1.03 });
  };

  const onMouseLeave = () => {
    setStyle({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={cardRef}
      className="tilt-card group relative overflow-hidden cursor-pointer"
      style={{
        transform: `perspective(900px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg) scale(${style.scale})`,
        transition: "transform 0.18s ease-out, box-shadow 0.3s ease",
        boxShadow: style.scale > 1
          ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,255,140,0.05)"
          : "none",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative aspect-[9/16] overflow-hidden md:aspect-[4/5]">
        <img
          src={item.image}
          alt={item.title}
          className="portfolio-img h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,16,0.9)] via-[rgba(3,8,16,0.2)] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-400" />

        {/* corner accents */}
        <div className="absolute top-4 left-4 h-8 w-px opacity-0 group-hover:opacity-100 transition-all duration-400" style={{ background: "var(--green)" }} />
        <div className="absolute top-4 left-4 h-px w-8 opacity-0 group-hover:opacity-100 transition-all duration-400" style={{ background: "var(--green)" }} />
        <div className="absolute bottom-4 right-4 h-8 w-px opacity-0 group-hover:opacity-100 transition-all duration-400" style={{ background: "var(--green)" }} />
        <div className="absolute bottom-4 right-4 h-px w-8 opacity-0 group-hover:opacity-100 transition-all duration-400" style={{ background: "var(--green)" }} />

        {/* labels */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="text-[0.58rem] uppercase tracking-[0.3em] mb-1.5" style={{ color: "var(--green)" }}>
            {item.category}
          </p>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white md:text-base">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="divider" />
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.38em] mb-4" style={{ color: "var(--green)" }}>
              Portfólio
            </p>
            <h2
              className="text-4xl font-black leading-tight text-white md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
            >
              CADA FRAME,<br />
              <span style={{ color: "var(--green)" }}>UMA OBRA.</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost self-start md:self-end shrink-0"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Ver mais no Instagram
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
