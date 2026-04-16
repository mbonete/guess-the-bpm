import { createContext, useContext, useReducer, type ReactNode } from 'react'
import songs from '../songs'

export const gameStatuses = {
  GUESSING: 'guessing',
  FINISHED: 'finished',
} as const

type GameStatus = (typeof gameStatuses)[keyof typeof gameStatuses]

interface GameState {
  status: GameStatus
  songCode: string
  songBPM: number
  recordedBeats: Date[]
  currentBPM: number | undefined
}

type GameAction =
  | { type: 'beat' }
  | { type: 'finish' }
  | { type: 'restart' }
  | { type: 'next-song' }

interface GameContextValue extends GameState {
  restart: () => void
  finish: () => void
  nextSong: () => void
  recordBeat: () => void
}

const GameContext = createContext<GameContextValue | null>(null)

const INITIAL_STATE: GameState = {
  status: gameStatuses.GUESSING,
  songCode: songs[0]!.songId,
  songBPM: songs[0]!.bpm,
  recordedBeats: [],
  currentBPM: undefined,
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'restart':
      return {
        ...state,
        status: gameStatuses.GUESSING,
        recordedBeats: [],
        currentBPM: undefined,
      }
    case 'next-song': {
      const song = songs[Math.floor(Math.random() * songs.length)]!
      return {
        ...INITIAL_STATE,
        songCode: song.songId,
        songBPM: song.bpm,
      }
    }
    case 'finish':
      return {
        ...state,
        status: gameStatuses.FINISHED,
      }
    case 'beat': {
      const { status, recordedBeats } = state
      if (status !== gameStatuses.GUESSING) return state

      const numberOfBeats = recordedBeats.length
      const first = recordedBeats[0]
      const last = recordedBeats[recordedBeats.length - 1]
      const duration =
        first && last ? (last.getTime() - first.getTime()) / (1000 * 60) : 0
      const currentBPM =
        duration > 0 ? Math.round((numberOfBeats - 1) / duration) : undefined

      return {
        ...state,
        recordedBeats: [...recordedBeats, new Date()],
        currentBPM: recordedBeats.length > 1 ? currentBPM : undefined,
      }
    }
    default:
      throw new Error(`Unknown action`)
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE)

  const context: GameContextValue = {
    ...state,
    restart: () => dispatch({ type: 'restart' }),
    finish: () => dispatch({ type: 'finish' }),
    nextSong: () => dispatch({ type: 'next-song' }),
    recordBeat: () => dispatch({ type: 'beat' }),
  }

  return <GameContext.Provider value={context}>{children}</GameContext.Provider>
}

export function useGame(): GameContextValue {
  const context = useContext(GameContext)
  if (!context) throw new Error('Component must have a parent GameProvider')
  return context
}
