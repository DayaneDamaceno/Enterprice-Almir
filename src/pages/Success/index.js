import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

import sucesso from '../../assets/success.svg';
export default function Success(){
    const history = useHistory();
    setTimeout(()=>{
        history.push('/')
    }, 5000)
    

    return(
        <div className="view">
            <div className="msg">
                <img src={sucesso} alt=""/>
                <h4>Obrigado pela preferencia</h4>
                <p>Em breve entraremos <br/> em contato</p>
            </div>    
        </div>
    )
}