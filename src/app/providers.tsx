"use client";

// NextJS
import { ReactNode } from "react";

// Transaltions
import { ResolutionProvider } from "@/hooks/useResolution";
import { BrowserLanguageProvider } from "@/hooks/useBrowserLanguage";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ResolutionProvider>
      <BrowserLanguageProvider>{children}</BrowserLanguageProvider>
    </ResolutionProvider>
  );
}
