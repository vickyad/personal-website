import React from 'react'
import Text from '../../constants/text_experience'

import './style.css'

const Experience: React.FC = () => {
    return (
        <>
            <h2 id="experiencia">{Text.TITLE}</h2>
            <div className = "experience_info">{Text.INFO}</div>
        </>
    )

}

export default Experience