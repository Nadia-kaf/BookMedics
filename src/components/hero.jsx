import hero from "../assets/hero2.jpg";
import doc from "../assets/doc.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);

  const openSignModal = () => {
    setIsSignModalOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeSignModal = () => {
    setIsSignModalOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  return (
    <div
      className="md:flex-1 lg:flex"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "540px",
      }}
    >
      <div className="lg:mx-auto ml-10 lg:ml-36 lg:mt-40">
        <h1 className="text-5xl text-white">
          Consultation with the{" "}
          
          <span className="text-gray-700 font-semibold">Best doctors</span>
        </h1>
        <br />
        <h1 className="text-4xl text-white">Just a click away</h1>
        <p className="mt-2 text-white">
Start right away by clicking on the button below.        </p>

        <button
          className="mt-10 border rounded-xl bg-blue-800 border-blue-800 text-white p-2 animate-pulse"
          onClick={openSignModal}
        >
          Book appointment
        </button>
      </div>

     

      {/* <div className=" flex border rounded-xl w-44 bg-white p-2 mt-52">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 border rounded-xl p-2 bg-blue-500 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          <p>Regular Checkup</p>
        </div> */}

      <div >
        <div className="ml-20">
          <img src={doc} alt="doctor" className="w-full h-96 mt-10 mr-52 " />
        </div>

        <div className="border rounded-xl  bg-white w-80 p-1 lg:ml-44 animate-bounce mb-10">
          <h5 className="p-2">Meet our doctors</h5>
          <div class="flex ">
            <img
              class="border-2 border-white rounded-full h-16 w-16 -mr-6"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <img
              class="border-2 border-white rounded-full h-16 w-16 -mr-6"
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt=""
            />
            <img
              class="border-2 border-white rounded-full h-16 w-16 -mr-6"
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt=""
            />
            <img
              class="border-2 border-white rounded-full h-16 w-16 -mr-6"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt=""
            />
            <img
              class="border-2 border-white rounded-full h-16 w-16 -mr-6"
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt=""
            />
            <img
              class="border-2 border-white rounded-full h-16 w-16 -mr-6"
              src="https://randomuser.me/api/portraits/women/42.jpg"
              alt=""
            />
            <span class="flex items-center justify-center bg-white text-sm text-gray-800 font-semibold border-2 border-gray-200 rounded-full h-16 w-16">
              +30
            </span>
          </div>
        </div>
      </div>

      <div>
        {isSignModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center p-12">
            <div className="relative top-20mx-auto w-full max-w-[550px] p-5 border h-[400px]  shadow-lg rounded-md bg-white">
              <div className="flex justify-between items-center">
                <button
                  onClick={closeSignModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <span className="material-icons-outlined">close</span>
                </button>
              </div>
              <div className="grid grid-cols-2  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
                <div className="  mt-20">
                  <img src={logo} alt="" className="mt-5 " />
                </div>
                <div className="mt-5 mx-auto  ml-28 my-44">
                  <h4 className=" mt-20  font-bold">Get started</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-12 my-5 text-blue-700 animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />
                  </svg>

                  <div className="flex  ">
                    <div className="">
                      <Link to="/signup">
                        <button
                          className=" text-white w-32 border border-blue-700 bg-blue-700 py-2 px-3  rounded-md"
                          onClick={() => {
                            /* Implement slot addition logic here */ closeSignModal();
                          }}
                        >
                          SIGN UP
                        </button>
                      </Link>{" "}
                    </div>
                    {/* <div className="mr-20">
          <Link to="/signupH"> <button className=" text-white w-52 border border-blue-700 bg-blue-700 py-2 px-3  rounded-md">HEALTH PROFESSIONAL</button> </Link>
           </div>
             */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
