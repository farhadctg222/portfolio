import React from 'react';
import './ProfileDetails.css'

const ProfileDetails = () => {
   
    const aboute = {
        name:'Aboute Me',
        detail: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem necessitatibus sint vel alias voluptas sunt natus nobis, modi quo, reprehenderit culpa voluptatem quae dolores inventore tempora, doloribus minus nostrum? Quidem incidunt dolores quisquam iure. Cumque earum laudantium illo culpa magnam animi sequi dolor laboriosam tenetur eveniet minus quibusdam officia vero, rem accusamus excepturi perspiciatis, a blanditiis quod debitis necessitatibus ipsum praesentium porro doloribus! Error, molestias. Corrupti soluta sequi non unde libero, obcaecati quae ut nulla ipsum quo autem sit, tempore eveniet, repudiandae nostrum porro! Sint voluptatum tenetur a eius eveniet eos iste praesentium, suscipit aliquam aliquid magni illo voluptate?'
    }
    
    return (
        <div className='ProfileDetails'>
            <div className="propsTitle">
                <h1 id='propsTitle'>{aboute.name}</h1>
                <p>{aboute.detail}</p>
            </div>
          
            
     </div>
   
    )
    }
export default ProfileDetails;