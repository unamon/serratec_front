import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { Loader } from '../Loader';
import { CancelarButton, InputBlock, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarCliente = (props) => {

  const [nomeCompleto, setNomeCompleto] = useState(props.cliente.nomeCompleto)
  const [email, setEmail] = useState(props.cliente.email)
  const [password, setPassword] = useState(props.cliente.password)
  const [cpf, setCpf] = useState(props.cliente.cpf)
  const [telefone, setTelefone] = useState(props.cliente.telefone)
  const [dataNascimento, setDataNascimento] = useState(props.cliente.dataNascimento)
  const [idEndereco, setIdEndereco] = useState(props.cliente.id)
  const [isLoading, setLoading] = useState(false)
  const [statusAPI, setStatusAPI] = useState(0)
  const [errorMessageHead, setErrorMessageHead] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

    
    let navigate = useNavigate();

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleTelefoneChange(e){
        setTelefone(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
      };

    async function editarCliente() {

        try {
            const res = await api.put(`cliente?idCliente=${localStorage.getItem('idCliente')}`, {"nomeCompleto": nomeCompleto, "email": email, "password": password, "cpf": cpf, "telefone": telefone, "dataNascimento": dataNascimento, "idEndereco": idEndereco});
            console.log(res)
            setStatusAPI(e => res.status)
        } catch (error) {
            setStatusAPI(e => error.response.data.status)
            setErrorMessageHead(e => error.response.data.message)
            setErrorMessage(e => error.response.data.details[0])
        }
    }

    function load() {
        setLoading(e => true)
        setTimeout(function() {
            setLoading(e => false)
            editarCliente()
        }, 800)
    }

    return (
        <>
            {isLoading === false && statusAPI === 0 ? <>
                <PopupStyle>
                <div className='popup-tela'>
                <Form onSubmit={handleSubmit}>
                    <InputBlock type="text" value={nomeCompleto} />                       
                    <Input type="text" value={email} onChange={(e) => handleEmailChange(e)}/>                       
                    <InputBlock type="text" value={cpf}/>                       
                    <Input type="text" value={telefone} onChange={(e) => handleTelefoneChange(e)}/>                    
                    <InputBlock type="text" value={dataNascimento} />                                               
                    <ButtonContainer>
                    <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                    <RegistroButton onClick={() => load()}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle>
            </> : ''}
            {isLoading === false && statusAPI === 200? <>
                <PopupStyle>
                <div className='popup-tela'>
                    <p>Sucesso ao realizar alterações!</p>
                    <div className='botoes'>
                        <button onClick={() => window.location.reload(true)}>OK</button>
                    </div>
                </div>
            </PopupStyle>
            </> : ''}
            {isLoading === false && statusAPI !== 200 && statusAPI !== 0? <>
                <PopupStyle>
                <div className='popup-tela'>
                    <p>{errorMessageHead}</p>
                    <p>{errorMessage}</p>
                    <div className='botoes'>
                        <button onClick={() => window.location.reload(true)}>OK</button>
                    </div>
                </div>
            </PopupStyle>
            </> : ''}
            {isLoading === true ? <>
                <PopupStyle>
                <div className='popup-tela'>
                    <p>Carregando...</p>
                    <Loader/>
                </div>
            </PopupStyle>
            </> : ''}
              
        </>
    );
}