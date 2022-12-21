import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 5px;
    }  
`;


export const InfoCliente = styled.p`
  font-size: 1.6rem;
  margin: 0;    
`;

export const Perfil = styled.button`
  font-size: 1.6rem;
  width: 50px;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 10px;
`;

export const LogOff = styled.button`
  font-size: 1.6rem;
  width: 50px;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 10px;
`;