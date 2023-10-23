import React from 'react';
import Course from '../Course/Course';
import './Aboute.css'

const Aboute = () => {
    const AddCourse = [{
        CourseName: 'Web Design',
        image: 'https://i.ibb.co/c1SVkk2/1234.jpg',
        priceName: 'Course fee',
        curenci:'BD',
        Price:9000
    },

        {
        CourseName: 'Web Devlopment',
        image: 'https://i.ibb.co/VMMMFvJ/12345.jpg',
        priceName: 'Course fee',
        curenci:'BD',
        Price: 15000  
        },

        {
        CourseName: 'Graphics Design',
        image: 'https://i.ibb.co/Ksj140t/123.jpg',
        priceName: 'Course fee',
        curenci:'BD',
        Price: 5000  
        }
      ]
    return (
        <div className='CourseDetails'>
            {
                AddCourse.map(pd=><Course course={pd}key={pd.name}></Course>)
            }
            
        </div>
    );
};

export default Aboute;