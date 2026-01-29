import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import it from './it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      it: { translation: it }
    },
    lng: 'es', // Default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
