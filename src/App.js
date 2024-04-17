
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
import DashboardC from './components/dashboardC';


const router= createBrowserRouter([
{path:'/', element: <Home/>},
{path:'/login', element: <Login/>},
{path:'/signup', element: <SignUp/>},
{path:'/loginH', element: <LoginH/>},
{path:'/signupH', element: <SignUpH/>},
{path:'/searchS', element: <SearchServices/>},
{path:'/profile', element: <Profile/>},
{path:'/dashboard', element: <Dashboard/>},
{path:'/dashboardC', element: <DashboardC/>}
])

function App() {

  return (
   <>
   
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
