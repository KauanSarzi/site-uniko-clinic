import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface HeroSectionProps {
  titulo: string;
  subtitulo?: string;
  ctaWhatsApp?: string;
  ctaSecundario?: { label: string; href: string };
  backgroundImage?: string;
  fullHeight?: boolean;
  showStats?: boolean;
}

const STATS = [
  { value: "1.200+", label: "Pacientes atendidas" },
  { value: "4.9★",   label: "Avaliação média" },
  { value: "98%",    label: "Satisfação" },
  { value: "8 anos", label: "De experiência" },
];

export default function HeroSection({
  titulo,
  subtitulo,
  ctaWhatsApp = "AGENDAR AVALIAÇÃO",
  ctaSecundario,
  backgroundImage,
  fullHeight = true,
  showStats = false,
}: HeroSectionProps) {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá, vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita!"
  );

  const words = titulo.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, midpoint).join(" ");
  const secondHalf = words.slice(midpoint).join(" ");

  return (
    <section
      style={{
        position: "relative",
        minHeight: fullHeight ? "100vh" : "60vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: backgroundImage
          ? `url(${backgroundImage}) center/cover`
          : "var(--dark)",
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(122,21,21,0.2) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 0% 100%, rgba(77,10,10,0.25) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative gold line right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "1px",
          height: "100%",
          background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent)",
        }}
      />
      {/* Decorative gold line bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "96px",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,169,110,0.15), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "112px 24px 80px",
          display: "grid",
          gridTemplateColumns: showStats ? "1fr 1fr" : "1fr",
          gap: "64px",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-inner"
      >
        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p
            className="fade-up"
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--gold)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "inline-block" }} aria-hidden="true" />
            Uniko Clinic — São Paulo
          </p>

          <h1
            className="fade-up fade-up-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
              fontWeight: 300,
              lineHeight: 1.06,
              color: "var(--white)",
            }}
          >
            {firstHalf}{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              {secondHalf}
            </em>
          </h1>

          {subtitulo && (
            <p
              className="fade-up fade-up-2"
              style={{
                fontSize: "0.92rem",
                color: "var(--cream)",
                opacity: 0.6,
                maxWidth: "520px",
                lineHeight: 1.8,
              }}
            >
              {subtitulo}
            </p>
          )}

          <div
            className="fade-up fade-up-3"
            style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              {ctaWhatsApp}
            </a>
            {ctaSecundario && (
              <Link href={ctaSecundario.href} className="btn-ghost">
                {ctaSecundario.label}
              </Link>
            )}
          </div>
        </div>

        {/* Stats grid */}
        {showStats && (
          <div
            className="fade-up fade-up-4 hero-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "rgba(122,21,21,0.2)",
            }}
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                style={{
                  background: "var(--card-bg)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--gold)",
                    fontWeight: 300,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                    opacity: 0.4,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            padding-top: 96px !important;
          }
          .hero-stats { display: none !important; }
        }
      `}</style>
    </section>
  );
}
