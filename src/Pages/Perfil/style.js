import styled from "styled-components";

export const CardCliente = styled.div`
  width: 450px;
  font-size: 1.6rem;
  background-color: #456bf6;
  padding: 20px;
  border-radius: 10px; 
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EditCliente = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  &:hover{
    background-color: #fff2a6;
    color: black;
  }
`;

export const EditEndereco = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  &:hover{
    background-color: #fff2a6;
    color: black;
  }
`;

export const EditPassword = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: #eead2d;
  color: white;
  border: none;
  &:hover{
    background-color: #fff2a6;
    color: black;
  }
`;
