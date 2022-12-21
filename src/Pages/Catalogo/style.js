import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  flex-wrap: wrap;
  margin-top: 6.4rem;
  margin-bottom: 6.4rem;
`;

export const CatalogoContainer = styled.section`
.titulo {
  margin-top: 0;
}

.container{
  margin-top: 8rem;
}
`
export const BotaoContainer = styled.div`
display: flex;
width: 100%;
margin-left: 10%;
margin-bottom: 2rem;

`

export const ReturnButton = styled.button`
 text-transform: uppercase;
 border-radius: 1rem;
 background-color: var(--primary-color);
 padding: 1rem;
 &:hover{
  background-color: var(--secondary-color);
 }

`
