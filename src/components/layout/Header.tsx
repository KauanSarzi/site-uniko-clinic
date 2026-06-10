"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/resultados", label: "Resultados" },
  { href: "/agendamento", label: "Agendamento" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const agendarUrl = buildWhatsAppUrl(
    "Olá, vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação!"
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-ink/95 backdrop-blur-md shadow-lg border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Uniko Clinic — Página inicial">
            <LogoMark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-wine text-cream text-sm font-sans font-medium tracking-wide border border-wine-light/30 transition-all duration-200 hover:bg-wine-light hover:border-gold/40"
          >
            Agendar Avaliação
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-cream hover:text-gold transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-line bg-ink/98">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 text-base font-sans border-b border-line/50 last:border-0 transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={agendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-center py-3 px-4 bg-wine text-cream text-sm font-sans font-medium tracking-wide border border-wine-light/30"
            >
              Agendar Avaliação
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <div className="flex flex-col items-start leading-none">
      <span className="font-serif text-xl md:text-2xl font-light tracking-[0.2em] text-cream uppercase">
        Uniko
      </span>
      <span className="font-sans text-[0.55rem] md:text-[0.6rem] tracking-[0.35em] text-gold uppercase mt-0.5">
        Clinic
      </span>
    </div>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
