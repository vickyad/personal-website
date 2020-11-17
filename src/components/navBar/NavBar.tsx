import React from 'react'
import Text from '../../constants/text_general'

import './style.css'

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a className="navegacao" href="#sobre-mim">{Text.ABOUT_ME_TITLE}</a></li>
                <li><a className="navegacao" href="#habilidades">{Text.HABILITIES_TITLE}</a></li>
                <li><a className="navegacao" href="#portifolio">{Text.PORTIFOLIO_TITLE}</a></li>
                <li><a className="navegacao" href="#experiencia">{Text.EXPERIENCE_TITLE}</a></li>
            </ul>
        </nav>
    )
}

export default NavBar