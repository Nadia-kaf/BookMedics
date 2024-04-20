


export default function AvailableSlots() {

 
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
  
        <div className=" min-h-screen">
          <div className="flex flex-row  px-10 pb-4">
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
             <h1 className="mt-10">Available Timings </h1>
             <hr />
             <div className="border rounded-xl  mt-20 w-80">
                <h1>Select available slots</h1>
             </div>
      </div>
        </div>
      </>
    );
  }
  