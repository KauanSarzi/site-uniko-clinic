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
  labelBotao = "AGENDAR AVALIAÇÃO",
  tratamento,
  mensagemCustom,
}: CTABannerProps) {
  const url = mensagemCustom
    ? buildWhatsAppUrl(mensagemCustom)
    : tratamento
    ? buildTratamentoWhatsAppUrl(tratamento)
    : buildWhatsAppUrl("Olá! Vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação.");

  const [firstWord, ...rest] = titulo.split(" ");

  return (
    <div className="cta-strip">
      <h2>
        {firstWord}{" "}
        <em>{rest.join(" ")}</em>
      </h2>
      {subtitulo && <p>{subtitulo}</p>}
      <div className="cta-strip-actions">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          {labelBotao}
        </a>
        <a
          href="/tratamentos"
          className="btn-outline-light"
        >
          VER TRATAMENTOS
        </a>
      </div>
    </div>
  );
}
