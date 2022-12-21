import styled from "styled-components";

export const CarrosselStyle = styled.div`
  position: relative;
  width: 80%;

  .itemCarrosel {
    background-color: transparent;
    color: black;
    display: flex;
    flex-direction: column;
    align-self: auto;
    height: 55em;
    align-items: center;
    justify-content: flex-start;
    transition: opacity 1s ease-out;
    animation: 250ms ease-out 0s 1 slideInFromLeft;

    .descricaoCarrossel {
      padding-top: 5em;
    }

    .imagemCarrossel{
      display: flex;
      justify-content: center;
    }

    img{
      width: 15em;
      height: 15em;
      border: 7px solid var(--secondary-color);
    }

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-5%);
      }
      100% {
        transform: translateX(0);
      }
}
  }

  .navegacaoCarrosel {
    position: relative;
    display: flex;

    width: 100%;
    bottom: 0;
    left: 0;
    margin-bottom: 10em;

    text-align: center;
    justify-content: space-between;

    .left {
      transition: 500ms;
      img {
        width: 40px;
        height: 40px;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: contrast(1%);
      }
    }

    .right {
      transition: 500ms;
      img {
        width: 40px;
        height: 40px;
        filter: contrast(10%);
      }
    }

    .right:hover, .left:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    .right:active, .left:active {
      -webkit-transform: scaleX(0.3);
        transform: scaleX(0.3);
    }

    .middle {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .botaoCarrosel {
    background-color: rgba(255, 255, 255, 0.1);

    display: inline-block;

    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  .botaoCarroselAtivo {
    background-color: rgba(255, 255, 255, 0.7);

    display: inline-block;

    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
  }

  @media (min-width: 767px){
    .descricaoCarrossel {
      padding-top: 0;
    }

    .itemCarrosel{
      flex-direction: row;
      height: 23em;
    }
  }

  @media (min-width: 1407px) {
    .descricaoCarrossel {
      padding-top: 0;
    }

    .descricaoCarrossel {
      width: 100%;
    }
  }

`;
