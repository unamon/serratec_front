import React, { useState } from "react";
import { ReactComponent as CancelSvg } from "../../Images/icons8-cancel.svg";
import editPng from "../../Images/icons8-edit-32.png"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import moment from "moment";
import { Geral, Info, Span, Styles } from "./style";
import { api } from "../../Services/api";
import { height, width } from "@mui/system";

export const ItemInventario = ({ props, updateModal }) => {
    const [cOpen, setCOpen] = useState(false)
    const [material, setMaterial] = useState(null)
    const [historico, setHistorico] = useState(null)
    const handleClose = () => setCOpen(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleOpen = (id) => {
        setCOpen(true);
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

    return (
        <>
            {props?.map((mat) => (
                <>
                    <Geral onClick={() => { handleOpen(mat.id) }}key={mat.id}
                    >
                        <div  className={"MiniCaixa " + decideColor(mat.status)}>
                        
                            <span>{mat.status}</span>
                        </div>
                        <div onClick={() => { handleOpen(mat.id) }}className="text">
                            <span >{mat.nome}</span>
                        </div>
                        <div onClick={() => { handleOpen(mat.id) }}className="text description">
                            <Span>{mat.descricao}</Span>
                        </div>
                        <div  onClick={() => { handleOpen(mat.id) }} className="text">
                            <span>{mat.id ? mat.id : <CancelSvg />}</span>
                        </div>
                        <div onClick={() => { handleOpen(mat.id) }}className="text">
                            <span>{convertDate(mat.ultimaAlteracao)}</span>
                        </div>
                    <img src={editPng} style={{width: '1.5em', height:'1.5em'}} onClick={ (e) => {e.preventDefault();e.stopPropagation();updateModal(mat.id); }} />

                    </Geral>
                </>
            ))}
            <Modal
                open={cOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ padding: 0, margin: 0 }}
            >
                <Box sx={Styles.boxStyle}>
                    <Grid container spacing={2}>
                        <Grid xs={12}>

                            <Info>
                                <div style={Styles.nomeStyle}>{material?.nome}</div>
                            </Info>
                        </Grid>
                        <Grid xs={12}>
                            <Info style={Styles.labelStyle}>Descrição: </Info>
                            <Info style={Styles.textStyle}>{material?.descricao}</Info>
                        </Grid>
                        <Grid xs={12}>
                            <Info style={Styles.labelStyle}>Data Entrada: </Info>
                            <Info style={Styles.textStyle}>{material?.origem.dataEnt}</Info>
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
                            <Info style={Styles.textStyle}>{material?.origem.dataEnt}</Info>
                        </Grid>
                        {material?.origem.dataDevol ? (
                            <Grid xs={6}>
                                <Info style={Styles.labelStyle}>Data de devolução: </Info>
                                <Info style={Styles.textStyle}>{material?.origem.dataDevol}</Info>
                            </Grid>)

                            : <></>}

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
                                        <span>Data: {hist?.data}</span>
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
        </>
    )
}