import styled from "styled-components"

export const Styles = { 
    boxStyle: {
        fontFamily: 'Inter',
        fontSize: 12,
        position: 'absolute',
        top: '15vh',
        left: '50vw',
        borderRadius: 2,
        padding: 0,
        transform: 'translate(-50%, -20%)',
        width: '70%',
        backgroundColor: '#222',
        border: 'none',
        boxShadow: 24,
        p: 4,
    },
    nomeStyle: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: '1em',
    },
    historicoTitleStyle: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: '1em',
    },
    labelStyle: {
        fontWeight: 500,
        fontSize: 14,
    },
    textStyle: {
        fontSize: 14
    },
    editButton: {
        position: 'absolute',
        zIndex: 2,
        cursor: 'pointer',
    }
}

export const Info = styled.span`
    color: #eee;
    text-align: center;
`


export const Geral = styled.div`
    font-family: 'Inter';
    margin-top: 0.5%;
    width: 100%;
    height: 4rem;
    padding-right: 1rem;
    background-color: #D9D9D9;
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
        font-weight: 500;
        margin-left: clamp(4em, 3%, 7%);

        span {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .obs {
        width: 32%
    }
    .nome {
        align-text: center;
        font-weight: 700;
        font-size: 3em;
    }
       
    .description {
        justify-content: left;
    }

    :hover {
        cursor: pointer;
    }

     .MiniCaixa {
     height: 100%;
     width: 9em;
     display: flex;
     background-color: #222;
     justify-content: center;
     align-items: center;
     border-radius: .8rem;
       span {
             font-weight: 600
         }
    }
    .MiniCaixa.Hist {
        background-color:#c3c7cb;
    }
    .MiniCaixa.orange {
         color:#ff911e;
     }
   .MiniCaixa.green {
         color: #5cfd0f;
     }
   .MiniCaixa.yellow {
         color: yellow;
     }
   .MiniCaixa.gray {
         color: lightgray;
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
