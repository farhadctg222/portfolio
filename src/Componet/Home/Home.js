import React from 'react'
import NavBar from '../NavBar/NavBar'
import Profil from '../Profile/Profil'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import Aboute from '../Aboute/Aboute'
import Foter from '../Foter/Foter'
import Menubar from '../MenuBar/Menubar'
function Home() {
  return (
    <div>
      <Menubar></Menubar>

  <NavBar></NavBar>
  <Profil></Profil>
<ProfileDetails></ProfileDetails>
<Aboute></Aboute>
<Foter></Foter>
    </div>
  )
}

export default Home