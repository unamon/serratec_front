import React from "react";
import { Link } from "react-router-dom";
import { Cards, CardImagem, CardLink } from "./style";

export const ProdutoCard = ({ produto, categoria, id }) => {

  return (
    <Cards>
      <Link style={{textDecoration: "none"}} className="link" to ={`/catalogo/${categoria}&${id}/${produto.idProduto}`}>
        <CardImagem src={`${produto.nomeImagemProduto}`} />
      
      <CardLink>
        <strong>{produto.nomeProduto}</strong>
      </CardLink>
      </Link>
    </Cards>
  );
};
