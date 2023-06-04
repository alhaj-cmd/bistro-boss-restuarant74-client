
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Secrect from "../Pages/Shared/Secret/Secrect";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoards/MyCart/MyCart";
import AllUser from "../Pages/DashBoards/AllUsers/AllUser";
import AddItem from "../Pages/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Layout/ManageItem";
import Payment from "../Pages/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"menu",
                element:<Menu></Menu>
            },
            {
                path:"order/:category",
                element:<Order></Order>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path: 'secret',
                element:<PrivetRoute><Secrect></Secrect></PrivetRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>

            },
            {
                path:"payment",
                element:<Payment></Payment>
            },
            {
                path:'allusers',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path:'addItem',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path:'manageitems',
                element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
            }
        ]
    }
]);

