import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Uniko Clinic | Estética que Começa por Dentro",
    template: "%s | Uniko Clinic",
  },
  description:
    "Clínica de estética em São Paulo com protocolos exclusivos e atendimento personalizado por Andreia Sarzi, biomédica. Harmonização facial, toxina botulínica, laser e muito mais.",
  keywords: [
    "clínica de estética",
    "harmonização facial",
    "toxina botulínica",
    "preenchimento labial",
    "bioestimuladores de colágeno",
    "depilação a laser",
    "São Paulo",
    "Uniko Clinic",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Uniko Clinic",
    title: "Uniko Clinic | Estética que Começa por Dentro",
    description:
      "Clínica de estética em São Paulo com protocolos exclusivos e atendimento personalizado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
