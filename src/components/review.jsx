
export default function Review(){
    return(
        <>
   <div class="flex items-start">
  <div class="ml-6">
    <p class="flex items-baseline">
      <span class="text-gray-600 font-bold">Amina Danso</span>
      <span class="ml-2 text-green-600 text-xs">Verified Patient</span>
    </p>
    <div class="flex items-center mt-1">
      <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      <svg class="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      <svg class="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    </div>
    
    <div class="mt-3">
    <label for="message" class="text-sm leading-7 text-gray-900">Message</label>
           <textarea id="message" name="message" class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
    </div>
    <div class="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
    <button class="rounded border-0 bg-blue-500  py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none w-20">POST</button>
      <div class="flex items-center">
        <button class="flex items-center ml-6">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/></svg>
          <span class="ml-2">56</span>
        </button>
        <button class="flex items-center ml-4">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/></svg>
          <span class="ml-2">10</span>
        </button>
      </div>
    </div>
  </div>
</div>
        
          <div class="max-w-xl   flex w-full flex-col p-8">
       
       <div class="mb-4">
         <label class="block mb-1 text-gray-900 font-bold">Rating</label>
         <div class="flex items-center space-x-2">
             <input type="radio" name="rating" id="rating1" value="1" class="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
             <label for="rating1">1</label>
             <input type="radio" name="rating" id="rating2" value="2" class="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
             <label for="rating2">2</label>
             <input type="radio" name="rating" id="rating3" value="3" class="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
             <label for="rating3">3</label>
             <input type="radio" name="rating" id="rating4" value="4" class="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
             <label for="rating4">4</label>
             <input type="radio" name="rating" id="rating5" value="5" class="focus:outline-none focus:ring-2 focus:ring-blue-500"/>
             <label for="rating5">5</label>
         </div>
     </div>
       
   </div> 
        
        </>




     
    )
}
