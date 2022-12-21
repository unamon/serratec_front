import styled from "styled-components";

export const CarrinhoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`

export const ConfirmarPedido = styled.button`
    margin: 1rem;
    padding: 2rem;
    background-color: var(--primary-color);
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
`

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  font-size: 1.7rem;
  color: #000;
`;