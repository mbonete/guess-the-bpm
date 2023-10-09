import styled from 'styled-components';

const Primary = styled.button`
  display: flex;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  color: white;
  background-color: #FF7F50;
  border: transparent;
  border-radius: 100px;

  &:active {
    transform: scale(0.99);
    background-color: #ff8559;
  }
`;

const Secondary = styled.button`
  flex: 1;
  width: 100%;
  border: 4px solid;
  font-size: clamp(0.65rem, 3.5vw, 1rem);
  border: 3px solid #FF7F50;
  border-radius: 50px;
  background-color: white;
  padding: 4px;  

  &:active {
    background-color: rgb(212, 220, 237);
  }
`;

const types = {
  primary: Primary,
  secondary: Secondary,
}

export default function TouchableButton({ children, type, onActivate, disabled }) {
  const Button = types[type] || Primary;
  
  return <Button
    onClick={onActivate}
    disabled={disabled}
  >
    { children }
  </Button>
}

