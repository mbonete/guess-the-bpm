import { useTranslation } from 'react-i18next'
import { useState, type ReactNode } from 'react'

interface LanguageButtonProps {
  children: ReactNode
}

export default function LanguageButton({ children }: LanguageButtonProps) {
  const [language, setLanguage] = useState('en')
  const { i18n } = useTranslation()

  const handleClick = () => {
    const next = language === 'en' ? 'es' : 'en'
    setLanguage(next)
    i18n.changeLanguage(next)
  }

  return (
    <button
      className="border-2 border-coral px-2 py-1 rounded-[50px] w-fit text-[0.75rem] bg-transparent active:bg-coral cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
