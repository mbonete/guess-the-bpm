import styled from 'styled-components';

const Primary = styled.button`
  height: 100%;
  width: 70%;
  color: white;
  font-size: 4rem;
  letter-spacing: 2px;
  background: rgb(255,132,30);
  background: linear-gradient(90deg, rgba(255,75,30,1) 0%, rgba(170,28,171,1) 49%, rgba(68,131,255,1) 100%);
  border: transparent;
  border-radius: 15px 0  0 15px;
`;

const Secondary = styled.button`
  width: 100%;
  height: 48%;
  border: 4px solid;
  border-image: linear-gradient(90deg, rgba(68,131,255,1), rgba(170,28,171,1), rgba(255,75,30,1)) 1;
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

