import * as React from 'react'

import './style.css'

const Header: React.FC = () => {
    return (
        <header id="topo">
            <div className="flex-box column">
                <h1>Olá, mundo! Eu sou a Victória</h1>
                <p>Seja bem-vindo ao meu website. Fique à vontade, a casa é sua</p>
            </div>
        </header>
    )
}

export default Header