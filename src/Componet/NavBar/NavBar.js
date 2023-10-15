import React from 'react';
import {Link}from 'react-router-dom'
import './NavBar.css'
import { faBars,faFacebook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
    return (
        <div className='Header'>
            <div className="logo col-md-6" >
                <h1>Mohammad Farhad Uddin</h1>

            </div>
            <div className="navbar col-md-6">
                <ul className='nav'>
                    
                    <li><Link to='/home'>Facebook</Link></li>
                    <li><Link to='/home'>Twiter</Link></li>
                    <li><Link to='/home'>Linkedin</Link></li>
                    <li><Link to='/home'>GitHub</Link></li>
                    <li><Link to='/home'>Youtube</Link></li>

                </ul>
               
            </div>
            <FontAwesomeIcon className='icon' icon={faBars} />
           
          
        </div>
    );
};

export default NavBar;