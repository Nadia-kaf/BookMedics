import { Link, useNavigate } from "react-router-dom";
import reception from "../assets/recption.jpg"
import { useState } from "react";

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
         <div
    class="flex font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen"
  >
    <div class="grid gap-8">
      <div
        id="back-div"
        class="bg-gradient-to-r from-blue-500 to-deep-blue rounded-[26px] m-4 "
      >
        <div
          class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
          <h1 class="pt-8 pb-6 font-bold text-3xl dark:text-gray-400 text-center cursor-default">
           Register          </h1>
          <form action="#" method="post" class="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label for="name" class="mb-2 dark:text-gray-400 text-lg">Full Name</label>
              <input
                id="name"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="name"
                placeholder="Full name"
                value={fullName} onChange={(e) => setFullName(e.target.value)}
                
              />
            </div>
            <div>
              <label for="email" class="mb-2 dark:text-gray-400 text-lg">Email</label>
              <input
                id="email"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="email"
                placeholder="Email"
                required
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-lg">Password</label>
              <input
                id="password"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-lg"> Confirm Password</label>
              <input
                id="password"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
                value={password} onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
               <button
              class="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
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
  </div>
</>
  );
}
