import docs from "../assets/docs.png";
import stet from "../assets/stets.png";
import aschedule from "../assets/aschedule.png";

export default function About() {
  return (
    <div class="sm:flex items-center max-w-screen-xl">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="" />
        </div>
      </div>
      <div class="sm:w-1/2 p-5 mb-44">
        <div class="text">
          <span class="text-gray-500 border-b-2 border-service uppercase mb-20">
            Who We Are
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            BookMedics:{" "}
            <span class="text-service">
              The ultimate health facility for medical solution
            </span>
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>

          <div className="flex mt-20 ">
            <div className="mx-10">
              <div className=" border rounded-full p-5 bg-service">
                <img src={docs} alt="" className="   w-36 h-12 " />
              </div>
             <div className="mt-2"> 
                <h4 className="">Expert professionals</h4>
                <h4 className="text-service flex">
                Find Doctors{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>{" "}
              </h4>
              </div>
            </div>
            <div className="mx-10">
              <div className="border rounded-full p-5 bg-blue-100">
                <img src={stet} alt="" className=" w-36 h-12 " />
              </div>
              <h4 className="w-full">Specialist treatment for all</h4>
              <h4 className="text-service flex">
                Book now{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>{" "}
              </h4>
            </div>
            <div className="mx-10">
            <div className=" border rounded-full p-5 bg-service">
                <img src={docs} alt="" className="   w-36 h-12 " />
              </div>
              <h4 className="w-full">
                Online Appointment and excellent treatment
              </h4>
              <h4 className="text-service flex">
                Make an Appointment{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
