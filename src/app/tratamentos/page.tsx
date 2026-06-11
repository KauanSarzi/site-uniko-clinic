"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CTABanner from "@/components/sections/CTABanner";
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
        {/* Page Hero */}
        <div className="page-hero">
          <div className="page-hero-bg" aria-hidden="true" />
          <div className="page-hero-content">
            <p className="page-eyebrow">Uniko Clinic</p>
            <h1 className="page-title">
              Nossos <em>Tratamentos</em>
            </h1>
            <p className="page-subtitle">
              Protocolos exclusivos para rosto, pele e corpo, desenvolvidos com ciência e cuidado para cada paciente.
            </p>
          </div>
        </div>

        {/* Filtros + Grid */}
        <section style={{ background: "var(--dark)" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
            {/* Filtros */}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}
              role="group"
              aria-label="Filtrar por categoria"
            >
              {FILTROS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltro(f)}
                  style={{
                    padding: "8px 20px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    border: "1px solid",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background: filtro === f ? "var(--wine)" : "transparent",
                    borderColor: filtro === f ? "var(--wine)" : "rgba(201,169,110,0.25)",
                    color: filtro === f ? "var(--cream)" : "var(--text-muted)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {listagem.map((t) => (
                <TratamentoCard key={t.slug} tratamento={t} />
              ))}
            </div>

            {listagem.length === 0 && (
              <p
                style={{
                  textAlign: "center",
                  padding: "64px 0",
                  color: "var(--text-muted)",
                  fontSize: "0.88rem",
                }}
              >
                Nenhum tratamento encontrado para esta categoria.
              </p>
            )}
          </div>
        </section>

        <CTABanner
          titulo="Não sabe qual tratamento é ideal para você?"
          subtitulo="Fale conosco e receba uma orientação personalizada sem compromisso."
          labelBotao="FALAR COM A ANDREIA"
          mensagemCustom="Olá! Vim pelo site da Uniko Clinic e gostaria de saber qual tratamento seria mais indicado para mim."
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
