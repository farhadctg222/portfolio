import React from 'react';
import { useParams } from 'react-router-dom';
import './Description.css'

const Description = () => {
    const {detail}= useParams()
    return (
        <div>
            <h1 className='detailsAll'>name{detail}</h1>
            
        </div>
    );
};

export default Description;