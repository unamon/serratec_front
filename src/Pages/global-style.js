import styled from 'styled-components'

export const Container = styled.section`
    font-family: 'Inter';
    height: 100%;
    background-color: #eee;
    color: #eee;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-block: 15rem;
    align-items: center;
    width: 100vw;
    margin: 0;
`;

export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color:#eee;
    height: 100vh;
    margin-top:30px;
    font-family: 'Inter';
    
`;
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color:#ccc;
    margin-top:30px;
    
`;



export const Titulo = styled.h1`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    position: relative;
    display: inline;
    color: var(--secondary-color);
    text-transform: uppercase;
    text-align: center;
    font-size: 2.2rem;

    @media (min-width: 500px) {
        margin-top: 5rem;
    }
`;
export const Text = styled.h1`
    border-left: 2.5px solid gray ;
    display: flex;
    color:#222;
    width:20rem;
    text-align:left;
    font-size:30px;
    margin-top:15px;
  
    
`;

export const Subtitulo = styled.h3`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    color: var(--primary-color);
    text-transform: uppercase;
   
    text-transform: uppercase;
    text-align: center;
    font-size: 2.0rem;
    text-shadow: 3px 3px 10px black;
`;