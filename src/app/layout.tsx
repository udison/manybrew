import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Fustat, Azeret_Mono } from "next/font/google"

export const metadata: Metadata = {
  title: "ManyBrew",
  description: "For the perfect brew",
};

const sans = Fustat({
  variable: "--font-fustat"
});

const mono = Azeret_Mono({
  variable: "--font-azeret-mono"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
