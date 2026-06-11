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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const agendarUrl = buildWhatsAppUrl(
    "Olá, vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação!"
  );

  return (
    <header>
      <nav>
        <Link href="/" className="nav-logo" aria-label="Uniko Clinic — Página inicial">
          UNIKO <span>CLINIC</span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={agendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Agendar
        </a>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--cream)",
            padding: "4px",
            fontSize: "1.2rem",
          }}
          className="mobile-burger"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-drawer">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: "0.72rem" }}
          >
            Agendar Avaliação
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
