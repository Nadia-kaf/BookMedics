import { Link } from "react-router-dom";
import reception from "../assets/recption.jpg"
import { useState } from "react";

export default function SignUp() {

  const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            const response = await fetch("http://localhost:4000/users/register", {
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
          <form action="#" method="post" class="space-y-4">
            <div>
              <label for="name" class="mb-2 dark:text-gray-400 text-lg">Full Name</label>
              <input
                id="name"
                class="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="name"
                placeholder="Full name"
                
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
                href="#"
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
      
      
      
      
     


























    <div className="min-h-screen   flex flex-col justify-center sm:py-12b" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(${reception})`, backgroundSize: 'cover', backgroundPosition: 'center', height:"280px" }}>
      <div className="flex  mb-40 mt-40  sm:max-w-l sm:mx-auto " >
    <div
      className="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="grid grid-cols-2 gap-1">  
      
    <div className="relative px-4 py-10 h-96 mt-20 bg-white shadow-lg sm:rounded-3xl sm:p-10 mr-40 ml-20">
      <form action=""  onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto w-full ">
        <div>
          <h1 className="text-2xl font-semibold">Register  as a Client</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative pb-5">
              <input autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="full name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
              <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
            </div>
            <div className="relative pb-5">
              <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div className=" flex space-x-20">
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-32 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div class="relative">
              <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-36 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={password} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password**</label>
            </div>
            </div>
            <div className="relative">
             <Link to="/"> <button className="bg-cyan-500 text-white rounded-md px-2 py-1" type="submit">Submit</button></Link>
            </div>
          </div>
        </div>
      </div>
      </form>
      <div className="flex ">
          <p className="text-gray-600 text-sm pb-10">Already have an account as a Client?</p><a className="text-gray-600 text-sm underline"
            href="/login">Log in</a>
        </div>
    </div>
    <div>
      <h1 className="text-white   border-blueGray-300 text-2xl">Welcome  to BookMedics</h1>
      <p className="text-white italic "> An appointment,  a step closer to medical solution.</p>
      
      <h1 className="text-white  border-blueGray-300 text-xl mt-32" >This is a simple and swift medical appointment app.
      <br />
      BookMedics offer both general and specialists services to clients.
      </h1>
      <h1 className="text-white  border-blueGray-300 text-xl mt-30">We value your time and health.</h1>
      <br />
     <h1 className="text-white border-b-2 border-blueGray-300 text-xl mb-36">Ready to book medical appointment?
     <br />
    <div className="flex py-5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-cyan-500 rounded-lg mr-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"  />
   </svg> 
   <h2 className="flex mb-2">Sign up here</h2></div>
     </h1>
    </div>
  </div>
  </div>
</div>
</>
  );
}
