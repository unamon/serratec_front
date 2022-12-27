import React, { useEffect, useState } from 'react';
import { api } from "../../Services/api";
import { ItemWrapper, Item } from "./styles";

export const ListaItemsMini = ({ items }) => {

    return (
        <ItemWrapper>
            {items?.map(item => (
                <Item key={item?.id}>
                    <div className={"MiniCaixa " + decideColor(item?.status)}>
                        <span>{item?.status}</span>
                    </div>
                    <div>
                        <span>{item?.dono}</span>
                    </div>
                    <div>
                        <span>{item?.descricao}</span>
                    </div>
                    <div>
                        <span>{convertDate(item?.ultimaAlteracao)}</span>
                    </div>
                </Item>
            ))}
        </ItemWrapper>
    )
}

const convertDate = (date) => {
    let newDate = new Date(date);
    let returnString;
    returnString = newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear()
    return returnString;
}

const decideColor = (status) => {
    let color;
    switch (status) {
        case "Manutenção":
            color = "orange"
            break
        case "Empréstimo":
            color = "yellow"
            break
        case "Disponível":
            color = "green"
            break
        case "Indisponível":
        default:
            color = "gray"
            break
    }
    return color;
}