import { Link } from "react-router-dom";
import dpic from "../assets/dpic.png";
import { useState } from "react";
import searchpic from "../assets/searchpic2.png"


export default function SearchServices() {

  const healthproviders = [
    { name: "Dr. Myles Vank", specialty: "Gynecologist", gender: "male", image: dpic },
    { name: "Dr. Jessy White", specialty: "Gynecologist", gender: "female", image: dpic },
    { name: "Dr. John Wlake", specialty: "Dentist", gender: "male", image: dpic },
    { name: "Dr. Vic Michigan", specialty: "Dentist", gender: "female", image: dpic },
    { name: "Dr. Evans Brooke", specialty: "Opthalmologist", gender: "male", image: dpic },
    { name: "Dr. Ella North", specialty: "Opthalmologist", gender: "female", image: dpic },
    { name: "Dr. Elma Park", specialty: "Cardiologist", gender: "female", image: dpic },
    { name: "Dr. Josiah Sit", specialty: "Neurologist", gender: "male", image: dpic },
    { name: "Dr. Mark Thompson", specialty: "Neurologist", gender: "male", image: dpic },
    { name: "Dr. Emma Stone", specialty: "Cardiologist", gender: "female", image: dpic }
  ];

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
        <div class="flex items-baseline justify-between border-b  border-gray-200 pb-6 pt-24" style={{backgroundImage: `url(${searchpic})`, backgroundPosition: "center"}}>
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 mx-auto">
            Search Doctors
          </h1>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-6">
        

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
                        value="Opthalmologist"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={specialtyFilter === "Opthalmologist"}
                        onChange={() => setSpecialtyFilter("Opthalmologist")}
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
                        value="male"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={genderFilter === "male"}
                        onChange={() => setGenderFilter("male")}
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
                        value="female"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={genderFilter === "female"}
                        onChange={() => setGenderFilter("female")}
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
<img src={healthproviders.image} alt="doctor's pic" />
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
                  <h2>97%</h2>
                  <h2>4 reviews</h2>
                  <h2>$50-$100</h2>
                  <button className="border rounded-xl bg-blue-500 p-2 px-10 text-white mt-2 "><Link to="/profile">View Profile</Link></button>
                  <br />
                  <button className="border rounded-xl bg-blue-500 p-2 px-6 text-white mt-5">Book Appointment</button>
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
