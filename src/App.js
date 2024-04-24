
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import LoginH from './pages/loginH';
import SignUpH from './pages/signupH';
import SearchServices from './components/searchS';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import AppointD from './pages/appointmentD';
import AvailableSlots from './pages/available-slots';
import DocPatient from './pages/mypatients';
import Pdashboard from './pages/pdashboard';
import Patient from './pages/patient';
import Aform from './pages/Aform';
import BookingSuccess from './pages/bookingsuccess';
import Checkout from './pages/checkout';
import About from './components/about';
import Booking from './pages/booking';
import PAppointment from './pages/pappointment';
import PatientBooking from './pages/pappointment';


const router= createBrowserRouter([
{path:'/', element: <Home/>},
{path:'/login', element: <Login/>},
{path:'/signup', element: <SignUp/>},
{path:'/loginH', element: <LoginH/>},
{path:'/signupH', element: <SignUpH/>},
{path:'/searchS', element: <SearchServices/>},
{path:'/profile', element: <Profile/>},
{path:'/doctor/dashboard', element: <Dashboard/>},
{path:'/doctor/appointment', element: <AppointD/>},
{path:'/doctor/available-slot', element: <AvailableSlots/>},
{path:'/doctor/patients', element: <DocPatient/>},
{path:'/patient/dashboard', element: <Pdashboard/>},
{path:'/patient', element: <Patient/>},
{path:'/booking', element: <Booking/>},
{path:'/booking-success', element: <BookingSuccess/>},
{path:'/checkout', element: <Checkout/>},
{path:'/about', element: <About/>},
{path:'/patient/appointment', element: <PatientBooking/>}
])

function App() {

  return (
   <>
   
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
