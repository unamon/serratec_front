import React, { useEffect, useState } from "react";
import { Caixa, Item, Seta, Status, Text, Styles, Info, Geral } from "./style";
import  seta from "../../Images/iconeExpandir.png"
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
 
//import Axios 
import {api} from '../../Services/api'


export const ItemListaMateriasAdm = () =>{

    const [materiais, setMateriais] = useState([])
    const [material, setMaterial] = useState(null)
    const [historico, setHistorico] = useState(null)
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false)

    const getAllMaterial = async () =>{
        api.get(
            '/historico/simples'
            // {headers:"Authorization: " + ` Bearer `},
        ).then(res =>{
            setMateriais(res.data)
            console.log(res.data)
        }).catch((err) =>{
            console.log('Erro na requisição get material: ' + JSON.stringify(err))
        })
    }

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

    const convertDate = (date) => {
        let newDate = new Date(date);
        let returnString;
        returnString = newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear()
        return returnString;
    }

    const convertOrigem = (nome) => {

        switch (nome) {
            case "DOACAO":
                return "Doação"
            case "ALUGUEL":
                return "Aluguel"
            case "AQUISICAO":
                return "Aquisição";
            default: 
                return null;
        }
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

    useEffect(() =>{
        getAllMaterial()
    },[material])

    return(
            <Caixa>
                {materiais?.map((mat) =>(
                    
                    <Item onClick={() =>{handleOpen(mat.id)}}>
                    <div className={"MiniCaixa " + decideColor(mat.status)}>
                        <span>{mat?.status}</span>
                    </div>
                        <div>
                            <span>{mat?.nome}</span>
                        </div>
                        <div className="text">
                            <span>{mat?.descricao}</span>
                        </div>
                        <div className="numSerie">
                            <span>{convertDate(mat?.ultimaAlteracao)}</span>
                        </div>
                    </Item>
                ))}
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ padding: 0, margin: 0 }}
            >
                <Box sx={Styles.boxStyle}>
                    <Grid container spacing={2}>
                        <Grid xs={12}>

                            <Info>
                                <div style={Styles.nomeStyle}>{materiais?.nome}</div>
                            </Info>
                        </Grid>
                        <Grid xs={12}>
                            <Info style={Styles.labelStyle}>Descrição: </Info>
                            <Info style={Styles.textStyle}>{materiais?.descricao}</Info>
                        </Grid>
                        <Grid xs={12}>
                            <Info style={Styles.labelStyle}>Data Entrada: </Info>
                            <Info style={Styles.textStyle}>{convertDate(material?.origem.dataEnt)}</Info>
                        </Grid>
                        <Grid xs={12}>
                            <Info style={Styles.labelStyle}>Dono: </Info>
                            <Info style={Styles.textStyle}>{material?.origem.pessoaOrigem.nome}</Info>
                        </Grid>
                        <Grid xs={12}>
                            <Info style={Styles.labelStyle}>Tipo de Origem: </Info>
                            <Info style={Styles.textStyle}>{convertOrigem(material?.origem.tipoOrigem)}</Info>
                        </Grid>
                        <Grid xs={6}>
                            <Info style={Styles.labelStyle}>Data de entrega: </Info>
                            <Info style={Styles.textStyle}>{convertDate(material?.origem.dataEnt)}</Info>
                        </Grid>
                        {material?.origem.dataDevol ?(
                        <Grid xs={6}>
                            <Info style={Styles.labelStyle}>Data de devolução: </Info>
                            <Info style={Styles.textStyle}>{convertDate(material?.origem.dataDevol)}</Info>
                        </Grid>)
                            
                         : <></> }
                        
                        <Grid xs={12}>
                            <Info>
                                <div style={Styles.historicoTitleStyle}>
                                Historico
                                </div>
                            </Info>
                            {historico?.map((hist) => (
                                <Geral key={hist.id}>
                                    <div className={"MiniCaixa " + decideColor(hist.status.nome)}>
                                        <span>{hist.status.nome}</span>
                                    </div>
                                    <div className="text">
                                        <span>Data: {convertDate(hist?.data)}</span>
                                    </div>
                                    <br />
                                    <div className="text">
                                        <span>Responsável: {hist?.pessoa.nome}</span>
                                    </div>
                                    <div className="text obs">
                                        <span>{hist?.observacao}</span>
                                    </div>
                                </Geral>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
           </Caixa>             
    )
}