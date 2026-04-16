import clsx from 'clsx'
import { useGame, gameStatuses } from '../hooks/useGame'
import { useTranslation } from 'react-i18next'
import { Music, Lock } from 'lucide-react'

function getProximityKey(diff: number): string {
  const abs = Math.abs(diff)
  if (abs === 0) return 'nailedIt'
  if (abs <= 5) return 'soClose'
  if (abs <= 15) return 'notBad'
  return 'offBy'
}

function getProximityColor(diff: number): string {
  const abs = Math.abs(diff)
  if (abs <= 5) return 'text-success'
  if (abs <= 15) return 'text-yellow-400'
  return 'text-error'
}

export default function ResultSection() {
  const { currentBPM, status, songBPM, recordedBeats } = useGame()
  const { t } = useTranslation()

  const isFinished = status === gameStatuses.FINISHED
  const hasTapped = recordedBeats.length > 0
  const hasLiveBPM = currentBPM !== undefined

  const diff = isFinished && currentBPM !== undefined ? currentBPM - songBPM : 0
  const absDiff = Math.abs(diff)
  const isCorrectAnswer = isFinished && absDiff <= 1

  const diffSign = diff > 0 ? '+' : ''
  const diffStr = `${diffSign}${diff}`

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-3 w-full">
        <div className="flex-1 flex flex-col items-center bg-bg-card rounded-2xl p-5 min-h-25 justify-center">
          <span className="text-xs uppercase tracking-wider text-text-secondary font-medium mb-2">
            {t('yourBpm')}
          </span>

          {!hasTapped && !isFinished && (
            <div className="flex flex-col items-center gap-1.5">
              <Music size={24} className="text-text-secondary opacity-50" />
              <span className="text-xs text-text-secondary opacity-70">
                {t('startTapping')}
              </span>
            </div>
          )}

          {hasTapped && !hasLiveBPM && !isFinished && (
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold tabular-nums leading-none text-text-secondary">
                --
              </span>
              <span className="text-xs text-text-secondary font-medium mb-0.5">
                BPM
              </span>
            </div>
          )}

          {hasLiveBPM && !isFinished && (
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-[live-pulse_1.5s_ease-in-out_infinite]" />
                <span className="text-[10px] uppercase tracking-wider text-success font-medium">
                  {t('live')}
                </span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold tabular-nums leading-none">
                  {currentBPM}
                </span>
                <span className="text-xs text-text-secondary font-medium mb-0.5">
                  BPM
                </span>
              </div>
            </div>
          )}

          {isFinished && (
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold tabular-nums leading-none">
                {currentBPM ?? '--'}
              </span>
              <span className="text-xs text-text-secondary font-medium mb-0.5">
                BPM
              </span>
            </div>
          )}
        </div>

        <div
          className={clsx(
            'flex-1 flex flex-col items-center bg-bg-card rounded-2xl p-5 min-h-25 justify-center',
            isFinished && isCorrectAnswer && 'animate-[confetti-burst_0.8s_ease-out]',
          )}
        >
          <span className="text-xs uppercase tracking-wider text-text-secondary font-medium mb-2">
            {t('actualBpm')}
          </span>

          {!isFinished && (
            <div className="flex flex-col items-center gap-1.5">
              <Lock size={24} className="text-text-secondary opacity-30" />
              <span className="text-xs text-text-secondary opacity-50">
                {t('hidden')}
              </span>
            </div>
          )}

          {isFinished && (
            <div className="flex items-end gap-1">
              <span
                className={clsx(
                  'text-4xl font-bold tabular-nums leading-none',
                  isCorrectAnswer && 'text-success animate-[bounce-in_0.5s_ease-out] [animation-fill-mode:both]',
                  !isCorrectAnswer && 'text-error animate-[shake_0.5s_ease-out]',
                )}
              >
                {songBPM}
              </span>
              <span className="text-xs text-text-secondary font-medium mb-0.5">
                BPM
              </span>
            </div>
          )}
        </div>
      </div>

      {isFinished && currentBPM !== undefined && (
        <div className="flex justify-center animate-[fade-in-up_0.4s_ease-out_0.3s_both]">
          <span
            className={clsx(
              'text-sm font-medium px-4 py-1 rounded-full bg-bg-card',
              getProximityColor(diff),
            )}
          >
            {absDiff === 0
              ? t('nailedIt')
              : t(getProximityKey(diff), { diff: diffStr })}
          </span>
        </div>
      )}
    </div>
  )
}
