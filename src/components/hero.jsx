import hero from "../assets/hero2.jpg";
import doc from "../assets/doc.png";

export default function Hero() {
  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "540px",
      }}
    >
      <div className="mx-auto ml-36 mt-40">
        <h1 className="text-5xl text-white">
          Consultation with the{" "}
          <span className="text-gray-700 font-semibold ">best doctors</span>
        </h1>
        <br />
        <h1 className="text-4xl text-white">Just a click away</h1>
        <p className="mt-2 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="mt-10 border rounded-xl bg-gray-700 text-white p-2">
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

      <div>
    <div className="ml-20">
          <img src={doc} alt="doctor" className="w-full h-96 mt-10 mr-52 " />
        </div>

        <div className="border rounded-xl  bg-white w-80 p-1 ml-44 animate-bounce mb-10">
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
              +999
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
