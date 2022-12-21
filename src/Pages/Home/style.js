import styled from "styled-components";

export const Geral = styled.div`
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: #111;
  height: 100vh;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:1.8rem;
  gap: 0.5rem;
  
  border-radius:15px;

  div{
    display: flex;
    justify-content: center;
  }
`

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const FormInput = styled.input`
  height: 4rem;
  width: 25rem;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius:0.5rem;
  border: none;
  margin-top: 0.5rem;

`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
`

export const LoginButton = styled.button`
  height: 3rem;
  width: 10rem;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  border-radius:0.3rem;
  background-color: #eee;
  border: none;
  &:hover {
    background-color: #444;
    transition-property: background-color;
    transition-duration: 0.5s;
    color: #eee
  }
`;

export const AdmButton = styled.button`
  padding: 10px;
  border: none;
  padding: 1rem;
  margin-left:0.5rem;
  color:#fff;
  border:2px solid;
  border-color:#fff;
  border-radius: 10px;
  margin-top:5px;
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
export const ImageDesktop = styled.img`
    margin-top: 2rem;
    display: none;
    max-width: 877px;

    @media (min-width: 1024px){
        display: block;
        padding-inline: 2%;    
    }
`;

export const ImageMobile = styled.img`
    display: block;
    margin-top: 2rem;
 @media (min-width: 1024px){
        display: none;    
    }
`;
export const ImageFooter = styled.img`
    display: block;
    width:10%;
    height:5%;

`;
export const RegistroButton = styled.p`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: #222 ;
  text-decoration: none;
  margin-top:0.8rem;
  text-align: center;
  &:hover{
    color: #777;
    transition-property: color;
    transition-duration:0.5s ;
  }
`;
