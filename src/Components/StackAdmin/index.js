import React, { useEffect, useState } from "react";
//import materialUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

import { admPagePdf } from "../../Reports/AdmPage/adm";

//import imagens
import adicionar from "../../Images/iconeAdicionar.png";
import computador from "../../Images/iconeComputador.png";
import folha from "../../Images/iconeFolha.png";
import lista from "../../Images/iconeListar.png";
import perfil from "../../Images/serratec.png";

import { FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { Styles, Geral, Img, Perfil } from "./style";

import { api } from "../../Services/api";

export const StackAdmin = () => {
    const [categorias, setCategorias] = useState()
    const [pessoas, setPessoas] = useState()
    const [nomeMaterial, setNomeMaterial] = useState();
    const [descMaterial, setDescMaterial] = useState();
    const [catMaterial, setCatMaterial] = useState();
    const [donoMaterial, setDonoMaterial] = useState();
    const [origemMaterial, setOrigemMaterial] = useState();
    const [dataEnt, setDataEnt] = useState();
    const [dataDev, setDataDev] = useState();
    const [file, setFile] = useState();
    const [openMaterial, setOpenMaterial] = useState(false)
    const [openAssociacao, setOpenAssociacao] = useState()
    const [openManutencao, setOpenManutencao] = useState()
    const [materiais, setMateriais] = useState([])
    const [material, setMaterial] = useState(null)
    const [idPessoaResponsavel, setIdPessoaResponsavel] = useState(null)
    const [obs, setObs] = useState(null)
    const [idStatus, setIdStatus] = useState(null)
    const [historico, setHistorico] = useState([])


    const handleOpenManutencao = () => {
        setIdStatus(3)
        setOpenManutencao(true)}
    const handleCloseManutencao = () => setOpenManutencao(false)

    const handleOpenAssociacao = () => {
        setIdStatus(2)
        setOpenAssociacao(true)
    }
    const handleCloseAssociacao = () => setOpenAssociacao(false);

    const handleOpenMaterial = () => setOpenMaterial(true);
    const handleCloseMaterial = () => {
        setNomeMaterial(null)
        setDescMaterial(null)
        setCatMaterial(null)
        setDonoMaterial(null)
        setOrigemMaterial(null)
        setDataEnt(null)
        setDataDev(null)
        setFile(null)
        setOpenMaterial(false);
    }

    const associacaoMaterial = () => {
        const submit = `historico?idMaterial=${material}&idPessoaResponsavel=${idPessoaResponsavel}&observacoes=${obs}&status=${idStatus}`
        api.post(
            submit
        ).then(res => {
            console.log("sucesso no post")
            toast.success("Empréstimo efetuado com sucesso")
        }).catch((err) => {
            console.log("erro no get " + JSON.stringify(err))
            toast.error("Não foi possivel realizar o empréstimo")

        })
        handleCloseAssociacao()
    }

    const manutencaoMaterial = () => {
        const submit = `historico?idMaterial=${material}&idPessoaResponsavel=${idPessoaResponsavel}&observacoes=${obs}&status=${idStatus}`
        api.post(
            submit
        ).then(res => {
            console.log("sucesso no post")
            toast.success("Item enviado a manutenção")
        }).catch((err) => {
            console.log("erro no get " + JSON.stringify(err))
            toast.error("Não foi possivel enviar o item")

        })
        handleCloseManutencao()
    }
    useEffect(() => {
        api.get("/pessoas")
            .then((res) => {
                setPessoas(res.data)
            }).catch(err => {
                console.log(err)
            })
        api.get(
            '/materiais'
        ).then(res => {
            setMateriais(res.data)
        }).catch((err) => {

        })
        api.get("/categoria")
            .then((res) => {
                setCategorias(res.data)
            }).catch(err => {
                console.log(err)
            })

            api.get("/historico/simples")
            .then((res) =>{
                setHistorico(res.data)
            }).catch(err =>{
                console.log(err)
            })
    }, [])

    const SubmitMaterial = () => {
        console.log(catMaterial)
        const material = {
            descMaterial: descMaterial,
            idCategoriaMaterial: catMaterial,
            nomeMaterial: nomeMaterial,
            origem: {
                dataDevol: dataDev,
                dataEnt: dataEnt,
                idPessoaOrigem: donoMaterial,
                tipoOrigem: origemMaterial
            }
        }
        const json = JSON.stringify(material);
        const blob = new Blob([json], {
            type: 'application/json'
        });
        const data = new FormData();
        data.append("novoMaterial", blob)
        data.append("file", file)

        api({
            method: 'post',
            url: '/materiais',
            data: data,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            toast.success('Item adicionado com sucesso')
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
            toast.error("Não foi possivel adicionar o material")
        })
        handleCloseMaterial()

    }

    return (
        <Geral>
            <Stack alignItems={"center"} direction="row" spacing={6}>
            <div className="box-item">
                <Perfil src={perfil} />
                <label></label>
            </div>
                <div className="box-item">
                    <Img src={lista} onClick={() => { handleOpenManutencao() }} />
                    <label>Enviar para manutenção</label>
                </div>
                <div className="box-item">
                    <Img src={computador} onClick={() => { handleOpenAssociacao() }} />
                    <label>Emprestar material</label>
                </div>
                <div className="box-item">
                    <Img src={adicionar} onClick={() => { handleOpenMaterial() }} />
                    <label>Criar novo material</label>
                </div>
                <div className="box-item">
                    <Img src={folha} onClick={()=> { admPagePdf(historico) }} />
                    <label>Gerar relatório</label>
                </div>
                
                
            </Stack >
            <Modal
                open={openMaterial}
                onClose={handleCloseMaterial}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Styles.style}>
                    <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={12}>
                            <h1>Cadastro de Materiais</h1>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <InputLabel style={Styles.label}>Nome</InputLabel>
                            <input
                                style={Styles.input}
                                placeholder="Nome"
                                onChange={(e) => { setNomeMaterial(e.target.value) }} />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <InputLabel style={Styles.label}>Categoria</InputLabel>
                            <Select
                                sx={Styles.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={catMaterial}
                                displayEmpty
                                onChange={(e) => setCatMaterial(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {categorias?.map((cat) => (
                                    <MenuItem categoria={cat} key={"cat-" + cat.id} value={cat.id}>{cat.nome}</MenuItem>
                                ))}
                            </Select>
                            {/* <input placeholder="Tipo" style={{ padding: 5, borderRadius: 2, borderColor: '#E8E7E7', width: 300, marginBottom: 10 }} /> */}
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel style={Styles.label}>Descrição</InputLabel>
                            <textarea style={Styles.textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel style={Styles.label}>Dono</InputLabel>
                            <Select
                                sx={Styles.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={donoMaterial}
                                displayEmpty
                                onChange={(e) => setDonoMaterial(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {pessoas?.map((pes) => (
                                    <MenuItem pessoa={pes} key={"pes-" + pes.id} value={pes.id}>{pes.nome}</MenuItem>
                                ))}
                            </Select>
                            {/* <input placeholder="Dono" style={{ padding: 5, borderRadius: 2, borderColor: '#E8E7E7', width: 300, marginBottom: 10 }} /> */}
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel style={Styles.label}>Data Entrega</InputLabel>
                            <DatePicker
                                // className="date"
                                selected={dataEnt}
                                style={Styles.formControl}
                                onChange={(e) => setDataEnt(e)}
                                dateFormat='dd/MM/yyyy'

                            />
                        </Grid>
                        {origemMaterial === "ALUGUEL" ? <Grid xs={12}>
                            <InputLabel style={Styles.label}>Data Devolução</InputLabel>
                            <DatePicker
                                // className="date"
                                selected={dataDev}
                                style={Styles.formControl}
                                onChange={(e) => setDataDev(e)}
                                dateFormat='dd/MM/yyyy'

                            />
                        </Grid> : null}
                        
                        <Grid xs={12}>
                            <InputLabel style={Styles.label}>Origem</InputLabel>
                            <RadioGroup row onChange={e => {setOrigemMaterial(e.target.value)}}>
                                <FormControlLabel value={"AQUISICAO"} control={<Radio defaultChecked />} label="Aquisição" />
                                <FormControlLabel value={"DOACAO"} control={<Radio />} label="Doação" />
                                <FormControlLabel value={"ALUGUEL"} control={<Radio />} label="Aluguel" />
                            </RadioGroup>
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel style={Styles.label}>Nota Fiscal</InputLabel>
                            <input
                                type={"file"}
                                onChange={(e) => { setFile(e.target.files[0]) }} />
                        </Grid>
                        <button style={Styles.button} onClick={() => { SubmitMaterial() }}>Enviar</button>
                    </Grid>
                </Box>
            </Modal>
            <Modal
                open={openAssociacao}
                onClose={handleCloseAssociacao}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Styles.style}>
                    <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={12} marginBottom={3}>
                            <h1>Associação de Materiais</h1>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel style={Styles.label}>Material</InputLabel>
                            <Select
                                sx={Styles.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={material}
                                displayEmpty
                                onChange={(e) => setMaterial(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {
                                materiais?.map(mat => (
                                    <MenuItem material={mat} key={""} value={mat?.id}>{mat?.nome}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel style={Styles.label}>Responsável</InputLabel>
                            <Select
                                sx={Styles.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={idPessoaResponsavel}
                                displayEmpty
                                onChange={(e) => setIdPessoaResponsavel(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {pessoas?.map(pess => (
                                    <MenuItem pessoas={pess} key={""} value={pess?.id} >{pess?.nome}</MenuItem>
                                ))}
                            </Select>

                        </Grid>
                        <Grid xs={12} marginTop={2}>
                            <InputLabel style={Styles.label}>Observações</InputLabel>
                            <textarea style={Styles.textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>
                        {/* <Grid xs={12} justifyContent={"center"} > */}
                        <button style={Styles.button} onClick={() => { associacaoMaterial() }}>Associar</button>
                        {/* </Grid> */}
                    </Grid>
                </Box>
            </Modal>
            <Modal
                open={openManutencao}
                onClose={handleCloseManutencao}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={Styles.style}>
                <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={8}>
                            <h1>Materiais para manutenção</h1>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel style={Styles.label}>Material</InputLabel>
                            <Select
                                sx={Styles.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={material}
                                displayEmpty
                                onChange={(e) => setMaterial(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {materiais?.map(mat => (
                                    <MenuItem material={mat} key={""} value={mat?.id}>{mat?.nome}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel style={Styles.label}>Manutencionista</InputLabel>
                            <Select
                                sx={Styles.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={idPessoaResponsavel}
                                displayEmpty
                                onChange={(e) => setIdPessoaResponsavel(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {pessoas?.map(pess => (
                                    <MenuItem pessoas={pess} key={""} value={pess?.id} >{pess?.nome}</MenuItem>
                                ))}
                            </Select>

                        </Grid>
                        <Grid xs={12}>
                        <InputLabel style={Styles.label}>Observações</InputLabel>
                            <textarea style={Styles.textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>

                        <button style={Styles.button} onClick={manutencaoMaterial} >Associar</button>

                    </Grid>
                </Box>
            </Modal>

        </Geral >
    )
}
