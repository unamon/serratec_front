import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProdutoCard } from "../../Components/ProdutoCard";
import { api } from "../../Services/api";
import { CatalogoContainer, CardContainer} from "./style";
import { Container, Titulo } from "../global-style";

export const Categorias = (props) => {
  let { categoria, id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const getProduto = async () => {
      await api.get("produto").then((response) => setProdutos(response.data));
    };
    getProduto();
  }, [categoria]);

  function displayProdutos() {
    setDisplay(() =>
      produtos
        .filter((produto) => produto.idCategoria == id)
        .map((res, index) => (
          <>
            <ProdutoCard produto={res} categoria={categoria} id={id} key={index}></ProdutoCard>
          </>
        ))
    );
  }

  if (display == null && produtos.length !== 0) {
    displayProdutos();
  }

  return (
    <CatalogoContainer>
      <Container className="container">
        <Titulo className="titulo">{categoria}</Titulo>
        <CardContainer>{display}</CardContainer>
      </Container>
    </CatalogoContainer>
  );
};
