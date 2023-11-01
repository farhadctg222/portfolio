import React from 'react';
import './Menubar.css'
import { Link } from 'react-router-dom';

const Menubar = () => {
    const navber = ()=>{
       const ddd = document.getElementById('ddddd')
       ddd.innerHTML = `document.getElementById('menu-bar')`
    }

   
    return (
        <div>
          <div class="menu-toggle" id="menu-toggle">
            <div className="menubarsIcon" id='ddddd' onClick={navber}>
            <Link class="menuBar">&#9776;</Link></div>
            <div className="mdfarhad"><h3>mdfarhad</h3>
          
         
          
          </div>
          
          </div>
        <div class="menu-bar" id="menu-bar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>



                

            </ul>
        </div>
        </div>
    );
};

export default Menubar;
