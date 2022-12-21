import React from "react";
import { Container, Titulo } from "../global-style";
import { Input, Form, ButtonContainer, RegistroButton, PopupStyle } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import TabelaProdutos from "../../Components/TabelaProdutos";
import BadRequest from "../../Components/BadRequest";
import { Popup } from "../../Components/Popup";
import { Loader } from "../../Components/Loader";

export const AdmProduto = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [qtdEstoque, setQtdEstoque] = useState(0)
  const [valorUnitario, setValorUnitario] = useState(0.0)
  const [nomeImagem, setNomeImagem] = useState('')
  const [idCategoria, setIdCategoria] = useState(0)
  const [statusAPI, setStatusAPI] = useState(0);
  const [statusAPIPost, setStatusAPIPost] = useState(0);
  const [isConfirmado, setConfirmado] = useState(false);
  const [requisitarGet, setRequisitarGet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    carregarAPI();
  }, [requisitarGet]);

  function carregarAPI() {
    const getProdutoAPI = async () => {
      try {
        const res = await api.get("produto");
        setStatusAPI(res.status);
        setListaProdutos(res.data);
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          setStatusAPI((e) => 502);
        }
      }
    };
    getProdutoAPI();
  }

  function postarProduto() {
    const postProdutoAPI = async () => {
      try {
        const res = await api.post("produto", {
          nomeProduto: nome,
          descricaoProduto: descricao,
          qtdEstoqueProduto: parseInt(qtdEstoque),
          nomeImagemProduto: nomeImagem,
          idCategoria: parseInt(idCategoria)
        });
        setStatusAPIPost(res.status)
      } catch (error) {
        console.log(error)
        setStatusAPIPost(e => error.response.data.status)
        setErrorMessageHead(e => error.response.data.message)
        setErrorMessage(e => error.response.data.details[0])
      }
    };
    postProdutoAPI();
  }

  const handleConfirmar = (event) => {
    setRequisitarGet(!requisitarGet)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  function load() {
    setLoading(true)
    setConfirmado(!isConfirmado)
    postarProduto()
    setTimeout(function() {
      setLoading(false)
      handleConfirmar()
    }, 800)
  }

  const verificarResponse =() => {
    if(statusAPI === 0) {
      return <></>
    } if(statusAPI === 200) {
      return <><TabelaProdutos lista={listaProdutos} /></>
    } if(statusAPI === 502) {
      return <><BadRequest /></>
    } else {
      return <><BadRequest /></>
    }
  }

  return (
    <Container>
      <Titulo>Cadastro Produto</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome do Produto" onChange={(event) => setNome(event.target.value)}/>
        <Input type="text" placeholder="Descrição do Produto" onChange={(event) => setDescricao(event.target.value)}/>
        <Input type="number" placeholder="Quantidade" onChange={(event) => setQtdEstoque(event.target.value)}/>
        <Input type="number" placeholder="Id da Categoria" onChange={(event) => setIdCategoria(event.target.value)}/>
        <Input type="text" placeholder="Link imagem produto" onChange={(event) => setNomeImagem(event.target.value)}/>
        <ButtonContainer>
          <RegistroButton type="submit" value="Cadastrar" onClick={() => setConfirmado(!isConfirmado)}/>
        </ButtonContainer>
      </Form>
      {isConfirmado ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <p>Tem certeza que deseja criar um novo produto? </p>
            <div className="botoes">
              <button onClick={() => setConfirmado(false)}>Cancelar</button>
              <button onClick={() => load()}>Confirmar</button>
            </div>
            
          </div>
        </PopupStyle>
        </> : "" }
      <Titulo>Listar Produtos</Titulo>
      {verificarResponse()}
      {loading === true ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <p>Carregando...</p>
            <Loader/>
          </div>
        </PopupStyle>
      </> : ''}
      {statusAPIPost === 201 && loading === false ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <p>Produto cadastrado com sucesso!</p>
            <div className="botoes">
              <button onClick={() => setStatusAPIPost(e => 0)}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}
      {(statusAPIPost === 404 || statusAPIPost === 400)  && loading === false ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <p>{errorMessageHead}</p>
            <p>{errorMessage}</p>
            <div className="botoes">
              <button onClick={() => setStatusAPIPost(e => 0)}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}
    </Container>
  );
};
