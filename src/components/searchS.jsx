import { Link } from "react-router-dom";
import { useState } from "react";
import dotors from "../assets/doctors.png"
import { healthproviders } from "../pages/jsondata/doctors";


export default function SearchServices() {

  

  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const filteredHealthproviders = healthproviders.filter((healthprovider) => {
    const specialtyMatch = specialtyFilter === "" || healthprovider.specialty === specialtyFilter;
    const genderMatch = genderFilter === "" || healthprovider.gender === genderFilter;
    return specialtyMatch && genderMatch;
  });


  return (
    <div class="bg-white">
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" " style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${dotors})`, height:" 230px", weight: "1800px"}}>
      </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-3">
        

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form class="hidden lg:block">
              {/* Specialties Filter */}
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <span class="font-medium text-gray-900">Select Specialty</span>
                </h3>

                <div class="pt-6" id="filter-section-mobile-0">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-0"
                        name="specialtyFilter"
                        value=""
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === ""}
                        onChange={() => setSpecialtyFilter("")}
                      />
                      <label
                        for="filter-mobile-color-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        All
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-1"
                        name="specialtyFilter"
                        value="Gynecologist"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === "Gynecologist"}
                        onChange={() => setSpecialtyFilter("Gynecologist")}
                      />
                      <label
                        for="filter-mobile-color-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Gynecologist
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-2"
                        name="specialtyFilter"
                        value="Dentist"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === "Dentist"}
                        onChange={() => setSpecialtyFilter("Dentist")}
                      />
                      <label
                        for="filter-mobile-color-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Dentist
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-3"
                        name="specialtyFilter"
                        value="Ophthalmologist"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === "Ophthalmologist"}
                        onChange={() => setSpecialtyFilter("Ophthalmologist")}
                      />
                      <label
                        for="filter-mobile-color-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Opthalmologist
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-4"
                        name="specialtyFilter"
                        value="Cardiologist"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === "Cardiologist"}
                        onChange={() => setSpecialtyFilter("Cardiologist")}
                      />
                      <label
                        for="filter-mobile-color-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Cardiologist
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-5"
                        name="specialtyFilter"
                        value="Neurologist"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === "Neurologist"}
                        onChange={() => setSpecialtyFilter("Neurologist")}
                      />
                      <label
                        for="filter-mobile-color-5"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Neurologist
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gender Filter */}
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <span class="font-medium text-gray-900">Select Gender</span>
                </h3>

                <div class="pt-6" id="filter-section-mobile-1">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-gender-0"
                        name="genderFilter"
                        value=""
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={genderFilter === ""}
                        onChange={() => setGenderFilter("")}
                      />
                      <label
                        for="filter-mobile-gender-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        All
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-gender-1"
                        name="genderFilter"
                        value="Male"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={genderFilter === "Male"}
                        onChange={() => setGenderFilter("Male")}
                      />
                      <label
                        for="filter-mobile-gender-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Male
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-gender-2"
                        name="genderFilter"
                        value="Female"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={genderFilter === "Female"}
                        onChange={() => setGenderFilter("Female")}
                      />
                      <label
                        for="filter-mobile-gender-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-10 border rounded-xl p-2 px-5 bg-foot-blue text-white ml-10">
                Search
              </button>
            </form>


            {/* Display filtered doctors */}
            <div class="lg:col-span-3">
                             
                 {filteredHealthproviders.map((healthproviders) => (
                   <div className="grid grid-cols-2 gap-9 border rounded-xl p-5 min-w-96 mt-5">

<div className="flex">  
<div>
<img src={healthproviders.image} alt="doctor's pic"className="rounded-md h-40 w-44" />
</div>
<div className="ml-10">
<h3>{healthproviders.name}</h3>
<h4>{healthproviders.specialty}</h4>

<div class="space-x-1 flex justify-center mt-3">
<svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg class="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
                <svg class="w-4 h-4 mx-px fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14">
                    <path
                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                    </path>
                </svg>
            </div>
                </div>
                </div>

                <div className="ml-48 ">
                  <div className="flex">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
   <h2 className="ml-3">97%
</h2>
</div>

                  <div className="flex">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
                          <h2 className="ml-2">4 reviews</h2>

                  </div>

                  <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
  <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
  <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
</svg>

                           <h2 className="ml-3">$50-$100</h2>
         
                  </div>
                  <button className="border rounded-xl bg-blue-500 py-2 px-6 text-sm text-white mt-2 "><Link to="/profile">View Profile</Link></button>
                  <br />
                  <Link to="/booking"><button className="border rounded-xl text-sm bg-blue-500 py-2 px-5 text-white mt-5">Book Appointment</button></Link>
                </div>
              </div>
                ))}
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
