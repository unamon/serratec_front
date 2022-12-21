import styled from "styled-components";

export const Form = styled.div`
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
  border: none;
  &:hover {
    background-color: var(--third-color);
  }
`;
export const RegistroButton = styled.p`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
  text-align: center;
  &:hover{
    color: var(--third-color);
  }
`;

export const AdmButton = styled.button`
  padding: 10px;
  border: none;
  color:#fff;
  border-radius: 10px;
  background-color: var(--primary-color);
  &:hover{
    background-color: var(--secondary-color);
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

z-index: 5;

.popup-tela {
    background-color: #000;
    color:#fff;
    display: flex;
    flex-direction: column;

    padding: 40px;
    width: 55em;

    align-items: center;
    justify-content: center;

    text-align: center;

    border: 2px solid black;
    border-radius: 10px;

    z-index: 6;
    
}

.popup-tela p {
    font-size: 1.7em;
}

.popup-tela .botoes {
    display: flex;
    gap: 20%;
}

.popup-tela .botoes button {
    background-color: var(--third-color);

    font-size: 1.3em;

    width: 7em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}

.popup-tela .botoes button:hover {
    background-color: var(--third-color);
}

`;
