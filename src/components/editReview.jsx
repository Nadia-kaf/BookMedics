import { useParams } from "react-router";



export const EditReview=() =>{

    const params = useParams();

   const [message, setMessage] = useState(null);
 
    const navigate = useNavigate();

    const getReview = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BOOKMEDICS_API}/review/${params.id}`
          );
          const data = await response.json();
    
         setMessage(data.service);

        } catch (error) {
          console.log(error);
        }
      };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        const editedReview = {
          message: message,
        };
    
        try {
            const response = await fetch(`${process.env.REACT_APP_BOOKMEDICS_API}/review/${params.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
              body: JSON.stringify(editedReview),
            });
      
            const data = await response.json();
            console.log(data);
      
            navigate("/profile");
          } catch (error) {
            console.log(error);
          }
        };
      
     
  useEffect(() => {
    getReview();
  }, [params.id]);








    return(
        <>
        
        <form action="" className="mb-10"  onSubmit={onSubmitHandler}>
     <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter review" value={message}   onChange={(e) => setMessage(e.target.value)}                
                ></textarea>
     </form>
     <button class="rounded border-0 bg-blue-500  py-2 px-6  mb-40 text-lg text-white hover:bg-indigo-600 focus:outline-none w-20">POST</button>  
        
        
        </>
    )
}