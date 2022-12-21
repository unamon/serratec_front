import React, { useState, useEffect } from "react";
//import materialUI
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { admPagePdf } from "../../Reports/AdmPage/adm";

//import imagens
import computador from "../../Images/iconeComputador.png"
import folha from "../../Images/iconeFolha.png"
import lista from "../../Images/iconeListar.png"
import adicionar from "../../Images/iconeAdicionar.png"
import perfil from "../../Images/serratec.png"

import { Geral, Img, Perfil } from "./style";
import { Grid, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio } from "@mui/material";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

import { api } from "../../Services/api";

const style = {
    fontFamily: "Inter",
    color: "black",
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "1em",
    border: '2px solid darkgray',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const select = {
    width: "10rem",
    height: 32,
    color: '#323232',
    bgcolor: '#ccc',
};

const label = {
    color: "black",
    fontWeight: 500,
    fontFamily: "Inter",
    fontSize: 16,
    marginTop:".8rem"
}

const button = {
    border: "none",
    borderRadius: "2em",
    padding: ".2em",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 600,
    width: "8em",
    height: "2em",
    marginTop: "1.4em",
    cursor: "pointer"
}

const input = {
    border: "2px solid black",
    borderRadius: ".5em",
    padding: ".2em",
    fontSize: 14,
    width: "80%",
    height: "2em",
    cursor: "pointer"
}

const textArea = {
    width: "100%",
    borderRadius: "1rem",
    border: "2px solid dargray",
    height: "4rem",
    resize: "none",
}

const formControl = {
    display:"flex",
    flexDirection: "row"
}
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
    // const [historico, setHistorico] = useState(null)
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
            console.log(res.data)
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
                <Box sx={style}>
                    <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={12}>
                            <h1>Cadastro de Materiais</h1>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <InputLabel style={label}>Nome</InputLabel>
                            <input
                                style={input}
                                placeholder="Nome"
                                onChange={(e) => { setNomeMaterial(e.target.value) }} />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <InputLabel style={label}>Categoria</InputLabel>
                            <Select
                                sx={select}
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
                            <InputLabel style={label}>Descrição</InputLabel>
                            <textarea style={textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel style={label}>Dono</InputLabel>
                            <Select
                                sx={select}
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
                            <InputLabel style={label}>Data Entrega</InputLabel>
                            <DatePicker
                                // className="date"
                                selected={dataEnt}
                                xs={select}
                                onChange={(e) => setDataEnt(e)}
                                dateFormat='dd/MM/yyyy'

                            />
                        </Grid>
                        {origemMaterial === "ALUGUEL" ? <Grid xs={12}>
                            <InputLabel style={label}>Data Devolução</InputLabel>
                            <DatePicker
                                // className="date"
                                selected={dataDev}
                                xs={select}
                                onChange={(e) => setDataDev(e)}
                                dateFormat='dd/MM/yyyy'

                            />
                        </Grid> : null}
                        
                        <Grid xs={12}>
                            <InputLabel style={label}>Origem</InputLabel>
                            {/* <Select
                                xs={select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={origemMaterial}
                                onChange={(e) => setOrigemMaterial(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="AQUISICAO">AQUISICAO</MenuItem>
                                <MenuItem value="ALUGUEL">ALUGUEL</MenuItem>
                                <MenuItem value="DOACAO">DOACAO</MenuItem>
                            </Select> */}
                            <RadioGroup row onChange={e => {setOrigemMaterial(e.target.value)}}>
                                <FormControlLabel value={"AQUISICAO"} control={<Radio defaultChecked />} label="Aquisição" />
                                <FormControlLabel value={"DOACAO"} control={<Radio />} label="Doação" />
                                <FormControlLabel value={"ALUGUEL"} control={<Radio />} label="Aluguel" />
                            </RadioGroup>
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel style={label}>Nota Fiscal</InputLabel>
                            <input
                                type={"file"}
                                onChange={(e) => { setFile(e.target.files[0]) }} />
                        </Grid>
                        <button style={button} onClick={() => { SubmitMaterial() }}>Enviar</button>
                    </Grid>
                </Box>
            </Modal>
            <Modal
                open={openAssociacao}
                onClose={handleCloseAssociacao}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={12} marginBottom={3}>
                            <h1>Associação de Materiais</h1>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel style={label}>Material</InputLabel>
                            <Select
                                sx={select}
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
                            <InputLabel style={label}>Responsável</InputLabel>
                            <Select
                                sx={select}
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
                            <InputLabel style={label}>Observações</InputLabel>
                            <textarea style={textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>
                        {/* <Grid xs={12} justifyContent={"center"} > */}
                        <button style={button} onClick={() => { associacaoMaterial() }}>Associar</button>
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
                <Box sx={style}>
                <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={8}>
                            <h1>Materiais para manutenção</h1>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel style={label}>Material</InputLabel>
                            <Select
                                sx={select}
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
                            <InputLabel style={label}>Manutencionista</InputLabel>
                            <Select
                                sx={select}
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
                        <InputLabel style={label}>Observações</InputLabel>
                            <textarea style={textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>

                        <button style={button} onClick={manutencaoMaterial} >Associar</button>

                    </Grid>
                </Box>
            </Modal>

        </Geral >
    )
}