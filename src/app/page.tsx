import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { tratamentos } from "@/data/tratamentos";
import { depoimentos } from "@/data/depoimentos";

export const metadata: Metadata = {
  title: "Uniko Clinic | Estética que Começa por Dentro",
  description:
    "Clínica de estética em São Paulo com protocolos exclusivos e atendimento personalizado por Andreia Sarzi, biomédica. Harmonização facial, toxina botulínica, laser e mais.",
};

const SERVICOS_DESTAQUE = tratamentos.slice(0, 3);
const DEPOIMENTOS_DESTAQUE = depoimentos.slice(0, 3);

export default function HomePage() {
  const agendarUrl = buildWhatsAppUrl(
    "Olá! Vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação gratuita."
  );

  return (
    <>
      <Header />

      <style>{`
        main { padding-top: 0; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          position: relative; overflow: hidden; padding: 140px 56px 80px;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 72% 50%, rgba(122,21,21,0.26) 0%, transparent 68%),
            radial-gradient(ellipse 40% 60% at 18% 85%, rgba(77,10,10,0.38) 0%, transparent 62%),
            var(--dark);
        }
        .hero-bg::before {
          content: ''; position: absolute;
          right: 40%; top: 12%; bottom: 12%; width: 1px;
          background: linear-gradient(180deg, transparent 0%, var(--gold) 18%, var(--gold) 82%, transparent 100%);
          opacity: 0.22;
        }
        .hero-content { position: relative; z-index: 2; max-width: 660px; }
        .hero-eyebrow {
          font-size: 0.7rem; letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 28px;
          display: flex; align-items: center; gap: 14px;
        }
        .hero-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--gold); display: block; }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 6vw, 5.8rem); font-weight: 300; line-height: 1.04;
          color: var(--white); margin-bottom: 14px;
        }
        .hero-title em { font-style: italic; color: var(--gold); }
        .hero-sub {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.5vw, 2.2rem); font-weight: 300; font-style: italic;
          color: var(--text-muted); margin-bottom: 32px; line-height: 1.2;
        }
        .hero-desc {
          font-size: 0.9rem; color: var(--cream); opacity: 0.68;
          max-width: 440px; margin-bottom: 48px; line-height: 1.85;
        }
        .hero-actions { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .hero-stats {
          position: absolute; right: 56px; bottom: 80px;
          display: flex; flex-direction: column; gap: 28px; z-index: 2;
        }
        .stat { text-align: right; border-right: 1px solid var(--gold); padding-right: 18px; opacity: 0.82; }
        .stat-num {
          font-family: var(--font-display); font-size: 2.6rem;
          font-weight: 300; color: var(--gold); line-height: 1;
        }
        .stat-label {
          font-size: 0.66rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text-muted); margin-top: 4px;
        }

        /* ── STRIP ── */
        .about-strip {
          background: var(--wine); padding: 26px 56px;
          display: flex; align-items: center; justify-content: center; gap: 44px; flex-wrap: wrap;
        }
        .strip-item {
          font-size: 0.7rem; letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--gold-light); white-space: nowrap;
          display: flex; align-items: center; gap: 14px;
        }
        .strip-dot { width: 4px; height: 4px; background: var(--gold); border-radius: 50%; flex-shrink: 0; }

        /* ── DIFERENCIAIS ── */
        .diferencial-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(201,169,110,0.1);
          margin-top: 56px; border: 1px solid rgba(201,169,110,0.1);
        }
        .diferencial-card {
          background: var(--dark-soft); padding: 44px 34px;
          position: relative; transition: background 0.3s;
        }
        .diferencial-card:hover { background: #191010; }
        .diferencial-icon { font-size: 1.6rem; margin-bottom: 20px; display: block; }
        .diferencial-card h3 {
          font-family: var(--font-display); font-size: 1.45rem;
          font-weight: 400; color: var(--white); margin-bottom: 10px;
        }
        .diferencial-card p { font-size: 0.84rem; color: var(--text-muted); line-height: 1.75; }
        .diferencial-card::after {
          content: ''; position: absolute; bottom: 0; left: 34px; right: 34px;
          height: 1px; background: var(--gold-dim); transition: background 0.3s;
        }
        .diferencial-card:hover::after { background: rgba(201,169,110,0.3); }

        /* ── SERVIÇOS ── */
        .servicos-preview { background: var(--dark-soft); }
        .servicos-intro {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: end; margin-bottom: 56px;
        }
        .servicos-intro p.desc {
          font-size: 0.88rem; color: var(--cream); opacity: 0.6;
          line-height: 1.85; max-width: 380px; align-self: end;
        }
        .servicos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .servico-card {
          background: var(--card-bg); border: 1px solid rgba(201,169,110,0.09);
          padding: 36px 28px; position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s; text-decoration: none; display: block;
        }
        .servico-card:hover { border-color: rgba(201,169,110,0.38); transform: translateY(-3px); }
        .servico-tag {
          font-size: 0.63rem; letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 14px; display: block;
        }
        .servico-card h3 {
          font-family: var(--font-display); font-size: 1.5rem;
          font-weight: 400; color: var(--white); margin-bottom: 10px; line-height: 1.15;
        }
        .servico-card p { font-size: 0.8rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px; }
        .servico-link {
          font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gold); opacity: 0.7; display: flex; align-items: center; gap: 8px;
          transition: opacity 0.2s;
        }
        .servico-link::after { content: '→'; transition: transform 0.2s; }
        .servico-card:hover .servico-link { opacity: 1; }
        .servico-card:hover .servico-link::after { transform: translateX(4px); }
        .servico-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 3px; height: 0; background: var(--wine); transition: height 0.35s ease;
        }
        .servico-card:hover::before { height: 100%; }
        .servicos-ver-todos { text-align: center; margin-top: 40px; }

        /* ── PROTOCOLO ── */
        .protocolo { background: var(--cream); color: var(--dark); }
        .protocolo .section-eyebrow { color: var(--wine); }
        .protocolo .section-eyebrow::before { background: var(--wine); }
        .protocolo .section-title { color: var(--dark); }
        .protocolo .section-title em { color: var(--wine); }
        .protocolo-steps {
          display: grid; grid-template-columns: repeat(4, 1fr);
          margin-top: 56px; position: relative;
        }
        .protocolo-steps::before {
          content: ''; position: absolute;
          top: 27px; left: 13%; right: 13%; height: 1px;
          background: var(--wine); opacity: 0.18;
        }
        .step { padding: 0 28px; }
        .step-dot {
          width: 54px; height: 54px; border-radius: 50%;
          border: 1px solid var(--wine);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px; background: var(--cream); position: relative; z-index: 1;
        }
        .step-dot span { font-family: var(--font-display); font-size: 1.2rem; color: var(--wine); font-weight: 300; }
        .step h3 { font-family: var(--font-display); font-size: 1.25rem; font-weight: 400; color: var(--dark); margin-bottom: 9px; }
        .step p { font-size: 0.8rem; color: #5a4a3a; line-height: 1.75; }

        /* ── DEPOIMENTOS ── */
        .depoimentos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 52px; }
        .depoimento-card { background: var(--card-bg); border: 1px solid rgba(201,169,110,0.09); padding: 34px 26px; }
        .depoimento-stars { color: var(--gold); font-size: 0.82rem; letter-spacing: 3px; margin-bottom: 16px; display: block; }
        .depoimento-text {
          font-family: var(--font-display); font-size: 1.08rem; font-style: italic;
          font-weight: 300; color: var(--cream); line-height: 1.6; margin-bottom: 20px;
        }
        .depoimento-author { font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); font-style: normal; display: block; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero { padding: 110px 24px 72px; }
          .hero-stats { display: none; }
          .diferencial-grid { grid-template-columns: 1fr; }
          .servicos-intro { grid-template-columns: 1fr; gap: 20px; }
          .servicos-grid { grid-template-columns: 1fr; }
          .protocolo-steps { grid-template-columns: 1fr 1fr; gap: 36px; }
          .protocolo-steps::before { display: none; }
          .depoimentos-grid { grid-template-columns: 1fr; }
          .about-strip { padding: 24px; gap: 24px; }
        }
        @media (max-width: 560px) {
          .protocolo-steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-content fade-up">
            <p className="hero-eyebrow">Uniko Clinic — São Paulo</p>
            <h1 className="hero-title">
              Tecnologia, estética<br />
              e <em>cuidado</em>
            </h1>
            <p className="hero-sub">para realçar sua melhor versão</p>
            <p className="hero-desc">
              Protocolos personalizados em harmonização facial, laser e skincare
              para resultados naturais, duradouros e seguros.
            </p>
            <div className="hero-actions">
              <a href={agendarUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Agendar Avaliação
              </a>
              <Link href="/tratamentos" className="btn-ghost">
                Ver Tratamentos
              </Link>
            </div>
          </div>
          <aside className="hero-stats" aria-label="Números da clínica">
            {[
              { num: "1.200+", label: "Pacientes atendidas" },
              { num: "4.9★",   label: "Avaliação média" },
              { num: "98%",    label: "Satisfação" },
            ].map(({ num, label }) => (
              <div className="stat" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </aside>
        </section>

        {/* ── STRIP ── */}
        <div className="about-strip" aria-label="Especialidades">
          {["Harmonização Facial", "Toxina Botulínica", "Bioestimuladores", "Laser", "Skincare"].map((item, i, arr) => (
            <span className="strip-item" key={item}>
              {item}
              {i < arr.length - 1 && <span className="strip-dot" aria-hidden="true" />}
            </span>
          ))}
        </div>

        {/* ── DIFERENCIAIS ── */}
        <section aria-labelledby="dif-title">
          <p className="section-eyebrow">Por que a Uniko</p>
          <h2 className="section-title" id="dif-title">O que nos <em>diferencia</em></h2>
          <div className="diferencial-grid">
            {[
              { icon: "◈", title: "Protocolo exclusivo", text: "Cada paciente recebe um plano personalizado, baseado em avaliação detalhada do seu perfil e objetivos." },
              { icon: "◇", title: "Técnica refinada",    text: "Anos de especialização em estética avançada resultam em procedimentos precisos e seguros." },
              { icon: "✦", title: "Resultado natural",   text: "Nossa filosofia é realçar sua beleza sem transformar. O resultado ideal é discreto e elegante." },
            ].map(({ icon, title, text }) => (
              <div className="diferencial-card" key={title}>
                <span className="diferencial-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section className="servicos-preview" aria-labelledby="serv-title">
          <div className="servicos-intro">
            <div>
              <p className="section-eyebrow">Tratamentos</p>
              <h2 className="section-title" id="serv-title">Protocolos que <em>transformam</em></h2>
            </div>
            <p className="desc">Cada procedimento é aplicado com técnica precisa e um olhar estético personalizado para o seu rosto.</p>
          </div>
          <div className="servicos-grid">
            {SERVICOS_DESTAQUE.map((t) => (
              <Link href={`/tratamentos/${t.slug}`} className="servico-card" key={t.slug}>
                <span className="servico-tag">{t.categoria}</span>
                <h3>{t.nome}</h3>
                <p>{t.descricaoCurta}</p>
                <span className="servico-link">Saiba mais</span>
              </Link>
            ))}
          </div>
          <div className="servicos-ver-todos">
            <Link href="/tratamentos" className="btn-ghost">Ver todos os tratamentos</Link>
          </div>
        </section>

        {/* ── PROTOCOLO ── */}
        <section className="protocolo" aria-labelledby="prot-title">
          <p className="section-eyebrow">Como funciona</p>
          <h2 className="section-title" id="prot-title">Seu <em>protocolo</em> em 4 etapas</h2>
          <ol className="protocolo-steps" role="list">
            {[
              { num: "I",   title: "Avaliação",       text: "Consulta gratuita para entender seus objetivos e avaliar seu perfil." },
              { num: "II",  title: "Planejamento",    text: "Criamos um protocolo exclusivo, combinando os procedimentos ideais." },
              { num: "III", title: "Procedimento",    text: "Aplicação com técnica refinada, em ambiente seguro e acolhedor." },
              { num: "IV",  title: "Acompanhamento",  text: "Monitoramos os resultados e ajustamos conforme a evolução." },
            ].map(({ num, title, text }) => (
              <li className="step" key={num}>
                <div className="step-dot" aria-hidden="true"><span>{num}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section aria-labelledby="dep-title">
          <p className="section-eyebrow">Depoimentos</p>
          <h2 className="section-title" id="dep-title">O que nossas <em>pacientes</em> dizem</h2>
          <ul className="depoimentos-grid" role="list">
            {DEPOIMENTOS_DESTAQUE.map((d) => (
              <li className="depoimento-card" key={d.id}>
                <span className="depoimento-stars" aria-label="5 estrelas">★★★★★</span>
                <p className="depoimento-text">"{d.texto}"</p>
                <span className="depoimento-author">{d.nome} — {d.procedimento}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA ── */}
        <div className="cta-strip">
          <h2>Pronta para <em>começar?</em></h2>
          <p>Agende sua avaliação gratuita e descubra o protocolo ideal para você.</p>
          <div className="cta-strip-actions">
            <a href={agendarUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Agendar Avaliação
            </a>
            <Link href="/tratamentos" className="btn-outline-light">
              Ver Tratamentos
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
