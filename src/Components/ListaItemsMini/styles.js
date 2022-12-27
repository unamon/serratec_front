import styled from "styled-components";


export const Item = styled.div`
height: 20%;
width: 100%;
background-color: #D9D9D9;
border-radius: 0.7rem;
margin-top: 2.5%;
display: flex;
justify-content: space-between;
align-items: center;

.MiniCaixa {
    height: 100%;
    width: 9em;
    display: flex;
    background-color: #222;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
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

div{
    font-size: 1rem;
    font-family: "Inter";
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.numSerie{
    font-size: .9rem;
}
`
export const ItemWrapper = styled.div`
padding: 5%;
height: 25rem; 
width : 45rem;  
background-color:#151718;
 border-radius: 0.8rem; 
overflow: hidden;
overflow-y: scroll;
scrollbar-width: none; 
`