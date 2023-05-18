import './reset.css'  
import Products from "./Pages/Products/index.js"

import { Route, Routes } from "react-router-dom";
import Basket from './Pages/Basket';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element = {<Products/>}/>
        <Route path = "/Basket" element = {<Basket/>}/>
        <Route path = "/Products" element = {<Products/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
