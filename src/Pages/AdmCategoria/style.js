import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  width: 100%;
  max-width: 800px;
  padding-inline: 20px;
  @media (min-width: 1024px){
    padding-inline: 50px;    
    }

`;

export const Input = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
`
export const RegistroButton = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  &:hover {
    background-color: #008000;
  }
`;


