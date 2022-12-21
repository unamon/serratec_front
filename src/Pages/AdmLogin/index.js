import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Loader } from "../../Components/Loader";
import { Container, Titulo } from "../global-style";
import { StatusLogAdm, Form, FormInput, LoginButton, PopupStyle } from "./style";

export const AdmLogin = () => {
  
      
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    msgStatus: ''
  })
  let navigate = useNavigate();
  console.log(status)

  const handleSubmit = (event) => {
    event.preventDefault();
}

  function handleLoginChange(e){
    setLogin(e.target.value)
  }

  function handleSenhaChange(e){
    setSenha(e.target.value)
  }
  function logar() { 
    setLoading(true)
    setTimeout(function() {
      setLoading(false)
      if (login === 'admin' && senha === 'admin') {
        console.log(status)
        setStatus({msgStatus: 'senhaCorreta'})  
  
      } else if (login === '' || senha === '')  {
        setStatus({msgStatus: 'camposVazios'})
  
      } else {
        setStatus({msgStatus: 'senhaIncorreta'})
      }
    }, 500)
  }

  function limparLocalStorage(){
    localStorage.removeItem('admin')
    window.location.reload(true);
  }

  function goToPanel(){
    navigate("../painel_administrativo")
  }
  
  return (
    <Container>
      <Titulo>Login Administrativo</Titulo>
      {localStorage.getItem('admin') !== null ? 
      <StatusLogAdm>
        <p>Admin já autenticado!</p>
        <div>
          <button onClick={goToPanel}>Painel</button>
          <button onClick={limparLocalStorage}>Deslogar</button>
        </div>
      </StatusLogAdm> 
      : ''}
      <Form onSubmit={handleSubmit}>
        <FormInput onChange={e => handleLoginChange(e)} type="text" placeholder="Login"></FormInput>
        <FormInput onChange={e => handleSenhaChange(e)} type="password" placeholder="Senha"></FormInput>
      <LoginButton onClick={logar}>Entrar</LoginButton>
      </Form>
      {status.msgStatus === 'senhaCorreta' ? <>
      <PopupStyle>
        <div className="popup-tela">
          <p>Login feito com sucesso!</p>
          <button onClick={() => {localStorage.setItem('admin', '1'); navigate("../painel_administrativo")}}>OK</button>
        </div>
      </PopupStyle>
      </> : ''}
      {status.msgStatus === 'senhaIncorreta' ? <>
        <PopupStyle>
          <div className="popup-tela">
            <p>Senha incorreta! Entre em contato com os administradores.</p>
            <button onClick={() => {localStorage.removeItem('admin'); setStatus({msgStatus: ''})}}>OK</button>
          </div>
        </PopupStyle>
      </> : ''}
      {status.msgStatus === 'camposVazios' ? <>
        <PopupStyle>
          <div className="popup-tela">
            <p>Algum dos campos está vazios! Por favor, preencha.</p>
            <button onClick={() => {localStorage.removeItem('admin'); setStatus({msgStatus: ''})}}>OK</button>
          </div>
        </PopupStyle>
      </> : ''}
      {loading === true ? <>
        <PopupStyle>
          <div className="popup-tela">
            <p>Carregando...</p>
            <Loader/>
          </div>
        </PopupStyle>
      </> : ''}
      
    </Container>
  );
};
