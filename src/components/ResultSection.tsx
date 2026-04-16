import { useGame, gameStatuses } from '../hooks/useGame'
import { useTranslation } from 'react-i18next'

export default function ResultSection() {
  const { currentBPM, status, songBPM } = useGame()
  const { t } = useTranslation()

  const isFinished = status === gameStatuses.FINISHED
  const isCorrectAnswer =
    currentBPM !== undefined &&
    (songBPM === currentBPM ||
      songBPM === currentBPM + 1 ||
      songBPM === currentBPM - 1)

  const resultColor = isFinished
    ? isCorrectAnswer
      ? 'text-success'
      : 'text-error'
    : 'text-black'

  return (
    <div className="flex flex-row justify-between items-center w-full bg-cream rounded p-4">
      <div className="flex flex-col justify-evenly w-1/2 h-full -mt-2">
        <h2 className="text-[0.85rem] p-2 font-normal text-dark">
          {t('yourResult')}
        </h2>
        <div className="flex flex-row items-end justify-center">
          <h2 className="text-[2rem] px-1 leading-none tracking-wider">
            {currentBPM ?? '?'}
          </h2>
          <h3 className="text-[0.75rem] font-extralight">BPM</h3>
        </div>
      </div>
      <div className="flex flex-col justify-evenly w-1/2 h-full -mt-2">
        <h2 className="text-[0.85rem] p-2 font-normal text-dark">
          {t('songResult')}
        </h2>
        <div className="flex flex-row items-end justify-center">
          <h2
            className={`text-[2rem] px-1 leading-none tracking-wider ${resultColor}`}
          >
            {isFinished ? songBPM : '?'}
          </h2>
          <h3 className="text-[0.75rem] font-extralight">BPM</h3>
        </div>
      </div>
    </div>
  )
}
