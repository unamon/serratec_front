import React, { useEffect, useState } from "react";
import { SobreDescricao } from "../../Pages/Sobre/style";
import { CarrosselStyle } from "./style";
import ImagemPaulo from "../../Sources/img/paulo.jpg";
import ImagemMateus from "../../Sources/img/mateus.png"
import Seta1 from "../../Sources/icons/icons8-arrow-50.png";
import Seta2 from "../../Sources/icons/icons8-arrow-50.png";

function Carrossel(props) {
  const [itemAtivo, setItemAtivo] = useState(0);
  const [contador, setContador] = useState(4);
  const timer = () => setContador(contador - 1);

  useEffect(() => {
    if (contador <= 0) {
      setContador((e) => 4);
      setItemAtivo((e) => e + 1);
      if (itemAtivo >= 5) {
        setItemAtivo((e) => 0);
        return;
      }
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [contador]);

  function alterarImagem(id) {
    setItemAtivo((e) => id);
    setContador((e) => 4);
  }

  function voltarImagem() {
    if (itemAtivo === 0) {
      setItemAtivo((e) => 5);
      setContador((e) => 4);
    } else {
      setItemAtivo((e) => e - 1);
      setContador((e) => 4);
    }
  }

  function avancarImagem() {
    if (itemAtivo === 5) {
      setItemAtivo((e) => 0);
      setContador((e) => 4);
    } else {
      setItemAtivo((e) => e + 1);
      setContador((e) => 4);
    }
  }

  return (
    <>
      <CarrosselStyle>
        {itemAtivo === 0 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemPaulo} alt="Paulo" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
               Paulo Henrique Mayworm
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 1 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={ImagemMateus} alt="Mateus" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
              Mateus Tavares
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {/* {itemAtivo === 2 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={} alt="" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 3 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={} alt="" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
               
              </SobreDescricao>
            </div>
          </div>
        ) : null}
        {itemAtivo === 4 ? (
          <div className="itemCarrosel">
            <div className="imagemCarrossel">
              <img src={} alt="" />
            </div>
            <div className="descricaoCarrossel">
              <SobreDescricao className="descCard">
                
              </SobreDescricao>
            </div>
          </div>
        ) : null} */}
        
        <div className="navegacaoCarrosel">
          <div className="left" onClick={voltarImagem}>
            <img src={Seta2} alt="seta" />
          </div>
          <div className="middle">
            <span
              className={
                itemAtivo === 0 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(0)}
            ></span>
            <span
              className={
                itemAtivo === 1 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(1)}
            ></span>
            <span
              className={
                itemAtivo === 2 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(2)}
            ></span>
            <span
              className={
                itemAtivo === 3 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(3)}
            ></span>
            <span
              className={
                itemAtivo === 4 ? "botaoCarroselAtivo" : "botaoCarrosel"
              }
              onClick={() => alterarImagem(4)}
            ></span>
          </div>
          <div className="right" onClick={avancarImagem}>
            <img src={Seta1} alt="right" />
          </div>
        </div>
      </CarrosselStyle>
    </>
  );
}

export default Carrossel;
