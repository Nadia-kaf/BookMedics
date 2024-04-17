export default function SearchServices(){
    return(
       
<div class="bg-white">
                
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 mx-auto">Search Doctors</h1>

      </div>

      <section aria-labelledby="products-heading" class="pb-24 pt-6">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* <!-- Filters --> */}
          <form class="hidden lg:block">
            <h3 class="sr-only">Categories</h3>
            <div class="border-t border-gray-200 px-4 py-6">
              <h3 class="-mx-2 -my-3 flow-root">
                <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                  <span class="font-medium text-gray-900">Gender</span>
                  
                </button>
              </h3>

              <div class="pt-6" id="filter-section-mobile-0">
                <div class="space-y-6">
                  <div class="flex items-center">
                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">Male</label>
                  </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Female</label>
                </div>
              </div>
              </div>
              </div>
            <div class="border-t border-gray-200 px-4 py-6">
              <h3 class="-mx-2 -my-3 flow-root">
                <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                  <span class="font-medium text-gray-900">Select Specialist</span>
                  
                </button>
              </h3>

              <div class="pt-6" id="filter-section-mobile-0">
                <div class="space-y-6">
                  <div class="flex items-center">
                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">Dentist</label>
                  </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Urologist</label>
                </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Opthmologist</label>
                </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Cardiologist</label>
                </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Neurologist</label>
                </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">General medical practitioner</label>
                </div>
                  <div class="flex items-center">
                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Gynaecologist</label>
                </div>
              </div>
              </div>
              <button className="mt-10 border rounded-xl p-2 px-5 bg-foot-blue text-white ml-10">Search</button>
              </div>
          </form>

          {/* <!-- Product grid --> */}
          <div class="lg:col-span-3">
             Your content is here
          </div>
        </div>
      </section>
    </main>
  </div>

    )
}