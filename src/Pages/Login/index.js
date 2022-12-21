import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ContainerLogin, Titulo } from "../global-style";
import { AdmButton, Form, FormInput, LoginButton, PopupStyle } from "./style";
import { api } from '../../Services/api'
import { DataContext } from "../../Context/data";
import { Loader } from "../../Components/Loader";

export const Login = ({navigation}) => {
  const { armazenaDadosUsuario } = useContext(DataContext);
  const [statusCliente, setStatusCliente] = useState(0)
  const [statusCliente1, setStatusCliente1] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [isEmailCerto, setEmailCerto] = useState(false)
  const [clienteList, setClienteList] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const  navigate = useNavigate();
  
  const handleLogin = async () =>{
    console.log(`Email: ${email} - Senha: ${senha}`)
    var tokenJwt
    setLoading(true)

    try{
      const retorno = await api.post('/login',{
        email:email,
        password:senha
      })

  }

  return (
    <>
      <ContainerLogin>
        <Titulo>Login Usuário</Titulo>
        <Form>
          <FormInput value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
          <FormInput value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
          <LoginButton onClick={handleLogin}>Entrar</LoginButton>
        </Form>
      </ContainerLogin>
      {isLoading === true ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <p>Carregando...</p>
            <Loader />
          </div>
        </PopupStyle>
      </> : ''}
      {isLoading === false && statusCliente === 200 ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <p>Cliente autenticado com sucesso!</p>
            <div className="botoes">
              <button onClick={() => { navigate('/inventario'); window.location.reload() }}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}
      {isLoading === false && statusCliente === 400 && isEmailCerto === true ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <h2>Senha inválida!</h2>
            <p>Tente novamente</p>
            <div className="botoes">
              <button onClick={() => setStatusCliente(e => 0)}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}
      {isLoading === false && statusCliente1 === 401 && isEmailCerto === false ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <h2>Parece que você não tem um email!</h2>
            <p>Por favor, crie um email!</p>
            <div className="botoes">
              <button onClick={() => { navigate("/manutencao"); window.location.reload() }}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}

    </>
  );
};
