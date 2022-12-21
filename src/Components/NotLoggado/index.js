import React from 'react';
import { BoxBadStyle } from './style';

function NotLoggado(props) {
    return (
        <>
            <BoxBadStyle>
                <img src="https://media.istockphoto.com/id/1203564670/pt/vetorial/electric-socket-with-a-plug-vector-icon.jpg?s=170667a&w=0&k=20&c=pxTU_7RreJ9aLlOiiWHWdNg4xx6scpglW8DlcSQ6tvA=" alt='tomada'></img> 
                <div className='mensagemErro'>
                    <h1>Ainda não fez o login?</h1>
                    <p>Faça login para solicitar seu empréstimo!</p> 
                </div>
                
            </BoxBadStyle>
           
        </>
    );
}

export default NotLoggado;