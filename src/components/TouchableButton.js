import styled from 'styled-components';

const Primary = styled.button`
  height: 100%;
  width: 70%;
  color: white;
  font-size: clamp(3rem, 15vw, 4rem);
  letter-spacing: 2px;
  background: linear-gradient(90deg, rgba(255,75,30,1) 0%, rgba(170,28,171,1) 49%, rgba(68,131,255,1) 100%);
  border: transparent;
  border-radius: 40px 0 0 40px ;
  font-family: 'Gluten', cursive;    
  `;

const Secondary = styled.button`
  width: 100%;
  height: 30%;
  border: 4px solid;
  font-size: clamp(0.4rem, 4vw, 1rem);
  border-image: linear-gradient(90deg, rgba(68,131,255,1), rgba(170,28,171,1), rgba(255,75,30,1)) 1;
  background-color: white;
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

