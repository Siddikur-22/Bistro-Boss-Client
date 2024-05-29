import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUP/SignUp';
import Secret from './../Pages/Shared/Secret/Secret';
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../LayOut/Dashbord/Dashbord";
import Cart from "../Pages/Dashbord/Cart/Cart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'login',
            element:<Login></Login>,
        },
        {
            path:'signup',
            element:<SignUp></SignUp>,
        },
        {
            path:'/Menu',
            element:<Menu></Menu>,
        },
        {
            path:'/order/:category',
            element:<Order></Order>,
        },
        {
            path:'secret',
            element:<PrivateRoute>
              <Secret></Secret>
            </PrivateRoute>,
        }
      ]
    },
    {
      path:'dashbord',
      element:<Dashbord></Dashbord>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);