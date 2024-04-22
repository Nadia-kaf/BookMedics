import { Link } from "react-router-dom";
import medics from "../assets/professionals.png";

export default function LoginH(){
    return(
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${medics})`, backgroundSize: 'cover', backgroundPosition: 'center', height:"280px" }}>
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-deep-blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-2xl font-semibold">Log In as a Health Professional</h1>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative">
              <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div class="relative">
             <Link to="/doctor/dashboard"> <button class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button></Link>
            </div>
          </div>
        </div>
      </div>
            <div class="flex gap-2 pt-2">
          <p class="text-gray-600 text-sm">Don't have an account as  Health Professional?</p><a class="text-gray-600 text-sm underline"
            href="/signupH">sign up here</a>
        </div>  
    </div>
  </div>
</div>
    )
}