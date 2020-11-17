import * as React from 'react'

import doggo from '../images/doggo.gif'

const Sorry: React.FC = () => {
    return (
        <>
            <p> Desculpe os transtornos, esse site ainda está em construção </p>
            <img src={doggo} width="200px" alt="" />
        </>
    );
}

export default Sorry