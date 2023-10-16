import React from 'react';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
      <div className="header">

       <div className="nav">

       <div className="logo col-md-5">

        <h1>Md Farhad</h1>
       </div>
       <div className="navBar col-md-5">
        <ul className='navBars'>
           <li><a href="">github</a></li>
           <li><a href="">facebook</a></li>
           <li><a href="">twiter</a></li>
           <li><a href="">whatsUp</a></li>
           <li><a href="">Linkedin</a></li>
         <li><a href="">Youtube</a></li>
        </ul>
       </div>

      
       <div className="font">
       <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>



       </div>
       </div>

      </div>
    );
};

export default NavBar;
