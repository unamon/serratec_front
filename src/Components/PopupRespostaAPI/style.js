import styled from "styled-components";

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
    background-color: var(--fourth-color);

    display: flex;
    flex-direction: column;

    padding: 20px;
    width: 55em;
    height: 20em;

    align-items: center;
    justify-content: center;

    border: 2px solid black;

    z-index: 6;
    
}

.popup-tela p {
    font-size: 1.5em;
}


.botaoConfirmar {
    background-color: var(--secondary-color);

    font-size: 1.3em;
    width: 7em;

    padding: 3px;

    border-radius: 10px;

    transition: 250ms;
}
.botaoDeletar {
    background-color: var(--secondary-color);

    font-size: 1.3em;
    width: 7em;

    padding: 4px;
    margin-top: 10px;

    border-radius: 10px;

    transition: 250ms;
}

.boxBotoes {
    display: flex;
    gap: 10em;
}

.botaoConfirmar:hover {
    background-color: var(--primary-color);
}

.botaoDeletar:hover {
    background-color: var(--primary-color);
}

`;