import styled from "styled-components";

export const StatusLogAdm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.6rem;

  div{
    display: flex;
    gap: 1rem;
  }

  button{
    padding: 5px;
    border: none;
    border-radius: 10px;
    background-color: var(--primary-color);
    color:#fff;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  @media (min-width: 1024px){
    width: 50%;
  }
`;

export const FormInput = styled.input`
  height: 3rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

export const LoginButton = styled.button`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  background-color: var(--secondary-color);
  &:hover {
    background-color: #000;
  }
`;
export const RegistroButton = styled.a`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
  text-align: center;
  &:hover{
    color: #000;
  }
`;

export const PopupStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;

  .popup-tela {
    background-color: gray;

    display: flex;
    flex-direction: column;

    padding: 40px;
    width: 55em;

    align-items: center;
    justify-content: center;

    border: 2px solid black;
    border-radius: 10px;
    
  }

  .popup-tela p {
    font-size: 1.5rem;
  }

  .popup-tela button {
    background-color: var(--primary-color);
    width: 15em;
    height: 3em;
    border-radius: 10px;
  }

  .popup-tela button:hover {
    background-color: var(--secondary-color);
  }
  
`;
