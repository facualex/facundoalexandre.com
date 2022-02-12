import i18n from 'i18next';
import english from './locales/en/translation.json';
import spanish from './locales/spa/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  English: {
    translation: english,
  },
  Español: {
    translation: spanish,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'English',
  fallbackLng: "English",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});