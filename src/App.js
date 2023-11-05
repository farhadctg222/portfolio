import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Componet/Home/Home';
import Description from './Componet/Description/Description';


function App() {
  return (
  <BrowserRouter>
 
  <Routes>
   <Route path={"/description/:detail"} element={<Description></Description>}/>
   <Route path='/' element={<Home></Home>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
