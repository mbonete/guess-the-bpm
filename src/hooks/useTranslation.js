import { useState, createContext, useContext } from "react"


const english = {
  title: 'Guess The BPM',
  subtitle: 'Press play!',
  instructions: `Press 'TAP' rhythmically for about 15 seconds and submit the result!`,
  yourResult: 'Your result is:',
  songResult: 'The song has:',
  submit: 'Submit',
  restart: 'Restart',
  nextSong: 'Next song',
}

const spanish = {
  title: 'Adivina los BPM',
  subtitle: 'Pulsa el play!',
  instructions: `¡Pulsa 'TAP' rítmicamente unos 15 segundos y envía el resultado!`,
  yourResult: 'Tu resultado es:',
  songResult: 'La canción tiene:',
  submit: 'Enviar',
  restart: 'Reintentar',
  nextSong: 'Siguiente canción',
}

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const t = (key) => {
    if(language === 'english') return english[key];
    if(language === 'spanish') return spanish[key];
  }

  const changeLanguage = () => {
    if(language === 'english') setLanguage('spanish');
    if(language === 'spanish') setLanguage('english');
  }
  const value = {
    t,
    changeLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext);


