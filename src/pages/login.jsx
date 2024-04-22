import { Link } from "react-router-dom"
import reception from "../assets/recption.jpg"


export default function Login(){
    return(
        <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12  "  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${reception})`, backgroundSize: 'cover', backgroundPosition: 'center', height:"280px" }}>
  <div className="flex py-3 mb-40 mt-40  sm:max-w-l sm:mx-auto " >
    <div
      className="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="grid grid-cols-2 gap-2">  

    <div className="relative px-4 py-10 h-96 bg-white shadow-lg sm:rounded-3xl sm:p-20 mr-40 ml-20">

      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">Log In as a Client</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div className="relative">
              <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div className="relative">
              <Link to="/patient/dashboard"><button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
              
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pt-2 mt-2">
          <p className="text-gray-600 text-sm">Don't have an account as a Client?</p><a className="text-gray-600 text-sm underline"
            href="/signup">Sign up</a>
        </div>
    </div>
    <div>
      <h1 className="text-white   border-blueGray-300 text-2xl">Welcome Back to BookMedics</h1>
      
      <h1 className="text-white  border-blueGray-300 text-xl mt-36" >We offer variety of health services and health specialists.
      </h1>
      <br />
     <h1 className="text-white border-b-2 border-blueGray-300 text-xl mb-36">Ready to book medical appointment?
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-cyan-500 rounded-lg">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
   </svg> 
   <h2 className="flex mb-2">Log in here</h2>
     
     </h1>
    </div>
  </div>
  </div>
</div>
    )
}