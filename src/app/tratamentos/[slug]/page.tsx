import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  return (
    <>
      <Header />
      <main>
        {/* Hero mini */}
        <section className="bg-ink pt-24 pb-12 md:pt-32 md:pb-16 border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className={`font-sans text-xs tracking-[0.15em] uppercase px-2.5 py-1 border ${
                  tratamento.categoria === "Rosto"
                    ? "bg-wine/20 text-wine-light border-wine/30"
                    : tratamento.categoria === "Pele"
                    ? "bg-gold/10 text-gold border-gold/30"
                    : "bg-surface text-muted border-line"
                }`}
              >
                {tratamento.categoria}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-cream leading-tight max-w-2xl">
              {tratamento.nome}
            </h1>
            <p className="mt-4 font-sans text-base text-muted max-w-xl leading-relaxed">
              {tratamento.descricaoCurta}
            </p>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-10">
                {/* O que é */}
                <div>
                  <h2 className="font-serif text-2xl text-cream mb-3">O que é</h2>
                  <div className="h-px w-10 bg-gold mb-4" aria-hidden="true" />
                  <p className="font-sans text-base text-muted leading-relaxed">
                    {tratamento.descricaoCompleta}
                  </p>
                </div>

                {/* Para quem é indicado */}
                <div>
                  <h2 className="font-serif text-2xl text-cream mb-3">Para quem é indicado</h2>
                  <div className="h-px w-10 bg-gold mb-4" aria-hidden="true" />
                  <p className="font-sans text-base text-muted leading-relaxed">
                    {tratamento.paraQuemEIndicado}
                  </p>
                </div>

                {/* Como funciona */}
                <div>
                  <h2 className="font-serif text-2xl text-cream mb-3">Como funciona</h2>
                  <div className="h-px w-10 bg-gold mb-4" aria-hidden="true" />
                  <ol className="flex flex-col gap-3">
                    {tratamento.comoFunciona.map((etapa, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-gold/40 text-gold font-sans text-xs font-medium">
                          {i + 1}
                        </span>
                        <span className="font-sans text-sm text-muted leading-relaxed pt-0.5">
                          {etapa}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Benefícios */}
                <div>
                  <h2 className="font-serif text-2xl text-cream mb-3">Benefícios</h2>
                  <div className="h-px w-10 bg-gold mb-4" aria-hidden="true" />
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {tratamento.beneficios.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="shrink-0 mt-0.5 text-gold"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-sans text-sm text-muted">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                {tratamento.faqs.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl text-cream mb-3">Perguntas Frequentes</h2>
                    <div className="h-px w-10 bg-gold mb-4" aria-hidden="true" />
                    <FAQAccordion faqs={tratamento.faqs} className="max-w-none" />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 flex flex-col gap-5">
                  {/* Info card */}
                  <div className="bg-card border border-line p-6 flex flex-col gap-4">
                    <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
                      Informações do Procedimento
                    </h3>
                    <div className="flex flex-col gap-3 divide-y divide-line">
                      <div className="pt-1">
                        <p className="font-sans text-xs text-muted mb-0.5">Duração da sessão</p>
                        <p className="font-sans text-sm text-cream">{tratamento.duracaoSessao}</p>
                      </div>
                      <div className="pt-3">
                        <p className="font-sans text-xs text-muted mb-2">Cuidados pós-procedimento</p>
                        <ul className="flex flex-col gap-1.5">
                          {tratamento.cuidadosPosProcedimento.map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" aria-hidden="true" />
                              <span className="font-sans text-xs text-muted">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA card */}
                  <div className="bg-wine border border-wine-light/20 p-6 flex flex-col gap-4">
                    <h3 className="font-serif text-xl text-cream">
                      Quer saber mais?
                    </h3>
                    <p className="font-sans text-sm text-cream/70">
                      Agende sua avaliação gratuita e descubra se este tratamento é indicado para você.
                    </p>
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"}?text=${encodeURIComponent(whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold text-ink font-sans text-sm font-semibold hover:bg-gold-light transition-colors"
                    >
                      Agendar Avaliação
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          titulo={`Agende sua avaliação para ${tratamento.nome}`}
          subtitulo="Nossa biomédica vai analisar seu caso e recomendar o melhor protocolo para você."
          labelBotao="Falar pelo WhatsApp"
          tratamento={tratamento.nome}
        />
      </main>
      <Footer />
      <WhatsAppButton mensagem={whatsappMsg} />
    </>
  );
}
