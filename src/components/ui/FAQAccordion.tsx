"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-col divide-y divide-line max-w-2xl mx-auto ${className}`} role="list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} role="listitem">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-4 text-left group"
            >
              <span className="font-sans text-sm sm:text-base text-cream group-hover:text-gold transition-colors leading-snug">
                {faq.pergunta}
              </span>
              <span
                className={`shrink-0 flex items-center justify-center w-7 h-7 border border-line text-muted group-hover:border-gold group-hover:text-gold transition-all duration-200 ${
                  isOpen ? "rotate-45 border-gold text-gold" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <p className="font-sans text-sm text-muted leading-relaxed pr-10">
                {faq.resposta}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
