import React from "react";
import ReactCardSlider from "react-card-slider-component";
import dpic from "../assets/dpic.png";
import Description from "./description";
import doc from "../assets/doc.png";



export default function Doctorsection(){

    
const slides = [
    {
      image: dpic,
      title: "Dr. Book Medics",
      description: <Description/>,
      // clickEvent: sliderClick
    },
    {
      image: doc,
      title: "This is a second title",
      description: <Description/>,
      // clickEvent: sliderClick
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description"
      // clickEvent: sliderClick
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description"
      // clickEvent: sliderClick
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description"
      // clickEvent: sliderClick
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description"
      // clickEvent: sliderClick
    },
    {
      image: "https://picsum.photos/800/900",
      title: "This is a seventh title",
      description: "This is a seventh description"
      // clickEvent: sliderClick
    }
  ];

    return(
        <div class="max-w-screen-xl  py-8 px-4 lg:py-16 lg:px-6">
    <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">Our Health Professionals</h2>
    </div>

    <div class="grid grid-cols-2 ">
        <div class="  w-96">
           <h1 className="text-3xl text-service font-bold">Book our doctors</h1>
           <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero rem possimus illum blanditiis! Enim minus veniam ducimus ut, vitae molestiae ea voluptate eligendi similique nisi amet modi, magnam commodi aspernatur!</p>
        </div>
    

        <div class="col-end-7 col-span-3 ">
      
      <div className="w-6/12"> 
        <div className="ml-96">
      <ReactCardSlider slides={slides} />
       </div>
        </div></div>
    </div>
</div>
    )
}