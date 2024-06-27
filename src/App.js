import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Business from './components/Business';
import Entertainment from './components/Entertainment';
import Health from './components/Health';
import Science from './components/Science';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Weather from './components/Weather';
import Footer from './components/Footer';


const App = () => {
  const [country, setCountry] = useState("us");
  const [searchQuery,setSearchQuery] =  useState("");
 
  console.log(country); 

  return (
    // <div className={darkMode ? 'dark' : ''}>
        <Router>
        
        <Navbar setCountry={setCountry} country={country} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
         <Routes>
          <Route path="/Home" element={<Home country={country} searchQuery={searchQuery} />} />
          <Route path="/Business" element={<Business country={country} searchQuery={searchQuery} />} />
          <Route path="/Entertainment" element={<Entertainment country={country} searchQuery={searchQuery} />} />
          <Route path="/Health" element={<Health country={country} searchQuery={searchQuery} />} />
          <Route path="/Science" element={<Science country={country} searchQuery={searchQuery} />} />
          <Route path="/Sports" element={<Sports country={country}  searchQuery={searchQuery}/>} />
          <Route path="/Technology" element={<Technology country={country} searchQuery={searchQuery}/>} />
          <Route path="/Weather" element={<Weather />} />
        
        </Routes>
        <Footer/>
      </Router>
    // </div>
   
  );
}

export default App;
