"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CTABanner from "@/components/sections/CTABanner";
import SectionTitle from "@/components/sections/SectionTitle";
import BeforeAfterCard from "@/components/cards/BeforeAfterCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { depoimentos } from "@/data/depoimentos";
import { AVISO_BEFORE_AFTER } from "@/lib/constants";

type Filtro = "Todos" | "Rosto" | "Pele" | "Corpo";
const FILTROS: Filtro[] = ["Todos", "Rosto", "Pele", "Corpo"];

const RESULTADOS = [
  { tratamento: "Harmonização Facial", categoria: "Rosto" as Filtro, imagemAntes: "/images/resultados/harmonizacao-antes.jpg", imagemDepois: "/images/resultados/harmonizacao-depois.jpg" },
  { tratamento: "Toxina Botulínica", categoria: "Rosto" as Filtro, imagemAntes: "/images/resultados/toxina-antes.jpg", imagemDepois: "/images/resultados/toxina-depois.jpg" },
  { tratamento: "Preenchimento Labial", categoria: "Rosto" as Filtro, imagemAntes: "/images/resultados/labial-antes.jpg", imagemDepois: "/images/resultados/labial-depois.jpg" },
  { tratamento: "Tratamentos para Pele", categoria: "Pele" as Filtro, imagemAntes: "/images/resultados/pele-antes.jpg", imagemDepois: "/images/resultados/pele-depois.jpg" },
  { tratamento: "Depilação a Laser", categoria: "Corpo" as Filtro, imagemAntes: "/images/resultados/depilacao-antes.jpg", imagemDepois: "/images/resultados/depilacao-depois.jpg" },
  { tratamento: "Tratamentos Corporais", categoria: "Corpo" as Filtro, imagemAntes: "/images/resultados/corporal-antes.jpg", imagemDepois: "/images/resultados/corporal-depois.jpg" },
];

export default function ResultadosPage() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const listagem = filtro === "Todos" ? RESULTADOS : RESULTADOS.filter((r) => r.categoria === filtro);

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <div className="page-hero">
          <div className="page-hero-bg" aria-hidden="true" />
          <div className="page-hero-content">
            <p className="page-eyebrow">Galeria</p>
            <h1 className="page-title">
              Resultados <em>Reais</em>
            </h1>
            <p className="page-subtitle">{AVISO_BEFORE_AFTER}</p>
          </div>
        </div>

        {/* Galeria */}
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
              {listagem.map((r, i) => (
                <BeforeAfterCard key={i} {...r} />
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <SectionTitle
              titulo="O que dizem nossas pacientes"
              subtitulo="Histórias reais de quem já transformou sua autoestima na Uniko Clinic."
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {depoimentos.map((d) => (
                <TestimonialCard key={d.id} depoimento={d} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          titulo="Quero um resultado como esse"
          subtitulo="Agende sua avaliação e descubra o protocolo personalizado para você."
          labelBotao="Agendar Avaliação"
          mensagemCustom="Olá! Vi os resultados no site da Uniko Clinic e gostaria de agendar uma avaliação."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
