import * as React from 'react'

import './style.css'

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a className="navegacao" href="#sobre-mim">Sobre mim</a></li>
                <li><a className="navegacao" href="#habilidades">Habilidades</a></li>
                <li><a className="navegacao" href="#portifolio">Portifolio</a></li>
                <li><a className="navegacao" href="#experiencia">Experiência</a></li>
            </ul>
        </nav>
    )
}

export default NavBar