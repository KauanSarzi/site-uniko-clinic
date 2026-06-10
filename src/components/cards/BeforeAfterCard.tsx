import Image from "next/image";
import { AVISO_BEFORE_AFTER } from "@/lib/constants";

interface BeforeAfterCardProps {
  tratamento: string;
  imagemAntes: string;
  imagemDepois: string;
  descricao?: string;
}

export default function BeforeAfterCard({
  tratamento,
  imagemAntes,
  imagemDepois,
  descricao,
}: BeforeAfterCardProps) {
  return (
    <figure className="flex flex-col gap-0 bg-card border border-line overflow-hidden">
      {/* Images */}
      <div className="grid grid-cols-2 divide-x divide-line">
        <div className="relative aspect-square sm:aspect-[3/4] bg-surface">
          <Image
            src={imagemAntes}
            alt={`Antes — ${tratamento}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />
          <span className="absolute bottom-2 left-2 font-sans text-[10px] tracking-[0.15em] uppercase bg-ink/70 text-muted px-2 py-0.5">
            Antes
          </span>
        </div>
        <div className="relative aspect-square sm:aspect-[3/4] bg-surface">
          <Image
            src={imagemDepois}
            alt={`Depois — ${tratamento}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <span className="absolute bottom-2 right-2 font-sans text-[10px] tracking-[0.15em] uppercase bg-ink/70 text-gold px-2 py-0.5">
            Depois
          </span>
        </div>
      </div>

      {/* Caption */}
      <figcaption className="p-4 flex flex-col gap-2">
        <p className="font-serif text-base text-cream">{tratamento}</p>
        {descricao && (
          <p className="font-sans text-xs text-muted">{descricao}</p>
        )}
        <p className="font-sans text-[10px] text-muted/60 leading-relaxed border-t border-line pt-2 mt-1">
          {AVISO_BEFORE_AFTER}
        </p>
      </figcaption>
    </figure>
  );
}
