import React from 'react';
import './Course.css'

const Course = (props) => {
    const {CourseName,image,Price,curenci}= props.course
    return (
        <div className='Corse-all'>
            <h1 className='bg-danger'>{CourseName}</h1>
            <img src={image} className='img-fluid' alt="" />
            <h2>Price:{Price}</h2>
            <h3>{curenci}</h3>

            
        </div>
    );
};

export default Course;