import { Link } from "react-router-dom";
import Footer from "../components/footer";


export default function BookingSuccess(){
    return(
<>
<div class="my-10">
      <div class="bg-white border rounded-xl md:mx-auto w-5/12 my-10">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-8">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Appointment booked successfully!</h3>
            <p class="text-gray-600 my-2">Appointment booked with <span className="font-bold">Dr. Book Medics</span></p>
            <p> on <span className="font-bold">30 April 2024 9:00AM to 10:00AM </span> </p>
            <div class="py-10 text-center">
                <Link  to="/patient/appointment" class="px-12 bg-green-600 rounded-xl mt-5 hover:bg-indigo-500 text-white font-semibold py-3">
                  View in Dashboard 
               </Link>
            </div>
        </div>
    </div>
  </div>   
  <Footer/>
</>

   )
}