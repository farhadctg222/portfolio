import React from 'react';
import './NavBar.css'
import image from './../../handsome-male-entrepreneur-using-laptop.jpg'

const NavBar = () => {

  return (
    <div className='head'>
      <div className="heading">
        <h1 className='title'>I'm Farhad Uddin</h1>
        <p>Hi, I am <b>farhad</b> and I work as a web developer. I am a software engineer who loves to create websites as well as apps for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.</p>
        <button>Hire Me</button>
        </div>

   
  
      <div className="img-head">
        <img src={image} alt="" />
      </div>

      
    </div>
  );
};

export default NavBar;
