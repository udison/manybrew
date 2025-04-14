import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Fustat, Azeret_Mono } from "next/font/google"
import ThemeProvider from "@/contexts/ThemeContext";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
