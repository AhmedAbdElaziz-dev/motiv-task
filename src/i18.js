import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import enTranslation from "./locales/en";
import arTranslation from "./locales/ar";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      resources: {
        en: { translation: enTranslation },
        ar: { translation: arTranslation },
      },
    },
  });

export default i18n;
