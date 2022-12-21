import React, { useContext, useEffect, useState } from "react";
import { Container, Titulo } from "../global-style";
import { api } from "../../Services/api";
import { ItemCarrinho } from "../../Components/ItemCarrinho";
import NotLoggado from "../../Components/NotLoggado"
import EmptyCarrinho from "../../Components/EmptyCarrinho"
import { CarrinhoContainer, ConfirmarPedido, Descricao } from "./style";


export const Carrinho = () => {
  const [pedidos, setPedidos] = useState([]);
  const [itemPedido, setItemPedido] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [display, setDisplay] = useState(null);
  const [descricao, setDescricao] = useState(null);

  async function getDados() {
    if (localStorage.getItem("idCliente") === null) {
      setDisplay(
        <NotLoggado/>
      );
    } else {
      const responsePedidos = await api.get(
        `pedido/cliente/${localStorage.getItem("idCliente")}`
      );
      await setPedidos(responsePedidos.data[responsePedidos.data.length - 1]);

      if (
        responsePedidos.data.length === 0 ||
        responsePedidos.data[responsePedidos.data.length - 1].status === true
      ) {
        setDisplay(<EmptyCarrinho/>);
      } else {
        const responseItemPedido = await api.get(
          `itemPedido/pedido/${
            responsePedidos.data[responsePedidos.data.length - 1].idPedido
          }`
        );
        await setItemPedido(responseItemPedido.data);
        if (responseItemPedido.data.length === 0) {
          setDisplay(<EmptyCarrinho/>);
        } else {
          let newProduto = [];
          await Promise.all(
            responseItemPedido.data.map(async (item) => {
              const itemResponse = await api.get(`produto/${item.idProduto}`);
              newProduto.push(itemResponse.data);
            })
          );
          await setProdutos(newProduto);
        }
      }
    }
  }

  useEffect(() => {
    getDados();
  }, []);

  useEffect(() => {
    if (produtos.length !== 0 && pedidos != null && itemPedido.length !== 0) {
      handleDisplay();
    }
  }, [produtos]);

  function handleDisplay() {
    setDisplay(
      produtos.map((res, index) => {
        const itemPedidoFiltrado = itemPedido.filter(
          (response) => response.idProduto == res.idProduto
        );
        return (
          <ItemCarrinho
            produto={res}
            itemPedido={itemPedidoFiltrado}
            key={index}
          />
        );
      })
    );

    setDescricao(
      <Descricao>
        <ConfirmarPedido onClick={finalizar}>Finalizar pedido</ConfirmarPedido>
      </Descricao>
    );
  }

  function finalizar() {
    api.put(
      `pedido/processar?idPedido=${pedidos.idPedido}`
    );
    alert("Pedido finalizado");
    window.location.reload(false);
  }

  return (
    <Container>
      <Titulo>Carrinho</Titulo>
      <CarrinhoContainer>{display}</CarrinhoContainer>
      {descricao}
    </Container>
  );
};
