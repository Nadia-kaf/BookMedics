import { Link } from "react-router-dom";

export default function Specialties() {
  return (
    <div >
      <section
        id="features"
        class="relative block px-6  md:py-20 md:px-10  border-t border-b"
      >
        <div className="flex justify-end">
          <Link
            to="/searchS"
            class="flex items-center text-service border border-deep-blue py-2 px-6 gap-2 rounded  "
          >
            <span>View All</span>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
        <div class="relative mx-auto max-w-5xl text-center">
          <span class="text-deep-blue my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Specialties
          </span>
          <h2 class="block w-full bg-gradient-to-r from-service to-foot-blue bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Specialized services for your medical needs{" "}
          </h2>
        </div>

        <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-md border border-neutral-800 bg-service p-8 text-center shadow">
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-neutral-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-color-swatch"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                <line x1="17" y1="17" x2="17" y2="17.01"></line>
              </svg>
            </div>
            <h3 class="mt-6 text-gray-100">Dental</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-100">
              Tailor your landing page's look and feel, from the color scheme to
              the font size, to the design of the page.
            </p>
          </div>

          <div class="rounded-md border border-neutral-800 bg-service p-8 text-center shadow">
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bolt"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
              </svg>
            </div>
            <h3 class="mt-6 text-gray-100">Orthopaedic</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-100">
              We build our templates for speed in mind, for super-fast load
              times so your customers never waver.
            </p>
          </div>
          <div class="rounded-md border border-neutral-800 bg-service p-8 text-center shadow">
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                borderColor: "rgb(93, 79, 240)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bolt"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
              </svg>
            </div>
            <h3 class="mt-6 text-gray-100">Cardiologist</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-100">
              We build our templates for speed in mind, for super-fast load
              times so your customers never waver.
            </p>
          </div>

  
        </div>
       
      </section>
    </div>
  );
}
