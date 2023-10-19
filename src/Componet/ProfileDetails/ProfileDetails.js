import React from 'react';
import './ProfileDetails.css'

const ProfileDetails = () => {
 const justify = {
    textAlign:'justify',
    margin:'10px '
 }
   
    
    return (
        <div className='ProfileDetails'>
            <div className="propsTitle">
                <h1 id='propsTitle'>Whate is MERN Stack?</h1>
                <p style={justify}>MERN Stack is a collection of powerful technologies and robust, used to develop scalable master web applications comprising backend, front-end, and database components. It is JavaScript that is used for the faster and easier development of full-stack web applications. MERN Stack is a technology that is a user-friendly full-stack JavaScript framework for building applications and dynamic websites.<br></br>MERN Stack consists of four main components or can say four main technologies:</p>
               
                <img src="" alt="" />
                <ul>
                <ol>
               
                <li> <b>M</b> stands for MongoDB ( Database ), mainly used for preparing document database and is a NoSQL (Non-Structured Query Language ) Database System</li>
               
                    <li>

                    <b> E </b> stands for Express, mainly used for developing Node.js web framework
                    </li>
                
              
                    <li>
                    <b>R</b> stands for React, mainly used for developing a client-side JavaScript framework
                    </li>
               
              
                    <li>
                    <b>N</b> stands for js, mainly used for developing the premier JavaScript web server
                    </li>
                </ol>
                </ul>
                <p style={justify}>Each of these four technologies plays an important role in providing an end-to-end framework for the developers. Even these four technologies play an important role in the development process of web applications.<br></br><br></br><br></br>Before MERN stack, it was earlier named as MEAN stack, MERN Stack is one of the variations of MEAN, here MEAN is also comprises of four components or say four different technologies, i.e., M is for MongoDB, ' E ' is for Express, ' A ' is for Angular.js, and ' N ' is for Node, here if you will observe, then you can identify that in MEAN, ' A ', i.e., Angular.js is replaced by ' R ', i.e., React.js in MERN, the main reason behind is - MERN Stack is mainly used for faster development of smaller applications as compared with MEAN, MEAN stack is a mainly better option for large-scale applications. Still, it takes more time for the development of smaller applications. They also both have different structures comparatively. </p>
               
            </div>
          
            
     </div>
   
    )
    }
export default ProfileDetails;