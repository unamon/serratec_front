import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem;
  background-color: var(--secondary-color);
  border-radius: 1rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Imagem = styled.img`
  max-width: 25rem;
  max-height: 35rem;
  margin: 1rem;
  border-radius: 1rem;
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  font-size: 1.7rem;
`;

export const ButtonDiv = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
`;

export const DeletarButao = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
`;
