import React from "react";
import styled from "styled-components";

export const Geral = styled.div`
    margin-top: 0.5rem;
    width: 100%;
    background-color: #D9D9D9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;

    border-radius: 0.5rem;

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
`
export const MiniItem = styled.div`
    height: 4rem;
    width: 25%;
    background-color: #C3C7CB;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
`