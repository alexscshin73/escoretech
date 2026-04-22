import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.CoreTech — Soluciones Inteligentes para tu Negocio",
  description:
    "S.CoreTech ayuda a empresas y comercios en México a mejorar su operación con soluciones de Kiosk, POS, ERP, CRM y automatización inteligente.",
  keywords: "kiosk, POS, ERP, CRM, automatización, México, Monterrey, tecnología empresarial",
  openGraph: {
    title: "S.CoreTech — Soluciones Inteligentes para tu Negocio",
    description:
      "Automatización inteligente y soluciones integradas para negocios en México.",
    url: "https://escoretech.com.mx",
    siteName: "S.CoreTech",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
