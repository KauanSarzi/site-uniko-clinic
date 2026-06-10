import { GOOGLE_MAPS_EMBED_URL, CLINICA_ENDERECO_COMPLETO, CLINICA_CEP, HORARIOS_ATENDIMENTO } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map */}
          <div className="lg:col-span-3 aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden border border-line">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Uniko Clinic"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase mb-3">
                Endereço
              </h3>
              <p className="font-sans text-base text-cream leading-relaxed">
                {CLINICA_ENDERECO_COMPLETO}
              </p>
              <p className="font-sans text-sm text-muted mt-1">CEP {CLINICA_CEP}</p>
            </div>

            <div className="h-px w-full bg-line" aria-hidden="true" />

            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] text-gold uppercase mb-3">
                Horários de Atendimento
              </h3>
              <div className="flex flex-col gap-2">
                {HORARIOS_ATENDIMENTO.map((h) => (
                  <div key={h.dia} className="flex justify-between items-center text-sm font-sans">
                    <span className="text-muted">{h.dia}</span>
                    <span className={h.horario === "Fechado" ? "text-muted" : "text-cream"}>
                      {h.horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://maps.google.com/maps?q=${encodeURIComponent(CLINICA_ENDERECO_COMPLETO)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-sans text-gold hover:text-gold-light transition-colors"
            >
              <IconMap />
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconMap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
