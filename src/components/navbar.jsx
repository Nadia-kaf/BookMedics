import React, { useState } from 'react';
import { Link } from "react-router-dom";
 

export default function Navbar(){
    
    

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
    <nav className="flex items-center h-16 px-4 border gap-4 bg-nav-blue ">
      <div className="flex items-center gap-2" href="#">
        <span className="font-semibold text-xl">BookMedics</span>
      </div>
      <ul className="flex-1 flex justify-center items-center gap-6 text-white">
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/">
          Home
        </li>
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/services">
          Services
        </li>
        <Link to="/searchS"><li className="flex items-center gap-1 text-sm font-medium hover:underline">
          Health Professionals
        </li></Link>
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/contact">
          Contact Us
        </li>
      </ul>
      <div className="ml-auto">
        <button>
        <span className="border rounded-xl p-2 bg-gray-700 text-white " onClick={openModal}>Sign up</span>
      </button>


      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={closeModal}
              >
              </button>
            </div>
            <div className="p-6 pt-0 text-center">
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
              Kindly tap on the button if you are a user or a health professional to sign up.
              </h3>
              <button  onClick={closeModal} className="border rounded-xl p-2 bg-gray-700 text-white mr-10"><Link to="/signup">User</Link></button>

              <button
                onClick={closeModal}
                className="text-white bg-gray-700 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
              ><Link to="/signupH">Health Professional</Link>              
                </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}
