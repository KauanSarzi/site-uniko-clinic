"use client";

import { useState, useEffect } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  mensagem?: string;
}

export default function WhatsAppButton({
  mensagem = "Olá, vim pelo site da Uniko Clinic e gostaria de mais informações!",
}: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={buildWhatsAppUrl(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={`fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 group transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out">
        <span className="whitespace-nowrap bg-ink/90 text-cream text-xs font-sans py-2 px-3 border border-line mr-2">
          Fale conosco
        </span>
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center bg-[#25D366] shadow-dark hover:bg-[#20bd5a] transition-colors duration-200 rounded-full">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <IconWhatsApp />
      </span>
    </a>
  );
}

function IconWhatsApp() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="white"
      aria-hidden="true"
    >
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.296.609 4.45 1.664 6.32L3 29l6.855-1.633A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11a10.94 10.94 0 01-5.527-1.492l-.387-.227-4.067.969.996-3.938-.254-.41A10.94 10.94 0 015 16C5 9.914 9.914 5 16 5zm-3.152 5.379c-.2 0-.52.074-.793.37-.27.296-1.035 1.011-1.035 2.468 0 1.457 1.058 2.863 1.207 3.063.149.199 2.066 3.148 5.016 4.41.7.301 1.246.48 1.672.614.703.222 1.343.191 1.848.117.563-.082 1.737-.71 1.98-1.398.247-.687.247-1.277.172-1.398-.074-.117-.27-.187-.563-.332-.297-.148-1.755-.867-2.027-.965-.27-.097-.47-.148-.667.149-.199.297-.773.965-.949 1.164-.175.199-.348.223-.644.074-.297-.149-1.254-.461-2.39-1.472-.882-.789-1.48-1.762-1.652-2.059-.172-.3-.019-.457.13-.606.133-.132.296-.348.445-.52.148-.172.199-.297.297-.496.098-.2.05-.372-.024-.52-.075-.149-.668-1.61-.914-2.203-.242-.578-.488-.5-.668-.508l-.573-.01a1.1 1.1 0 00-.797.371z" />
    </svg>
  );
}
