import React from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
    const {detail}= useParams()
    return (
        <div>
            <h1>{detail}</h1>
            
        </div>
    );
};

export default Description;