import './reset.css'  
import Products from "./Pages/Products/index.js"

import { Route, Routes } from "react-router-dom";
import Basket from './Pages/Basket';
import OneProduct from './Pages/OnePruduct'
import Registration from './Pages/SingIn'
import Login from './Pages/Aut'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element = {<Login/>}/>
        <Route path = "/Basket" element = {<Basket/>}/>
        <Route path = "/Registration" element = {<Registration/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Products" element = {<Products/>}/>
        <Route path = "/OneProduct" element = {<OneProduct/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
