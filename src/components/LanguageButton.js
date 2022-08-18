import { useTranslation } from '../hooks/useTranslation';
import styled from 'styled-components'

const LanguageButton = function({children}) {
  const { changeLanguage } = useTranslation();

  return (
    <Button onClick={changeLanguage}>{children}</Button>
  )
}

const Button = styled.div`
  border: transparent;
  padding: 8px;
  border-radius: 8px;
  background-color: #edc4ef;
  width: fit-content;
  font-size: 0.85rem;
  font-family: 'Gluten', sans-serif;
`;


export default LanguageButton;