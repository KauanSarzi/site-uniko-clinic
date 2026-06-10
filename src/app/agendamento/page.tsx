import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MapEmbed from "@/components/sections/MapEmbed";
import SectionTitle from "@/components/sections/SectionTitle";
import ContatoForm from "@/components/forms/ContatoForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqsAgendamento } from "@/data/faqs";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CLINICA_TELEFONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Agendamento",
  description:
    "Agende sua avaliação gratuita na Uniko Clinic. Fale pelo WhatsApp ou preencha o formulário de contato. Atendemos em São Paulo.",
};

export default function AgendamentoPage() {
  const agendarUrl = buildWhatsAppUrl(
    "Olá! Vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação."
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero mini */}
        <section className="bg-ink pt-24 pb-12 md:pt-32 md:pb-16 border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase">
                Agendamento
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-cream leading-tight max-w-xl">
              Vamos conversar?
            </h1>
            <p className="mt-3 font-sans text-base text-muted max-w-lg">
              Agende sua avaliação gratuita. Sem compromisso — queremos apenas entender seus objetivos.
            </p>
          </div>
        </section>

        {/* WhatsApp CTA destaque */}
        <section className="bg-surface border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-serif text-2xl text-cream mb-1">
                  A forma mais rápida de agendar
                </h2>
                <p className="font-sans text-sm text-muted">
                  Clique no botão e inicie uma conversa direto pelo WhatsApp.
                </p>
              </div>
              <a
                href={agendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2.5 px-7 py-4 bg-[#25D366] text-white font-sans text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <IconWhatsApp />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Formulário + Info */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Formulário */}
              <div className="lg:col-span-3">
                <SectionTitle
                  titulo="Ou preencha o formulário"
                  subtitulo="Suas informações serão enviadas pelo WhatsApp."
                  alinhamento="left"
                  className="mb-8"
                />
                <ContatoForm />
              </div>

              {/* Info */}
              <aside className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-card border border-line p-6 flex flex-col gap-5">
                  <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
                    Informações
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-sans text-xs text-muted mb-1">Telefone / WhatsApp</p>
                      <p className="font-sans text-sm text-cream">{CLINICA_TELEFONE}</p>
                    </div>
                    <div className="h-px bg-line" aria-hidden="true" />
                    <div>
                      <p className="font-sans text-xs text-muted mb-2">Avaliação Gratuita</p>
                      <p className="font-sans text-sm text-muted leading-relaxed">
                        Nossa avaliação inicial é gratuita e sem compromisso. Você vai sair com um protocolo completo e personalizado.
                      </p>
                    </div>
                    <div className="h-px bg-line" aria-hidden="true" />
                    <div>
                      <p className="font-sans text-xs text-muted mb-2">O que esperar</p>
                      <ul className="flex flex-col gap-1.5">
                        {[
                          "Análise completa do rosto ou área de interesse",
                          "Proposta de protocolo personalizado",
                          "Esclarecimento de todas as dúvidas",
                          "Sem pressão para fechar nenhum procedimento",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-0.5 text-gold" aria-hidden="true">
                              <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-sans text-xs text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <MapEmbed />

        {/* FAQ */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="Perguntas sobre o Agendamento"
              className="mb-10"
            />
            <FAQAccordion faqs={faqsAgendamento} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.296.609 4.45 1.664 6.32L3 29l6.855-1.633A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm-3.152 8.379c-.2 0-.52.074-.793.37-.27.296-1.035 1.011-1.035 2.468 0 1.457 1.058 2.863 1.207 3.063.149.199 2.066 3.148 5.016 4.41.7.301 1.246.48 1.672.614.703.222 1.343.191 1.848.117.563-.082 1.737-.71 1.98-1.398.247-.687.247-1.277.172-1.398-.074-.117-.27-.187-.563-.332-.297-.148-1.755-.867-2.027-.965-.27-.097-.47-.148-.667.149-.199.297-.773.965-.949 1.164-.175.199-.348.223-.644.074-.297-.149-1.254-.461-2.39-1.472-.882-.789-1.48-1.762-1.652-2.059-.172-.3-.019-.457.13-.606.133-.132.296-.348.445-.52.148-.172.199-.297.297-.496.098-.2.05-.372-.024-.52-.075-.149-.668-1.61-.914-2.203-.242-.578-.488-.5-.668-.508l-.573-.01a1.1 1.1 0 00-.797.371z" />
    </svg>
  );
}
