import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: 'Guess The BPM',
      subtitle: 'Press play!',
      instructions: 'Tap rhythmically for about 15sec, then submit!',
      yourBpm: 'Your BPM',
      actualBpm: 'Actual BPM',
      startTapping: 'Start tapping',
      hidden: 'Hidden',
      live: 'live',
      nailedIt: 'Nailed it!',
      soClose: 'So close! {{diff}} BPM',
      notBad: 'Not bad! {{diff}} BPM',
      offBy: 'Off by {{diff}} BPM',
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
      yourBpm: 'Tu BPM',
      actualBpm: 'BPM Real',
      startTapping: 'Empieza a pulsar',
      hidden: 'Oculto',
      live: 'en vivo',
      nailedIt: '¡Perfecto!',
      soClose: '¡Casi! {{diff}} BPM',
      notBad: '¡No está mal! {{diff}} BPM',
      offBy: 'Te pasaste {{diff}} BPM',
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
