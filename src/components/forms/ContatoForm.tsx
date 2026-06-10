"use client";

import { useState, type FormEvent } from "react";
import { tratamentos } from "@/data/tratamentos";
import { buildAgendamentoWhatsAppUrl } from "@/lib/whatsapp";

type Turno = "Manhã" | "Tarde" | "Qualquer";

interface FormState {
  nome: string;
  telefone: string;
  tratamento: string;
  turno: Turno;
  mensagem: string;
}

const TURNOS: Turno[] = ["Manhã", "Tarde", "Qualquer"];

export default function ContatoForm() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    telefone: "",
    tratamento: "",
    turno: "Qualquer",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleTurno(turno: Turno) {
    setForm((prev) => ({ ...prev, turno }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const url = buildAgendamentoWhatsAppUrl({
      nome: form.nome,
      tratamento: form.tratamento || undefined,
      turno: form.turno !== "Qualquer" ? form.turno : undefined,
      mensagem: form.mensagem || undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const labelClass = "block font-sans text-xs tracking-[0.15em] text-gold uppercase mb-1.5";
  const inputClass =
    "w-full bg-surface border border-line text-cream placeholder:text-muted/60 font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-2xl"
      aria-label="Formulário de contato"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className={labelClass}>Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className={labelClass}>Telefone / WhatsApp</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      {/* Tratamento */}
      <div>
        <label htmlFor="tratamento" className={labelClass}>Tratamento de Interesse</label>
        <select
          id="tratamento"
          name="tratamento"
          value={form.tratamento}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="">Selecione um tratamento (opcional)</option>
          {tratamentos.map((t) => (
            <option key={t.slug} value={t.nome}>
              {t.nome} — {t.categoria}
            </option>
          ))}
        </select>
      </div>

      {/* Turno */}
      <div>
        <span className={labelClass}>Turno Preferido</span>
        <div className="flex gap-3" role="group" aria-label="Turno preferido">
          {TURNOS.map((turno) => (
            <button
              key={turno}
              type="button"
              onClick={() => handleTurno(turno)}
              className={`flex-1 py-2.5 font-sans text-sm border transition-all duration-200 ${
                form.turno === turno
                  ? "bg-wine border-wine-light text-cream"
                  : "bg-surface border-line text-muted hover:border-gold/40 hover:text-cream"
              }`}
            >
              {turno}
            </button>
          ))}
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className={labelClass}>Mensagem (opcional)</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          placeholder="Conte um pouco sobre o que você está buscando..."
          value={form.mensagem}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-wine text-cream font-sans text-sm font-medium tracking-wide border border-wine-light/30 hover:bg-wine-light transition-colors duration-200"
      >
        <IconWhatsApp />
        Enviar pelo WhatsApp
      </button>

      <p className="font-sans text-xs text-muted/60">
        Ao enviar, você será redirecionada para o WhatsApp com as informações preenchidas.
      </p>
    </form>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.296.609 4.45 1.664 6.32L3 29l6.855-1.633A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm-3.152 8.379c-.2 0-.52.074-.793.37-.27.296-1.035 1.011-1.035 2.468 0 1.457 1.058 2.863 1.207 3.063.149.199 2.066 3.148 5.016 4.41.7.301 1.246.48 1.672.614.703.222 1.343.191 1.848.117.563-.082 1.737-.71 1.98-1.398.247-.687.247-1.277.172-1.398-.074-.117-.27-.187-.563-.332-.297-.148-1.755-.867-2.027-.965-.27-.097-.47-.148-.667.149-.199.297-.773.965-.949 1.164-.175.199-.348.223-.644.074-.297-.149-1.254-.461-2.39-1.472-.882-.789-1.48-1.762-1.652-2.059-.172-.3-.019-.457.13-.606.133-.132.296-.348.445-.52.148-.172.199-.297.297-.496.098-.2.05-.372-.024-.52-.075-.149-.668-1.61-.914-2.203-.242-.578-.488-.5-.668-.508l-.573-.01a1.1 1.1 0 00-.797.371z" />
    </svg>
  );
}
