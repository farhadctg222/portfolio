import React from 'react';
import './NavBar.css'
import image from './../../handsome-male-entrepreneur-using-laptop.jpg'

const NavBar = () => {

  return (
    <div className='head'>
      <div className="heading col-md-6 col-sm-4 col-lg-6">
        <h1>Mohammad Farhad Uddin</h1>
        <h3>Hi, I am <b>farhad</b> and I work as a web developer. I am a software engineer who loves to create websites as well as apps for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.</h3>
        <button>Hire Me</button>
        </div>

   
  
      <div className="img-head col-md-6 col-sm-4 col-lg-6">
        <img src={image} alt="" />
      </div>
      <h1>wel come my website</h1>
      
    </div>
  );
};

export default NavBar;
