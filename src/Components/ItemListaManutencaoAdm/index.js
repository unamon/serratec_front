import React, { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Styles, Info, Caixa, Item, Geral } from "./style";


import { api } from "../../Services/api";
import { ListaItemsMini } from "../ListaItemsMini";

export const ItemListaManutencao = ({items}) => {
    const [material, setMaterial] = useState(null)
    const [historico, setHistorico] = useState(null)
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false)

    const handleOpen = (id) => {
        setOpen(true);
        console.log(id)
        api.get(
            `/materiais/${id}`
        ).then((res) => {
            setMaterial(res.data)
        }).catch((err) => {
            console.log('erro no get by id material' + JSON.stringify(err))
        })

        api.get(`/historico/material/${id}`)
            .then((res) => {
                console.log(res.data)
                setHistorico(res.data)
            }).catch((err) => {
                console.log(JSON.stringify(err))
            })

    }

    // useEffect(() => {
    //     getAllMaterial()
    // }, [historico])

    return (
        <ListaItemsMini items={items}/>
        // <Caixa xs={12} m={6} >
        //     {materiais?.filter((item) => item.status === "Manutenção")?.map((mat) => (

        //         <Item onClick={() => { handleOpen(mat.id) }}>
        //             <div className={"MiniCaixa " + decideColor(mat.status)}>
        //                 <span>{mat?.status}</span>
        //             </div>
        //             <div>
        //                 <span>{mat?.nome}</span>
        //             </div>
        //             <div className="text">
        //                 <span>{mat?.descricao}</span>
        //             </div>
        //             <div className="numSerie">
        //                 <span>{convertDate(mat?.ultimaAlteracao)}</span>
        //             </div>
        //         </Item>
        //     ))}
        //     
        // </Caixa>
    )
}