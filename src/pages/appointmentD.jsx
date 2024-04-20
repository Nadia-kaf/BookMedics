

export default function AppointD() {

 
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
        <div className="mt-20">
           <div className="flex">
            <h2>Appointment</h2>
            <input type="search" placeholder="search" className="ml-96" />
           </div>
           <hr />
           <div className="flex mt-3">
             <button className="border rounded-xl bg-bit-blue text-white p-2">upcoming <span className="border rounded-full p-1 bg-white font-bold text-black">21</span></button>
             <button className="ml-10 border rounded-xl bg-bit-blue text-white p-2">cancelled <span className="border rounded-full p-1 bg-white text-black font-bold">4</span></button>
             <button className="ml-10 border rounded-xl bg-bit-blue text-white p-2">completed <span className="border rounded-full p-1 bg-white font-bold text-black">214</span></button>
           </div>
           
           <h1>Filter and calendar</h1>
           <div className="grid grid-cols-4 mt-5 border rounded-xl shadow p-4">
                  <div className="ml-10">
                    <img src="" alt="" className="w-6 h-6 " />
                  </div>
                  <div className="mr-3 ">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="mr-1 font-semibold">
                    <h3>11 April 2024 10:00 AM</h3>
                  </div>
                  <div className="ml-20 font-semibold">
                    <div className="flex">
                      <h3 className="border rounded-full border-green-200 p-2">1</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
           <div className="grid grid-cols-4 mt-5 border rounded-xl shadow p-4">
                  <div className="ml-10">
                    <img src="" alt="" className="w-6 h-6 " />
                  </div>
                  <div className="mr-3 ">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="mr-1 font-semibold">
                    <h3>11 April 2024 10:00 AM</h3>
                  </div>
                  <div className="ml-20 font-semibold">
                    <div className="flex">
                      <h3 className="border rounded-full border-green-200 p-2">1</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
           <div className="grid grid-cols-4 mt-5 border rounded-xl shadow p-4">
                  <div className="ml-10">
                    <img src="" alt="" className="w-6 h-6 " />
                  </div>
                  <div className="mr-3 ">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="mr-1 font-semibold">
                    <h3>11 April 2024 10:00 AM</h3>
                  </div>
                  <div className="ml-20 font-semibold">
                    <div className="flex">
                      <h3 className="border rounded-full border-green-200 p-2">1</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
           <div className="grid grid-cols-4 mt-5 border rounded-xl shadow p-4">
                  <div className="ml-10">
                    <img src="" alt="" className="w-6 h-6 " />
                  </div>
                  <div className="mr-3 ">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="mr-1 font-semibold">
                    <h3>11 April 2024 10:00 AM</h3>
                  </div>
                  <div className="ml-20 font-semibold">
                    <div className="flex">
                      <h3 className="border rounded-full border-green-200 p-2">1</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
           <div className="grid grid-cols-4 mt-5 border rounded-xl shadow p-4">
                  <div className="ml-10">
                    <img src="" alt="" className="w-6 h-6 " />
                  </div>
                  <div className="mr-3 ">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="mr-1 font-semibold">
                    <h3>11 April 2024 10:00 AM</h3>
                  </div>
                  <div className="ml-20 font-semibold">
                    <div className="flex">
                      <h3 className="border rounded-full border-green-200 p-2">1</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
           <div className="grid grid-cols-4 mt-5 border rounded-xl shadow p-4">
                  <div className="ml-10">
                    <img src="" alt="" className="w-6 h-6 " />
                  </div>
                  <div className="mr-3 ">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="mr-1 font-semibold">
                    <h3>11 April 2024 10:00 AM</h3>
                  </div>
                  <div className="ml-20 font-semibold">
                    <div className="flex">
                      <h3 className="border rounded-full border-green-200 p-2">1</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
        </div>
    </div>
      </div>
    </>
  );
}
