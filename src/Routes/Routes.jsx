import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import Mens from "../Components/Mens/Mens/Mens";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard.JSX";
import Accessories from "../Components/Accessories/Accessories/Accessories";
import Books from "../Components/Books/Books/Books";
import AdminHome from "../Components/Dashboard/AdminHome/AdminHome";
import AddItem from "../Components/Dashboard/AddItem/AddItem";
import AllUser from "../Components/Dashboard/AllUser/AllUser";
import MyCart from "../Components/Dashboard/MyCart/MyCart";
import PaymentHistory from "../Components/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        // error element
        element: <Main />,
        children: [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/mens",
            element : <Mens/>
        },
        {
            path : "/accessories",
            element : <Accessories/>
        },
        {
            path : "/books",
            element : <Books/>
        },
        {
            path : "/login",
            element : <Login/>
        },
        {
            path : "/register",
            element : <Register/>
        },

        ],

    },
    {
        path : "/dashboard",
        element : <Dashboard/>,
        children : [
            {
                path: "/dashboard/adminHome",
                 element : <AdminHome></AdminHome>
            },
            {
                path: "/dashboard/addItem",
                 element :  <AddItem/>
            },
            {
                path: "/dashboard/allUser",
                 element : <AllUser/>
            },
            {
                path: "/dashboard/myCart",
                 element : <MyCart/>
            },
            {
                path: "/dashboard/paymentHistory",
                 element : <PaymentHistory/>
            },
        ]
    },
]);
