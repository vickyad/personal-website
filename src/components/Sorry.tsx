import React from 'react'
import Text from '../constants/text_general'

import doggo from '../images/doggo.gif'

const Sorry: React.FC = () => {
    return (
        <>
            <p>{Text.SORRY_MESSAGE}</p>
            <img src={doggo} width="200px" alt="" />
        </>
    );
}

export default Sorry