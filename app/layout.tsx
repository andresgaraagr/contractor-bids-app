import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "./components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contractor Bids App",
  description: "Plataforma de cotizaciones para dueños y contratistas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Agregamos suppressHydrationWarning para evitar un error común al cambiar cosas en el cliente
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
            <Header />
            {/* El main toma el resto del espacio disponible en la pantalla */}
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}