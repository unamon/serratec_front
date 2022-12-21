import React, { useState } from "react";
//import material ui
import { InputLabel } from "@mui/material";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
//import toastify
import { toast } from "react-toastify";

//import React DatePicker
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

//import dos icon 
import adicionar from "../../Images/iconeAdicionar.png";
import modal from "../../Images/logoModal.png";

//import do style
import { Input, Submit, Textarea } from "./styles";

//import Axios
import { api } from "../../Services/api";
//import Reports


export const AdicionarMaterial = () => {
    const [open, setOpen] = useState(false)
    const [nome, setNome] = useState()
    const [busca, setBusca] = useState("")
    const [materiais, setMateriais] = useState([])
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState([])
    const [categoriaId, setCategoriaId] = useState()
    const [dateDev, setDateDev] = useState()
    const [dateEnt, setDateEnt] = useState()
    const [tipoOrigem, setTipoOrigem] = useState()
    const [pessoaOrigemid, setPessoaOrigemid] = useState()
    const [pessoa, setPessoa] = useState([])
    const [updateMaterial, setUpdateMaterial] = useState(null)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setUpdateMaterial(null)
        getAllMaterial()
    }

    const handleChange = (event) => {
        setTipoOrigem(event.target.value);
    }

    const handleCategoria = (event) => {
        setCategoriaId(event.target.value);
    }
    const handlePessoa = (event) => {
        setPessoaOrigemid(event.target.value);
    }

    const postMaterial = async () => {
        await api.post(
            '/materiais',
            {
                descMaterial: descricao,
                idCategoriaMaterial: categoriaId,
                nomeMaterial: nome,
                origem: {
                    dataDevol: dateDev,
                    dataEnt: dateEnt,
                    idPessoaOrigem: pessoaOrigemid,
                    tipoOrigem: tipoOrigem
                }
            }
        ).then(res => {
            console.log(res.data)
            toast.success("Material cadastrado com sucesso", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
            console.log('sucesso na requisição')
        }).catch((err) => {
            toast("ops! ocorreu um erro")
            console.log('erro ao fazer requisição: ' + JSON.stringify(err))
        })
    }

    const putMaterial = async () => {
        await api.put("/materiais/" + updateMaterial.id,
        {
            descMaterial: descricao,
            idCategoriaMaterial: categoriaId,
            nomeMaterial:nome,
            origem: {
                dataDevol: dateDev,
                dataEnt: dateEnt,
                idPessoaOrigem: pessoaOrigemid,
                tipoOrigem: tipoOrigem
            }
        }).then(res => {
            toast.success("Material atualizado", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
        }).catch((err) => { 
            toast("ops! ocorreu um erro")
            console.log('erro ao fazer requisição: ' + err)
        })

        handleClose()
    }

    const getAllMaterial = async () => {
        api.get(
            '/historico/simples'
            // {headers:"Authorization: " + ` Bearer `},
        ).then(res => {
            setMateriais(res.data)
        }).catch((err) => {
            console.log('Erro na requisição get material: ' + JSON.stringify(err))
        })
    }

    const boxStyle = {
        fontFamily: 'Inter',
        position: 'absolute',
        top: '40%',
        left: '50%',
        borderRadius: 2,
        padding: 0,
        transform: 'translate(-50%, -50%)',
        width: '40%',
        backgroundColor: '#222',
        backgroundImage: `url(${modal})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20%',
        backgroundPosition: 'center',

        border: 'none',
        boxShadow: 24,
        p: 4,
    };

    const select = {
        width: 163,
        height: 32,
        color: '#323232',
        bgcolor: '#ccc',
    };

    const inputLabel = {
        color: '#eee',
        border: "none",
        borderRadius: '2em'
    }

    return (
        <>
            <img src={adicionar} onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ padding: 0, margin: 0 }}
            >
                <Box sx={boxStyle}>
                    <Grid container spacing={2} marginRight="auto" marginLeft="auto">
                        <Grid xs={12}>
                            <h2 style={inputLabel}>
                                {updateMaterial ? "Atualizar " + nome : "Adicione um Material aqui"}
                            </h2>
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel sx={inputLabel}>Nome</InputLabel>
                            <Input type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel sx={inputLabel} >Categoria</InputLabel>
                            <Select
                                sx={select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoriaId}
                                displayEmpty
                                onChange={handleCategoria}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {categoria?.map((cat) => (
                                    <MenuItem categoria={cat} key={"cat-" + cat.id} value={cat.id}>{cat.nome}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid xs={12}>
                            <InputLabel sx={inputLabel} >Descrição</InputLabel>
                            <Textarea id="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)} />
                        </Grid>
                        <Grid xs={6}>
                            <InputLabel sx={inputLabel} >Dono</InputLabel>
                            <Select
                                sx={select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={pessoaOrigemid}
                                displayEmpty
                                onChange={handlePessoa}
                                inputProps={{ 'aria-label': 'Without label' }}>
                                {pessoa?.map((pes) => (
                                    <MenuItem pessoa={pes} key={"pes-" + pes.id} value={pes.id}>{pes.nome}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid xs={4}>

                            <InputLabel sx={{ color: '#eee' }} >Data Entrega</InputLabel>
                            <DatePicker
                                className="date"
                                selected={dateEnt}
                                onChange={(e) => setDateEnt(e)}
                                dateFormat='dd/MM/yyyy'

                            />
                        </Grid>

                        <InputLabel sx={inputLabel}>Data Devolução</InputLabel>
                        <DatePicker
                            className="date"
                            selected={dateEnt}
                            onChange={(e) => setDateDev(e)}
                            dateFormat='dd/MM/yyyy'
                            showTimeSelect
                        />
                    </Grid>
                    <Grid xs={6}>
                        <InputLabel sx={inputLabel}>Origem</InputLabel>
                        <Select
                            sx={select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tipoOrigem}
                            displayEmpty
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={"AQUISICAO"}>Aquisicão</MenuItem>
                            <MenuItem value={"ALUGUEL"}>Aluguel</MenuItem>
                            <MenuItem value={"DOACAO"}>Doação</MenuItem>
                        </Select>
                    </Grid>
                    <Grid xs={12} justifyContent="center" display={"flex"}>
                        <Submit type="submit"
                            value={updateMaterial ? "Atualizar " + updateMaterial.nome : "Cadastrar Produto"}
                            onClick={() => { updateMaterial ? putMaterial() : postMaterial() }} />
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

