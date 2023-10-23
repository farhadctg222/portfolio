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
                    <b>N</b> stands for Node.js, mainly used for developing the premier JavaScript web server
                    </li>
                </ol>
                </ul>
                <p style={justify}>Each of these four technologies plays an important role in providing an end-to-end framework for the developers. Even these four technologies play an important role in the development process of web applications.</p>
               
            </div>
          
            
     </div>
   
    )
    }
export default ProfileDetails;