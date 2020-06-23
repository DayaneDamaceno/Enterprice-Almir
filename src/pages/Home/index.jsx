import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './style.css';

import logo from '../../assets/logo.svg';
import citar from '../../assets/citar.svg';
import pintor from '../../assets/Pintor.svg';
import map from '../../assets/map-pin.svg';

import Slideshow from '../../components/SlideImages';

export default function Home() {
    return (
        <div>
            
            <div className="header_main">
                <img src={logo} alt="logo"/>
                <Link to="/orcamento">Solicitar Orçamento</Link> 
            </div>
        
            <div className="container_main">
                <div className="contents">
                    <div className="txt">
                        <span className="name">- Serviços Almir</span>
                        <h1>Melhor serviço <br/> pelo <span>menor preço</span></h1>
                        <p> Conte-nos o que precisa, solicite um orçamento agora, sem compromisso. Decida o que é melhor pra você e para sua casa</p>
                        <Link to="/orcamento">
                            <div className="arrow">
                                <FiArrowRight color="#5D9EFF" size={18}/>
                            </div>
                            Solicitar orçamento
                        </Link>
                    </div>
                </div>
                <div className="contents">
                    <img src={pintor} alt="pintor"/>
                </div>
            </div>
            <div className="sobre">
                <div className="text">
                    <img src={citar} alt="citar"/>
                    <p>
                        Trabalho a mais de 10 anos como pintor e pedreiro, dando cor e vida à casas, comercios e empresas, mantendo o profissionalismo e a qualidade para sempre satisfazer o gosto do cliente.
                        <br/>
                        <span>- Almir Francisco</span>
                    </p>
                </div>
            </div>
            
            <div className="services">
                <div className="service">
                    <p className="title">
                        Pintura
                    </p>
                    <div className="describe">
                        Pintura em geral, incluindo<br/> portas e teto
                    </div>
                </div>
                <div className="service">
                    <p className="title">
                        Pedreiro
                    </p>
                    <div className="describe">
                        Colocação de azulejos <br/>e de piso
                    </div>
                </div>
                <div className="service">
                    <p className="title">
                        Gesso
                    </p>
                    <div className="describe">
                        Colocação de <br/>gesso liso
                    </div>
                </div>
                <div className="service">
                    <p className="title">
                        Pequenos<br/>Reparos
                    </p>
                    <div className="describe">
                        Em elétrica e <br/> hidráulica
                    </div>
                </div>
                
            </div>
            <Link className="btnLink2" to="/orcamento">
                <span>
                    <FiArrowRight className="icon" color="#FFF" size={18}/>
                </span> 
                <p>Solicitar Orçamento</p>         
            </Link>
            <Slideshow/>
            <div className="location">
                <div className="local">
                    <img src={map} alt="local"/>
                    <p>Atendimento em toda SP e na região do ABC</p>
                </div>
            </div>
            <footer>
                <div className="contatos">
                    <h4>Contatos</h4>
                    <p>Telefone: (11)97593-4508</p>
                    <p>servico.almir@gmail.com</p> 
                </div>
                <img src={logo} alt="logo"/>
            </footer>
        
        </div>

    );    
}