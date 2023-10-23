import React from 'react'
import NavBar from '../NavBar/NavBar'
import Profil from '../Profile/Profil'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import Aboute from '../Aboute/Aboute'
function Home() {
  return (
    <div>

  <NavBar></NavBar>
  <Profil></Profil>
<ProfileDetails></ProfileDetails>
<Aboute></Aboute>
    </div>
  )
}

export default Home