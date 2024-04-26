import docs from "../assets/docs.png";
import stet from "../assets/stets.png";
import React, { useState, useEffect } from "react";
import img from "../assets/aboutpik.png"


export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const school = {
    "imageUrls": [
                "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1675686363399-91ad6111f82d?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           ],
          }

           useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % school.imageUrls.length);
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(interval);
        }, []);
      
      

  return (
    <>
    <div className=" bg-blue-100">
    <div class="sm:flex items-center max-w-screen-xl mx-44" >
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
        <img src={school.imageUrls[currentImageIndex]} alt={school.name} className="w-full rounded-md" style={{height: "450px"}} />
        </div>
      </div>
      <div class="sm:w-1/2 p-5 mt-40 mb-44">
        <div class="text">
          <span class="text-gray-500 border-b-2 border-service uppercase mb-20">
            Who We Are
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            BookMedics:{" "}
            <span class="text-service">
              The ultimate health facility for medical solution
            </span>
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>

        
              <div className="mt-10 ml-44 ">
                <img src={img} alt="" className="   w-52 h-52 rounded-full " />
              </div>
            
        
        </div>
      </div>
    </div>
    </div>
    </>
  );
}


