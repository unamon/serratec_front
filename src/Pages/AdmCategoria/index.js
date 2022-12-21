import React, { useState, useEffect } from "react";
import { Container, Titulo } from "../global-style";
import { Popup } from "../../Components/Popup/index";
import { Input, Form, ButtonContainer, RegistroButton } from "./style";
import { api } from "../../Services/api";
import { TabelaCategorias } from "../../Components/TabelaCategorias";
import BadRequest from "../../Components/BadRequest";

export const AdmCategoria = () => {
  const [listaCategorias, setListaCategorias] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkImagem, setLinkImagem] = useState("");
  const [statusAPI, setStatusAPI] = useState(0)
  const [isConfirmado, setConfirmado] = useState(false);
  const [requisitarGet, setRequisitarGet] = useState(false);

  useEffect(() => {
    carregarAPI();
  }, [requisitarGet]);

  function carregarAPI() {
    const getCategoriaAPI = async () => {
      try {
        const res = await api.get("categoria");
        setStatusAPI(res.status);
        setListaCategorias(res.data);
      } catch (error) {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          setStatusAPI((e) => 502);
        }
      }
    };
    getCategoriaAPI();
  }

  const handleFechar = () => {
    setConfirmado(!isConfirmado);
  };

  const handleConfirmar = () => {
    setConfirmado(!isConfirmado)
    setRequisitarGet(!requisitarGet)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setNome("");
    setDescricao("");
    setLinkImagem("");
  };

  const verificarResponse = () => {
    if(statusAPI === 0) {
      return <></>
    }
    if(statusAPI === 200) {
      return <><TabelaCategorias lista={listaCategorias}/></>
    } if(statusAPI === 502) {
      return <><BadRequest/></>
    } else {
      return <><BadRequest/></>
    }
  }

  return (
    <Container>
      <Titulo>Cadastro Categoria</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome da Categoria" onChange={(event) => setNome(event.target.value)} value={nome}/>
        <Input type="text" placeholder="Descrição da Categoria" onChange={(event) => setDescricao(event.target.value)} value={descricao}/>
        <Input type="text" placeholder="Link imagem Categoria" onChange={(event) => setLinkImagem(event.target.value)} value={linkImagem}/>
        <ButtonContainer>
          <RegistroButton type="submit" value="Cadastrar"onClick={() => setConfirmado(!isConfirmado)} />
        </ButtonContainer>
      </Form>
        {isConfirmado ? <Popup titulo={"categoria"} informacoes={{
          Nome: nome,
          Descricao: descricao,
          Imagem: linkImagem,}} clickFechar={handleFechar} clickConfirmar={handleConfirmar}/> : ""}
      <Titulo>Listar Categorias</Titulo>
          {verificarResponse()}
    </Container>
  );
};
