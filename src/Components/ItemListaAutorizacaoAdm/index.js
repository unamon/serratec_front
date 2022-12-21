import React, { useEffect, useState } from "react";
import { Caixa, Item, Seta, Status, Text } from "./style";
import  seta from "../../Images/iconeExpandir.png"
import TextField from '@mui/material/TextField';

//import Axios 
import {api} from '../../Services/api'


export const ItemListaAutorizacaoAdm = () =>{

    const [materias, setMaterias] = useState([])

    const getAllMaterias = () =>{
        api.get(
            '/materiais'
        ).then(res=>{
            console.log(res.data)
            setMaterias(res.data)
        }).catch((err) =>{
            console.log('Erro na requisição' + JSON.stringify(err))
        })
    }

    useEffect(() =>{
        getAllMaterias()
    })

    return(
        <>
            <Caixa>
                {materias?.map((mat) =>(
                    
                    <Item>
                    <Status>
                        <span>{mat.origem.tipoOrigem}</span>
                    </Status>
                    </Item>
                
                ))}
           </Caixa> 
        </>
            
    )
}