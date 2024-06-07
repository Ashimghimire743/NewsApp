import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import  Health from './components/Health';
import Science from './components/Science';
import Sports from './components/Sports';
import Technology from './components/Technology';
import { useState } from 'react';



const App = () => {
  const [country, setCountry] = useState("us");
  console.log(country); 
  return (
   
    <Router>
    <Navbar setCountry={setCountry} country={country}/>
    <Routes>
    <Route path="/Home" element={<Home country={country}/>} />
    <Route path="/Business" element={<Business country={country} />} />
    <Route path="/Entertainment" element={<Entertainment country={country} />} />
    <Route path="/Health" element={<Health country={country} />} />
    <Route path="/Science" element={<Science country={country} />} />
    <Route path="/Sports" element={<Sports country={country} />} />
    <Route path="/Technology" element={<Technology country={country} />} />
    </Routes>
    </Router>

      
    
  );
}

export default App;
