import styled from "styled-components";

export const Cards = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 45rem;
  border-radius: 0.5rem;
  background-color: black;
  transition: 0.5s;
  word-wrap: break-word;
  padding: 1rem;

  .link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: var(--third-color);
    transform: scale(105%);
    color: var(--background);
  }

  @media (min-width: 1024px) {
    height: 34.4rem;
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 35.4rem;
  border: var(--primary-color);
  border-radius: 1rem;

  @media (min-width: 1024px) {
    height: 25rem;
  }
`;

export const CardLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.8rem;
  padding-top: 0.5rem;
  color: var(--primary-color);
`;
