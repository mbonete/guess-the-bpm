import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const languages = ['en', 'es'] as const
type Language = (typeof languages)[number]

const labels: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
}

export default function LanguageButton() {
  const [language, setLanguage] = useState<Language>('en')
  const { i18n } = useTranslation()

  const handleClick = (lang: Language) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex rounded-lg overflow-hidden border border-border text-xs">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleClick(lang)}
          className={`px-3 py-1 font-medium transition-colors duration-150 cursor-pointer ${
            language === lang
              ? 'bg-accent text-white'
              : 'bg-transparent text-text-secondary hover:bg-bg-card-hover'
          }`}
        >
          {labels[lang]}
        </button>
      ))}
    </div>
  )
}
