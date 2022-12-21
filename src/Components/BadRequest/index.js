import React from 'react';
import { BoxBadStyle } from './style';

function BadRequest(props) {
    return (
        <>
            <BoxBadStyle>
                <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-bad-material-image_2281191.jpg" alt='problema'></img> 
                <div className='mensagemErro'>
                    <h1>Alguma coisa deu errado</h1>
                    <p>Os desenvolves estão trabalhando duro para fazer tudo voltar ao normal</p> 
                </div>
                
            </BoxBadStyle>
           
        </>
    );
}

export default BadRequest;