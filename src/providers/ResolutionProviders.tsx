"use client";

// NextJS
import { ReactNode } from "react";

// Transaltions
import { ResolutionProvider } from "@/hooks/useResolution";

// Types
interface ProvidersProps {
  children: ReactNode;
}

export default function ResolutionProviders({ children }: ProvidersProps) {
  return (
      <ResolutionProvider>{children}</ResolutionProvider>
  );
}
