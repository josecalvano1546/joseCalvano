"use client";

// NextJS
import { ReactNode } from "react";

// Transaltions
import { BrowserLanguageProvider } from "@/hooks/useBrowserLanguage";

// Types
interface ProvidersProps {
  children: ReactNode;
}

export default function LanguageProviders({ children }: ProvidersProps) {
  return (
      <BrowserLanguageProvider>{children}</BrowserLanguageProvider>
  );
}
