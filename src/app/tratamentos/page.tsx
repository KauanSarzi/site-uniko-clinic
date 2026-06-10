"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CTABanner from "@/components/sections/CTABanner";
import SectionTitle from "@/components/sections/SectionTitle";
import TratamentoCard from "@/components/cards/TratamentoCard";
import { tratamentos } from "@/data/tratamentos";
import type { Categoria } from "@/types";

type Filtro = "Todos" | Categoria;
const FILTROS: Filtro[] = ["Todos", "Rosto", "Pele", "Corpo"];

export default function TratamentosPage() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const listagem =
    filtro === "Todos" ? tratamentos : tratamentos.filter((t) => t.categoria === filtro);

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
                Uniko Clinic
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-cream leading-tight max-w-xl">
              Nossos Tratamentos
            </h1>
            <p className="mt-3 font-sans text-base text-muted max-w-lg">
              Protocolos exclusivos para rosto, pele e corpo, desenvolvidos com ciência e cuidado para cada paciente.
            </p>
          </div>
        </section>

        {/* Filtros + Grid */}
        <section className="bg-ink">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            {/* Filtros */}
            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por categoria">
              {FILTROS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltro(f)}
                  className={`px-5 py-2 font-sans text-sm border transition-all duration-200 ${
                    filtro === f
                      ? "bg-wine border-wine-light text-cream"
                      : "bg-surface border-line text-muted hover:border-gold/40 hover:text-cream"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {listagem.map((t) => (
                <TratamentoCard key={t.slug} tratamento={t} />
              ))}
            </div>

            {listagem.length === 0 && (
              <p className="font-sans text-sm text-muted text-center py-16">
                Nenhum tratamento encontrado para esta categoria.
              </p>
            )}
          </div>
        </section>

        <CTABanner
          titulo="Não sabe qual tratamento é ideal para você?"
          subtitulo="Fale conosco e receba uma orientação personalizada sem compromisso."
          labelBotao="Falar com a Andreia"
          mensagemCustom="Olá! Vim pelo site da Uniko Clinic e gostaria de saber qual tratamento seria mais indicado para mim."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
