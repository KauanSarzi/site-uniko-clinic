import Image from "next/image";
import type { Depoimento } from "@/types";

interface TestimonialCardProps {
  depoimento: Depoimento;
}

export default function TestimonialCard({ depoimento }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-card border border-line h-full">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${depoimento.nota} estrelas de 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < depoimento.nota ? "#C9A96E" : "none"}
            stroke="#C9A96E"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-sans text-sm text-muted leading-relaxed flex-1 italic">
        &ldquo;{depoimento.texto}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-line">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-surface border border-line shrink-0">
          <Image
            src={depoimento.foto}
            alt={depoimento.nome}
            fill
            className="object-cover"
            sizes="40px"
          />
          <span className="absolute inset-0 flex items-center justify-center font-sans text-sm font-medium text-gold">
            {depoimento.nome[0]}
          </span>
        </div>
        <div>
          <p className="font-sans text-sm font-medium text-cream">{depoimento.nome}</p>
          <p className="font-sans text-xs text-gold">{depoimento.procedimento}</p>
        </div>
      </div>
    </div>
  );
}
