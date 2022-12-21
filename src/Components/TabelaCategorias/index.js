import React, { useState } from 'react';
import { BotaoVoltar, BoxButtons, BoxCategoria, CardCategoria, DeleteCategoria, EditCategoria, ListaCategorias } from "./style";
import { useNavigate } from "react-router-dom";
import { EditarCategoria } from '../EditarCategoria';
import {PopupRespostaAPI} from "../../Components/PopupRespostaAPI"

export const TabelaCategorias = (props) => {
    const navigate = useNavigate();
    const listaCategorias = props.lista;
    const [id, setId] = useState()
    const [isEditado, setEditado] = useState(false);
    const [isDeletarPressed, setDeletarPressed] = useState(false)

    const handleEditar = () => {
        setEditado(!isEditado)
    }

    const handleClickDeletar = () => {
        setDeletarPressed(e => false)
    }

    return (
        <>
            {isEditado? <EditarCategoria clickFechar={handleEditar} id={id} categoria={listaCategorias.filter(c => c.idCategoria === id)[0]}/> : ''}
            {isDeletarPressed ? <PopupRespostaAPI titulo={'categoria'} tipo={'deletarLoad'} status={''} id={id} click={handleClickDeletar}/> : ''}
            <BoxCategoria>
                <ListaCategorias>               
                       {listaCategorias !== [] ? listaCategorias.map(res => {
                            return <CardCategoria key={res.idCategoria}>
                                        <p>Id Categoria: {res.idCategoria}</p>
                                        <p>Nome da Categoria: {res.nomeCategoria}</p>
                                        <p>Descrição da Categoria: {res.descricaoCategoria}</p>
                                        <p>Imagem da Categoria: {res.imagemCategoria}</p>
                                        <BoxButtons>
                                            <EditCategoria onClick={() => {setEditado(!isEditado); setId(e => res.idCategoria)}}>Editar</EditCategoria>
                                            <DeleteCategoria onClick={()=> {
                                                setDeletarPressed(e => true);
                                                setId(e => res.idCategoria)
                                            }}>Excluir</DeleteCategoria>
                                        </BoxButtons>
                                    </CardCategoria>
                        }) : ''}                        
                </ListaCategorias>
                <BotaoVoltar>
                    <button onClick={() => navigate("/painel_administrativo")}>
                        Voltar
                    </button>
                </BotaoVoltar>
            </BoxCategoria>
        </>
    );
}