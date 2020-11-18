import React from 'react'
import Text from '../../constants/text_portifolio'
import ProjectBox from './ProjectBox'

import './style.css'

import mousetrapProject from '../../assets/icons/mouse.png'
import ceresProject from '../../assets/icons/rocket.png'
import dinoProject from '../../assets/icons/dino.png'
import puzzleProject from '../../assets/icons/team-work.svg'

const Portifolio: React.FC = () => {
    return (
        <>
            <h2 id="portifolio">{Text.TITLE}</h2>
            <div className="flex-box">
                <ProjectBox projectIllustration={mousetrapProject} projectDescription={Text.MOUSETRAP_INFO}/>
                <ProjectBox projectIllustration={ceresProject} projectDescription={Text.CERES_INFO}/>
                <ProjectBox projectIllustration={dinoProject} projectDescription={Text.DINO_INFO}/>
                <ProjectBox projectIllustration={puzzleProject} projectDescription={Text.PUZZLE_INFO}/>
            </div>
            <div id="input-descricao"></div>
        </>
    )
}

export default Portifolio