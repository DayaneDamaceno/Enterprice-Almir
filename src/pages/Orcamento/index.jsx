import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import * as emailjs from 'emailjs-com'

import './style.css';
import logo from '../../assets/logo.svg'

export default function Orcamento() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [describe, setDescribe] = useState("");

    function handleMask(e){
        setWhatsapp(e.replace(/\D/g, ""));
        setWhatsapp(e.replace(/^(\d{0})(\d{2})(\d{5})(\d)/, "$1($2)$3-$4"));
    }
        
    console.log(whatsapp);
    var templateParams = {
        name,
        email,
        whatsapp,
        describe
    }; 
    
    
     
    async function handleOrcamento(e){
        
        e.preventDefault();

        emailjs.send('gmail', 'template_FgYnXogw', templateParams, 'user_lbhmlrYBFqDvGAgJEHFNe')
        .then(function(response) {
            history.push('/success'); 
            
        }, function(error) {
            alert("Ocorreu um erro, tente novamente.")
            console.log('FAILED...', error);
        });
    }
    
    return (
        <div>
            
            <div className="header">
                <img src={logo} alt="logo"/>
                <Link className="backHome" to="/">
                    <FiArrowLeft color="#5D9EFF" size={18}/>
                    <p>Voltar para Home</p>
                </Link> 
            </div>
            <main>
                <form onSubmit={handleOrcamento} method="POST">
                    <h3>Solicitar Orçamento</h3>
                    <p>Preencha todos os campos</p>
                    
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Insira seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    /> <br/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="example@hotmail.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        
                    /> <br/>

                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input type="text" name="whatsapp" placeholder="(11)11111-1111" maxLength="14"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        onKeyUp={(e)=>{handleMask(e.target.value)}}
                        required    
                    /> <br/>

                    <label htmlFor="desc">Descrição</label>
                    <textarea name="desc" cols="30" rows="10" placeholder="Descreva um pouco sobre o serviço que deseja, ou deixe alguma observação"
                        value={describe}
                        onChange={e => setDescribe(e.target.value)}
                        required
                    />

                    <button type="submit" value="Enviar">Enviar</button>
                </form>
            </main>
        </div>
    );    
}