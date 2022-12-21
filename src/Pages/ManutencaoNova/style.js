import styled from "styled-components";

export const Titulo = styled.div`
    font-family: 'Inter';
    margin-top: 10%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-left: 25%;
    margin-right: 10%;
    align-items: center;
    width: 65%;
    img{
        
        padding: 0;
        height: 2rem;
    }
    @media (max-width:375px) {
        margin-top: 20%;
        display: flex;
        justify-content: space-between;
        width: 60%;
    }
`

export const Corpo = styled.div`
    font-family:'Inter' ;
    display: flex;
    padding: 0;
    margin-top: 1%;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
`
export const Caixa = styled.div`
    background-color: #000;
    padding: 1%;
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 45%;
    border-color: aliceblue;
    border-radius: 0.8rem;
    overflow: hidden;
    overflow-y: scroll;

    button{
        border-radius: 0.1rem;
        padding: 0.4rem;
        :hover{
            cursor: pointer;
        }
    }

    @media (max-width:375px) {
        width: 80%;
    }
`

// export const Button = styled.div`
    
//     display: flex;
//     justify-content: flex-end;
//     margin-top: 1rem;
//     height: 2rem;
    
// `

export const Item = styled.div`
    margin-top: 5%;
    width: 100%;
    height: 4rem;
    background-color: #D9D9D9;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.5rem;
`