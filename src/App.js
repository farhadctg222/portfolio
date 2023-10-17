import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Componet/Home/Home';
import NavBar from './Componet/NavBar/NavBar';
import Profil from './Componet/Profile/Profil';

function App() {
  return (
  <BrowserRouter>
 <NavBar></NavBar>
 <Profil></Profil>
  <Routes>
   <Route></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
