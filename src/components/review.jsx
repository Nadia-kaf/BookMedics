import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";




export  const Review =()=>{
  const [message, setMessage] = useState(null);
    

  const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        const newReview = {
         message: message,
        };
    
        try {
            const response = await fetch(`http://localhost:4000/review`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
              body: JSON.stringify(newReview),
            });
      
            const data = await response.json();
            console.log(data);
      
            navigate("/profile");
          } catch (error) {
            console.log(error);
          }
        };
      



    return(
        <>
        <div class="flex flex-col gap-3 mt-14">
            <div class="flex flex-col gap-4  p-4">
                {/* <!-- Profile and Rating --> */}
                <div class="flex justify justify-between">
                    <div class="flex gap-2">
                        <div class="w-7 h-7 text-center rounded-full bg-red-500">J</div>
                        <span>Jess Hopkins</span>
                    </div>
                   
                </div>

                <div>
                    Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </div>

                <div class="flex justify-between">
                    <span>Feb 13, 2021</span>
                    <div className="flex"> 
               <div><MdEdit className="text-black text-xl" /></div>
               <div className="ml-5"><MdDelete className="text-red-600 text-2xl cursor-pointer"/></div>
               </div>
                </div>
            </div>
            </div>



     <form action="" className="mb-10"  onSubmit={onSubmitHandler}>
     <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter review"    onChange={(e) => setMessage(e.target.value)}                
                ></textarea>
     </form>
     <button class="rounded border-0 bg-blue-500  py-2 px-6  mb-40 text-lg text-white hover:bg-indigo-600 focus:outline-none w-20">POST</button>  
        </>    
    )
}
