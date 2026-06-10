import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import MapEmbed from "@/components/sections/MapEmbed";
import SectionTitle from "@/components/sections/SectionTitle";
import TratamentoCard from "@/components/cards/TratamentoCard";
import DiferencialCard from "@/components/cards/DiferencialCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { tratamentos } from "@/data/tratamentos";
import { depoimentos } from "@/data/depoimentos";
import type { Diferencial } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uniko Clinic | Estética que Começa por Dentro",
  description:
    "Clínica de estética em São Paulo com protocolos exclusivos e atendimento personalizado por Andreia Sarzi, biomédica. Harmonização facial, toxina botulínica, laser e mais.",
};

const DIFERENCIAIS: Diferencial[] = [
  {
    id: "1",
    icone: "protocolo",
    titulo: "Protocolo Exclusivo",
    descricao:
      "Cada tratamento é desenhado individualmente, respeitando a anatomia e os objetivos únicos de cada paciente.",
  },
  {
    id: "2",
    icone: "biomédica",
    titulo: "Biomédica Especializada",
    descricao:
      "Todos os procedimentos são realizados pela Andreia Sarzi, biomédica com formação e especialização em estética.",
  },
  {
    id: "3",
    icone: "natural",
    titulo: "Resultado Natural",
    descricao:
      "Nossa filosofia é valorizar suas características. Resultado que parece seu — porque é.",
  },
  {
    id: "4",
    icone: "premium",
    titulo: "Ambiente Premium",
    descricao:
      "Espaço pensado para o seu conforto e privacidade, com materiais e equipamentos de alta qualidade.",
  },
];

const TRATAMENTOS_DESTAQUE = tratamentos.slice(0, 6);
const DEPOIMENTOS_DESTAQUE = depoimentos.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <HeroSection
          titulo="Estética que começa por dentro"
          subtitulo="Protocolos exclusivos para um resultado natural, personalizado e que valoriza quem você já é. Agende sua avaliação gratuita com a biomédica Andreia Sarzi."
          ctaSecundario={{ label: "Conhecer tratamentos", href: "/tratamentos" }}
        />

        {/* Apresentação da clínica */}
        <section className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="flex flex-col gap-5">
                <div className="inline-flex items-center gap-2">
                  <div className="h-px w-8 bg-gold" aria-hidden="true" />
                  <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase">
                    Uniko Clinic
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
                  Cada pessoa é única. Cada protocolo, também.
                </h2>
                <div className="h-px w-12 bg-gold" aria-hidden="true" />
                <p className="font-sans text-base text-muted leading-relaxed">
                  A Uniko Clinic nasceu do propósito de oferecer estética com responsabilidade, ciência e cuidado. Aqui, você não recebe um tratamento padrão — você recebe um protocolo desenvolvido exclusivamente para o seu rosto, seu corpo e os seus objetivos.
                </p>
                <p className="font-sans text-base text-muted leading-relaxed">
                  Localizada em São Paulo, a clínica é liderada por Andreia Sarzi, biomédica especializada em procedimentos estéticos minimamente invasivos.
                </p>
              </div>
              <div className="aspect-[4/3] bg-card border border-line flex items-center justify-center">
                <span className="font-sans text-xs text-muted/40 tracking-wide">
                  [foto da clínica]
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamentos em destaque */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="Nossos Tratamentos"
              subtitulo="Procedimentos minimamente invasivos com protocolos personalizados para rosto, pele e corpo."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRATAMENTOS_DESTAQUE.map((t) => (
                <TratamentoCard key={t.slug} tratamento={t} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="/tratamentos"
                className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-light transition-colors"
              >
                Ver todos os tratamentos
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="Por que a Uniko?"
              subtitulo="Mais do que estética — uma experiência de cuidado completo."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DIFERENCIAIS.map((d) => (
                <DiferencialCard key={d.id} diferencial={d} />
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="O que dizem nossas pacientes"
              subtitulo="Resultados reais, histórias verdadeiras."
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DEPOIMENTOS_DESTAQUE.map((d) => (
                <TestimonialCard key={d.id} depoimento={d} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          titulo="Pronta para cuidar de você?"
          subtitulo="Agende sua avaliação gratuita e descubra o protocolo ideal para os seus objetivos."
          labelBotao="Agendar Avaliação Gratuita"
          mensagemCustom="Olá! Vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita."
        />

        {/* Localização */}
        <MapEmbed />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
