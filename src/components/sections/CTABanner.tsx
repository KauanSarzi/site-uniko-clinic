import { buildTratamentoWhatsAppUrl, buildWhatsAppUrl } from "@/lib/whatsapp";

interface CTABannerProps {
  titulo: string;
  subtitulo?: string;
  labelBotao?: string;
  tratamento?: string;
  mensagemCustom?: string;
}

export default function CTABanner({
  titulo,
  subtitulo,
  labelBotao = "Falar pelo WhatsApp",
  tratamento,
  mensagemCustom,
}: CTABannerProps) {
  const url = mensagemCustom
    ? buildWhatsAppUrl(mensagemCustom)
    : tratamento
    ? buildTratamentoWhatsAppUrl(tratamento)
    : buildWhatsAppUrl("Olá! Vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação.");

  return (
    <section className="bg-wine border-y border-wine-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-cream leading-tight">
              {titulo}
            </h2>
            {subtitulo && (
              <p className="mt-2 font-sans text-sm sm:text-base text-cream/70 max-w-lg">
                {subtitulo}
              </p>
            )}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-ink font-sans text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200"
          >
            <IconWhatsApp />
            {labelBotao}
          </a>
        </div>
      </div>
    </section>
  );
}

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.296.609 4.45 1.664 6.32L3 29l6.855-1.633A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm-3.152 8.379c-.2 0-.52.074-.793.37-.27.296-1.035 1.011-1.035 2.468 0 1.457 1.058 2.863 1.207 3.063.149.199 2.066 3.148 5.016 4.41.7.301 1.246.48 1.672.614.703.222 1.343.191 1.848.117.563-.082 1.737-.71 1.98-1.398.247-.687.247-1.277.172-1.398-.074-.117-.27-.187-.563-.332-.297-.148-1.755-.867-2.027-.965-.27-.097-.47-.148-.667.149-.199.297-.773.965-.949 1.164-.175.199-.348.223-.644.074-.297-.149-1.254-.461-2.39-1.472-.882-.789-1.48-1.762-1.652-2.059-.172-.3-.019-.457.13-.606.133-.132.296-.348.445-.52.148-.172.199-.297.297-.496.098-.2.05-.372-.024-.52-.075-.149-.668-1.61-.914-2.203-.242-.578-.488-.5-.668-.508l-.573-.01a1.1 1.1 0 00-.797.371z" />
    </svg>
  );
}
