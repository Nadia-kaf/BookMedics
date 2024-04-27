import { Link, useNavigate } from "react-router-dom";
import reception from "../assets/recption.jpg"
import { useState } from "react";
import pik from "../assets/hand-cupping-stethoscope-health-concept.jpg";

export default function SignUp() {

  const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare user data for registration
        const userData = {
            fullName: fullName,
            email: email,
            password: password,
            confirmPassword:confirmPassword
        };

        try {
            const response = await fetch("https://bookmedics-api.onrender.com/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Assuming token is stored in localStorage
                    // "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Registration successful
                // Redirect or show success message
            } else {
                // Handle registration error
                console.error("Registration failed");
            }

            navigate("/searchS");

        } catch (error) {
            console.error("Error:", error);
        }


      
     
  
    };




  return (
      <>

<div className="min-h-screen   flex flex-col justify-center sm:py-12"     style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${pik})`, backgroundSize: 'cover', backgroundPosition: 'center', height:"280px" }}
>
       <div class="relative py-3 lg:ml-40 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-deep-blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div class="relative px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">

      <div class="max-w-md mx-auto px-10">
        <div>
          <h1 class="text-2xl font-semibold">Register </h1>
        </div>
        <form action=""  method="post" onSubmit={handleSubmit}>

        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative">
              <input autocomplete="off" id="name" name="email"  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"  type="name"
                placeholder="Full name"
                value={fullName} onChange={(e) => setFullName(e.target.value)}/>
              <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
            </div>
           
            <div class="relative">
              <input autocomplete="off" id="email" name="email"  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address"  type="email"
                required
                value={email} onChange={(e) => setEmail(e.target.value)} />

              <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div className="mt-10 flex space-x-20">
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-32 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required
                value={password} onChange={(e) => setPassword(e.target.value)}/>
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-36 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required value={password} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password**</label>
            </div>
            </div>
            <div class="relative">
            <button
              class="bg-cyan-500 text-white rounded-md px-2 py-1 text-sm mt-10"
              type="submit"
            >
              SIGN UP
            </button>
            </div>
          </div>
        </div>
        </form>

      </div>
      <div class="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span class="cursor-default dark:text-gray-300">Have an account?</span>
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="/login"
              >
                <span
                  class="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Log In
                </span>
              </a>
            </h3>
          </div>
          <div
            class="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
          >
            <p class="cursor-default">
              By signing in, you agree to our
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Terms
                </span>
              </a>
              and
              <a
                class="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>

    </div>
  </div>
</div>
</>
  );
}
