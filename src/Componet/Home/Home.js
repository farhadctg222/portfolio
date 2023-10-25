import React from 'react'
import NavBar from '../NavBar/NavBar'
import Profil from '../Profile/Profil'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import Aboute from '../Aboute/Aboute'
import Foter from '../Foter/Foter'
import SkrillDev from '../SkrillDev/SkrillDev'
function Home() {
  return (
    <div>

  <NavBar></NavBar>
  <Profil></Profil>
<ProfileDetails></ProfileDetails>
<Aboute></Aboute>
<SkrillDev></SkrillDev>
<Foter></Foter>
    </div>
  )
}

export default Home