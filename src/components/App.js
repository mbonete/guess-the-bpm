import styled from 'styled-components';
import { gameStatuses, useGame } from '../hooks/useGame'
import YoutubeEmbed from './YoutubeEmbed.js';
import TouchableButton from './TouchableButton';
import ResultSection from './ResultSection';

function App() {
  const {songCode, finish, restart, nextSong, recordBeat, recordedBeats, status} = useGame();

  return (
    <Wrapper>
      <Title>Guess The BPM</Title>

      <Subtitle>Press play!</Subtitle>
      
      <YoutubeEmbed embedId={songCode}/>
      
      <Text>Press 'TAP' rhythmically for about 15 seconds and submit the result!</Text>      
     
      <ResultSection />

      <CounterSection>
        <TouchableButton onActivate={recordBeat} type="primary">TAP</TouchableButton>
        <OptionsSection>
          <TouchableButton onActivate={finish} type="secondary" disabled={recordedBeats.length < 2 || status === gameStatuses.FINISHED}>Submit</TouchableButton>
          <TouchableButton 
            onActivate={restart} type="secondary" 
            disabled={recordedBeats.length < 1 || status === gameStatuses.FINISHED}>
              Restart
            </TouchableButton>
          <TouchableButton onActivate={nextSong} type="secondary">Next Song</TouchableButton>
        </OptionsSection>
      </CounterSection>
      <Footer> Made with &hearts; Maria Bonete Salmeron</Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;  
  padding: 16px;
  text-align: center;
  margin: auto;
  max-width: 480px;
`;
const Title = styled.p`
  padding: 8px;
  width: 100%;
  color: black;
  font-size: clamp(0.85rem, 9vw, 2rem);
  font-weight: 400;
  background-color: rgb(212, 220, 237);
  font-family: 'Gluten', cursive;    
  border-radius: 4px;
`;

const Text = styled.h2`
  font-size: 0.85rem;
  padding: 4px;
  padding-bottom: 8px;
  max-width: 30ch;
  font-weight: 400;
  color: rgb(37, 37, 37);
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  padding: 8px;
  color: rgb(37, 37, 37);
  margin-bottom: -8px;
`;



const CounterSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-height: 250px;
`;

const OptionsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28%;
`;

const Footer = styled.footer`
  padding-top: 16px;
  margin-bottom: -4px;
  font-size: 0.85rem
`;


 

export default App;
