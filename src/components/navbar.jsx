import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 

export default function Navbar(){
    
    const [open, setOpen] = React.useState(false);
   
    const handleOpen = () => setOpen(!open);

  return (
    <nav className="flex items-center h-16 px-4 border gap-4 bg-nav-blue ">
      <div className="flex items-center gap-2" href="#">
        <span className="font-semibold text-xl">BookMedics</span>
      </div>
      <ul className="flex-1 flex justify-center items-center gap-6 text-white">
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
        <Button onClick={handleOpen} variant="gradient">
        <span className="border rounded-xl p-2 bg-gray-700 text-white ">Sign up</span>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}

        className=" flex justify-between"
      >
        <DialogHeader>Sign Up</DialogHeader>
        <DialogBody>
         Kindly tap on the button if you are a user or a health professional to sign up.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="border rounded-xl p-2 bg-gray-700 text-white"><Link to="/signup">User</Link></span>
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="border rounded-xl p-2 bg-gray-700 text-white"><Link to="/signupH">Health Professional</Link></span>
          </Button>
        </DialogFooter>
      </Dialog>
      </div>
    </nav>
  )
}
