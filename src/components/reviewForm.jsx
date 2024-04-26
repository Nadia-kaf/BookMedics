import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const ReviewAdd = ()=> {

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
        
              navigate("/review");
            } catch (error) {
              console.log(error);
            }
        };

    return(
        <>
         <form action="" className="mb-10"  onSubmit={onSubmitHandler}>
     <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter review"  value={message}  onChange={(e) => setMessage(e.target.value)}                
                ></textarea>
     <button class="rounded border-0 bg-blue-500  py-2 px-6  mb-40 text-lg text-white hover:bg-indigo-600 focus:outline-none w-20" type="submit">POST</button> 
     </form>
        
        </>
    )
}

