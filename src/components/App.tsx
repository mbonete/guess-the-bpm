import { gameStatuses, useGame } from '../hooks/useGame'
import YoutubeEmbed from './YoutubeEmbed'
import TouchableButton from './TouchableButton'
import ResultSection from './ResultSection'
import LanguageButton from './LanguageButton'
import { useTranslation } from 'react-i18next'
import { Activity } from 'lucide-react'

export default function App() {
  const { songCode, finish, restart, nextSong, recordBeat, recordedBeats, status } = useGame()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-between h-full p-4 text-center mx-auto max-w-[480px] min-w-[280px]">
      <p className="p-2 w-full text-coral font-semibold text-[clamp(0.85rem,9vw,2rem)] bg-cream rounded tracking-widest">
        {t('title')}
      </p>

      <header className="flex justify-between w-full my-1 items-baseline">
        <h2 className="text-base py-2 text-dark font-normal">{t('subtitle')}</h2>
        <LanguageButton>Eng / Esp</LanguageButton>
      </header>

      <YoutubeEmbed embedId={songCode} />

      <ResultSection />

      <h2 className="text-[0.85rem] py-2 font-normal text-dark">
        {t('instructions')}
      </h2>

      <div className="flex flex-col justify-center h-full w-full gap-6">
        <TouchableButton onActivate={recordBeat} type="primary">
          <div className="flex justify-center items-center h-full w-full">
            <Activity size={90} />
          </div>
        </TouchableButton>
        <div className="flex justify-between gap-2">
          <TouchableButton
            onActivate={finish}
            type="secondary"
            disabled={recordedBeats.length < 2 || status === gameStatuses.FINISHED}
          >
            {t('submit')}
          </TouchableButton>
          <TouchableButton
            onActivate={restart}
            type="secondary"
            disabled={recordedBeats.length < 1 || status === gameStatuses.FINISHED}
          >
            {t('restart')}
          </TouchableButton>
          <TouchableButton onActivate={nextSong} type="secondary">
            {t('nextSong')}
          </TouchableButton>
        </div>
      </div>

      <footer className="pt-4 -mb-1 text-[0.85rem]">
        Made from Spain with &hearts; Maria Bonete
      </footer>
    </div>
  )
}
