import React, {useEffect, useState} from 'react';
import { api } from "../../Services/api"; 

export const ListaItemsMini = (items) => {

    return (
        <>
        {items?.map(item =>{
            <ItemWrapper>
                <div className='MiniCaixa'>
                    <span>{item?.status}</span>
                </div>
                <div>
                    <span>{item?.dono}</span>
                </div>
                <div>
                    <span>{item?.descricao}</span>
                </div>
            </ItemWrapper>
        })}
        </>
    )
}
