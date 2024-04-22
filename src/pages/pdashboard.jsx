import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pdashboard() {
  const data = {
    datasets: [
      {
        label: "Poll",
        data: [6, 3],
        backgroundColor: ["green", "white"],
        borderColor: ["green", "black"],
      },
    ],
  };

  const options={

  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div className=" min-h-screen">
        <div className=" text-4xl flex justify-center mt-10">DASHBOARD</div>
        <div className="flex flex-row pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <div className="border-b-2">
                <h1 className="border rounded-full p-10 my-10" style={{backgroundImage: ''}}>image</h1>
                <p>Adwoa Aikins</p>
                <p className="py-2">Patient ID: 0001</p>
                <p className="py-2">Age: 30|Female</p>
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
                href="/patient/appointment"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  schedule
                </span>
                My Appointment{" "}
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
                Invoice
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

          <div class="w-8/12 bg-white rounded-xl shadow-lg px-6 py-4">
            <div class="mt-6">
              <h1>DASHBOARD</h1>
              <hr />
            </div>
            <div class="flex flex-row mt-5">
              <div class="bg-no-repeat  border  rounded-xl w-7/12 mr-2 p-6">
                <div className="grid grid-cols-3 mt-10">
                  <div className="">
                    <p className="text-sm ">Heart Rate</p>
                    <h2>
                      140 Bpm <sup>2%</sup>{" "}
                    </h2>

                    <p className="text-sm mt-5">Glucose level</p>
                    <h2>
                      70 - 90 <sup>6%</sup>
                    </h2>
                    <p className="text-sm mt-5">Blood Pressure</p>
                    <h2>
                      100 mg/dl <sup>2%</sup>
                    </h2>
                  </div>
                  <div className=" ">
                    <h5 className="text-sm">Body Temperature</h5>
                    <h3>
                      37.5 <sup>o</sup>C
                    </h3>

                    <p className="text-sm mt-5">SPo2</p>
                    <h2>92%</h2>
                    <p className="text-sm mt-5">BMI</p>
                    <h2>
                      42.1 kg/m <sup>2</sup>{" "}
                    </h2>
                  </div>
                  <div className=" font-semibold border-l-2">
                    <h3>Overall report</h3>
                    <div className="">
                      <Doughnut
                        data={data}
                        options={options}
                        className="w-20 h-20"
                      />
                    </div>
                    <h3>Your health is 95% normal</h3>
                  </div>
                </div>
               
              </div>

              <div
                class="bg-no-repeat  border border-gray-500 rounded-xl w-5/12 ml-2 p-6"
                style={{
                  backgroundImage:
                    "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
                  backgroundPosition: " 100% 40%",
                }}
              >
                <div className="flex">
                  <p class="text-xl text-indigo-900">Recent Patients</p>
                  <p className="ml-44 text-bit-blue underline">View all</p>
                </div>
                <hr className="mt-3" />

                <div className="grid grid-cols-2 gap-2 mt-10">
                  <div>
                    <img src="" alt="" className="w-6 h-6" />
                    <h2>Name</h2>
                    <p>Patient ID</p>
                    <hr className="w-40" />
                    <p className="mt-5">Last appointment:</p>
                    <p>5 Mar 2024</p>
                  </div>
                  <div>
                    <img src="" alt="" className="w-6 h-6" />
                    <h2>Name</h2>
                    <p>Patient ID</p>
                    <hr className="w-40" />
                    <p className="mt-5">Last appointment:</p>
                    <p>5 Mar 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row mt-5">
              <div class="bg-no-repeat  border border-gray-500 rounded-xl w-5/12 mr-2 p-6 ">
                <div className="">
                  <p class="text-xl text-indigo-900">Weekly Overview</p>
                  <p className="mt-5">April 15 - April 29</p>
                </div>
              </div>
              <div class="bg-no-repeat  border  rounded-xl w-7/12 ml-2 p-6">
                <div className="flex">
                  <p class="text-xl text-indigo-900">Appointment</p>
                  <p className="ml-64 text-bit-blue border p-3">Last 7 days</p>
                </div>
                <hr className="mt-3" />
                <div className="grid grid-cols-4 mt-5">
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
                      <h3 className="border rounded-full border-green-200 p-2">
                        1
                      </h3>
                      <h2 className="ml-4 border rounded-full border-red-200 p-2">
                        2
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 mt-5">
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
                      <h3 className="border rounded-full border-green-200 p-2">
                        1
                      </h3>
                      <h2 className="ml-4 border rounded-full border-red-200 p-2">
                        2
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 mt-5">
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
                      <h3 className="border rounded-full border-green-200 p-2">
                        1
                      </h3>
                      <h2 className="ml-4 border rounded-full border-red-200 p-2">
                        2
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 mt-5">
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
                      <h3 className="border rounded-full border-green-200 p-2">
                        1
                      </h3>
                      <h2 className="ml-4 border rounded-full border-red-200 p-2">
                        2
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 mt-5">
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
                      <h3 className="border rounded-full border-green-200 p-2">
                        1
                      </h3>
                      <h2 className="ml-4 border rounded-full border-red-200 p-2">
                        2
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
