import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { tratamentos, getTratamentoBySlug } from "@/data/tratamentos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tratamentos.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tratamento = getTratamentoBySlug(slug);
  if (!tratamento) return {};
  return {
    title: tratamento.nome,
    description: tratamento.descricaoCurta,
  };
}

export default async function TratamentoPage({ params }: PageProps) {
  const { slug } = await params;
  const tratamento = getTratamentoBySlug(slug);
  if (!tratamento) notFound();

  const whatsappMsg = `Olá, vim pelo site da Uniko Clinic e gostaria de saber mais sobre ${tratamento.nome}.`;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <div className="page-hero">
          <div className="page-hero-bg" aria-hidden="true" />
          <div className="page-hero-content">
            <p className="page-eyebrow">{tratamento.categoria}</p>
            <h1 className="page-title">
              <em>{tratamento.nome}</em>
            </h1>
            <p className="page-subtitle">{tratamento.descricaoCurta}</p>
            <div style={{ marginTop: "28px" }}>
              <Link href="/tratamentos" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                ← Voltar aos tratamentos
              </Link>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <section style={{ background: "var(--dark)" }}>
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "64px",
              alignItems: "start",
            }}
            className="tratamento-grid"
          >
            {/* Main content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {/* O que é */}
              <div>
                <div className="section-eyebrow">O que é</div>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                  {tratamento.descricaoCompleta}
                </p>
              </div>

              {/* Para quem é indicado */}
              <div>
                <div className="section-eyebrow">Para quem é indicado</div>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                  {tratamento.paraQuemEIndicado}
                </p>
              </div>

              {/* Como funciona */}
              <div>
                <div className="section-eyebrow">Como funciona</div>
                <ol style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none" }}>
                  {tratamento.comoFunciona.map((etapa, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(201,169,110,0.4)",
                          color: "var(--gold)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.72rem",
                          fontWeight: 500,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.75, paddingTop: "4px" }}>
                        {etapa}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefícios */}
              <div>
                <div className="section-eyebrow">Benefícios</div>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    listStyle: "none",
                  }}
                >
                  {tratamento.beneficios.map((b, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px", color: "var(--gold)" }}>
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              {tratamento.faqs.length > 0 && (
                <div>
                  <div className="section-eyebrow">Perguntas Frequentes</div>
                  <FAQAccordion faqs={tratamento.faqs} className="max-w-none" />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "96px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Info card */}
              <div
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <span className="footer-col-title">Informações</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>Duração da sessão</p>
                    <p style={{ fontSize: "0.88rem", color: "var(--cream)" }}>{tratamento.duracaoSessao}</p>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(201,169,110,0.08)", paddingTop: "16px" }}>
                    <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "10px" }}>Cuidados pós-procedimento</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none" }}>
                      {tratamento.cuidadosPosProcedimento.map((c, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)", marginTop: "7px", flexShrink: 0 }} aria-hidden="true" />
                          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div
                style={{
                  background: "var(--wine-deep)",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "var(--white)",
                    lineHeight: 1.2,
                  }}
                >
                  Quer saber mais?
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--cream)", opacity: 0.65, lineHeight: 1.7 }}>
                  Agende sua avaliação gratuita e descubra se este tratamento é indicado para você.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ textAlign: "center" }}
                >
                  AGENDAR AVALIAÇÃO
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          titulo={`Agende para ${tratamento.nome}`}
          subtitulo="Nossa biomédica vai analisar seu caso e recomendar o melhor protocolo para você."
          labelBotao="FALAR PELO WHATSAPP"
          tratamento={tratamento.nome}
        />
      </main>
      <Footer />
      <WhatsAppButton mensagem={whatsappMsg} />

      <style>{`
        @media (max-width: 900px) {
          .tratamento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
