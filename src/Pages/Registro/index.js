import React, { useState } from "react";
import { Container, Titulo } from "../global-style";
import { Input, Form, ButtonContainer, RegistroButton, PerfilFoto, Label} from "./style";
import { api } from "../../Services/api"
import { toast } from "react-toastify";
import { useEffect } from "react";
import { InputLabel, MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";

import {RadioGroup, Radio, FormControlLabel} from "@mui/material"

import "./foto.css"



export const Registro = () => {
  const [nome, setNome] = useState('')
  const [nomeFantasia, setFantasia] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [idPerfil, setIdPerfil] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cpf, setCpf] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState(null)
  const [rua, setRua] = useState('')
  const [uf, setUf] = useState('')
  const [foto, setFoto] = useState('')
  const [tipoPessoa, setTipoPessoa] = useState('')

  const navigate = useNavigate()


  function formatarCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const Stringfy = (foto) =>{
    const formatado = foto.stringify

    setFoto(formatado)
  }

  const postPessoa = () =>{
    let formData = new FormData()
    // formData.append('file', foto)
    let pessoa = {
        tipoPessoa: tipoPessoa ,
        cpf: cpf,
        email: email,
        senha : senha,
        cargo : cargo,
        cnpj : cnpj,
        nomeFantasia: nomeFantasia,
        razaoSocial: razaoSocial,
        endereco: {
          bairro: bairro,
          cep: cep,
          cidade: cidade,
          complemento: complemento,
          numero: numero,
          rua: rua,
          uf: uf
        },
        nome: nome,
        idPerfil: 1,
        telefone: telefone,
        
       } 
       console.log(formData)
      //  formData.append('novaPessoa', JSON.stringify(pessoa) )
      //  JSON.stringify(formData)
    
      
      const json = JSON.stringify(pessoa);
      const blob = new Blob([json], {
        type: 'application/json'
      });
      const data = new FormData();
      data.append("novaPessoa", blob);
      data.append('file', foto)
      api({
        method: 'post',
        url: '/pessoas',
        data: data,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res =>{
      toast.success('Cadastrado com sucesso')
      navigate('/')
    }).catch((err) =>{
      console.log('erro no cadastro ' + JSON.stringify(err))
      toast.error("Não foi possivel realizar o cadastro")
    })

    console.log(foto)
  }

  useEffect(() =>{
    
  })

  const style = {
    width:'100%',
    backgroundColor:"#ccc"
  }
  
  const teste = {
    color: '#000',
  }

  const teste2 ={
    justifyContent: 'space-evenly'
  }

  return (

    <Container>
      <Titulo>Crie sua conta</Titulo>
      <Form>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <InputLabel style={{fontSize: 20}}>Tipo de Pessoa</InputLabel>
            <RadioGroup sx={teste2} row onChange={e => {setTipoPessoa(e.target.value)}}>
                <FormControlLabel sx={teste} value={"F"} control={<Radio defaultChecked />} label="Física" />
                <FormControlLabel sx={teste} value={"J"} control={<Radio />} label="Jurídica" />
            </RadioGroup>
          </Grid>
          <Grid xs={6}>
          <InputLabel style={{fontSize: 20}}>Nome completo</InputLabel>
            <Input type="text"   required onChange={(event) => setNome(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Email</InputLabel>
            <Input type="email" required onChange={(event) => setEmail(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Senha</InputLabel>
            <Input type='password'   required onChange={(event) => setSenha(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>CPF</InputLabel>
           <Input type="text" Length={11} minLength={11}  onChange={(event) => setCpf(event.target.value)}/>
          </Grid>
          {tipoPessoa === "J" ? <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>CNPJ</InputLabel>
            <Input  type="text" placeholder="pessoa jurídica" maxLength={14} onChange ={((e) => setCnpj(e.target.value))}/>
          </Grid>: null}
          {tipoPessoa === "J" ? <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Razão Social</InputLabel>
            <Input type="text" placeholder="pessoa jurídica"  onChange={((e) =>setRazaoSocial(e.target.value))}/>
          </Grid> : null}
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Tipo de acesso</InputLabel>
            
            <Select
              sx={style}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={idPerfil}
              displayEmpty
              onChange={(e) =>setIdPerfil(e.target.value)}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem idPerfil value={4}>Manutenção</MenuItem>
              <MenuItem idPerfil value={1}>Administrador</MenuItem>
              { tipoPessoa === "J" ? <MenuItem idPerfil value={3}>Parceiro</MenuItem> : null}
            </Select>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Telefone</InputLabel>
            <Input type="tel"  onChange={(event) => setTelefone(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Cidade</InputLabel>
            <Select
              sx={style}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cidade}
              displayEmpty
              onChange={(e) =>setCidade(e.target.value)}
              inputProps={{ 'aria-label': 'Without label' }}
              >
              <MenuItem cidade={cidade} value={"Petrópolis"} >Petrópolis</MenuItem>
              <MenuItem cidade={cidade} value={"Areal"} >Areal</MenuItem>
              <MenuItem cidade={cidade} value={"Nova-Friburgo"} >Nova-Friburgo</MenuItem>
              <MenuItem cidade={cidade} value={"Teresópolis"} >Teresópolis</MenuItem>
              <MenuItem cidade={cidade} value={"Rio de Janeiro"} >Rio de Janeiro</MenuItem>
            </Select> 
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Bairro</InputLabel>
            <Input type="text"  onChange={(event) =>setBairro(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Rua</InputLabel>
            <Input type="text"  onChange={(event) =>setRua(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Complemento</InputLabel>
            <Input type="text"  onChange={(e) =>setComplemento(e.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Cep</InputLabel>
            <Input type="text"  onChange={(event) =>setCep(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <InputLabel style={{fontSize: 20}}>Número</InputLabel>
            <Input type="text"   onChange={(event) =>setNumero(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
          <InputLabel style={{fontSize: 20}}>UF (União Federativa)</InputLabel>
            <Input type="text"   onChange={(event) =>setUf(event.target.value)}/>
          </Grid>
          <Grid xs={6}>
            <label className="file" htmlFor='foto'>Foto de Perfil</label>
            <input type="file" name="foto" id="foto" onChange={(event) =>setFoto(event.target.files[0])} />
          </Grid>
          <Grid xs={12}>
            <ButtonContainer>
              <RegistroButton onClick={()=>postPessoa()}>Criar conta</RegistroButton>
            </ButtonContainer>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};