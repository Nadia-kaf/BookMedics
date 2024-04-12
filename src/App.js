
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import LoginH from './pages/loginH';
import SignUpH from './pages/signupH';


const router= createBrowserRouter([
{path:'/', element: <Home/>},
{path:'/login', element: <Login/>},
{path:'/signup', element: <SignUp/>},
{path:'/loginH', element: <LoginH/>},
{path:'/signupH', element: <SignUpH/>}
])

function App() {

  return (
   <>
   
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
