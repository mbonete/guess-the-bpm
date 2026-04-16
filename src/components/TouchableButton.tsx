import { type ReactNode, useState, useCallback } from 'react'
import clsx from 'clsx'

interface TouchableButtonProps {
  children: ReactNode
  type: 'primary' | 'secondary'
  onActivate: () => void
  disabled?: boolean
  beatCount?: number
}

export default function TouchableButton({
  children,
  type,
  onActivate,
  disabled,
  beatCount,
}: TouchableButtonProps) {
  const [waves, setWaves] = useState<number[]>([])

  const handleTap = useCallback(() => {
    onActivate()
    if (type === 'primary') {
      const id = Date.now()
      setWaves((prev) => [...prev, id])
      setTimeout(() => {
        setWaves((prev) => prev.filter((w) => w !== id))
      }, 700)
    }
  }, [onActivate, type])

  if (type === 'primary') {
    const maxDots = 8
    const dots = beatCount !== undefined ? Math.min(beatCount, maxDots) : 0
    const showCount = beatCount !== undefined && beatCount > maxDots

    return (
      <div className="relative flex items-center justify-center">
        {waves.map((id) => (
          <span
            key={id}
            className="absolute w-[160px] h-[160px] rounded-full border border-accent/50 pointer-events-none animate-[wave-ring_0.7s_ease-out_forwards]"
          />
        ))}

        <button
          className="relative z-10 flex flex-col items-center justify-center h-[160px] w-[160px] mx-auto rounded-full bg-accent/10 border-2 border-accent text-accent shadow-[0_0_30px_rgba(46,134,255,0.3),inset_0_0_30px_rgba(46,134,255,0.1)] animate-[pulse-glow_3s_ease-in-out_infinite] active:scale-95 active:animate-none active:bg-accent/20 active:border-accent-glow active:text-accent-glow active:shadow-[0_0_25px_rgba(94,163,255,0.5),inset_0_0_25px_rgba(94,163,255,0.15)] transition-colors duration-100 cursor-pointer select-none"
          onClick={handleTap}
          disabled={disabled}
        >
          {children}
          {beatCount !== undefined && beatCount > 0 && (
            <div className="absolute bottom-5 flex items-center gap-1">
              {showCount ? (
                <span className="text-xs font-medium text-white/80">
                  {beatCount} beats
                </span>
              ) : (
                Array.from({ length: dots }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/80"
                  />
                ))
              )}
            </div>
          )}
        </button>
      </div>
    )
  }

  return (
    <button
      className={clsx(
        'flex-1 w-full border border-border rounded-xl bg-transparent px-3 py-2.5 text-sm text-text-primary font-medium transition-all duration-150 cursor-pointer',
        'hover:bg-bg-card-hover active:scale-[0.97]',
        'disabled:opacity-30 disabled:cursor-not-allowed',
      )}
      onClick={handleTap}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
