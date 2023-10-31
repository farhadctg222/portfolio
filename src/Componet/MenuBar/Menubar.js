import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <div class="menu-toggle" id="menu-toggle">&#9776;</div>
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