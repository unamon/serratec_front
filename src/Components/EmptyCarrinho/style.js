import styled from "styled-components";

export const BoxBadStyle = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    img {
        width: 30em;
        height: 30em;
    }

    .mensagemErro {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        gap: 3em;
        p{
            color: blue;
            font-size: 2em;
            text-align: center;
        }
        h1{
            color: blue;
            font-size: 3.5em;
            text-align: center;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 731px) {
        .mensagemErro {

        p{
            font-size: 1.9em;
        }
        h1{
            font-size: 3em;
        }
    }
    }
`
