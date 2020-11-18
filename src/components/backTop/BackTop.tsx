import React from 'react'

import arrowTop from '../../assets/icons/up-arrow.svg'

import './style.css'

const BackTop: React.FC = () => {
    return (
        <div id="back-top">
            <a href="#topo"><img id="arrow-top" src={arrowTop} width="85%" alt="back to top"/></a>
        </div>
    )
}

export default BackTop