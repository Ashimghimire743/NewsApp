import React from 'react';
import { NavLink } from 'react-router-dom';
import picture from "../image/newslogo.svg"
const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div className="container mx-auto px-4 py-2 flex justify-center">
                <a href="#" className="text-3xl font-bold text-white">The News App</a>
            </div>
            <div className="bg-indigo-200">
                <div className="flex items-center mx-2 py-8 gap-72">
                <img className="h-16 w-16" src={picture} alt="Ashim" />
                    <div className="flex justify-center font-semibold text-2xl text-black space-x-5">
                        <NavLink to="/Home" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'} >
                            Home
                        </NavLink>
                        <NavLink  to="/Business" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Business
            </NavLink>
            <NavLink 
              to="/Entertainment" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Entertainment
            </NavLink>
            <NavLink 
              to="/Health" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Health
            </NavLink>
            <NavLink 
              to="/Science" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Science
            </NavLink>

            <NavLink 
              to="/Sports" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
              Sports
            </NavLink>

            <NavLink 
              to="/Technology" 
              className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}
            >
             Technology
            </NavLink>
           
          </div>
          
     </div>
            </div>
        </nav>
    );
};

export default Navbar;