import React, {useState, useContext} from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Registro } from '../Pages/Registro'
import { RequiredAuth } from '../Hooks/RequiredAuth'

import PainelManutencao from '../Pages/PainelManutencao'
import ManuPedido from '../Pages/ManuPedido'
import { Carrinho } from '../Pages/Carrinho'
import { Inventario } from '../Pages/Inventario'
import PainelAdministrativo from '../Pages/PainelAdministrativo'
import { ManutencaoNova } from '../Pages/ManutencaoNova'

import { DataProvider, DataContext } from '../Context/data'
import { useEffect } from 'react'

export const Root = () => {
  const { saveUser, username } = useContext(DataContext)
  const [teste, setTeste] = useState('')

  const Private = ({children}) =>{
    const recorverdUser = localStorage.getItem('user')
    console.log("username nas rotas " + recorverdUser)
    console.log("username role " + recorverdUser.role)
    // if(loading){
    //   return <div clasName="loading">Carregando...</div>
    // }

    
    if( recorverdUser !== "silvana@serratec.com.br") {
       return <Navigate to="/"/>
      
    }
    <Navigate to='/adm' />
    return children
  }

  // useEffect(() =>{
  //   const recorverdUser = localStorage.getItem('user')
  //   setTeste(JSON.stringify(recorverdUser))
  // },[])

  return(
    <DataProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/manutencao" element={<ManutencaoNova />} />
          <Route path="/adm" element={<PainelAdministrativo /> } />
          <Route path="/inventario" element={<Private><Inventario /></Private>} />
        <Route path="/painel_manutencao" element={<PainelManutencao />} />
        <Route path="/painel_manutencao/pedido" element={<ManuPedido />} />
        <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  </DataProvider>
  )
  
}
