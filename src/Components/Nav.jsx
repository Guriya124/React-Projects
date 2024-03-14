import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import ImaLogo from "../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

import MenuItem from '@mui/material/MenuItem';

const dropdownLinks = [
    { name: 'Package 1', link: '/package1' },
    { name: 'Package 2', link: '/package2' },
    { name: 'Package 3', link: '/package3' },
];

export default function Nav() {
    const [showmenu, setShowmenu] = useState(false);

    const toggleMenu = () => {
        setShowmenu(!showmenu);
    };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <>
            <div className="fixed top-1 right-0 w-full bg-white text-black shadow-lg  z-50 rounded-full ring-1 ring-slate-100">
                <div className="container  mx-auto ">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link onClick={() => window.scrollTo(0, 0)}>
                                <img src={ImaLogo} alt="" className="w-20 h-20" />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                <li className="py-3">
                                    <NavLink to="/" className="text-black font-semibold px-4 py-2 hover:text-primary">Home</NavLink>
                                </li>
                                <li className="py-3">
                                    <NavLink to="/" className="text-black font-semibold px-4 py-2 hover:text-primary">Explor</NavLink>
                                </li>
                                <li className="py-3">
                                    <NavLink to="/" className="text-black font-semibold px-4 py-2 hover:text-primary">Best Places</NavLink>
                                </li>
                                <li className="py-3">
                                    <NavLink to="/" className="text-black font-semibold px-4 py-2 hover:text-primary">About</NavLink>
                                </li>
                                <li className="py-3 relative group cursor-pointer">
                                    <div className="dropdown flex items-center" onClick={() => setShowmenu(!showmenu)}>
                                        <span>All Packages</span>
                                        <span>
                                            <FaCaretDown className={`transition-all duration-200 ${showmenu ? "rotate-180" : ""}`} />
                                        </span>
                                    </div>
                                    <div className={`absolute left-0 z-[9999] ${showmenu ? "block" : "hidden"} shadow-md text-black w-[150px] bg-white p-2`}>
                                        <ul>
                                            {dropdownLinks.map((data) => (
                                                <li key={data.name}>
                                                    <a className="inline-block w-full rounded-lg p-2 hover:bg-primary/20" href={data.link}>
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-700 text-white px-3 py-1 rounded-full">
                                Book Now
                            </button>
                            <div className="md:hidden block">
                                {showmenu ? (
                                    <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all hidden" size={20} />
                                ) : (
                                    <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={20} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Responsive sidebar Menu */}
            {/* <div className={`md:hidden bg-white w-full text-black shadow-md py-10 mx-2 mt-3 ${showmenu ? "block" : "hidden"}`}>
                <ul className="flex flex-col mx-5 items-center gap-4">
                    <li>
                        <NavLink to="/" activeClassName="active" onClick={toggleMenu} className="font-semibold hover:text-primary">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blog" activeClassName="active" onClick={toggleMenu} className="font-semibold hover:text-primary">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PlaceRoute" activeClassName="active" onClick={toggleMenu} className="font-semibold hover:text-primary">Best Places</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" activeClassName="active" onClick={toggleMenu} className="font-semibold hover:text-primary">About</NavLink>
                    </li>
                    <li className="relative group cursor-pointer">
                        <DropDown>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </DropDown>
                    </li>
                </ul>
            </div> */}
        </>
    );
}
