import React from 'react';
import './Course.css'
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {CourseName,detail,image,Price,curenci}= props.course
    return (
        <div className='Corse-all'>
          <Link to='/description:detail'> <h5 className='bg-danger'>{CourseName}</h5></Link> 
            <img src={image} className='img-fluid' alt="" />
            <h5>Price:{Price} BD</h5>
            
            <button className='btn-success'style={{width:'200px',border: 'none'}} >Enrollment</button>
        




            
        </div>
    );
};

export default Course;