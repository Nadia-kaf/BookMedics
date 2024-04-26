import React from "react";
import ReactCardSlider from "react-card-slider-component";
import dpic from "../assets/dpic.png";
import Description from "./description";
import doc from "../assets/doc.png";
import hd3 from "../assets/hd3.png";
import hd4 from "../assets/hd4.png";
import hd5 from "../assets/hd5.png";


export default function Doctorsection(){

    
const slides = [
    {
      image: dpic,
      title: "Dr. Book Medics",
      description: <Description/>,
       clickEvent: "/profile"
    },
    {
      image: doc,
      title: "This is a second title",
      description: <Description/>,
    },
    {
      image: hd3,
      title: "Dr. Emily Chen",
      description: <Description/>
    },
    {
      image: hd4,
      title: "Dr. James Lee",
      description: <Description/>
    }
   
  ];

    return(
        <div class="max-w-screen-xl  py-8 px-4 lg:py-16 lg:px-6 mx-40">
    <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">Our Health Professionals</h2>
    </div>

    <div class="grid grid-cols-2 ">
        <div class="w-96">
           <h1 className="text-3xl text-service font-bold">Book our doctors</h1>
           <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero rem possimus illum blanditiis! Enim minus veniam ducimus ut, vitae molestiae ea voluptate eligendi similique nisi amet modi, magnam commodi aspernatur!</p>
        </div>
    

      
      <div className="w-[670px]"> 
        <div className="">
      <ReactCardSlider slides={slides} />
       </div>
        </div>
    </div>
</div>
    )
}