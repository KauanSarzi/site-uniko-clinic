import Link from "next/link";
import { CLINICA_INSTAGRAM, CLINICA_ENDERECO_COMPLETO, CLINICA_TELEFONE, HORARIOS_ATENDIMENTO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-line mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-cream uppercase">
                Uniko
              </span>
              <span className="font-sans text-[0.6rem] tracking-[0.35em] text-gold uppercase mt-0.5">
                Clinic
              </span>
            </div>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
              Estética que começa por dentro. Protocolos exclusivos para um resultado natural e personalizado.
            </p>
            <a
              href={CLINICA_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-sans text-muted hover:text-gold transition-colors group"
              aria-label="Instagram da Uniko Clinic"
            >
              <IconInstagram className="text-gold group-hover:scale-110 transition-transform" />
              @unikoclinic
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Menu</h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/tratamentos", label: "Tratamentos" },
                { href: "/sobre", label: "Sobre a Clínica" },
                { href: "/resultados", label: "Resultados" },
                { href: "/agendamento", label: "Agendamento" },
                { href: "/politica-de-privacidade", label: "Política de Privacidade" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-muted hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm font-sans text-muted">
                <IconLocation className="mt-0.5 shrink-0 text-gold" />
                <span className="leading-relaxed">{CLINICA_ENDERECO_COMPLETO}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-sans text-muted">
                <IconPhone className="shrink-0 text-gold" />
                <span>{CLINICA_TELEFONE}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              {HORARIOS_ATENDIMENTO.map((h) => (
                <div key={h.dia} className="flex justify-between text-xs font-sans">
                  <span className="text-muted">{h.dia}</span>
                  <span className="text-cream/70">{h.horario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-muted text-center sm:text-left">
            © {currentYear} Uniko Clinic. Todos os direitos reservados.
          </p>
          <p className="text-xs font-sans text-muted/60 text-center">
            Andreia Sarzi — Biomédica | CRBio Nº XXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconLocation({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
