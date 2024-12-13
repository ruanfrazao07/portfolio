import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundStars from "@/components/Backgroundstars/BackgroundStars"

const OpenSans = Open_Sans({
  subsets:["latin"],
  weight: ["300","400","500","600","700","800"]
});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Meu Portfólio falando sobre minha carreira profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={OpenSans.className}>
          <Navbar />
          <BackgroundStars />
        {children}
      </body>
    </html>
  );
}
