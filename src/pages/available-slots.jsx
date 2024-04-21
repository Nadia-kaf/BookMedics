import React, { useState } from 'react';




export default function AvailableSlots() {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
      document.body.classList.add('overflow-y-hidden');
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      document.body.classList.remove('overflow-y-hidden');
    };
  
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
  
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div className=" min-h-screen">
        <div className="flex flex-row  px-10 pb-4">
          <div className="w-3/12 mr-6">
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
          <div className="mt-10 ">
            <h1 className="">Available Timings </h1>
            <hr />
            <div className="border rounded-xl mt-2">
              <h1>Select available slots</h1>
              <nav class="flex gap-3 flex-wrap justify-center text-lg">
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border bg-blue-100 px-4 py-2 font-semibold duration-200 hover:bg-blue-500  hover:text-white hover:no-underline sm:w-48"
                  href="/react"
                >
                  Monday
                </a>
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border bg-blue-100  px-4 py-2 font-semibold  duration-200 hover:bg-blue-500  hover:text-white hover:no-underline sm:w-48"
                  href="/solid"
                >
                  Tuesday
                </a>
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border bg-blue-100 px-4 py-2 font-semibold duration-200 hover:bg-blue-500  hover:text-white hover:no-underline sm:w-48"
                  href="/svelte"
                >
                  Wednesday
                </a>
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border bg-blue-100 px-4 py-2 font-semibold duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-48"
                  href="/vue"
                >
                  Thursday
                </a>
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border bg-blue-100 px-4 py-2 font-semibold duration-200 hover:bg-blue-500  hover:text-white hover:no-underline sm:w-48"
                  href="/angular"
                >
                  Friday
                </a>
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border bg-blue-100 px-4 py-2 font-semibold  duration-200 hover:bg-blue-500  hover:text-white hover:no-underline sm:w-48"
                  href="/angular"
                >
                  Saturday
                </a>
                <a
                  class="text-center my-2 inline-block w-40 rounded-full border  bg-blue-100 px-4 py-2 font-semibold duration-200 hover:bg-blue-500 hover:text-white hover:no-underline sm:w-48"
                  href="/angular"
                >
                  Sunday
                </a>
              </nav>
              <div className="border rounded-xl mt-10 mx-20 ">
                <div className="flex mt-5 mx-20 mb-3">
                  <h2 className="text-xl">Monday</h2>

                  <h5 className="ml-96 text-blue-500">Add slots</h5>
                  <button className="ml-20 text-red-500 underline transition"  onClick={openModal}>Delete slots</button>
                </div>

                <div>
         {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={closeModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 pt-0 text-center">
              <svg
                className="w-20 h-20 text-red-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                Are you sure you want to remove these slots?
              </h3>
              <a
                href="#"
                onClick={closeModal}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              >
                Yes, Remove
              </a>
              <a
                href="#"
                onClick={closeModal}
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-user-modal"
              >
                No, cancel
              </a>
            </div>
          </div>
        </div>
      )}
</div>
       <hr />
                <div className="flex gap-4 flex-wrap  text-lg">
                  <button className="text-center my-2 ml-10 inline-block w-20 rounded-xl bg-blue-800 bg-opacity-10 px-3 py-2 font-semibold  duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-40">
                    9:00AM
                  </button>
                  <button className="text-center my-2 inline-block w-20 rounded-xl bg-blue-800 bg-opacity-10 px-3 py-2 font-semibold  duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-40">
                    10:00 AM
                  </button>
                  <button className="text-center my-2 inline-block w-20 rounded-xl bg-blue-800 bg-opacity-10 px-3 py-2 font-semibold  duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-40">
                    11:00 AM
                  </button>
                  <button className="text-center my-2 inline-block w-20 rounded-xl bg-blue-800 bg-opacity-10 px-3 py-2 font-semibold  duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-40">
                    1:00 PM
                  </button>
                  <button className="text-center my-2 inline-block w-20 rounded-xl bg-blue-800 bg-opacity-10 px-3 py-2 font-semibold  duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-40">
                    3:00 PM
                  </button>
                </div>
              </div>

              <h1 className="mt-10 ml-20">Appointment fees ($)</h1>
              <div className="mt-2 mx-20">
                <input
                  type="text"
                  className="border rounded-xl w-11/12 p-4"
                  value={250}
                />
              </div>

              <div className="flex flex-wrap justify-end mt-20 mr-20 mb-10">
                <button className="mr-20 border rounded-xl p-3 bg-red-500 text-white">Cancel</button>
                <button className="border rounded-xl p-2 bg-blue-500 text-white">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
