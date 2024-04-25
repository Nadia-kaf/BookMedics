import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const EditAppointment = ()=> {

    const params = useParams();

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [healthprofessional, setHealthprofessional] = useState(null);
    const [service, setService] = useState(null);
    const [message, setMessage] = useState(null);
 
    const navigate = useNavigate();

    const getAppointment = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BOOKMEDICS_API}/appointment/${params.id}`
          );
          const data = await response.json();
    
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setDate(data.date);
          setTime(data.time);
          setHealthprofessional(data.healthprofessional);
          setService(data.service);

        } catch (error) {
          console.log(error);
        }
      };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        const editedBooking = {
          name: name,
          email: email,
          phone: phone,
          date: date,
          time: time,
          service: service,
          healthprofessional: healthprofessional,
          message: message,
        };
    
        try {
            const response = await fetch(`${process.env.REACT_APP_BOOKMEDICS_API}/appointment/${params.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
              body: JSON.stringify(editedBooking),
            });
      
            const data = await response.json();
            console.log(data);
      
            navigate("/patient/appointment");
          } catch (error) {
            console.log(error);
          }
        };
      
     
  useEffect(() => {
    getAppointment();
  }, [params.id]);



    return(
     <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
   
    <form class="py-4 px-6"  onSubmit={onSubmitHandler}>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name"   onChange={(e) => setName(e.target.value)}
                />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"   onChange={(e) => setEmail(e.target.value)}
                />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number"  onChange={(e) => setPhone(e.target.value)}
                />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
                Date
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"   onChange={(e) => setDate(e.target.value)}
                />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="time">
                Time
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time" onChange={(e) => setTime(e.target.value)}
                />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Service
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service"  onChange={(e) => setService(e.target.value)}
                >
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
                id="service" name="service"  onChange={(e) => setHealthprofessional(e.target.value)}
                >
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
                id="message" rows="4" placeholder="Enter any additional information"                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
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