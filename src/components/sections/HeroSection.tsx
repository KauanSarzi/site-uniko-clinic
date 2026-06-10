import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface HeroSectionProps {
  titulo: string;
  subtitulo?: string;
  ctaWhatsApp?: string;
  ctaSecundario?: { label: string; href: string };
  backgroundImage?: string;
  fullHeight?: boolean;
}

export default function HeroSection({
  titulo,
  subtitulo,
  ctaWhatsApp = "Agendar Avaliação Gratuita",
  ctaSecundario,
  backgroundImage,
  fullHeight = true,
}: HeroSectionProps) {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá, vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita!"
  );

  return (
    <section
      className={`relative flex items-center ${fullHeight ? "min-h-screen" : "min-h-[60vh] md:min-h-[70vh]"} overflow-hidden`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-wine-dark/60"
        aria-hidden="true"
      />

      {/* Decorative gold accent */}
      <div
        className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Tagline chip */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase">
              Uniko Clinic
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.05] mb-6">
            {titulo}
          </h1>

          {/* Subtitle */}
          {subtitulo && (
            <p className="font-sans text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-xl">
              {subtitulo}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-wine text-cream font-sans text-sm font-medium tracking-wide border border-wine-light/30 hover:bg-wine-light transition-colors duration-200"
            >
              <IconWhatsAppSmall />
              {ctaWhatsApp}
            </a>
            {ctaSecundario && (
              <Link
                href={ctaSecundario.href}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-cream font-sans text-sm font-medium tracking-wide border border-cream/20 hover:border-gold hover:text-gold transition-all duration-200"
              >
                {ctaSecundario.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconWhatsAppSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.296.609 4.45 1.664 6.32L3 29l6.855-1.633A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm-3.152 8.379c-.2 0-.52.074-.793.37-.27.296-1.035 1.011-1.035 2.468 0 1.457 1.058 2.863 1.207 3.063.149.199 2.066 3.148 5.016 4.41.7.301 1.246.48 1.672.614.703.222 1.343.191 1.848.117.563-.082 1.737-.71 1.98-1.398.247-.687.247-1.277.172-1.398-.074-.117-.27-.187-.563-.332-.297-.148-1.755-.867-2.027-.965-.27-.097-.47-.148-.667.149-.199.297-.773.965-.949 1.164-.175.199-.348.223-.644.074-.297-.149-1.254-.461-2.39-1.472-.882-.789-1.48-1.762-1.652-2.059-.172-.3-.019-.457.13-.606.133-.132.296-.348.445-.52.148-.172.199-.297.297-.496.098-.2.05-.372-.024-.52-.075-.149-.668-1.61-.914-2.203-.242-.578-.488-.5-.668-.508l-.573-.01a1.1 1.1 0 00-.797.371z" />
    </svg>
  );
}
