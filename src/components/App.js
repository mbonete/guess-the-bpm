import styled from 'styled-components';
import { useGame } from '../hooks/useGame'
import YoutubeEmbed from './YoutubeEmbed.js';
import TouchableButton from './TouchableButton';
import Text from './Text';
import ResultSection from './ResultSection';

function App() {
  const {songCode, finish, restart, recordBeat, recordedBeats} = useGame();

  return (
    <Wrapper>
      <Title>BPM Counter</Title>
      
      <Subtitle>Press play!</Subtitle>
      
      <YoutubeEmbed embedId={songCode}/>

      <ResultSection />
      <Text>Press the TAP button rithmically for about 15 seconds and submit the result!</Text>
      
      <CounterSection>
        <TouchableButton onActivate={recordBeat} type="primary">TAP</TouchableButton>
        <OptionsSection>
          <TouchableButton onActivate={finish} type="secondary" disabled={recordedBeats.length < 2}>Submit</TouchableButton>
          <TouchableButton onActivate={restart} type="secondary">Next Song</TouchableButton>
        </OptionsSection>
      </CounterSection>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;  
  padding: 32px;
  text-align: center;
  margin: auto;
  max-width: 480px;
`;
const Title = styled.h1`
  padding: 16px;
  width: 100%;
  color: rgb(37, 37, 37);
  border: 4px solid;
  border-image: linear-gradient(90deg, rgba(68,131,255,1), rgba(170,28,171,1), rgba(255,75,30,1)) 1;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  padding: 8px;
  color: rgb(37, 37, 37);
  margin-bottom:-8px;
`;



const CounterSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const OptionsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28%;
`;


 

export default App;
