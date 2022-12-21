import React, {useState, useEffect} from "react";
import { Corpo, Caixa, Titulo } from "./style";
import Chat from "../../Images/iconeMessagem.png"
import {ItemManutencao} from '../../Components/ItemManutencao'

import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Grid, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio } from "@mui/material";

import { toast } from "react-toastify";
import { api } from "../../Services/api";

import associacao from "../../Images/iconeListar.png"


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

const textArea = {
    width: "100%",
    borderRadius: "1rem",
    border: "2px solid dargray",
    height: "4rem",
    resize: "none",
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


export const ManutencaoNova = () =>{

    const [historico, setHistorico] = useState([])
    const [manutencao, setManutencao] = useState([])
    const [material, setMaterial] = useState(null)
    const [pessoas, setPessoas] = useState()
    const [categorias, setCategorias] = useState()
    // const [historico, setHistorico] = useState(null)
    const [idPessoaResponsavel, setIdPessoaResponsavel] = useState(null)
    const [obs, setObs] = useState(null)
    const [idStatus, setIdStatus] = useState(null)
    const [openManutencao, setOpenManutencao] = useState()
    const [materiais, setMateriais] = useState([])

    const handleOpenManutencao = () => {
        setIdStatus(1)
        setOpenManutencao(true)}
    const handleCloseManutencao = () => setOpenManutencao(false)


    const devolve = () =>{
        const submit = `historico?idMaterial=${material}&idPessoaResponsavel=${idPessoaResponsavel}&observacoes=${obs}&status=${idStatus}`
        api.post(
            submit
        ).then(res => {
            console.log("sucesso no post")
            toast.success("Item pronto para uso")
        }).catch((err) => {
            console.log("erro no get " + JSON.stringify(err))
            toast.error("Não foi possivel enviar o item")

        })
        handleCloseManutencao()
    }

    useEffect(() =>{
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
    },[])

    return(
    <>
    <Titulo>
        <h2>manutenção</h2>
        <button onClick={handleOpenManutencao}>clique aqui</button>
    </Titulo>
        <Corpo>
                <Caixa>
                    <ItemManutencao />
                </Caixa>               
        </Corpo>

        <Modal
                open={openManutencao}
                onClose={handleCloseManutencao}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Grid container spacing={1} justifyContent={"center"}>
                        <Grid xs={8}>
                            <h1>Devolvendo materiais</h1>
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
                            <InputLabel style={label}>Envie para</InputLabel>
                            <Select
                                sx={select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={idPessoaResponsavel}
                                displayEmpty
                                onChange={(e) => setIdPessoaResponsavel(e.target.value)}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {pessoas?.filter((item) => item.nome === "Silvana").map(pess => (
                                    <MenuItem pessoas={pess} key={""} value={pess?.id} >{pess?.nome}</MenuItem>
                                ))}
                            </Select>

                        </Grid>
                        <Grid xs={12}>
                        <InputLabel style={label}>Observações</InputLabel>
                            <textarea style={textArea}
                                onChange={(e) => setObs(e.target.value)} />
                        </Grid>

                        <button style={button} onClick={devolve} >Concluir</button>

                    </Grid>
                </Box>
            </Modal>
        
    </>
    )
}