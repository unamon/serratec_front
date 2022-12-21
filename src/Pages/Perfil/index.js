import React, {useEffect, useState} from "react";
import { Container, Titulo } from "../global-style";
import { CardCliente, BoxButtons, EditCliente, EditEndereco, EditPassword } from './style'
import { EditarCliente } from '../../Components/EditarCliente'
import { EditarEndereco } from '../../Components/EditarEndereco'
import { EditarPassword } from '../../Components/EditarPassword'
import {api} from '../../Services/api'
import { CardPedidoPerfil } from "../../Components/CardPedidosPerfil";

export const Perfil = () => {

  const [cliente, setCliente] = useState({});
  const [endereco, setEndereco] = useState({})
  const [pedidos, setPedidos] = useState([{}])

  const [id, setId] = useState()
  const [isEditadoDados, setEditadoDados] = useState(false);
  const [isEditadoEndereco, setEditadoEndereco] = useState(false);
  const [isEditadoPassword, setEditadoPassword] = useState(false);

  const handleEditarDados = () => {
      setEditadoDados(!isEditadoDados)
  }

  const handleEditarEndereco = () => {
    setEditadoEndereco(!isEditadoEndereco)
  }

  const handleEditarPassword = () => {
    setEditadoPassword(!isEditadoPassword)
  }  

  async function carregarAPI() {

    const responseCliente = await api.get(`cliente/${localStorage.getItem('idCliente')}`)
    setCliente(responseCliente.data)
    
    const responseEndreco = await api.get(`endereco/${responseCliente.data.idEndereco}`)
    setEndereco(responseEndreco.data)

    const responsePedidos = await api.get(`pedido/cliente/${localStorage.getItem('idCliente')}`)
    setPedidos(responsePedidos.data)
  }

    useEffect(() => {
      carregarAPI();    
    }, []);


    return (
      <Container>
        {isEditadoDados? <EditarCliente clickFechar={handleEditarDados} cliente={cliente}/> : ''}
        {isEditadoEndereco? <EditarEndereco clickFechar={handleEditarEndereco} endereco={endereco}/> : ''}
        {isEditadoPassword? <EditarPassword clickFechar={handleEditarPassword} cliente={cliente}/> : ''}
        <Titulo>Perfil Aluno</Titulo>
        <CardCliente>
          <p>Nome Completo: {cliente.nomeCompleto}</p>
          <p>Email: {cliente.email}</p>
          <p>Cpf: {cliente.cpf}</p>
          <p>Telefone: {cliente.telefone}</p>
          <p>Data de Nascimento: {cliente.dataNascimento}</p>
          <p>Cep: {endereco.cep}</p>
          <p>Rua: {endereco.rua}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.cidade}</p>
          <p>Numero: {endereco.numero}</p>
          <p>Complemento: {endereco.complemento}</p>
          <p>UF: {endereco.uf}</p>
          <BoxButtons>
            <EditCliente onClick={() => {setEditadoDados(!isEditadoDados)}}>Editar Dados</EditCliente>
            <EditEndereco onClick={() => {setEditadoEndereco(!isEditadoEndereco)}}>Editar Endereço</EditEndereco>
            <EditPassword onClick={() => {setEditadoPassword(!isEditadoPassword)}}>Alterar Senha</EditPassword>
        </BoxButtons>
        </CardCliente>
        <Titulo>Meus Pedidos</Titulo>
        <CardPedidoPerfil lista={pedidos}/>
      </Container>
    );
  };  
