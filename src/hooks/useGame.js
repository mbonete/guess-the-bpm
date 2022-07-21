import { createContext, useContext, useReducer } from 'react';
import songs from '../songs';

const GameContext = createContext({});

export const gameStatuses = {
  GUESSING: 'guessing',
  FINISHED: 'finished',
};

const INITIAL_STATE = {
  status: gameStatuses.GUESSING,
  songCode: songs[0].songId,
  songBPM: songs[0].bpm,
  recordedBeats: [],
  currentBPM: undefined,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'restart':
      const song = songs[Math.floor(Math.random()*songs.length)];
      return {
        ...INITIAL_STATE,
        songCode: song.songId,
        songBPM: song.bpm,
      };
    case 'finish':
      return {
        ...state,
        status: gameStatuses.FINISHED,
      };
    case 'beat':
      const { status, recordedBeats } = state;

      if (status !== gameStatuses.GUESSING) return state;

      const numberOfBeats = recordedBeats.length;
      const first = recordedBeats[0];
      const last = recordedBeats[recordedBeats.length - 1];
      const duration = (last - first)/(1000*60);
      const currentBPM = Math.round((numberOfBeats - 1) / duration) ;
      return {
        ...state,
        recordedBeats: [...recordedBeats, new Date()],
        currentBPM: recordedBeats.length > 1 ? currentBPM : undefined,
      }
    default:
      throw new Error(`Unknown action ${action.type}`);
  }

};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const restart = () => dispatch({ type: 'restart' });
  const finish = () => dispatch({ type: 'finish' });
  const recordBeat = () => dispatch({ type: 'beat' });


  const context = {
    ...state,
    restart,
    finish,
    recordBeat,
  };

  return (
    <GameContext.Provider value={context}>
      { children }
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('Component must have a parent GameProvider');

  return context;
}