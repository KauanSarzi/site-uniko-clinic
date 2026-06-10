import Link from "next/link";
import Image from "next/image";
import type { Tratamento } from "@/types";

interface TratamentoCardProps {
  tratamento: Tratamento;
}

const CATEGORIA_COLORS: Record<string, string> = {
  Rosto: "bg-wine/20 text-wine-light border-wine/30",
  Pele: "bg-gold/10 text-gold border-gold/30",
  Corpo: "bg-surface text-muted border-line",
};

export default function TratamentoCard({ tratamento }: TratamentoCardProps) {
  return (
    <Link
      href={`/tratamentos/${tratamento.slug}`}
      className="group flex flex-col bg-card border border-line hover:border-gold/40 transition-all duration-300 overflow-hidden"
      aria-label={`Ver mais sobre ${tratamento.nome}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-surface overflow-hidden">
        <Image
          src={tratamento.imagem}
          alt={tratamento.nome}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/40 to-ink" aria-hidden="true" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-2.5 py-1 text-xs font-sans font-medium tracking-wide border ${
              CATEGORIA_COLORS[tratamento.categoria] || "bg-surface text-muted border-line"
            }`}
          >
            {tratamento.categoria}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <h3 className="font-serif text-xl text-cream group-hover:text-gold transition-colors duration-200 leading-snug">
          {tratamento.nome}
        </h3>
        <p className="font-sans text-sm text-muted leading-relaxed line-clamp-3 flex-1">
          {tratamento.descricaoCurta}
        </p>
        <div className="flex items-center gap-1.5 text-gold text-xs font-sans mt-2">
          <span>Ver protocolo</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
