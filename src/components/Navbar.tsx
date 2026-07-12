import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20de%20filmagem%20com%20drone.";
const INSTAGRAM = "https://www.instagram.com/dronevision";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(3,8,16,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,255,140,0.08)" : "none",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[rgba(0,255,140,0.3)] shadow-[0_0_20px_rgba(0,255,140,0.2)] transition-shadow group-hover:shadow-[0_0_30px_rgba(0,255,140,0.45)]">
            <img src="/images/logo-dronevision.png" alt="Drone Vision" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-[0.15em] text-white uppercase leading-none">Drone</span>
            <span className="block text-sm font-bold tracking-[0.15em] leading-none" style={{ color: "var(--green)" }}>Vision</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Serviços", href: "#servicos" },
            { label: "Portfólio", href: "#portfolio" },
            { label: "Diferenciais", href: "#diferenciais" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-[var(--green)]"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs py-2.5 px-5"
          >
            Orçamento
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? "320px" : "0" }}
      >
        <div className="flex flex-col gap-4 px-6 pb-8 pt-4 border-t border-white/10 bg-[rgba(3,8,16,0.97)]">
          {[
            { label: "Serviços", href: "#servicos" },
            { label: "Portfólio", href: "#portfolio" },
            { label: "Diferenciais", href: "#diferenciais" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-white/80 py-2 border-b border-white/8"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-2 justify-center"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
