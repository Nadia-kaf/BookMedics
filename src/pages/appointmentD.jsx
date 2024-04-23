import doc from "../assets/dpic.png";
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p2 from "../assets/p2.png";
import p1 from "../assets/p1.png";

export default function AppointD() {
  const patient = [
    { id: "0001", name: "Ama", date: "11 April 2024 10:00 AM", image: p4 },
    { id: "0002", name: "Ama", date: "11 April 2024 10:00 AM", image: p3 },
    { id: "0003", name: "Ama", date: "11 April 2024 10:00 AM", image: p5 },
    { id: "0003", name: "Ama", date: "11 April 2024 10:00 AM", image: p2 },
    { id: "0003", name: "Ama", date: "11 April 2024 10:00 AM", image: p1 },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div className=" min-h-screen bg-foot-blue">
        <div className="flex flex-row  px-10 pb-4">
          <div className="w-2/12 mr-6 mt-10">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <div className="border-b-2">
                <img src={doc} alt="" className="rounded-xl" />

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
          <div className="mt-20">
            <div className="flex">
              <h2 className="text-4xl text-white">Appointment</h2>
               <div class="flex w-96 mx-10 rounded bg-white ml-40 mb-10 text-white">
        <input class=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none " type="search" name="search" placeholder="Search..." />
        <button type="submit" class="m-2 rounded bg-blue-600 px-4 py-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

        </button>
    </div>
            </div>
            <hr />
            <div className="flex mt-3">
              <button className="border rounded-xl bg-blue-600 text-white p-2">
                upcoming{" "}
                <span className="border rounded-full p-1 bg-white font-bold text-black">
                  21
                </span>
              </button>
              <button className="ml-10 border rounded-xl bg-blue-600 text-white p-2">
                cancelled{" "}
                <span className="border rounded-full p-1 bg-white text-black font-bold">
                  4
                </span>
              </button>
              <button className="ml-10 border rounded-xl bg-blue-600 text-white p-2">
                completed{" "}
                <span className="border rounded-full p-1 bg-white font-bold text-black">
                  214
                </span>
              </button>
            </div>

            {patient.map((patient) => (
              <div className="grid grid-cols-4 mt-5 border bg-white  rounded-xl shadow p-4">
                <div className="ml-10">
                  <img src={patient.image} alt="" className="w-20 h-20  rounded-md" />
                </div>
                <div className="mr-3 ">
                  <h5>{patient.id}</h5>
                  <h3>{patient.name}</h3>
                </div>
                <div className="mr-1 font-semibold">
                  <h3>{patient.date}</h3>
                </div>
                <div className="ml-20 font-semibold">
                  <div className="flex">
                    <h3 className="border rounded-full h-6 border-green-200 p-1 text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </h3>
                    <h2 className="ml-4 border rounded-full h-6 border-red-200 font-bold text-red-700 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
