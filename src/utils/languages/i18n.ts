// Translations
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en.json";
import ES from "./es.json";

const englishVariants = {
  EN,
  "EN-GB": EN,
  "EN-US": EN,
  "EN-AU": EN,
  "EN-CA": EN,
  "EN-NZ": EN,
  "EN-IN": EN,
  "EN-IE": EN,
};

const resources = {
  ...englishVariants,
  ES,
};

export const enum Language {
  EN = "EN",
  ES = "ES",
}

i18n.use(initReactI18next).init({
  resources,
  lng: "ES",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
