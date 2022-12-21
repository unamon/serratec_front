import styled from "styled-components";

export const Cards = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 28.6rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: #fff;
  transition: 0.5s;
  word-wrap: break-word;
  .link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: var(--primary-color);
    transform: scale(110%);
  }
`;

export const CardImagem = styled.img`
  width: 25rem;
  height: 35.4rem;
  border-radius: 0.5rem;
  border: 10px solid black;
  border: var(--primary-color);
  margin: 0.5rem;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    height: 26.8rem;
  }
`;

export const CardLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--background);
  font-size: 1.8rem;
  padding-top: 0.5rem;
`;
