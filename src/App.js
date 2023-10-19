import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Componet/Home/Home';
import Foter from './Componet/Foter/Foter';


function App() {
  return (
  <BrowserRouter>
  <Home></Home>
  <Foter></Foter>
  <Routes>
   <Route></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
