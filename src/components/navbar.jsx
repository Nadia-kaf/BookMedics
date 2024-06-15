import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar(){
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center h-16 px-4 border gap-4 bg-white relative ">
      <div className="flex items-center gap-2" href="#">
        <span className="font-semibold  bg-white rounded-xl mr-20 p-2"><img src={logo} alt="logo" className='w-44 h-15' /></span>
      </div>
      <button 
        className="text-nav-blue md:hidden ml-auto" 
        onClick={toggleMenu}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <ul className={`md:flex-1 md:flex md:items-center md:gap-6 md:text-nav-blue md:ml-80 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 left-0 w-full bg-white md:bg-transparent`}>

       <Link to="/"> <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/">
          Home
        </li></Link>
        <Link to="/about"><li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/about">
          About
        </li></Link>
        <Link to="/searchS"><li className="flex items-center gap-1 text-sm font-medium hover:underline">
          Health Professionals
        </li></Link>
       <Link to="/contact"> <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/contact">
          Contact Us
        </li></Link>
       <Link to="/signupH"> <li className="flex items-center gap-6 md:ml-20 mt-5 text-sm text-deep-blue font-medium hover:underline">
          Are you a health professional?
        </li></Link>
      </ul>
    
    </nav>
  )
}
