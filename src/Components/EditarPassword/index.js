import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { Loader } from '../Loader';
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarPassword = (props) => {

  const [newSenha1, setNewSenha1] = useState('')
  const [newSenha2, setNewSenha2] = useState('')
  const [isSenhaIgual, setSenhaIgual] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

    let navigate = useNavigate();

    function handlePasswordChange1(e){
        setNewSenha1(e.target.value)
    }

    function handlePasswordChange2(e){
        setNewSenha2(e.target.value)
    }

    async function editarPassword() {
        const response = await api.put(`cliente?idCliente=${localStorage.getItem('idCliente')}`, {"nomeCompleto": props.cliente.nomeCompleto, "email": props.cliente.email, "password": newSenha1, "cpf": props.cliente.cpf, "telefone": props.cliente.telefone, "dataNascimento": props.cliente.dataNascimento, "idEndereco": props.cliente.idEndereco});
        if(response.status === 200){
            navigate("../perfil")
        }else{
            alert("Erro ao atualizar!")
        }
    }

    function handleLoading() {
        setLoading(true)
        setTimeout(function() {
            setLoading(false)
            setStep(e => e + 1)
        }, 800)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    function verificarSenhas() {
        console.log('senha: ' + newSenha1 + ' / ' + newSenha2)
        console.log('senha igual ? ' + isSenhaIgual)
        if(newSenha1 === newSenha2) {
            setSenhaIgual(true)
        } else {
            setSenhaIgual(false)
        }
    }

    function reloadPage() {
        window.location.reload(false)
    }

    return (
        <>
            {isLoading === true ? <>
                <PopupStyle>
                    <div className='popup-tela'>
                        <p>Carregando...</p>
                        <Loader/>
                    </div>
            </PopupStyle>
            </> : ''}
            {step === 1  && isLoading === false?<>
                <PopupStyle>
                <div className='popup-tela'>
                <Form onSubmit={handleSubmit}>
                    <p>Digite a nova senha:</p>
                    <Input type="password" onChange={handlePasswordChange1} />                                                        
                    <ButtonContainer>
                    <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                    <RegistroButton onClick={handleLoading}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>
            </> : ''}
            {step === 2  && isLoading === false ? <>
                <PopupStyle>
                <div className='popup-tela'>
                <Form onSubmit={handleSubmit}>
                    <p>Digite sua senha novamente:</p>
                    <Input type="password" onChange={handlePasswordChange2} />                                                        
                    <ButtonContainer>
                    <RegistroButton onClick={() => {handleLoading(); verificarSenhas()}}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
                </PopupStyle>
            </> : ''}
            {step >= 3 && step !== 6 && isSenhaIgual === false && isLoading === false?<>
                <PopupStyle>
                <div className='popup-tela'>
                <Form onSubmit={handleSubmit}>
                    <p>Suas senhas não coincidem... tente novamente:</p>
                    <Input type="password" onChange={handlePasswordChange2} />                                                        
                    <ButtonContainer>
                    <CancelarButton onClick={props.handleEditarAtivo}>Cancelar</CancelarButton>
                    <RegistroButton onClick={() => {handleLoading(); verificarSenhas()}}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
                </PopupStyle>
            </> : ''}
            {step === 6 && isLoading === false ? <>
                <PopupStyle>
                <div className='popup-tela'>
                    <h1>Máximo de tentativas ultrapassadas</h1>
                    <p>Tente novamente mais tarde...</p>
                    <RegistroButton onClick={reloadPage}>OK</RegistroButton>
                </div>
                </PopupStyle>
            </> : ''}
            {isSenhaIgual === true && isLoading === false ? <>
                <PopupStyle>
                <div className='popup-tela'>
                    <h2>Senha alterada com sucesso!</h2>
                    <RegistroButton className='botao' onClick={() => {editarPassword();reloadPage()}}>OK</RegistroButton>
                </div>
                </PopupStyle>
            </> : ''}
            {}
        </>
    );
}