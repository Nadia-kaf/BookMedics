import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Booking(){

    const [appointment, setAppointment] = useState([]);

    const addAppointment = async (event) => {
      // setsetUserPage('appointment');
      console.log(event.target);
      event.preventDefault();
      const formData = new FormData(event.target);
      // console.log({formData});
  
      const data = await fetch(
        `${process.env.REACT_APP_BOOKMEDICS_API}/appointment`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (data.status === 201) {
        getAppointment();
        const incomingData = await data.json();
        console.log(incomingData);
      }
    };
  
    const getAppointment = () => {
      const url = `${process.env.REACT_APP_BOOKMEDICS_API}`
      fetch(`${process.env.REACT_APP_BOOKMEDICS_API}/appointment`)       
       .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAppointment(data);
        });
    };
  
   
  
    useEffect(() => {
        getAppointment();
    }, []);



    return(
     <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
   
    <form class="py-4 px-6"  onSubmit={addAppointment} action="" method="POST">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
                Date
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="time">
                Time
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Service
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a service</option>
                <option value="haircut">General medicals</option>
                <option value="coloring">Dental</option>
                <option value="styling">Cardiology</option>
                <option value="facial">Diet</option>
                <option value="facial">Neurology</option>
                <option value="facial">Ophthomology</option>
                <option value="facial">Urology</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Health Professionals
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a doctor</option>
                <option value="haircut">Dr. Sarah Johnson</option>
                <option value="coloring">Dr. Michael Smith</option>
                <option value="styling">Cardiology</option>
                <option value="facial">Diet</option>
                <option value="facial">Neurology</option>
                <option value="facial">Ophthomology</option>
                <option value="facial">Urology</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
        </div>
        <div class="flex items-center justify-center mb-4">
           <Link to="/booking-success">
           <button
                class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
            </button>
           </Link>
        </div>

    </form>
</div>
    )
}