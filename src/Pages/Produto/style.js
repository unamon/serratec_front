import styled from "styled-components";

export const ProdutoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin: 2rem;
  background-color: #fff;
  transition: 0.5s;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ProdutoImg = styled.img`
  height: 24.6rem;
  border-radius: 1rem;
  @media(min-width: 1024px){
    height: 36rem;
  }
`;

export const ProdutoDescricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content:center;
  color:#fff;
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
  background-color: var(--secondary-color);
  
`;

export const ProdutoInput = styled.input`
  text-align: center;
  margin-bottom: 2rem;
`

export const ProdutoButton = styled.button`
 margin: 2rem;
 text-transform: uppercase;
 color:#fff;
 background-color: var(--primary-color);
 border-radius: 1rem;
 padding: 0.5rem;
 &:hover{ 
  background-color: #008000;
 }
`;
