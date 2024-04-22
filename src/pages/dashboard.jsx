import dashpic from "../assets/dashpic.jpg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import doodle from "../assets/doodle.png"
import doc from "../assets/dpic.png"
import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p2 from "../assets/p2.png";
import p1 from "../assets/p1.png";


export default function Dashboard() {

  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Revenue",
      value: "chart",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Appointments",
      value: "data",
      desc: `lorem`,
    },
  ];

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
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4" >
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

          <div class="w-10/12">
            <div class="flex flex-row h-40 mt-6">
              <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                <div>
                  <h2>Total Patient</h2>
                  <h1 className="text-4xl">978</h1>
                  <p className="text-green-500 flex mt-2  font-bold"><span  className=" font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4 mt-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
</svg>
</span>  15% from last week</p>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
              <div>
                  <h2>Patients Today</h2>
                  <h1 className="text-4xl">80</h1>
                  <p className="text-red-500 flex mt-2  font-bold"><span  className=" font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4 mt-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
</svg>
</span>  15% from yesterday</p>
                </div>
              </div>
              <div class="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              <div>
                  <h2>Appointments Today</h2>
                  <h1 className="text-4xl">50</h1>
                  <p className="text-green-500 flex mt-2  font-bold"><span  className=" font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4 mt-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
</svg>
</span>  20% from yesterday</p>
                </div>
              </div>
            </div>
            <div class="flex flex-row mt-5">
              <div
                class="bg-no-repeat  border  rounded-xl w-7/12 mr-2 p-6"
                style={{
                  backgroundImage: `url(${dashpic})`,
                  backgroundPosition: "contain",
                  backgroundSize: "700px 350px",
                }}
              >
                <p class=" text-white">Upcoming Appointment</p>
                <div className="flex mt-10">
                  <div className="ml-10">
                    <img src={p4} alt="" className="w-28 h-28 rounded-xl " />
                  </div>
                  <div className="ml-8 text-white">
                    <h5>#000001</h5>
                    <h3>Akua Danso</h3>
                  </div>
                  <div className="ml-60 text-white font-semibold">
                    <h3>Dental Visit</h3>
                    <h2 className="text-xl">Today,9:30 AM</h2>
                  </div>
                </div>
                <hr className="mt-10" />
                <span class="bg-white text-xl text-bit-blue inline-block rounded-full mt-12 px-8 py-2">
                  <strong>Start appointment</strong>
                </span>
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
                    <img src={p3} alt="" className="w-8 h-8" />
                    <h2>Name</h2>
                    <p>Patient ID</p>
                    <hr className="w-40" />
                    <p className="mt-5">Last appointment:</p>
                    <p>5 Mar 2024</p>
                  </div>
                  <div>
                    <img src={p5} alt="" className="w-8 h-8" />
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
                <Tabs value={activeTab}>
                  <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mt-10 "
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                  >
                    {data.map(({ label, value }) => (
                      <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                      >
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody>
                    {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </div>
              <div
                class="bg-no-repeat  border  rounded-xl w-7/12 ml-2 p-6"
               
              >
                   <div className="flex">
                  <p class="text-xl text-indigo-900">Appointment</p>
                  <p className="ml-64 text-bit-blue border p-3">Last 7 days</p>
                </div>
                <hr className="mt-3" />              
                  <div className="grid grid-cols-4 mt-5">
                  <div className="ml-10">
                    <img src={p1} alt="" className="w-6 h-6 " />
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
                      <h3 className="border rounded-full border-green-200 p-2 text-green-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</h3>
                    <h2 className="ml-4 border rounded-full border-red-200 p-2">2</h2></div>
                  </div>
                </div>
                  <div className="grid grid-cols-4 mt-5">
                  <div className="ml-10">
                    <img src={p2} alt="" className="w-6 h-6 " />
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
                  <div className="grid grid-cols-4 mt-5">
                  <div className="ml-10">
                    <img src={p3} alt="" className="w-6 h-6 " />
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
                  <div className="grid grid-cols-4 mt-5">
                  <div className="ml-10">
                    <img src={p4} alt="" className="w-6 h-6 " />
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
                  <div className="grid grid-cols-4 mt-5">
                  <div className="ml-10">
                    <img src={p5} alt="" className="w-6 h-6 " />
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
        </div>
      </div>
    </>
  );
}
