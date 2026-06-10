import type { Diferencial } from "@/types";

interface DiferencialCardProps {
  diferencial: Diferencial;
}

export default function DiferencialCard({ diferencial }: DiferencialCardProps) {
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 p-6 bg-card border border-line hover:border-gold/30 transition-colors duration-300">
      <div className="flex items-center justify-center w-12 h-12 border border-gold/30 bg-gold/5 shrink-0">
        <DiferencialIcon icone={diferencial.icone} />
      </div>
      <div>
        <h3 className="font-serif text-xl text-cream mb-2">{diferencial.titulo}</h3>
        <p className="font-sans text-sm text-muted leading-relaxed">{diferencial.descricao}</p>
      </div>
    </div>
  );
}

function DiferencialIcon({ icone }: { icone: Diferencial["icone"] }) {
  const props = { width: 22, height: 22, fill: "none", "aria-hidden": true as const };
  const stroke = "currentColor";
  const sw = "1.5";
  const cls = "text-gold";

  switch (icone) {
    case "protocolo":
      return (
        <svg {...props} viewBox="0 0 24 24" className={cls}>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
          <rect x="9" y="3" width="6" height="4" rx="1" stroke={stroke} strokeWidth={sw} />
          <path d="M9 12h6M9 16h4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "biomédica":
      return (
        <svg {...props} viewBox="0 0 24 24" className={cls}>
          <circle cx="12" cy="8" r="4" stroke={stroke} strokeWidth={sw} />
          <path d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M17 3l1 1.5L20 5l-1.5 1 .5 2-1.5-1L16 8.5l-.5-2-1.5-.5 1.5-1L15 3.5l1.5.5L17 3z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      );
    case "natural":
      return (
        <svg {...props} viewBox="0 0 24 24" className={cls}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      );
    case "premium":
      return (
        <svg {...props} viewBox="0 0 24 24" className={cls}>
          <path d="M12 2L9 8H3l5 4-2 7 6-4 6 4-2-7 5-4h-6L12 2z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
