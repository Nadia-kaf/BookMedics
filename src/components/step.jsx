import search from "../assets/search.png";
import profile from "../assets/profile.png";
import schedule from "../assets/schedule.png";
import hospital from "../assets/hospital.png";

export default function Steps(){
    return(
        <div class=" border rounded-md dark:bg-gray-800 py-16 ">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-7xl sm:text-center mb-14">
            <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">How it works</p>
            <p class="mt-2 text-lg sm:text-center leading-8">4  Steps to get your medical solution</p>
          </div>

          <div class="w-full px-24 py-4">
  <div class="relative flex items-center justify-between w-full">
  <div class="absolute inset-x-0 hidden  left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500 xl:px-44  md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full" style={{color:"black"}} src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
            </div>   
    <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500">
    </div>
    <div
      class="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-200 rounded-full place-items-center">
     <img src={search} alt="" className=" p-1 w-10 h-10 mr-2" />
      <div class="absolute -bottom-[4.5rem] w-max text-center">
        <h6
          class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
         Search  doctor
        </h6>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Details about yout account.
        </p>
      </div>
    </div>
    <div
      class="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-200 rounded-full place-items-center">
      <img src={profile} alt="" className="  p-1 w-10 h-10 mr-2" />
      <div class="absolute -bottom-[4.5rem] w-max text-center">
        <h6
          class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
       Check Doctor's profile </h6>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Details about yout account.
        </p>
      </div>
    </div>
    <div
      class="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-gray-200 rounded-full place-items-center">
     <img src={schedule} alt="" className="  p-1 w-10 h-10 mr-2" />
      <div class="absolute -bottom-[4.5rem] w-max text-center">
        <h6
          class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
         Schedule Appointment </h6>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Details about yout account.
        </p>
      </div>
    </div>
    <div
      class="relative z-10 grid w-10 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full place-items-center">
      <img src={hospital} alt="" className="  p-1 w-10 h-10 mr-2" />
      <div class="absolute -bottom-[4.5rem] w-max text-center">
        <h6
          class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
         Get Medical Solution        </h6>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Details about yout account.
        </p>
      </div>
    </div>
  </div>
</div>







        </div>
      </div>
      
    )
}