import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../Services/api";
import { Loader } from '../Loader';
import { CancelarButton, PopupStyle } from './style';
import { Input, Form, ButtonContainer, RegistroButton } from "./style";

export const EditarCategoria = (props) => {

    const [nomeCategoria, setNomeCategoria] = useState(props.categoria.nomeCategoria);
    const [descricaoCategoria, setDescricaoCategoria] = useState(props.categoria.descricaoCategoria);
    const [imagemCategoria, setImagemCategoria] = useState(props.categoria.imagemCategoria);
    const [statusAPI, setStatusAPI] = useState(0)
    const [errorMessageHead, setErrorMessageHead] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    function handleNomeChange(e){
        setNomeCategoria(e.target.value)
    }

    function handleDescricaoChange(e){
        setDescricaoCategoria(e.target.value)
    }

    function handleImagemChange(e){
        setImagemCategoria(e.target.value)
    }

    function reloadPage() {
        window.location.reload(true)
    }
    
    function load() {
        setLoading(true)
        setTimeout(function() {
            setLoading(false)
            editarCategoria()
        }, 800)
    }

    async function editarCategoria() {
        try {
            const res = await api.put(`categoria?idCategoria=${props.id}`, {"nomeCategoria": nomeCategoria, "descricaoCategoria": descricaoCategoria, "imagemCategoria": imagemCategoria});
            setStatusAPI(e => res.status)
        } catch (error) {
            setStatusAPI(e => error.response.data.status)
            setErrorMessageHead(e => error.response.data.message)
            setErrorMessage(e => error.response.data.details[0])
        }
    }

    return (
        <>
            {loading === false && statusAPI === 0 ? <>
                <PopupStyle>
                <div className='popup-tela'>
                <Form>
                    <Input type="text" value={nomeCategoria} onChange={(e) => handleNomeChange(e)}/>                       
                    <Input type="text" value={descricaoCategoria} onChange={(e) => handleDescricaoChange(e)}/>                       
                    <Input type="text" value={imagemCategoria} onChange={(e) => handleImagemChange(e)}/>                       
                    <ButtonContainer>
                    <CancelarButton onClick={props.clickFechar}>Cancelar</CancelarButton>
                    <RegistroButton onClick={load}>Alterar</RegistroButton>
                    </ButtonContainer>
                 </Form>
                </div>
            </PopupStyle> 
            </> : ''}
            {loading === true ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Carregando...</p>
                    <Loader/>
                </div>
            </PopupStyle>
            </> : ''}
            {statusAPI === 200 ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <p>Alterações feitas com sucesso!</p>
                    <div className='botoes'>
                        <button onClick={reloadPage}>OK</button>
                    </div>
                </div>
            </PopupStyle> 
            </> : ''}
            {statusAPI === 400 ? <>
            <PopupStyle>
                <div className='popup-tela'>
                    <h1>{errorMessageHead}</h1>
                    <p>{errorMessage}</p>
                    <div className='botoes'>
                        <button onClick={() => {setStatusAPI(e => 0); props.click()}}>OK!</button>
                    </div>
                </div>
            </PopupStyle> 
            </> : ''}
             
        </>
    );
}