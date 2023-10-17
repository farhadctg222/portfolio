import React from 'react';
import './NavBar.css'
import {Link}from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const handle = ()=>{
     const dd =    document.getElementById('navBar')
     dd.innerHTML = `<h1>hellow world</h1>`
    }
    return (
      <div className="header">

       <div className="nav">

       <div className="logo col-md-5">

        <h1>Md Farhad</h1>
       </div>
       <div className="navBar col-md-5">
        <ul className='navBars' id='navBars'>
           <li><a href="">github</a></li>
           <li><a href="">facebook</a></li>
           <li><a href="">twiter</a></li>
           <li><a href="">whatsUp</a></li>
           <li><a href="">Linkedin</a></li>
        </ul>
       </div>

      
       <div className="font">
       <Link to='/a' id='navBar'  onClick={handle}> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></Link>



       </div>
       </div>

      </div>
    );
};

export default NavBar;