import {useNavigate} from "react-router-dom"
import { ContainerLogin, InfoCliente, Perfil, LogOff } from "./style";

export const ClienteLogadoMobile = () => {

  let navigate = useNavigate();
  
  function limparLocalStorage(){
    localStorage.removeItem('idCliente')
    localStorage.removeItem('nomeCliente')
    window.location.reload(true);
  }

  function goToPerfil(){
    navigate("../perfil")
  }


  return(
    <ContainerLogin>
      <InfoCliente>Cliente: {localStorage.getItem('nomeCliente')}</InfoCliente>
      <Perfil onClick={goToPerfil}>Perfil</Perfil>
      <LogOff onClick={limparLocalStorage}>Sair</LogOff>
    </ContainerLogin>
    
  )
}