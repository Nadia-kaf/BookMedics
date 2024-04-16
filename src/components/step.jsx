import search from "../assets/search.png";
import profile from "../assets/profile.png";
import schedule from "../assets/schedule.png";
import hospital from "../assets/hospital.png";

export default function Steps(){
    return(
        <div class=" dark:bg-gray-800 py-16 ">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-7xl sm:text-center mb-14">
            <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">How it works</p>
            <p class="mt-2 text-lg sm:text-center leading-8">4  Steps to get your medical solution</p>
          </div>
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div>
              <div class="flex items-center text-sm font-semibold leading-6 text-gray-800">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Step 1
                <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-bit-blue sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
              </div>
              <p class=" flex mt-6 text-lg font-semibold leading-8 tracking-wide ">
                <img src={search} alt="" className=" border rounded-xl p-1 w-10 h-10 mr-2" />Search  doctor</p>
              <p class="mt-1 text-base leading-7 p-2 dark:text-gray-400 border rounded-xl ">Get started by registering for an account. No complex onboarding processes.</p>
            </div>
            <div>
              <div class="flex items-center text-sm font-semibold leading-6 text-gray-800">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Step 2
                <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-bit-blue sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
              </div>
              <p class=" flex mt-6 text-lg font-semibold leading-8 tracking-wide "> <img src={profile} alt="" className=" border rounded-xl p-1 w-10 h-10 mr-2" />Check Doctor's profile</p>
              <p class="mt-1 text-base leading-7 dark:text-gray-400 border rounded-xl p-2">Select from a variety of features and functionalities tailored to your needs.</p>
            </div>
            <div>
              <div class="flex items-center text-sm font-semibold leading-6 text-gray-800">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Step 3
                <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-bit-blue sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
              </div>
              <p class=" flex mt-6 text-lg font-semibold leading-8 tracking-wide "> <img src={schedule} alt="" className=" border rounded-xl p-1 w-10 h-10 mr-2" />Schedule Appointment</p>
              <p class="mt-1 text-base leading-7 dark:text-gray-400  border rounded-xl p-2">Tailor the platform to your preferences. Define settings, alerts, and integrations.</p>
            </div>
            <div>
              <div class="flex items-center text-sm font-semibold leading-6 text-gray-800">
                <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Step 4
                <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-bit-blue sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
              </div>
              <p class=" flex mt-6 text-lg font-semibold leading-8 tracking-wide "> <img src={hospital} alt="" className=" border rounded-xl p-1 w-10 h-10 mr-2" />Get Medical Solution</p>
              <p class="mt-1 text-base leading-7 dark:text-gray-400  border rounded-xl p-2">Activate your account and start exploring the possibilities of our platform.</p>
            </div>
          </div>
        </div>
      </div>
      
    )
}