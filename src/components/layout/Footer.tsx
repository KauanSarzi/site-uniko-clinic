import Link from "next/link";
import { CLINICA_INSTAGRAM, CLINICA_ENDERECO_COMPLETO, CLINICA_TELEFONE, HORARIOS_ATENDIMENTO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo">
            UNIKO <span>CLINIC</span>
          </Link>
          <p className="footer-tagline">
            Estética que começa por dentro. Protocolos exclusivos para realçar
            sua melhor versão com naturalidade e precisão.
          </p>
        </div>

        <div>
          <span className="footer-col-title">Navegação</span>
          <nav>
            <ul>
              {[
                { href: "/", label: "Home" },
                { href: "/tratamentos", label: "Tratamentos" },
                { href: "/sobre", label: "Sobre" },
                { href: "/resultados", label: "Resultados" },
                { href: "/agendamento", label: "Agendamento" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <span className="footer-col-title">Contato</span>
          <nav>
            <ul>
              <li><a href={`tel:${CLINICA_TELEFONE}`}>{CLINICA_TELEFONE}</a></li>
              <li>
                <a
                  href={CLINICA_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @unikoclinic
                </a>
              </li>
              <li><span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{CLINICA_ENDERECO_COMPLETO}</span></li>
              {HORARIOS_ATENDIMENTO.slice(0, 2).map((h) => (
                <li key={h.dia}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {h.dia}: {h.horario}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <span className="footer-col-title">Legal</span>
          <nav>
            <ul>
              <li>
                <Link href="/politica-de-privacidade">Política de Privacidade</Link>
              </li>
            </ul>
          </nav>
          <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.75, marginTop: "16px" }}>
            Procedimentos realizados por profissional habilitado. Resultados individuais podem variar.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <small className="footer-copy">
          © {currentYear} Uniko Clinic. Todos os direitos reservados.
        </small>
        <a
          href={CLINICA_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-insta"
        >
          @unikoclinic
        </a>
      </div>
    </footer>
  );
}
