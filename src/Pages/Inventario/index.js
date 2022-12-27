import React, { useEffect, useState } from "react";
//import material ui
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { InputLabel } from "@mui/material";
//date parse
import parseISO from "date-fns/parseISO";
//import toastify
import { toast } from "react-toastify";
//import css
import './date.css'

//import React DatePicker
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

//import dos icon 
import folha from "../../Images/iconeFolha.png"
import adicionar from "../../Images/iconeAdicionar.png"
import modal from "../../Images/logoModal.png"

//import do style
import { Wrapper, Pesquisa, Input, Submit, Textarea,Barra   } from "./style";
import { ItemInventario } from "../../Components/ItemInventario";

//import Axios
import { ApiComm, api } from "../../Services/api";
//import Reports
import { inventarioPdf } from "../../Reports/Inventario";

const api2 = new ApiComm()

export const Inventario = () => {
    const [open, setOpen] = useState(false)
    const [nome, setNome] = useState()
    const [busca, setBusca] = useState("")
    const [materiais, setMateriais] = useState([])
    const [pessoas, setPessoas] = useState([])
    const [categoria, setCategorias] = useState([])
    const [descricao, setDescricao] = useState()
    const [categoriaId, setCategoriaId] = useState()
    const [dateDev, setDateDev] = useState()
    const [dateEnt, setDateEnt] = useState()
    const [tipoOrigem, setTipoOrigem] = useState()
    const [pessoaOrigemid, setPessoaOrigemid] = useState()
    const [updateMaterial, setUpdateMaterial] = useState(null)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setUpdateMaterial(null)
        setMateriais(api.getAllMateriais())
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

    const getAllCategoria = async () => {
        api.get(
            '/categoria',
        ).then((res) => {
            // console.log(res.data)
            setCategorias(res.data)
            console.log(res.data)

        }).catch((err) => {
            console.log("erro no get categoria: " + JSON.stringify(err))
        })
    }

    const getAllPessoas = async () => {
        api.get(
            '/pessoas'
        ).then((res) => {
            setPessoas(res.data)
        }).catch((err) => {
            console.log("Erro no get de pessoas" + JSON.stringify(err))
        })
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

    const itemFiltro = materiais?.filter((item) => item.nome?.toUpperCase().includes(busca.toUpperCase())
        || item.descricao?.toUpperCase().includes(busca.toUpperCase())
        || item.status?.toUpperCase().includes(busca.toUpperCase()))

    const dateFormatAux = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month

        if (day.length < 2)
            day = '0' + day

        return [year, month, day].join('-')
    }


    useEffect(() => {
    getAllMaterial()
    getAllPessoas()
    getAllCategoria()
    }, [])

    useEffect(() => {

    }, [busca])

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
    
    const updateModal = (id) => {
        api.get("materiais/" + id)
            .then((res)=>{
                setUpdateMaterial(res.data)
                setNome(res.data.nome)
                setCategoriaId(res.data.categoria.id)
                setDescricao(res.data.descricao)
                setPessoaOrigemid(res.data.origem.pessoaOrigem.id)
                setDateEnt(res.data.origem.dataEnt)
                setDateDev(res.data.origem.dataDev ? res.data.origem.dataDev : null)
                setTipoOrigem(res.data.origem.tipoOrigem)
                setOpen(true)
                console.log(res.data.origem.dataEnt)
            })
            .catch((err)=>{console.log(err)})   

    }
    
    return (
        <>
            <Wrapper>
                <button onClick={() =>{
                    console.log(pessoas)
                    console.log(materiais)
                    console.log(categoria)
                }}> DEBUG </button>
                <Pesquisa>
                    <div>
                        <h1>Inventário de Materiais</h1>
                        <h5>Aqui você consegue filtr    ar sua busca por Nome, Status ou Descrição do material</h5>
                    </div>
                    <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
                        <div className="box-item"> 
                            <img src={folha} onClick={() => inventarioPdf(itemFiltro, materiais)} />
                            <label>Gerar relatório</label>
                        </div>
                        <div className="box-item"> 
                            <img src={adicionar} onClick={handleOpen} />
                            <label>Adicionar material</label>
                        </div>
                        
                        
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
                                            value={categoriaId }
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
                                            {pessoas?.map((pes) => (
                                                <MenuItem pessoa={pes} key={"pes-" + pes.id} value={pes.id}>{pes.nome}</MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid xs={4}>

                                        <InputLabel sx={{color:'#eee'}} >Data Entrega</InputLabel>
                                        <DatePicker 
                                         className="date"
                                         selected={new Date(dateEnt)}
                                         onChange={(e) =>setDateEnt(e)} 
                                         dateFormat='dd/MM/yyyy' 
                                         
                                        />
                                    </Grid>

                                        <InputLabel sx={inputLabel}>Data Devolução</InputLabel>
                                        <DatePicker
                                            className="date"
                                            selected={new Date(dateDev)}
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
                                        value={updateMaterial? "Atualizar " + updateMaterial.nome : "Cadastrar Produto"} 
                                        onClick={() => { updateMaterial ? putMaterial() : postMaterial() }} />
                                    </Grid>
                            </Box>
                        </Modal>
                        <input type='text' size="50" value={busca} placeholder="buscar material" onChange={(e) => setBusca(e.target.value)} />
                    </Stack>
                </Pesquisa>
                                
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack style={{width:175, height:70, marginTop:10}}>
                            <DesktopDatePicker
                                inputFormat="DD/MM/YYYY"
                                value={date}
                                onChange={() =>handleDate(dateEnt)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>                                            
                    </LocalizationProvider> */}
                    <Barra>
                        <div className={"MiniCaixa "}>
                            <span className="text-status" >STATUS</span>
                        </div>
    
                        <div className="text">
                            NOME
                        </div>
                        <div className="text">
                            DESCRIÇÃO
                        </div>
                        <div className="text">
                            ID
                        </div><div className="text">
                            DATA DE CRIAÇÃO
                        </div>
                    </Barra>
                 <ItemInventario props={itemFiltro} updateModal={updateModal}/>

            </Wrapper>
        </>
    )
}