// NextJS
import type { Metadata } from "next";

//Fonts
import { Inter } from "next/font/google";

// Styles
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

// Providers
import LanguageProviders from "@/providers/LanguageProviders";

// Components
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import Providers from "./providers";

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
        <StyledComponentsRegistry>
          <Providers>
            <NavigationBar />
              {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
