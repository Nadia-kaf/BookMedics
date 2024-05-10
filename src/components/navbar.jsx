import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar(){
  const location = useLocation();

    

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
      document.body.classList.add('overflow-y-hidden');
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      document.body.classList.remove('overflow-y-hidden');
    };
  
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };



  return (
    <nav className="flex items-center h-16 px-4 border gap-4 bg-white ">
      <div className="flex items-center gap-2" href="#">
        <span className="font-semibold  bg-white rounded-xl mr-20 p-2"><img src={logo} alt="" className='w-44 h-15' /></span>
      </div>
      <ul className="flex-1 flex justify-center items-center gap-6 text-nav-blue ml-80">
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
       <Link to="/signupH"> <li className="flex items-center gap-6 ml-20 text-sm text-deep-blue font-medium hover:underline">
          Are you a health professional?
        </li></Link>
      </ul>
    
    </nav>
  )
}
