import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLINICA_EMAIL, CLINICA_NOME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Uniko Clinic conforme a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaPrivacidadePage() {
  const dataAtualizacao = "10 de junho de 2025";

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink pt-24 md:pt-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {/* Header */}
            <div className="mb-10 pb-8 border-b border-line">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gold" aria-hidden="true" />
                <span className="font-sans text-xs tracking-[0.25em] text-gold uppercase">LGPD</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-light text-cream">
                Política de Privacidade
              </h1>
              <p className="mt-3 font-sans text-sm text-muted">
                Última atualização: {dataAtualizacao}
              </p>
            </div>

            {/* Content */}
            <div className="prose-uniko">
              <Section titulo="1. Quem Somos">
                <p>
                  <strong className="text-cream">{CLINICA_NOME}</strong>, clínica de estética localizada em São Paulo, SP, responsável pelo tratamento dos dados pessoais coletados neste site.
                </p>
              </Section>

              <Section titulo="2. Dados Coletados">
                <p>Coletamos as seguintes categorias de dados pessoais:</p>
                <ul>
                  <li><strong className="text-cream/80">Dados de identificação:</strong> nome completo.</li>
                  <li><strong className="text-cream/80">Dados de contato:</strong> número de telefone/WhatsApp e e-mail (quando fornecido).</li>
                  <li><strong className="text-cream/80">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de visita (via cookies de análise, quando consentido).</li>
                  <li><strong className="text-cream/80">Dados de interesse:</strong> tratamentos de interesse indicados no formulário de contato.</li>
                </ul>
              </Section>

              <Section titulo="3. Finalidade do Tratamento">
                <p>Os dados coletados são utilizados para:</p>
                <ul>
                  <li>Responder a solicitações de contato e agendamento;</li>
                  <li>Enviar informações sobre tratamentos, promoções e novidades da clínica (somente com consentimento);</li>
                  <li>Melhorar a experiência de navegação no site;</li>
                  <li>Cumprir obrigações legais e regulatórias;</li>
                  <li>Medir a eficácia de campanhas de marketing digital (Meta Ads, Google Ads).</li>
                </ul>
              </Section>

              <Section titulo="4. Base Legal">
                <p>O tratamento dos dados é realizado com base nas seguintes hipóteses legais previstas na LGPD (Lei nº 13.709/2018):</p>
                <ul>
                  <li><strong className="text-cream/80">Consentimento</strong> (art. 7º, I): para envio de comunicações de marketing e uso de cookies não essenciais;</li>
                  <li><strong className="text-cream/80">Execução de contrato</strong> (art. 7º, V): para processamento de agendamentos;</li>
                  <li><strong className="text-cream/80">Legítimo interesse</strong> (art. 7º, IX): para análise de dados de navegação com fins de melhoria do serviço.</li>
                </ul>
              </Section>

              <Section titulo="5. Compartilhamento de Dados">
                <p>Não vendemos seus dados pessoais. Podemos compartilhá-los com:</p>
                <ul>
                  <li>Plataformas de comunicação (WhatsApp/Meta Business) para atendimento ao cliente;</li>
                  <li>Google LLC e Meta Platforms, para análise de tráfego e campanhas pagas;</li>
                  <li>Autoridades governamentais, quando exigido por lei.</li>
                </ul>
                <p>Todos os fornecedores estão sujeitos a obrigações contratuais de confidencialidade.</p>
              </Section>

              <Section titulo="6. Cookies">
                <p>Este site utiliza cookies para:</p>
                <ul>
                  <li><strong className="text-cream/80">Cookies essenciais:</strong> funcionamento básico do site (não requerem consentimento);</li>
                  <li><strong className="text-cream/80">Cookies de análise:</strong> Google Analytics, para entender como os visitantes interagem com o site;</li>
                  <li><strong className="text-cream/80">Cookies de publicidade:</strong> Meta Pixel e Google Ads, para mensuração de campanhas.</li>
                </ul>
                <p>Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.</p>
              </Section>

              <Section titulo="7. Retenção de Dados">
                <p>
                  Os dados são mantidos pelo período necessário às finalidades que motivaram sua coleta ou conforme exigido por lei. Dados de contato são retidos por até 5 anos após o último contato. Dados de navegação (cookies) seguem as políticas das plataformas utilizadas.
                </p>
              </Section>

              <Section titulo="8. Direitos do Titular">
                <p>Conforme a LGPD, você tem direito a:</p>
                <ul>
                  <li><strong className="text-cream/80">Acesso:</strong> confirmar a existência de tratamento e acessar seus dados;</li>
                  <li><strong className="text-cream/80">Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li><strong className="text-cream/80">Exclusão:</strong> solicitar a exclusão de dados tratados com base em consentimento;</li>
                  <li><strong className="text-cream/80">Portabilidade:</strong> receber seus dados em formato estruturado;</li>
                  <li><strong className="text-cream/80">Revogação do consentimento:</strong> retirar o consentimento a qualquer momento;</li>
                  <li><strong className="text-cream/80">Reclamação:</strong> apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados).</li>
                </ul>
                <p>
                  Para exercer seus direitos, entre em contato pelo e-mail:{" "}
                  <a href={`mailto:${CLINICA_EMAIL}`} className="text-gold hover:underline">
                    {CLINICA_EMAIL}
                  </a>
                </p>
              </Section>

              <Section titulo="9. Segurança">
                <p>
                  Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, destruição ou divulgação indevida. Utilizamos conexões seguras (HTTPS) em todo o site.
                </p>
              </Section>

              <Section titulo="10. Alterações nesta Política">
                <p>
                  Esta Política de Privacidade pode ser atualizada periodicamente. A data da última atualização estará sempre indicada no topo desta página. O uso contínuo do site após alterações constitui aceitação das novas condições.
                </p>
              </Section>

              <Section titulo="11. Contato">
                <p>
                  Para dúvidas sobre esta política ou sobre o tratamento dos seus dados pessoais, entre em contato:
                </p>
                <ul>
                  <li><strong className="text-cream/80">E-mail:</strong> <a href={`mailto:${CLINICA_EMAIL}`} className="text-gold hover:underline">{CLINICA_EMAIL}</a></li>
                  <li><strong className="text-cream/80">Clínica:</strong> {CLINICA_NOME} — São Paulo, SP</li>
                </ul>
              </Section>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .prose-uniko p {
          font-family: var(--font-inter, system-ui, sans-serif);
          font-size: 0.9375rem;
          line-height: 1.75;
          color: #9E9087;
          margin-bottom: 1rem;
        }
        .prose-uniko ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .prose-uniko ul li::before {
          content: "—";
          color: #C9A96E;
          margin-right: 0.5rem;
          font-size: 0.75rem;
        }
        .prose-uniko li {
          font-family: var(--font-inter, system-ui, sans-serif);
          font-size: 0.875rem;
          line-height: 1.65;
          color: #9E9087;
        }
      `}</style>
    </>
  );
}

function Section({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-serif text-xl text-cream mb-3">{titulo}</h2>
      <div className="h-px w-8 bg-gold/40 mb-4" aria-hidden="true" />
      {children}
    </div>
  );
}
