import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuPages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

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
            path:'/Menu',
            element:<Menu></Menu>,
        },
        {
            path:'/order/:category',
            element:<Order></Order>,
        }
      ]
    },
  ]);