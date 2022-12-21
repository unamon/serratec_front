import React, { useContext } from "react"
import {useState} from 'react';
import Logo from "../../Images/logoNav.png";
import { NavbarSection, NavbarContainer, NavbarLista, NavbarItem, LinkHome, NomeLogo, ButtonLogin, MenuOption, MenuOptionLogin } from "./style";
import { ClienteLogado } from "../ClienteLogado";
import "./style.css"
import {Link} from "react-router-dom"
import { ClienteLogadoMobile } from "../ClienteLogadoMobile";
import { DataContext } from "../../Context/data";

//import da imagem
import logo2 from "../../Images/serratec2.png"

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { logout } = useContext(DataContext)


  function activeMenu() {
    setIsActive(current => !current);
  }

  return (
    <>
    <NavbarSection>
      <NavbarContainer>
        <Link to="/" style={{textDecoration: "none"}}>
          <LinkHome>
            <img src={Logo} alt="logo" width="80px" />
            <NomeLogo>
            
            </NomeLogo> 
          </LinkHome>
        </Link>
          
        <NavbarLista>    
        <Link to="/inventario" style={{textDecoration: "none"}}><NavbarItem>Inventário</NavbarItem></Link>
          <Link to="/adm" style={{textDecoration: "none"}}><NavbarItem>Administração</NavbarItem></Link>
          <Link to="/manutencao" style={{textDecoration: "none"}}><NavbarItem>Manutenção</NavbarItem></Link>      
          <img src={logo2} />

        </NavbarLista>


        <div id="navMenu" className={isActive? 'active': ''}>
          <div id="menu-options">
          {localStorage.getItem('idCliente') !== null ? <ClienteLogadoMobile/> : ''}
          <button onClick={logout}>
            logout
          </button>
          </div>
        </div>
      </NavbarContainer>
    </NavbarSection>
    </>
  )
}
