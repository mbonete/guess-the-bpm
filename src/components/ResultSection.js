import styled from 'styled-components';
import { useGame, gameStatuses } from '../hooks/useGame';
import Text from './Text';

export default function ResultSection() {
  const { currentBPM, status, songBPM } = useGame();

  const isFinished = status === gameStatuses.FINISHED;
  const isCorrectAnswer = songBPM === currentBPM;
  
  let color = 'black';
  if (isFinished) color = isCorrectAnswer ? 'green' : 'red';

  return (
    <ResultDiv>
      <ResultElement>
        <Text>Your result is:</Text>
        <ResultWrapper>
          <Result>{ currentBPM ? currentBPM : '?'}</Result>
          <Unit>BPM</Unit>
        </ResultWrapper>
      </ResultElement>
      <ResultElement>
        <Text>The song has:</Text>
        <ResultWrapper>
          <Result style={{color}}>{isFinished ? songBPM : '?'}</Result>
          <Unit>BPM</Unit>
        </ResultWrapper>
      </ResultElement>
    </ResultDiv>
  )
};

const ResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(173, 195, 238);
  height: 400px;
  width: 100%;
  border-radius: 4px;
  padding: 16px;
`;

const ResultElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgb(173, 195, 238);
  width: 50%;
  height: 100%;
  margin-top: -8px;
`;
const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const Result = styled.h2`
  font-size: 2rem;
  padding: 0 4px;
  line-height: 1;

`;

const Unit = styled.h3`
  font-size: 0.75rem;
  font-weight: 200;
`;