import hero from "../assets/hero1.png"
import doc from "../assets/doc.png"

export default function Hero(){
    return(
        <div className="flex">

            <div className="mx-auto ml-36 mt-44">
                <h1 className="text-4xl">Consultation with the best doctors</h1>
                <br />
                <h1 className="text-4xl">Just a click away</h1>
                <p className="mt-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <button className="mt-10 border rounded-full bg-black text-white p-2">Book appointment</button>
            </div>
            <div className="mr-52 mt-20">
                <img src={doc} alt="doctor"  className="w-10px h-60px  " />
            </div>
        </div>
    )
}