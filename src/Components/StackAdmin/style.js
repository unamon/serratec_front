import styled from "styled-components";



export const Geral = styled.div`
    margin-left: 5%;
    font-family: 'Inter';

    .box-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        height:100px;
        text-align: center;
        
    }
    .box-item > img{
        margin-bottom: 10px;
    }
`
export const Img = styled.img`
    width: 2.5em;
    height: 2.5rem;
    :hover{
        cursor: pointer;
    }
` 
export const Perfil = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 5rem;
    :hover{
        cursor: pointer;
    }
`