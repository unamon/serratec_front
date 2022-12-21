import styled from "styled-components";

export const ListaPedidos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (min-width: 1024px){
      flex-direction: row; 
      flex-wrap: wrap;
    }
`;

export const CardPedido = styled.div`
  width: 300px;
  font-size: 1.6rem;
  background-color: gray;
  padding: 20px;
  border-radius: 10px;  
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const EditPedido = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  &:hover{
    background-color: #fff2a6;
    color: black;
  }
`;

export const DeletePedido = styled.button`
  width: 40%;
  border-radius: 10px;
  background-color: #8e1600;
  color: white;
  border: none;
  &:hover{
    background-color: #ec7372;
    color: black;
  }
`;


export const BoxPedido = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BotaoVoltar = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;

  button {
    background-color: var(--secondary-color);
    width: 8em;
    height: 2.5em;
    font-size: 2em;
    border-radius: 10px;
    transition: 500ms;
  }

  button:hover {
    background-color: var(--primary-color);
  }
`;
