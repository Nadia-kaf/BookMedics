import { Link } from "react-router-dom";
import dpic from "../assets/dpic.png";


export default function Checkout() {
  return (
    <>
      <div className="flex mx-40">
        <div class="px-3 md:w-7/12 my-20">
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
            <div class="w-full flex mb-3 items-center">
              <div class="w-32">
                <span class="text-gray-600 font-semibold">Contact</span>
              </div>
              <div class="flex-grow pl-3">
           <input type="text" placeholder="+000 000 000 0000" className=" border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colorsp-1 w-72"  />   
           </div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-32">
                <span class="text-gray-600 font-semibold">Billing Address</span>
              </div>
              <div class="flex-grow pl-3">
                <input type="text"  placeholder="Accra, Ghana"  className=" border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors p-1 w-72"/>
              </div>
            </div>
          </div>
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
            <div class="w-full p-3 border-b border-gray-200">
              <div class="mb-5">
                <label for="type1" class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    class="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type1"
                    checked
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    class="h-6 ml-3"
                  />
                </label>
              </div>
              <div>
                <div class="mb-3">
                  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Name on card
                  </label>
                  <div>
                    <input
                      class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="John Smith"
                      type="text"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Card number
                  </label>
                  <div>
                    <input
                      class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                    />
                  </div>
                </div>
                <div class="mb-3 -mx-2 flex items-end">
                  <div class="px-2 w-1/4">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Expiration date
                    </label>
                    <div>
                      <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                      </select>
                    </div>
                  </div>
                  <div class="px-2 w-1/4">
                    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                  <div class="px-2 w-1/4">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Security code
                    </label>
                    <div>
                      <input
                        class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="000"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-3">
              <label for="type2" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  width="80"
                  class="ml-3"
                />
              </label>
            </div>
          </div>
          <div>
            <Link to="/booking-success"><button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
              <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button></Link>
          </div>
        </div>

        <div className="mt-20 ml-40 border rounded-xl w-5/12 h-full">
          <h1 className="p-4"> Book Summary</h1>
          <hr />
          <div className="flex">
            <div>
              <img src={dpic} alt="doctor's pic" className="w-28 h-28 rounded-md ml-3 mt-5" />
            </div>
            <div className="ml-8 mt-5">
              <h3>Doctor's name</h3>
              <h4>profession</h4>

              <p>Specialist service</p>
              <div class="space-x-1 flex justify-center mt-3">
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
              </div>
              </div>
             <h3 className="mt-5 ml-10"> <span className="font-bold">Date:</span> 30 APRIL 2024 <span className="ml-3"><span className="font-bold">Time:</span> 9:00AM</span></h3>

             <div className="mt-20 ml-5">
             <h2>Consultation fee <span className="ml-28">GHC 200</span></h2>
             <h2 className="mt-4">Booking fee <span className="ml-36">GHC 20</span></h2>

             <hr className="mt-5"/>
             <h1 className="my-4 font-bold"> Total <span className="ml-48">GHC 220</span></h1>
             </div>
        </div>
      </div>
    </>
  );
}
