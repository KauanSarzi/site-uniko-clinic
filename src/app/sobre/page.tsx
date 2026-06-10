import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CTABanner from "@/components/sections/CTABanner";
import DiferencialCard from "@/components/cards/DiferencialCard";
import SectionTitle from "@/components/sections/SectionTitle";
import type { Diferencial } from "@/types";

export const metadata: Metadata = {
  title: "Sobre a Clínica",
  description:
    "Conheça a Uniko Clinic e a biomédica Andreia Sarzi. Nossa filosofia: estética que começa por dentro — protocolos exclusivos e atendimento humanizado em São Paulo.",
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

export default function SobrePage() {
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
                Nossa história
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-cream leading-tight max-w-xl">
              Conheça a Uniko Clinic
            </h1>
          </div>
        </section>

        {/* História */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream leading-tight">
                  Uma clínica nascida do cuidado
                </h2>
                <div className="h-px w-12 bg-gold" aria-hidden="true" />
                <p className="font-sans text-base text-muted leading-relaxed">
                  A Uniko Clinic nasceu do desejo genuíno de oferecer estética com responsabilidade e afeto. Cansada de ver procedimentos realizados sem critério e resultados que não respeitavam a individualidade de cada pessoa, Andreia Sarzi decidiu criar um espaço diferente.
                </p>
                <p className="font-sans text-base text-muted leading-relaxed">
                  Um lugar onde cada paciente é vista como única — com sua própria anatomia, seus próprios objetivos e sua própria beleza. Daí o nome: Uniko Clinic.
                </p>
              </div>
              <div className="aspect-[4/3] bg-card border border-line flex items-center justify-center">
                <span className="font-sans text-xs text-muted/40 tracking-wide">
                  [foto da clínica / história]
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Andreia Sarzi */}
        <section className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-card border border-line flex items-center justify-center">
                <span className="font-sans text-xs text-muted/40 tracking-wide">
                  [foto da Andreia Sarzi]
                </span>
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2">
                  <div className="h-px w-8 bg-gold" aria-hidden="true" />
                  <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase">
                    Biomédica Responsável
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-cream leading-tight">
                  Andreia Sarzi
                </h2>
                <div className="h-px w-12 bg-gold" aria-hidden="true" />
                <p className="font-sans text-base text-muted leading-relaxed">
                  Biomédica formada, com especialização em procedimentos estéticos minimamente invasivos. Andreia acumula anos de experiência em harmonização facial, toxina botulínica, preenchimentos e laser.
                </p>
                <p className="font-sans text-base text-muted leading-relaxed">
                  Sua abordagem é sempre individualizada: antes de qualquer procedimento, ela faz uma análise completa do rosto, entende a história da paciente e só então propõe um protocolo. O objetivo nunca é transformar — é revelar e valorizar.
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-muted">Biomédica — CRBio Nº XXXXX</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-muted">Especialista em estética avançada</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-muted">Capacitações em harmonização facial e laser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofia */}
        <section className="bg-wine/10 border-y border-wine/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase">Nossa filosofia</span>
            <blockquote className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight italic">
              &ldquo;Estética que começa por dentro&rdquo;
            </blockquote>
            <div className="mt-6 h-px w-12 bg-gold mx-auto" aria-hidden="true" />
            <p className="mt-6 font-sans text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Acreditamos que a verdadeira estética começa com autoconhecimento. Entender quem você é, o que valoriza em si mesma e o que deseja potencializar. Só então — com ciência, técnica e cuidado — um protocolo pode entregar um resultado que parece natural porque realmente é: é você, valorizada.
            </p>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="O que nos diferencia"
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DIFERENCIAIS.map((d) => (
                <DiferencialCard key={d.id} diferencial={d} />
              ))}
            </div>
          </div>
        </section>

        {/* Estrutura */}
        <section className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="Nossa Estrutura"
              subtitulo="Um ambiente pensado para o seu bem-estar e privacidade."
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-card border border-line flex items-center justify-center"
                >
                  <span className="font-sans text-xs text-muted/40 tracking-wide">
                    [foto da estrutura {i}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          titulo="Venha conhecer a Uniko Clinic"
          subtitulo="Agende sua avaliação gratuita e sinta a diferença de um atendimento realmente personalizado."
          labelBotao="Agendar Avaliação"
          mensagemCustom="Olá! Vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
