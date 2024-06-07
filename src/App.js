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





const App = () => {
  return (
   
    <Router>
    <Navbar />
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Business" element={<Business />} />
    <Route path="/Entertainment" element={<Entertainment />} />
    <Route path="/Health" element={<Health />} />
    <Route path="/Science" element={<Science />} />
    <Route path="/Sports" element={<Sports />} />
    <Route path="/Technology" element={<Technology />} />
    </Routes>
    </Router>

      
    
  );
}

export default App;
