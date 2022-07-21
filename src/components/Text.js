import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 0.85rem;
  padding: 8px;
  font-weight: 400;
  color: rgb(37, 37, 37);
`;

export default function Text({ children }) {
  return (
    <H2>{ children }</H2>
  );
}