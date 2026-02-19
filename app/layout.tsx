import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPF - Plateforme de Projets Étudiants",
  description: "Trouvez votre équipe et réussissez vos projets collaboratifs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#ECE5D9] text-[#001524] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}   