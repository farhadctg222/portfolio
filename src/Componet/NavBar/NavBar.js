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
=======
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
      <div className="img-head col-md-6 col-sm-4 col-lg-6">
        <img src={image} alt="" />
      </div>
      
    </div>
  );
};

export default NavBar;
