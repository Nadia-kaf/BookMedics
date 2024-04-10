
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';

const router= createBrowserRouter([
{path:'/', element: <Home/>},
{path:'/login', element: <Login/>},
{path:'/signup', element: <SignUp/>},
])

function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
