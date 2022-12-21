import React, { useState, useEffect } from "react";
import { ProdutoCard } from "../ProdutoCard";
import { Cards, CardImagem, CardLink } from "./style";
import {api} from "../../Services/api"
import { Link } from "react-router-dom";

export const CategoriaCard = ( {categoria} ) => {

  return (
    <Cards>
      <Link style={{textDecoration: "none"}}className= "link" to={`/catalogo/${categoria.nomeCategoria}&${categoria.idCategoria}`}>
        <CardImagem src={`${categoria.imagemCategoria}`} width= '100%' />
      
      <CardLink>{categoria.nomeCategoria}</CardLink>
      </Link>
    </Cards>
  );
};
