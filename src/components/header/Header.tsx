import React from 'react'
import Text from '../../constants/text_general'

import './style.css'

const Header: React.FC = () => {
    return (
        <header id="topo">
            <div className="flex-box column">
                {Text.HEADER_TEXT}
            </div>
        </header>
    )
}

export default Header