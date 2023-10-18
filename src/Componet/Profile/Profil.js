import React from 'react';
import './Profil.css'

const Profil = () => {
    const aboute = {
        disc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tempore earum at accusamus consequuntur deserunt, a in molestias doloremque, ullam facere iste optio ex sit repudiandae magnam totam, reiciendis quisquam ab beatae quidem obcaecati. Quia sint sit, veniam eligendi ipsum cupiditate iste, architecto facilis quas nesciunt dignissimos minima harum inventore sed sequi nulla ea ullam modi. Quam quia ut voluptas maxime, culpa asperiores quaerat aperiam ipsum ea ratione illo nihil ad doloribus at officia dolorem totam, ab quibusdam earum facere! Dicta fugit eveniet, at suscipit vitae consequatur nemo possimus, et quidem, tempore ducimus sed a ipsam modi officiis nulla nam.',
        name:'aboute me'
    }
  const imges =   {
        imge:'https://lh3.googleusercontent.com/a/ACg8ocKm6a2D368WW-8Qu0q6t3VD04P0ZllqpXCXs9YMdeDuCks=s288-c-no'
    }

 const details =    {
        details:'Details',
        aa: 'fullName',
        fullName:'Mohammad Farhad Uddin',
        age: 23,
       
    }

    return (
        <div className='Profile-head'>
         <div className="profile-name">
         <h1 className='profiles'>Profile</h1>
        
         </div>
         <section className='HeadProfileDetails'>
         <div className="profileDetais col-md-4 col-sm-5">
          <h1 className='aboute'>Aboute Me</h1>
          <p>{aboute.disc}</p>
        </div>
        <div className="imges col-md-4 col-sm-5">
            <img src={imges.imge} alt="" />
        </div>
        <div className="profileDetails col-md-4 col-sm-5">
            <h1>Details</h1>
             <h2><b>FullName:</b><br />{details.fullName}</h2>
             <h2>age: {details.age}</h2>
             <h2 className='sosical'>Social : <a href="">Facebook</a> <a href="">Github</a><a href="">Youtube</a></h2>
        </div>
        </section>
        </div>
    );
};


export default Profil;