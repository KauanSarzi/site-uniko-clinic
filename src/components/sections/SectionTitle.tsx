interface SectionTitleProps {
  titulo: string;
  subtitulo?: string;
  alinhamento?: "center" | "left";
  className?: string;
}

export default function SectionTitle({
  titulo,
  subtitulo,
  alinhamento = "center",
  className = "",
}: SectionTitleProps) {
  const isCenter = alinhamento === "center";

  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
        {titulo}
      </h2>
      <div
        className={`mt-4 h-px w-16 bg-gold ${isCenter ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitulo && (
        <p className="mt-4 font-sans text-sm sm:text-base text-muted leading-relaxed max-w-xl">
          {subtitulo}
        </p>
      )}
    </div>
  );
}
