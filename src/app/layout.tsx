// NextJS
import type { Metadata } from "next";

//Fonts
import { Inter } from "next/font/google";

// Styles
import "./globals.css";

// Providers
import LanguageProviders from "@/providers/LanguageProviders";
import ResolutionProviders from "@/providers/ResolutionProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Calvano",
  description: "Jose Calvano curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProviders>
          {children}
        </LanguageProviders>
      </body>
    </html>
  );
}
