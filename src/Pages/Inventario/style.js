import styled from "styled-components";



export const Geral = styled.div`
    font-family: 'Inter';
    margin-top: 0.5%;
    width: 100%;
    height: 4rem;
    padding-right: 1rem;
    
    display: flex;
    align-items: center;
    border-radius: 1rem;
    background: ${(props) => props.theme.color.background};
    
    
    .text{  
        height: 100%;
        width: 16%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        font-weight: 800;
        margin-left: clamp(4em, 1%, 7%);
    }

    .text-status{
        margin-left: 10px;
        font-weight: 800;
    }

    .text-status:hover {
        cursor: pointer;
    }

    .text:hover {
        cursor: pointer;
    }

     .MiniCaixa {
     height: 100%;
     width: 9em;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: .8rem;
        
    }
 

    @media (max-width:500px) {
        font-family: 'Inter';
        margin-top: 2%;
        margin-left: 1%;
        font-size: 0.7rem;
        width: 30rem;
        /* padding-right: 1%; */
        
        div{
            width: 7%;
            padding: 1.2rem;
        }
    }

    @media (max-width: 600px) {
        font-family: 'Inter';
        margin-top: 2%;
        margin-left: 1%;
        font-size: 0.8rem;
        width: 26rem;
        height: 4rem;

        div{
            width: 3.6rem;
            font-size: 0.6rem;
        }
    }
`

export const Barra = styled.div`
    font-family: 'Inter';
    width: 100%;
    height: 2rem;
    padding-right: 1rem;
    
    display: flex;
    align-items: center;
    border-radius: 1rem;
    

    .text{  
        height: 100%;
        width: 16%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        font-weight: 800;
        margin-left: clamp(4em, 1%, 7%);
    }

    .text-status{
        margin-left: 10px;
        font-weight: 800;
    }

    .text-status:hover {
        cursor: pointer;
    }

    .text:hover {
        cursor: pointer;
    }

     .MiniCaixa {
     height: 100%;
     width: 9em;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: .8rem;
        
    }
 

    @media (max-width:500px) {
        font-family: 'Inter';
        margin-top: 2%;
        margin-left: 1%;
        font-size: 0.7rem;
        width: 30rem;
        /* padding-right: 1%; */
        
        div{
            width: 7%;
            padding: 1.2rem;
        }
    }

    @media (max-width: 600px) {
        font-family: 'Inter';
        margin-top: 2%;
        margin-left: 1%;
        font-size: 0.8rem;
        width: 26rem;
        height: 4rem;

        div{
            width: 3.6rem;
            font-size: 0.6rem;
        }
    }
`

export const Wrapper = styled.div`
    font-family: 'Inter';
    margin-top: 7rem;
    margin-left:5rem;
    margin-right: 5rem;

    .box-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        height:50px;
        text-align: center;
        
    }
    .box-item > img{
        margin-bottom: 10px;
    }

    h5{
        color: #675F5F;
    }

    img{
        height: 2rem;
        width: 2rem;
        :hover{
            cursor: pointer;
        }
    }

    input{
        border-radius: 0.6rem;
        height: 3rem;
        width: 20rem;
    }
    
    @media (max-width: 600px) {
        margin-left: 0;
        
        h1{
            font-size: 0.8rem;
            margin-left: 1rem;
        }

        h5{
            display: none;
        }

        input{
            width: 11.5rem;
            font-size: 0.7rem;
        }
    }
`
export const Pesquisa = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;

    input{
        padding: 0.3rem;
    }

    @media (max-width: 500px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: sticky;
    }

    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: sticky;
    }

`

export const Input = styled.input`
    width:12rem;
    height: 2.4rem;
    border-radius:0.4rem;
    padding: 0.2rem;
    background-color: #ccc;
    ::placeholder{
        text-decoration-color: #323232;
        font-size: 0.7rem;
    }
    :hover{
        background-color: #fff;
    }
    :focus{
        background-color: #fff;
    }
`
export const Submit = styled.input`
    width: 200px;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    drop-shadow: 1px;
    color: #222;
    background-color: #ccc;
    font-weight: 600;
    font-size: 16;
    :hover{
        background-color:#fff;
        cursor: pointer;
    }
    
`
export const Textarea = styled.textarea`
    resize: none;
    width:100%; 
    height:5rem; 
    padding:0.3rem;
    background-color:#ccc;
    border-radius: 0.4rem;
    :hover{
        background-color:#fff;
        
    }

    :focus{
        background-color:#fff;

    }
`