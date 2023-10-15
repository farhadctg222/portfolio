import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Componet/Home/Home';
import NavBar from './Componet/NavBar/NavBar';

function App() {
  return (
  <BrowserRouter>
 <NavBar></NavBar>
  <Routes>
   <Route></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
