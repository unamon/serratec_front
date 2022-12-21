import React, { useState } from 'react';
import { BotaoVoltar, BoxCliente, ListaClientes, CardCliente, DeleteCliente, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";
import { PopupRespostaAPI } from "../../Components/PopupRespostaAPI"

function TabelaClientes(props) {
    const navigate = useNavigate();
    const listaClientes = props.lista;
    const [id, setId] = useState()
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleClick = () => {
        setDeletarPressed(e => false)
    }

    return (
        <>
            {isDeletarPressed ? <PopupRespostaAPI titulo={'cliente'} tipo={'deletarLoad'} status={''} id={id} click={handleClick}/> : ''}
            <BoxCliente>
                <ListaClientes>               
                       {listaClientes !== [] ? listaClientes.map(res => {
                            return <CardCliente key={res.idCliente}>
                                        <p>Id Cliente: {res.idCliente}</p>
                                        <p>Email: {res.email}</p>
                                        <p>Nome Completo: {res.nomeCompleto}</p>
                                        <p>CPF: {res.cpf}</p>
                                        <p>Telefone: {res.telefone}</p>
                                        <p>Data de Nascimento: {res.dataNascimento}</p>
                                        <p>Id Endereço: {res.idEndereco}</p>
                                        <BoxButtons>
                                            <DeleteCliente onClick={() => {
                                                setDeletarPressed(e => true);
                                                setId(e => res.idCliente)}}>Excluir</DeleteCliente>
                                        </BoxButtons>
                                    </CardCliente>
                        }) : ''}                        
                </ListaClientes>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxCliente>
        </>
    );
}

export default TabelaClientes;