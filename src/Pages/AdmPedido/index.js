import React, { useState, useEffect } from "react";
import BadRequest from "../../Components/BadRequest";
import TabelaPedidos from "../../Components/TabelaPedidos/index";
import { Container, Titulo } from "../global-style.js"

import { api } from "../../Services/api";

function AdmPedido(props) {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [statusAPI, setStatusAPI] = useState(0)

  useEffect(() => {
    carregarAPI();
  }, []);

  function carregarAPI() {
    const getPedidoAPI = async () => {
      try {
        const res = await api.get("pedido");
        console.log(res)
        setStatusAPI(res.status)
        setListaPedidos(res.data);
      } catch (error) {
        console.log(error)
        if(error.code === 'ERR_NETWORK') {
          setStatusAPI(e => 502)
        }
      }
    };
    getPedidoAPI();
  }

  const verificarResponse = () => {
    if (statusAPI === 0) {
      return <></>
    } if (statusAPI === 200) {
      return <><TabelaPedidos lista={listaPedidos}/></>
    } if(statusAPI === 502) {
      return <><BadRequest/></>
    } else {
      return <><BadRequest/></>
    }
  }

  return (
    <>
    <Container>
    <Titulo>Status dos Equipamentos</Titulo>
    {verificarResponse()}
    </Container>
    </>
  );
}

export default AdmPedido;
