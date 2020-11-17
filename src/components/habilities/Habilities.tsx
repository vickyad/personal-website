import React from 'react'
import Text from '../../constants/text_habilities'

import './style.css'

const Habilities: React.FC = () => {
    return (
        <>
            <h2 id="habilidades">{Text.TITLE}</h2>
            <div className="flex-box">
                <div className="div-habilidades">
                    <h4>{Text.PROGRAMMING_SECTION}</h4>
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
                    <h4>{Text.DESIGN_SECTION}</h4>
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
                    <h3>{Text.OTHERS_SECTION}</h3>
                    <p>{Text.TEAMWORK}</p>
                    <div className="container">
                        <div className="skills trab-grupo"></div>
                    </div>

                    <p>{Text.ORGANIZATION}</p>
                    <div className="container">
                        <div className="skills organizacao"></div>
                    </div>

                    <p>{Text.COOKING}</p>
                    <div className="container">
                        <div className="skills cozinha"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habilities