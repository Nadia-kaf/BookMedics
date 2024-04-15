
export default function Navbar(){
 
  return (
    <nav className="flex items-center h-16 px-4 border-b gap-4 bg-cyan-500 ">
      <div className="flex items-center gap-2" href="#">
        <span className="font-semibold text-xl">BookMedics</span>
      </div>
      <ul className="flex-1 flex justify-center items-center gap-6">
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/">
          Home
        </li>
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/services">
          Services
        </li>
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/profiles">
          Health Professionals
        </li>
        <li className="flex items-center gap-1 text-sm font-medium hover:underline" href="/contact">
          Contact Us
        </li>
      </ul>
      <div className="ml-auto">
        <button className="border rounded-xl p-2 bg-gray-700 text-white ">Sign In</button>
      </div>
      <div className="ml-auto">
        <button className="border rounded-xl p-2  bg-gray-700 text-white">Register</button>
      </div>
    </nav>
  )
}
