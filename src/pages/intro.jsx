import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Intro(){
    return(
        <>
          <div className="grid grid-cols-2  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-40 my-40">
             <div className="  mt-20">
          <h4 className="text-4xl ml-20 mb-2 font-bold">WELCOME</h4>
         < h4 className="text-2xl ml-40 mt=5 font-bold">TO</h4>
         <img src={logo} alt="" className="mt-5 "/>
        </div>
             <div className="mt-10 mx-auto">
             <h4 className=" mt-20 text-2xl font-bold" >Get started</h4>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-12 my-5 text-blue-700 animate-bounce">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
           </svg>

           <div className="flex  ">
            <div className="">
           <Link to="/signup"><button className=" text-white w-40 border border-blue-700 bg-blue-700 py-2 px-3  rounded-md">USER</button>

             </Link> </div>
           {/* <div className="mr-20">
          <Link to="/signupH"> <button className=" text-white w-52 border border-blue-700 bg-blue-700 py-2 px-3  rounded-md">HEALTH PROFESSIONAL</button> </Link>
           </div>
             */}
            </div>
          </div>
          </div>

        </>
       
    )
}