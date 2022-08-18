import styled from 'styled-components';
import { gameStatuses, useGame } from '../hooks/useGame'
import YoutubeEmbed from './YoutubeEmbed.js';
import TouchableButton from './TouchableButton';
import ResultSection from './ResultSection';
import LanguageButton from './LanguageButton';
import { useTranslation } from '../hooks/useTranslation'

function App() {
  const { songCode, finish, restart, nextSong, recordBeat, recordedBeats, status } = useGame();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      <Header>
        <Subtitle>{t('subtitle')}</Subtitle>
        <LanguageSettings>
          <LanguageButton>English</LanguageButton> 
          <LanguageButton>Español</LanguageButton> 
        </LanguageSettings>
      </Header>
      
      <YoutubeEmbed embedId={songCode}/>
      
      <Text>{t('instructions')}</Text>      
     
      <ResultSection />

      <CounterSection>
        <TouchableButton onActivate={recordBeat} type="primary">TAP</TouchableButton>
        <OptionsSection>
          <TouchableButton 
            onActivate={finish} type="secondary" 
            disabled={recordedBeats.length < 2 || status === gameStatuses.FINISHED}>
              {t('submit')}
          </TouchableButton>
          <TouchableButton 
            onActivate={restart} type="secondary" 
            disabled={recordedBeats.length < 1 || status === gameStatuses.FINISHED}>
              {t('restart')}
            </TouchableButton>
          <TouchableButton onActivate={nextSong} type="secondary">{t('nextSong')}</TouchableButton>
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4px;
  align-items: baseline;
`;

const LanguageSettings = styled.div`
  display: flex;
  gap: 8px;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  padding: 8px;
  color: rgb(37, 37, 37);
  font-weight: 400;
`;

const Text = styled.h2`
  font-size: 0.85rem;
  padding: 4px;
  padding-bottom: 8px;
  max-width: 30ch;
  font-weight: 400;
  color: rgb(37, 37, 37);
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
