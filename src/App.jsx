import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Buscador from './componentes/Buscador';
import Footer from './componentes/Footer';
import QuienSomos from './componentes/QuienSomos';
import Slider from './componentes/Slider';



function App() {
  return (
    <Router>
       <Buscador /> <Slider /> <QuienSomos/> <Footer/>
     <Routes>
       <Route path="/"> 
       
       </Route>
        
      </Routes>
    </Router>
  );
}

export default App;

