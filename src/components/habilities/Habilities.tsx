import * as React from 'react'

import './style.css'

const Habilities: React.FC = () => {
    return (
        <>
            <h2 id="habilidades">Habilidades</h2>
            <div className="flex-box">
                <div className="div-habilidades">
                    <h4>Linguagens de programação</h4>
                    <p>C</p>
                    <div className="container">
                        <div className="skills c"></div>
                    </div>

                    <p>Python</p>
                    <div className="container">
                        <div className="skills python"></div>
                    </div>

                    <p>JavaScript</p>
                    <div className="container">
                        <div className="skills js"></div>
                    </div>
                </div>

                <div className="div-habilidades">
                    <h4>Design</h4>
                    <p>HTML</p>
                    <div className="container">
                        <div className="skills html"></div>
                    </div>

                    <p>CSS</p>
                    <div className="container">
                        <div className="skills css"></div>
                    </div>

                    <p>Photoshop</p>
                    <div className="container">
                        <div className="skills photoshop"></div>
                    </div>
                </div>

                <div className="div-habilidades">
                    <h3>Outras habilidades</h3>
                    <p>Trabalho em grupo</p>
                    <div className="container">
                        <div className="skills trab-grupo"></div>
                    </div>

                    <p>Organização</p>
                    <div className="container">
                        <div className="skills organizacao"></div>
                    </div>

                    <p>Cozinheira</p>
                    <div className="container">
                        <div className="skills cozinha"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habilities