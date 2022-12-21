import React, { useState } from "react";
import { api } from "../../Services/api";
import { Loader } from "../Loader";
import { CancelarButton, PopupStyle } from "./style";
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarProduto = (props) => {
  const [nomeProduto, setNomeProduto] = useState(props.produto.nomeProduto);
  const [descricaoProduto, setDescricaoProduto] = useState(
props.produto.descricaoProduto
  );
  const [qtdEstoqueProduto, setQtdEstoqueProduto] = useState(
    props.produto.qtdEstoqueProduto
  );
  const [nomeImagemProduto, setNomeImagemProduto] = useState(
    props.produto.nomeImagemProduto
  );
  const [idCategoria, setIdCategoria] = useState(props.produto.idCategoria);
  const [statusAPI, setStatusAPI] = useState(0)
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function handleNomeChange(e) {
    setNomeProduto(e.target.value);
  }

  function handleDescricaoChange(e) {
    setDescricaoProduto(e.target.value);
  }

  function handleQtdEstoqueChange(e) {
    setQtdEstoqueProduto(e.target.value);
  }

  function handleNomeImagemChange(e) {
    setNomeImagemProduto(e.target.value);
  }

  function handleCategoriaChange(e) {
    setIdCategoria(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
}

  function reloadPage() {
    window.location.reload(true)
  }

  function load() {
      setLoading(true)
      setTimeout(function() {
          setLoading(false)
          editarProduto()
      }, 800)
  }

  async function editarProduto() {
    try {
      const res = await api.put(`produto?idProduto=${props.id}`, {
        nomeProduto: nomeProduto,
        descricaoProduto: descricaoProduto,
        qtdEstoqueProduto: qtdEstoqueProduto,
        nomeImagemProduto: nomeImagemProduto,
        idCategoria: idCategoria,
      });
      setStatusAPI(e => res.status)
    } catch (error) {
      setStatusAPI(e => error.response.data.status)
      setErrorMessageHead(e => error.response.data.message)
      setErrorMessage(e => error.response.data.details[0])
    }
  }

  return (
    <>
      {loading === false && statusAPI === 0 ? <>
      <PopupStyle>
        <div className="popup-tela">
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={nomeProduto}
              onChange={(e) => handleNomeChange(e)}
            />
            <Input
              type="text"
              value={descricaoProduto}
              onChange={(e) => handleDescricaoChange(e)}
            />
            <Input
              type="number"
              value={qtdEstoqueProduto}
              onChange={(e) => handleQtdEstoqueChange(e)}
            />
            <Input
              type="text"
              value={nomeImagemProduto}
              onChange={(e) => handleNomeImagemChange(e)}
            />
            <Input
              type="text"
              value={idCategoria}
              onChange={(e) => handleCategoriaChange(e)}
            />
            <ButtonContainer>
              <CancelarButton onClick={props.click}>Cancelar</CancelarButton>
              <RegistroButton onClick={load}>Alterar</RegistroButton>
            </ButtonContainer>
          </Form>
        </div>
      </PopupStyle>
      </>: ''}
      {loading === true ? <>
        <PopupStyle>
                <div className='popup-tela'>
                    <p>Carregando...</p>
                    <Loader/>
                </div>
        </PopupStyle></> : ''}
        {statusAPI === 200 ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Alterações feitas com sucesso!</p>
                    <div className="botoes">
                    <button onClick={reloadPage}>OK</button>
                    </div>
                </div>
            </PopupStyle> 
            </> : ''}
            {statusAPI === 400 ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <h1>{errorMessageHead}</h1>
                    <p>{errorMessage}</p>
                    <div className="botoes">
                    <button onClick={() => {setStatusAPI(e => 0); props.click()}}>OK!</button>
                    </div>
                </div>
            </PopupStyle> 
            </> : ''}
    </>
  );
};
