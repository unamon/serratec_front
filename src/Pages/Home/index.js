import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { ContainerLogin, Titulo,Text, ContainerTitulo } from "../global-style";
import { AdmButton, Form, FormInput, LoginButton, PopupStyle,RegistroButton, ImageDesktop, ImageMobile, ImageFooter, Geral, Botoes } from "./style";
import { api } from '../../Services/api'
import { DataContext } from "../../Context/data";
import { Loader } from "../../Components/Loader";
import LogoLogin from "../../Images/logoHeritage.png"

import logoBlack from "../../Images/heritageBlack.png"

export const Home = () => {
  const { saveUser, setUserNameAuth} = useContext(DataContext);
  const [statusPessoa, setStatusPessoa] = useState(0)
  const [statusCliente, setStatusCliente] = useState(null)
  const [statusCliente1, setStatusCliente1] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isEmailCerto, setEmailCerto] = useState(false)
  const [pessoaList, setPessoaList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassWord] = useState('');
  let navigate = useNavigate();

  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleLogin = async () =>{
    console.log(username)
    var tokenJwt = null
    
    try{
      const retorno = await api.post('/login', {
        username: username,
        password: password
      })
      setUserNameAuth(username)
      if(retorno){
        tokenJwt = retorno.data
        console.log(retorno.headers.authorization)
        // saveUser(retorno.data)
        navigate(from, {replace: true})
        localStorage.setItem("user",username);
      }
      navigate('/adm')
      console.log(retorno)
    
    }catch(error){
      console.log('erro na autenficação ' , error)
    }
  }
  return (
    <Geral>
      <ContainerTitulo>
      <ImageMobile
          src={LogoLogin}
          alt="Serratec"
        />
        <ImageDesktop
          src={logoBlack}
          alt="Serratec"
        />
         
        <Text>Nossa gestão de patrimonio agora é mais simples</Text>
        <Form>
          <FormInput onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Email" />
          <FormInput  onChange={(e) => setPassWord(e.target.value)} type="password" placeholder="Senha" />
          <div>
            <LoginButton onClick={handleLogin}>Entrar</LoginButton>
          </div>
        </Form>
        {/* <Botoes>
          <AdmButton onClick={gotToAdm}>Login Administração</AdmButton>
          <AdmButton onClick={gotToManu}>Login Manuntenção</AdmButton>
        </Botoes> */}
        <Link to="/registro" style={{textDecoration: "none"}}><RegistroButton>Não tem uma conta? Cadastre-se</RegistroButton></Link>
      </ContainerTitulo>
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
              <button onClick={() => { navigate('../catalogo'); window.location.reload(true) }}>OK</button>
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
              <button onClick={() => setStatusPessoa(e => 0)}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}
      {isLoading === false && statusCliente1 === 401 && isEmailCerto === false ? <>
        <PopupStyle>
          <div className='popup-tela'>
            <h2>Parece que você não esta cadastrado!</h2>
            <p>Por favor, crie um cadastro!</p>
            <div className="botoes">
              <button onClick={() => { navigate("../registro"); window.location.reload(true) }}>OK</button>
            </div>
          </div>
        </PopupStyle>
      </> : ''}

    </Geral>
  );
};

