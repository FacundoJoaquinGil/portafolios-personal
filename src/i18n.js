import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  // detecta el idioma del navegador
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',  
    debug: false,
    interpolation: {
      escapeValue: false      
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;
