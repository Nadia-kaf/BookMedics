import { Link } from "react-router-dom";
import heart from "../assets/heart_2107845-removebg-preview.png";
import glucose from "../assets/glucose-meter-removebg-preview.png";
import bp from "../assets/blood-pressure-removebg-preview.png";
import temp from "../assets/thermometer_3638594-removebg-preview.png";
import spo2 from "../assets/o2-removebg-preview.png";
import bmi from "../assets/body-mass-index-removebg-preview.png";
import dashpic from "../assets/dashpic.jpg";

export default function Patient() {
  return (
    <>
      {/* <!-- component --> */}
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div class="-mx-6 px-6 py-4">
            <Link to="/">
              <img src="" class="w-32" alt=" logo" />
            </Link>
          </div>

          <div class="mt-8 text-center">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
            <span class="hidden text-gray-400 lg:block">Patient ID: 12222</span>
          </div>

          <ul class="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              >
                <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    class="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    class="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    class="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span class="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Appointment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  />
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Reports</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Invoice</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <Link to="/">
            {" "}
            <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span class="group-hover:text-gray-700">Logout</span>
            </button>
          </Link>
        </div>
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
            </h5>
            <button class="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div class="flex space-x-4">
              {/* <!--search bar --> */}
              <div hidden class="md:block">
                <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span class="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      class="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    class="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  />
                </div>
              </div>
              {/* <!--/search bar --> */}
              <button
                aria-label="search"
                class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  class="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>

              <button
                aria-label="notification"
                class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="px-6 pt-6 2xl:container">
          <div className="flex">
          <div
            class="bg-no-repeat  border border-gray-500 rounded-xl w-5/12 h-72 ml-2 p-6"
            style={{
              backgroundImage: `url(${dashpic})`,
              backgroundPosition: "contain",
              backgroundSize: "700px 350px",
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
          <div>
          <div>
             <div class="ml-40">
                  <div class="flex items-center justify-center px-4">
                    <div class="max-w-sm w-full shadow-lg">
                      <div class="md:p-8 p-2 dark:bg-gray-800 ">
                        <div class="px-4 flex items-center justify-between">
                          <span
                            tabindex="0"
                            class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                          >
                            April 2024
                          </span>
                          <div class="flex items-center">
                            <button
                              aria-label="calendar backward"
                              class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevron-left"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="15 6 9 12 15 18" />
                              </svg>
                            </button>
                            <button
                              aria-label="calendar forward"
                              class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler  icon-tabler-chevron-right"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="9 6 15 12 9 18" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="flex items-center justify-between pt-12 overflow-x-auto">
                          <table class="w-full">
                            <thead>
                              <tr>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      Mo
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      Tu
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      We
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      Th
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      Fr
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      Sa
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                                      Su
                                    </p>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      1
                                    </p>
                                  </div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      2
                                    </p>
                                  </div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      3
                                    </p>
                                  </div>
                                </td>
                                <td class="pt-6">
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      4
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      5
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      6
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      7
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="w-full h-full">
                                    <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                      <a
                                        role="link"
                                        tabindex="0"
                                        class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                                      >
                                        8
                                      </a>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      9
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      10
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      11
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      12
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      13
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      14
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      15
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      16
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      17
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      18
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      19
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      20
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      21
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      22
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      23
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      24
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100">
                                      25
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      26
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      27
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      28
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      29
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      30
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                        <div class="px-4">
                          <div class="border-b pb-4 border-gray-400 border-dashed">
                            <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                              9:00 AM
                            </p>
                            <a
                              tabindex="0"
                              class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                            >
                              Zoom call with design team
                            </a>
                            <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                              Discussion on UX sprint and Wireframe review
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
          </div>
          </div>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-6/12 top-40">
              <div>
                <div class="h-72 py-6 px-6 rounded-xl border border-gray-200 bg-white">
                  <div className="grid grid-cols-2 mt-5">
                    <div className="">
                      <p className=" flex text-sm ">
                        <img src={heart} alt="" />
                        Heart Rate
                      </p>
                      <h2>
                        140 Bpm <sup className="text-green-500">2%</sup>{" "}
                      </h2>

                      <p className="flex text-sm mt-5">
                        <img src={glucose} alt="" className="w-5 h-5" />
                        Glucose level
                      </p>
                      <h2>
                        70 - 90 <sup className="text-red-500">6%</sup>
                      </h2>
                      <p className=" flex text-sm mt-5">
                        <img src={bp} alt="" className="w-5 h-5" />
                        Blood Pressure
                      </p>
                      <h2>
                        100 mg/dl <sup className="text-green-500">2%</sup>
                      </h2>
                    </div>
                    <div className=" ">
                      <h5 className="flex text-sm">
                        <img src={temp} alt="" className="w-5 h-5" />
                        Body Temperature
                      </h5>
                      <h3>
                        37.5 <sup>o</sup>C
                      </h3>

                      <p className="flex text-sm mt-5">
                        <img src={spo2} alt="" className="w-5 h-5" />
                        SPo2
                      </p>
                      <h2>92%</h2>
                      <p className=" flex text-sm mt-5">
                        <img src={bmi} alt="" className="w-5 h-5" />
                        BMI
                      </p>
                      <h2>
                        42.1 kg/m <sup>2</sup>{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="lg:h-72 py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                  <h5 class="text-xl text-gray-700 text-center">
                    Overall report
                  </h5>

                  <svg
                    class="w-40 m-auto"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z"
                      stroke="#e4e4f2"
                      stroke-width="3"
                    />
                    <path
                      d="M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536"
                      stroke="url(#paint0_linear_622:13696)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.3279 30.7467C13.3912 29.48 13.8346 28.5047 14.6579 27.8207C15.4939 27.124 16.5896 26.7757 17.9449 26.7757C18.8696 26.7757 19.6612 26.9404 20.3199 27.2697C20.9786 27.5864 21.4726 28.0234 21.8019 28.5807C22.1439 29.1254 22.3149 29.746 22.3149 30.4427C22.3149 31.2407 22.1059 31.9184 21.6879 32.4757C21.2826 33.0204 20.7949 33.3877 20.2249 33.5777V33.6537C20.9596 33.8817 21.5296 34.287 21.9349 34.8697C22.3529 35.4524 22.5619 36.1997 22.5619 37.1117C22.5619 37.8717 22.3846 38.5494 22.0299 39.1447C21.6879 39.74 21.1749 40.2087 20.4909 40.5507C19.8196 40.88 19.0089 41.0447 18.0589 41.0447C16.6276 41.0447 15.4622 40.6837 14.5629 39.9617C13.6636 39.2397 13.1886 38.1757 13.1379 36.7697H15.7219C15.7472 37.3904 15.9562 37.8907 16.3489 38.2707C16.7542 38.638 17.3052 38.8217 18.0019 38.8217C18.6479 38.8217 19.1419 38.6444 19.4839 38.2897C19.8386 37.9224 20.0159 37.4537 20.0159 36.8837C20.0159 36.1237 19.7752 35.579 19.2939 35.2497C18.8126 34.9204 18.0652 34.7557 17.0519 34.7557H16.5009V32.5707H17.0519C18.8506 32.5707 19.7499 31.969 19.7499 30.7657C19.7499 30.221 19.5852 29.7967 19.2559 29.4927C18.9392 29.1887 18.4769 29.0367 17.8689 29.0367C17.2736 29.0367 16.8112 29.2014 16.4819 29.5307C16.1652 29.8474 15.9816 30.2527 15.9309 30.7467H13.3279ZM25.6499 37.9477C26.8659 36.9344 27.8349 36.092 28.5569 35.4207C29.2789 34.7367 29.8806 34.0274 30.3619 33.2927C30.8433 32.558 31.0839 31.836 31.0839 31.1267C31.0839 30.4807 30.9319 29.974 30.6279 29.6067C30.3239 29.2394 29.8553 29.0557 29.2219 29.0557C28.5886 29.0557 28.1009 29.271 27.7589 29.7017C27.4169 30.1197 27.2396 30.696 27.2269 31.4307H24.6429C24.6936 29.9107 25.1433 28.758 25.9919 27.9727C26.8533 27.1874 27.9426 26.7947 29.2599 26.7947C30.7039 26.7947 31.8123 27.181 32.5849 27.9537C33.3576 28.7137 33.7439 29.7207 33.7439 30.9747C33.7439 31.9627 33.4779 32.9064 32.9459 33.8057C32.4139 34.705 31.8059 35.4904 31.1219 36.1617C30.4379 36.8204 29.5449 37.6184 28.4429 38.5557H34.0479V40.7597H24.6619V38.7837L25.6499 37.9477Z"
                      fill="currentColor"
                    />
                    <path
                      d="M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z"
                      fill="white"
                    />
                    <path
                      d="M23.5776 18.4198H25.5424V22.8407H23.5776V18.4198ZM30.4545 16.455H32.4193V22.8407H30.4545V16.455ZM27.0161 13.5078H28.9809V22.8407H27.0161V13.5078Z"
                      fill="#6A6A9F"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_622:13696"
                        x1="5.54791e-07"
                        y1="42.0001"
                        x2="54.6039"
                        y2="41.9535"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E323FF" />
                        <stop offset="1" stop-color="#7517F8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="mt-2">
                    <div class="mt-2 flex justify-center gap-4">
                      <h3 class="text-3xl font-bold text-gray-700">95</h3>
                      <div class="flex items-end gap-1 text-green-500">
                        <svg
                          class="w-3"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>2%</span>
                      </div>
                    </div>
                    <span class="block text-center text-gray-500">
                      Your health is normal
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}




