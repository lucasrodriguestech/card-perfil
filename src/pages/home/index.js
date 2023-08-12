import React from "react";
import fotoLucas from '../../assets/lucas de preto quadrada.png';

import './styles.css';

function Home () {
    return (
        <div className="card">
            <img src={fotoLucas} alt="Lucas"/>  
            <div>
                <h2>Lucas Rodrigues</h2>
                <h3>Desenvolvedor Web - Full Stack</h3>
                 

                <nav className="buttons"> 
                    <a target="blank" rel="external" href={'https://instagram/lucasrodriigues13'}><button  className="primary">Instagram</button></a>
                    <a target="blank" rel="external" href={"https://github.com/lucasrodriguestech"}><button>Github</button> </a>
                </nav>
            </div>                
        </div>
    )
}

export default Home;