import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: 'Guess The BPM',
      subtitle: 'Press play!',
      instructions: 'Tap rhythmically for about 15sec, then submit!',
      yourResult: 'Your result is:',
      songResult: 'The song has:',
      submit: 'Submit',
      restart: 'Restart',
      nextSong: 'Next song',
    },
  },
  es: {
    translation: {
      title: 'Adivina los BPM',
      subtitle: 'Pulsa el play!',
      instructions: '¡Pulsa rítmicamente unos 15s y envíalo!',
      yourResult: 'Tu resultado es:',
      songResult: 'La canción tiene:',
      submit: 'Enviar',
      restart: 'Reintentar',
      nextSong: 'Siguiente canción',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
