import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const Form = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  width: 100%;
  max-width: 500px;
  padding-inline: 20px;

  .senhas {
    display: flex;
    justify-content: space-between;
    
  }
  @media (min-width: 1024px){
    padding-inline: 50px;    
  }

  @media (max-width: 500px) {
    padding-inline: 50px;
  }
`;

export const Input = styled.input`
  background: #ccc;
  height: 4rem;
  width: 100%;
  font-size: 1.2rem;
  /* background-color: #dee4f7; */
  border-radius: 0.3rem;
  padding: 1rem;
  border: none;

  ::placeholder{
    font-size: 1rem;
    font-style: italic;
  }
`;

export const Label = styled.label`
  padding: 2rem 2rem;
  width: 15rem;
  background-color: #eee;
  color:#222;
  display: block;
  text-align: center;
  cursor: pointer;
`

export const PerfilFoto = styled.input`
  font-size: 14px;
  color:#222;

`

export const ButtonContainer = styled.div`
    display: flex;
    align-self:center;
    justify-content: center;
`
export const RegistroButton = styled.button`
  height: 3.5rem;
  width: 50rem;
  border-radius:0.3rem;
  border: none;
  font-size: 1.5rem;
  background-color: var(--third-color);
  &:hover {
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.5s;
    background-color: #222;
    color: #eee;
  }
`
export const ContainerLogin= styled.form`
background-color:#ccc;
`


