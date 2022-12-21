import React, { useState } from 'react';
import { BotaoVoltar, BoxPedido, ListaPedidos, CardPedido, DeletePedido, BoxButtons } from "./style";
import { useNavigate } from "react-router-dom";
import { PopupRespostaAPI } from '../PopupRespostaAPI';

function TabelaPedidos(props) {
    const navigate = useNavigate();
    const listaPedidos = props.lista;
    const [id, setId] = useState()
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleClick = () => {
        setDeletarPressed(e => false)
    }

    return (
        <>
            {isDeletarPressed ? <PopupRespostaAPI titulo={'pedido'} tipo={'deletarLoad'} status={''} id={id} click={handleClick}/> : ''}
            <BoxPedido>
                <ListaPedidos>               
                       {listaPedidos !== [] ? listaPedidos.map(res => {
                            return <CardPedido key={res.idPedido}>
                                        <p>Id Pedido: {res.idPedido}</p>
                                        <p>Id Cliente: {res.idCliente}</p>
                                        <p>Status: {res.status === true ? 'Ativo' : 'Inativo'}</p>
                                        <p>Data do Pedido: {res.dataPedido}</p>
                                        <p>Data da Entrega: {res.dataEntrega}</p>
                                        <p>Data do Envio: {res.dataEnvio}</p>
                                        <BoxButtons>
                                            <DeletePedido onClick={() => {
                                                setDeletarPressed(e => true);
                                                setId(e => res.idPedido)}}>Excluir</DeletePedido>
                                        </BoxButtons>
                                    </CardPedido>
                        }) : ''}                        
                </ListaPedidos>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxPedido>
        </>
    );
}

export default TabelaPedidos;