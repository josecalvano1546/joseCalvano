"use client"

// NextJS
import { useEffect, useState } from "react";

// State
import constate from "constate";

// Translations
import i18n from "@/utils/languages/i18n";

export const DefaultBrowserLanguageState = "ES";

const availableLanguages = [
  "EN",
  "ES",
  "EN-GB",
  "EN-US",
  "EN-AU",
  "EN-CA",
  "EN-NZ",
  "EN-IN",
  "EN-IE",
];

const STORED_LANGUAGE_KEY = "SELECTED_LANGUAGE";

const useBrowserLanguage = () => {
  const [browserLanguage, setBrowserLanguage] = useState<string>("EN");
  let savedLanguage: string | null = "";
  if (typeof window !== "undefined") {
    savedLanguage = localStorage.getItem(STORED_LANGUAGE_KEY);
  }

  const handleBrowserLanguage = (language: string) => {
    setBrowserLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem(STORED_LANGUAGE_KEY, language);
  };

  const resetBrowserLanguageState = () =>
    setBrowserLanguage(DefaultBrowserLanguageState);

  useEffect(() => {
    let language: string = DefaultBrowserLanguageState;
    const browserLanguage = String(window.navigator.language).toUpperCase();
    if (availableLanguages.includes(browserLanguage)) {
      language = browserLanguage;
    }
    if (savedLanguage) handleBrowserLanguage(savedLanguage);
    else handleBrowserLanguage(language);
  }, []);

  return { browserLanguage, handleBrowserLanguage, resetBrowserLanguageState };
};

export const [BrowserLanguageProvider, useBrowserLanguageState] =
  constate(useBrowserLanguage);
