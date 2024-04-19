import { Link } from "react-router-dom";
import oral from "../assets/oral.png";
import teeth from "../assets/teeth_11342152.png";
import heart from "../assets/heart.png";
import heartI from "../assets/heart_9774024.png";
import orthopaedic from "../assets/orthopaedic.png";
import bones from "../assets/bones_3478111.png"



export default function Specialties() {
  return (
    <div >
      <section
        id="features"
        class="relative block px-6  md:py-20 md:px-10  border-t border-b"
      >
        <div className="flex justify-end">
          <Link
            to="/searchS"
            class="flex items-center text-service border border-deep-blue py-2 px-6 gap-2 rounded  "
          >
            <span>View All</span>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
        <div class="relative mx-auto max-w-5xl text-center">
          <span class="text-deep-blue my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Specialties
          </span>
          <h2 class="block w-full bg-gradient-to-r from-service to-foot-blue bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Specialized services for your medical needs{" "}
          </h2>
        </div>

        <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-md border border-neutral-800  p-5 text-center shadow" style={{backgroundImage:   `linear-gradient( rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0.4)),url(${oral})`, backgroundRepeat: "no-repeat", backgroundPosition: "center",objectPosition: 'fit', backgroundSize: "500px 300px"}}>
            <div
              class="button-text mx-auto flex h-20 w-20 items-center justify-center"
            >
             <img src={teeth} alt="teeth" />
            </div>
            <h3 class="mt-6 text-gray-100 text-3xl font-semibold">Dental</h3>
          </div>

          <div class="rounded-md border border-neutral-800  p-8 text-center shadow"  style={{backgroundImage: `linear-gradient( rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0.4)), url(${orthopaedic})`, backgroundRepeat: "no-repeat", backgroundPosition: "center",objectPosition: 'fit', backgroundSize: "500px 300px"}}>
            <div
              class="button-text mx-auto flex h-20 w-20 items-center justify-center "
              
            >
             <img src={bones} alt="" />
            </div>
            <h3 class="mt-6 text-gray-100 text-3xl font-semibold">Orthopaedic</h3>
          </div>
          <div class="rounded-md border border-neutral-800  p-8 text-center shadow" style={{backgroundImage: `linear-gradient( rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0.4)), url(${heart})`, backgroundRepeat: "no-repeat", backgroundPosition: "center",objectPosition: 'fit', backgroundSize: "500px 300px",}}>
            <div
              class="button-text mx-auto flex h-20 w-20 items-center justify-center bg-white rounded-md "
            >
              <img src={heartI} alt="" />
            </div>
            <h3 class="mt-6 text-gray-100 text-3xl font-semibold">Cardiologist</h3>
            
          </div>

  
        </div>
       
      </section>
    </div>
  );
}
