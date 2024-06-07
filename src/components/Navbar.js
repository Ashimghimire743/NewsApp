import { NavLink } from 'react-router-dom';
import picture from "../image/newslogo.svg";

const Navbar = (props) => {

    return (
        <nav className="bg-gray-700">
            <div className="container mx-auto px-4 py-2 flex">
                <a href="#" className="text-3xl font-bold text-white w-1/2 text-right">The News App</a>
                <div className='w-1/2 flex justify-end'>
                <select
                    value={props.country}
                    onChange={(e) => props.setCountry(e.target.value)}
                    className="mb-4 p-2 border border-gray-300" >                    
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
            </div>
            <div className="bg-indigo-200">
                <div className="flex items-center justify-between mx-2 py-8 gap-5">
                    <img className="h-16 w-16" src={picture} alt="News Logo" />
                    <div className="flex justify-center font-semibold text-2xl text-black space-x-5">
                        <NavLink to="/Home" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'} >
                            Home
                        </NavLink>
                        <NavLink to="/Business" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
                            Business
                        </NavLink>
                        <NavLink to="/Entertainment" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
                            Entertainment
                        </NavLink>
                        <NavLink to="/Health" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
                            Health
                        </NavLink>
                        <NavLink to="/Science" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
                            Science
                        </NavLink>
                        <NavLink to="/Sports" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
                            Sports
                        </NavLink>
                        <NavLink to="/Technology" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>
                            Technology
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
