import type { ReactNode } from 'react'

interface TouchableButtonProps {
  children: ReactNode
  type: 'primary' | 'secondary'
  onActivate: () => void
  disabled?: boolean
}

export default function TouchableButton({
  children,
  type,
  onActivate,
  disabled,
}: TouchableButtonProps) {
  if (type === 'primary') {
    return (
      <button
        className="flex h-[150px] w-[150px] mx-auto text-white bg-coral border-transparent rounded-full active:scale-[0.99] active:bg-coral-light cursor-pointer"
        onClick={onActivate}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className="flex-1 w-full border-3 border-coral rounded-[50px] bg-white px-1 py-1 text-[clamp(0.65rem,3.5vw,1rem)] active:bg-[rgb(212,220,237)] disabled:opacity-50 cursor-pointer"
      onClick={onActivate}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
