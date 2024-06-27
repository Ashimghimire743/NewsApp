import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import picture from "../image/newslogo.svg";

const Navbar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Assuming you have a function to handle the search query
        props.setSearchQuery(searchQuery)
    };

    return (
        <nav className="bg-sky-900">
            <div className="container px-4 py-2 md:px-8 flex flex-wrap items-center justify-between">
                <a href="#" className="font-bold text-2xl md:text-5xl bg-gradient-to-r from-indigo-50 via-orange-100 to-red-600 text-transparent bg-clip-text w-full md:w-auto text-center md:text-right">
                    The News App
                </a>
                <div className='flex flex-col md:flex-row items-center justify-center md:w-auto mt-4 md:mt-0'>
                    <div className='w-full md:w-auto'>
                        <select
                            value={props.country}
                            onChange={(e) => props.setCountry(e.target.value)}
                            className="p-2 border border-rose-500 w-full md:w-auto" >
                            {/* Options */}
                            <option value="au">Australia</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="be">Belgium</option>
                            <option value="bg">Bulgaria</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="ch">Switzerland</option>
                            <option value="cn">China</option>
                            <option value="co">Columbia</option>
                            <option value="cu">Cuba</option>
                            <option value="cz">Czech Republic</option>
                            <option value="de">Germany</option>
                            <option value="eg">Egypt</option>
                            <option value="fr">France</option>
                            <option value="gb">United Kingdom</option>
                            <option value="gr">Greece</option>
                            <option value="hk">Hong Kong</option>
                            <option value="hu">Hungary</option>
                            <option value="in">India</option>
                            <option value="id">Indonesia</option>
                            <option value="ie">Ireland</option>
                            <option value="il">Israel</option>
                            <option value="it">Italy</option>
                            <option value="jp">Japan</option>
                            <option value="kr">South Korea</option>
                            <option value="lt">Lithuania</option>
                            <option value="lv">Latvia</option>
                            <option value="ma">Morocco</option>
                            <option value="mx">Mexico</option>
                            <option value="my">Malaysia</option>
                            <option value="ng">Nigeria</option>
                            <option value="nl">Netherlands</option>
                            <option value="no">Norway</option>
                            <option value="nz">New Zealand</option>
                            <option value="ph">Philippines</option>
                            <option value="pl">Poland</option>
                            <option value="pt">Portugal</option>
                            <option value="ro">Romania</option>
                            <option value="rs">Serbia</option>
                            <option value="ru">Russia</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="se">Sweden</option>
                            <option value="sg">Singapore</option>
                            <option value="si">Slovenia</option>
                            <option value="sk">Slovakia</option>
                            <option value="th">Thailand</option>
                            <option value="tr">Turkey</option>
                            <option value="tw">Taiwan</option>
                            <option value="ua">Ukraine</option>
                            <option value="ae">United Arab Emirates</option>
                            <option value="us">Usa</option>
                            <option value="ve">Venezuela</option>
                            <option value="za">South Africa</option>
                        </select>
                    </div>
                    <form onSubmit={handleSearchSubmit} className="w-full md:w-auto flex justify-center md:ml-4 mt-4 md:mt-0">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="p-2 border border-rose-500 w-full md:w-auto"
                        />
                        <button type="submit" className="p-2 bg-rose-500 text-white">Search</button>
                    </form>
                </div>
            </div>
            <div className="bg-indigo-200 px-4 md:px-8">
                <div className="flex flex-wrap items-center justify-center md:justify-end py-4">
                    <div className="mr-4">
                        <img className="h-16 w-auto" src={picture} alt="News Logo" />
                    </div>
                    <div className="flex justify-center md:justify-start font-semibold text-xl bg-gradient-to-r from-orange-700 via-blue-900 to-rose-800 text-transparent bg-clip-text space-x-5">
                        <NavLink to="/Home" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Home
                        </NavLink>
                        <NavLink to="/Business" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Business
                        </NavLink>
                        <NavLink to="/Entertainment" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Entertainment
                        </NavLink>
                        <NavLink to="/Health" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Health
                        </NavLink>
                        <NavLink to="/Science" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Science
                        </NavLink>
                        <NavLink to="/Sports" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Sports
                        </NavLink>
                        <NavLink to="/Technology" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Technology
                        </NavLink>
                        <NavLink to="/Weather" className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'hover:border-b-2 border-black'}>
                            Weather
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
