import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'title': 'Guess The BPM',
      'subtitle': 'Press play!',
      'instructions': `Tap rhythmically for about 15sec, then submit!`,
      'yourResult': 'Your result is:',
      'songResult': 'The song has:',
      'submit': 'Submit',
      'restart': 'Restart',
      'nextSong': 'Next song',
     }
  }, 
  es: {
    translation: {
      'title': 'Adivina los BPM',
      'subtitle': 'Pulsa el play!',
      'instructions': `¡Pulsa rítmicamente unos 15s y envíalo!`,
      'yourResult': 'Tu resultado es:',
      'songResult': 'La canción tiene:',
      'submit': 'Enviar',
      'restart': 'Reintentar',
      'nextSong': 'Siguiente canción',
    }  
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;