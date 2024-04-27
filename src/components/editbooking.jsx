import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bookpik from "../assets/bookingpik.jpg";


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

       <>
       
       <div className="flex ">
         <div className="ml-20 mt-40">
            <img src={bookpik} alt="pic" className="w-[600px] h-[500px]" />
         </div>
         
         <div class="font-poppins items-center justify-end ml-20">
  <div class="grid gap-4 w-[500px] my-6">
    <div id="back-div" class="bg-gradient-to-r from-blue-500 to-deep-blue rounded-[20px] m-2">
      <div class="border-[15px] border-transparent rounded-[15px] dark:bg-gray-900 bg-white shadow-md xl:p-6 lg:p-4 md:p-6 sm:p-2 m-2">
        <h1 class="pt-4 pb-2 font-bold text-lg dark:text-gray-400 text-center cursor-default">Appointment</h1>
        <form action="#" method="post" onSubmit={onSubmitHandler}>
          <div class="mb-2">
            <label for="name" class="dark:text-gray-400 text-base">Name</label>
            <input id="name" class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300" type="text" placeholder="Enter your name"  value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div class="mb-2">
            <label for="email" class="dark:text-gray-400 text-base">Email</label>
            <input id="email" class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300" type="email" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 font-bold text-base" for="phone">Phone Number</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone  number"   value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 font-bold text-base" for="date">Date</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Select a date"  value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 font-bold text-base" for="time">Time</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="time" type="time" placeholder="Select a time"  value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 font-bold text-base" for="service">Service</label>
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" name="service"   value={service} onChange={(e) => setService(e.target.value)}>
              <option  selected={service}>{service}</option>
              <option value="General medicals">General medicals</option>
              <option value="Dental">Dental</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Diet">Diet</option>
              <option value="Neurology">Neurology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Urology">Urology</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Health Professionals
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service" value={healthprofessional} onChange={(e) => setHealthprofessional(e.target.value)}
                >
                <option selected={healthprofessional} >{healthprofessional}</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                <option value="Dr. Michael Smith">Dr. Michael Smith</option>
                <option value="Dr. Michael Smith">Dr. Mercy</option>
               
            </select>
        </div>
          <div class="mb-2">
            <label class="block text-gray-700 font-bold text-base" for="message">Message</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="3" placeholder="Enter any additional information" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none focus:shadow-outline" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</>

    )
}