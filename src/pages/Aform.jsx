import { Link } from "react-router-dom";
import dpic from "../assets/dpic.png";
import Footer from "../components/footer";

export default function Aform() {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 gap-9 border rounded-xl p-5 mx-40 mt-20">
          <div className="flex">
            <div>
              <img src={dpic} alt="doctor's pic" />
            </div>
            <div className="ml-10">
              <h3>Doctor's name</h3>
              <h4>profession</h4>

              <p>Specialist service</p>
              <div class="space-x-1 flex justify-center mt-3">
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
                <svg
                  class="w-4 h-4 mx-px fill-current text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                >
                  <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className=" ml-44 my-10">
          <h1 className="text-3xl">30 April,2024</h1>
          <p>Tuesday</p>
        </div>

        <div className="border rounded-xl mx-40 pb-20 px-10 ">
          <div className="grid grid-cols-7 gap-3 mt-5 ">
            <div className="flex ">
              <div className="mr-5">
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div>
                <h1>MON</h1>
                <h4 className="text-sm mt-2 mr-2">29 APRIL 2024</h4>
              </div>
            </div>
            <div>
              <h1>TUES</h1>
              <h4 className="text-sm mt-2 mr-2">30 APRIL 2024</h4>
            </div>
            <div>
              <h1>WED</h1>
              <h4 className="text-sm mt-2 mr-2">01 MAY 2024</h4>
            </div>
            <div>
              <h1>THURS</h1>
              <h4 className="text-sm mt-2 mr-2">02 MAY 2024</h4>
            </div>
            <div>
              <h1>FRI</h1>
              <h4 className="text-sm mt-2 mr-2">03 MAY 2024</h4>
            </div>
            <div>
              <h1>SAT</h1>
              <h4 className="text-sm mt-2 mr-2">04 MAY 2024</h4>
            </div>
            <div className="flex">
              <div>
                {" "}
                <h1>SUN</h1>
                <h4 className="text-sm mt-2 mr-2">05 MAY 2024</h4>
              </div>
              <div className="ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <hr className="mx-20 mt-3" />

          <div className="grid grid-cols-7  gap-3 mt-5 mx-38">
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 AM
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
            <div className="border rounded-xl bg-blue-800 text-white w-20 p-2 items-center">
              9:00 am
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-96 my-20">
          <Link to="/checkout">
            <button className="border rounded-xl bg-green-600 text-white p-4 ">
              Proceed to Pay
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
