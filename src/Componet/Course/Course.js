import React from 'react';
import './Course.css'

const Course = (props) => {
    const {CourseName,image,Price,curenci}= props.course
    return (
        <div className='Corse-all'>
            <h5 className='bg-danger'>{CourseName}</h5>
            <img src={image} className='img-fluid' alt="" />
            <h5>Price:{Price}</h5>
            <h5>{curenci}</h5>

            
        </div>
    );
};

export default Course;