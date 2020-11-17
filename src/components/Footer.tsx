import React from 'react'
import Text from '../constants/text_general'

const Footer: React.FC = () => {
    return(
        <footer id="rodape">
            <p>{Text.FOOTER_MESSAGE}</p>
        </footer>
    )
}

export default Footer