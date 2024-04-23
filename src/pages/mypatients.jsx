import doc from "../assets/dpic.png"
import React from "react";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p2 from "../assets/p2.png";
import p1 from "../assets/p1.png";

 
export default function DocPatient() {

  const patient = [
    { id: "0001", name: "Ama", date: "11 April 2024 10:00 AM", image: p4 },
    { id: "0002", name: "Ama", date: "11 April 2024 10:00 AM", image: p3 },
    { id: "0003", name: "Ama", date: "11 April 2024 10:00 AM", image: p5 },
    { id: "0003", name: "Ama", date: "11 April 2024 10:00 AM", image: p2 },
    { id: "0003", name: "Ama", date: "11 April 2024 10:00 AM", image: p1 }
  ];


  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div className=" min-h-screen bg-foot-blue">
        <div className=" text-4xl flex justify-center mt-10">My Patients</div>
        <div className="flex flex-row pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <div className="border-b-2" >
              <img src={doc} alt=""  className="rounded-xl"/>
              
                <p>Dr. Book Medics</p>
                <p className="py-2">Gyanaecologist</p>
              </div>
              <a
                href="/doctor/dashboard"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  dashboard
                </span>
                Dashboard
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="/doctor/appointment"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  schedule
                </span>
                Appointment{" "}
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="/doctor/patients"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  face
                </span>
                My Patients
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="/doctor/available-slot"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  schedule
                </span>
                Available slots
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  settings
                </span>
                Settings
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  chat
                </span>
                Reviews{" "}
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="/"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  power_settings_new
                </span>
                Log out
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
            </div>
          </div>
          {/* <!-- Tab Content --> */}
          <ul class="grid gap-2 mt-2 md:gap-12 md:grid-cols-3 h-72 p-4 ml-10">
          {patient.map((patient) => (

            <li class="p-6 shadow-xl  bg-white rounded-xl ring-1 ring-black/5 shadow-black/10">
              <div className="flex">
                <div>
                  <img src={patient.image} alt="" className="w-10 h-10 rounded-md" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">{patient.id}</p>
                  <h5>{patient.name}</h5>
                  <p class="text-black/60">Age:22</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100  rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
              ))}
          </ul>
          </div>
      </div>
    </>
  );
}
