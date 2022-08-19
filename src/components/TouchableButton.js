import styled from 'styled-components';

const Primary = styled.button`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  color: white;
  background: linear-gradient(90deg, rgba(255,75,30,1) 0%, rgba(170,28,171,1) 49%, rgba(68,131,255,1) 100%);
  border: transparent;
  border-radius: 40px 0 0 40px ;
  padding: 8px;   
`;

const Secondary = styled.button`
  flex: 1;
  width: 100%;
  border: 4px solid;
  font-size: clamp(0.65rem, 3.5vw, 1rem);
  border-image: linear-gradient(90deg, rgba(68,131,255,1), rgba(170,28,171,1), rgba(255,75,30,1)) 1;
  background-color: white;
  padding: 4px;  
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

