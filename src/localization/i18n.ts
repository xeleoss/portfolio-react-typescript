import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const languages = [
  { label: 'EN', value: 'en-US' },
  { label: 'RU', value: 'ru-RU' }
];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      addPath : `${process.env.PUBLIC_URL}/locales/locales/add/{{lng}}/{{ns}}`,
    },
    fallbackLng: languages[0].value,
    supportedLngs: languages.map(x => x.value),
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
