import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styled from 'styled-components'

const LanguageButton = function({children}) {
  const [language, setLanguage] = useState('en')
  const { i18n } = useTranslation();

  const handleClick = () => {
   if(language === 'en') {
    setLanguage('es')
    i18n.changeLanguage('es');
    return;
   }   
   if(language === 'es') {
    setLanguage('en')
    i18n.changeLanguage('en');
    return;
   } 
  }
  return (
    <Button onClick={handleClick}>{children}</Button>
  )
}

const Button = styled.div`
  border: transparent;
  padding: 8px;
  border-radius: 8px;
  background-color: rgb(237, 196, 239);
  width: fit-content;
  font-size: 0.75rem;

  &:active {
    background-color: rgb(223, 169, 226);
  }
`;


export default LanguageButton;