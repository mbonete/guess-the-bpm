import styled from 'styled-components';
import { gameStatuses, useGame } from '../hooks/useGame'
import YoutubeEmbed from './YoutubeEmbed.js';
import TouchableButton from './TouchableButton';
import ResultSection from './ResultSection';
import LanguageButton from './LanguageButton';
import { useTranslation } from 'react-i18next';
import { Activity } from 'react-feather';

function App() {
  const { songCode, finish, restart, nextSong, recordBeat, recordedBeats, status } = useGame();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      <Header>
        <Subtitle>{t('subtitle')}</Subtitle>
        <LanguageButton>Eng / Esp</LanguageButton> 
      </Header>
      
      <YoutubeEmbed embedId={songCode}/>
           
      <ResultSection />

      <Text>{t('instructions')}</Text>      

      <CounterSection>
        <TouchableButton onActivate={recordBeat} type="primary">
          <IconWrapper>
            <Activity size={90} />
          </IconWrapper>
        </TouchableButton>
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
      <Footer> Made from Spain with &hearts; Maria Bonete </Footer>
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
  min-width: 280px;
`;
const Title = styled.p`
  padding: 8px;
  width: 100%;
  color: #ff7f50;
  font-size: clamp(0.85rem, 9vw, 2rem);
  font-weight: 600;
  background-color: #fff2ee;
  border-radius: 4px;
  word-spacing: 6px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4px;
  align-items: baseline;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  padding: 8px 0;
  color: rgb(37, 37, 37);
  font-weight: 400;
`;

const Text = styled.h2`
  font-size: 0.85rem;
  padding: 8px 0;
  font-weight: 400;
  color: rgb(37, 37, 37);
`;

const CounterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 24px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const OptionsSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Footer = styled.footer`
  padding-top: 16px;
  margin-bottom: -4px;
  font-size: 0.85rem
`;


 

export default App;
