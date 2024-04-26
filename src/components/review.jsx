import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { ReviewAdd } from "./reviewForm";
import DeleteReview from "./deleteReviews";
import { Link } from "react-router-dom";




export  const Review =()=>{
  const [messages, setMessages] = useState(null);
    

  // const navigate = useNavigate();

 const getReviews = async () => {
            try {
              //   console.log(`${process.env.BACKEND_URI}/appointment`);
              const response = await fetch(`${process.env.REACT_APP_BOOKMEDICS_API}/review`);
              const data = await response.json();
              console.log(data);
              setMessages(data);
        
              //   console.log(first)
                
            } catch (error) {
              console.log(error)
            }
          };
        
         
      
        useEffect(() => {
          getReviews();
        }, []);
      



    return(
        <>
        {messages !== null &&
                        messages.map((review) => {
        return(
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
                 {review.message}
                </div>

                <div class="flex justify-between">
                    <span>Feb 13, 2021</span>
                    <div className="flex"> 
               <div><Link to={`/review/${review._id}/edit`}><MdEdit className="text-black text-xl" /></Link></div>
               <div className="ml-5"><DeleteReview     reviewId={review._id}           className="text-red-600 text-2xl cursor-pointer"/></div>
               </div>
                </div>
            </div>
            </div>
        )
               })}


            <ReviewAdd/>  
        </>    
    )
}
