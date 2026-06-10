import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppUrl(mensagem: string): string {
  const encoded = encodeURIComponent(mensagem);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildTratamentoWhatsAppUrl(nomeTratamento: string): string {
  const mensagem = `Olá, vim pelo site da Uniko Clinic e gostaria de saber mais sobre ${nomeTratamento}.`;
  return buildWhatsAppUrl(mensagem);
}

export function buildAgendamentoWhatsAppUrl(dados?: {
  nome?: string;
  tratamento?: string;
  turno?: string;
  mensagem?: string;
}): string {
  if (!dados) {
    return buildWhatsAppUrl(
      "Olá, vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação."
    );
  }

  const partes: string[] = ["Olá! Vim pelo site da Uniko Clinic."];
  if (dados.nome) partes.push(`Meu nome é ${dados.nome}.`);
  if (dados.tratamento) partes.push(`Tenho interesse em: ${dados.tratamento}.`);
  if (dados.turno) partes.push(`Prefiro atendimento no ${dados.turno}.`);
  if (dados.mensagem) partes.push(dados.mensagem);

  return buildWhatsAppUrl(partes.join(" "));
}
