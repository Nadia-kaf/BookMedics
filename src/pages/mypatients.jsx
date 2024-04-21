
import React from "react";

export default function DocPatient() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div className=" min-h-screen">
        <div className=" text-4xl flex justify-center mt-10">My Patients</div>
        <div className="flex flex-row pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <div className="border-b-2">
                <h1 className="border rounded-full p-10 my-10">image</h1>
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
                href=""
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
                href=""
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
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
              <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22| male| B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
            <li class="p-6 shadow-xl rounded-xl ring-1 ring-black/5 shadow-black/10">
            <div className="flex">
                <div>
                  <img src="" alt="" className="w-8 h-8" />
                </div>
                <div>
                  <p class="font-bold tracking-tighter text-blue">#000001</p>
                  <h5>Name</h5>
                  <p class="text-black/60">Age:22 | male | B+</p>
                </div>
              </div>

              <div class=" mt-3 items-center bg-gray-100 rounded rounded-xl py-1">
                <p>11 April,2024</p>
                <p className="mt-2">Kasoa,Accra</p>
              </div>
              <hr className="mt-2"/>
              
              <p className="mt-10">Last Booking 20 April 2024</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
