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
import Details from "../Components/Mens/Details/Details";
import Search from "../Components/Search/Search";
import BooksAddItem from "../Components/Dashboard/BooksAddItem/BooksAddItem";
import BookDetails from "../Components/Books/BookDetails/BookDetails";
import AddAccessories from "../Components/Dashboard/AddAccessories/AddAccessories";
import AccessoriesDetails from "../Components/Accessories/AccessoriesDetails/AccessoriesDetails.JSX";
import Mobile from "../Components/Mobile/Mobile/Mobile";
import MobileDetails from "../Components/Mobile/MobileDetails/MobileDetails";
import Laptop from "../Components/Laptop/Laptop/Laptop";
import Perfume from "../Components/Perfume/Perfume/Perfume";
import Watch from "../Components/Watch/Watch/Watch";
import ForgetPass from "../Components/ForgetPass/ForgetPass";
import MyProfile from "../Components/MyProfile/MyProfile";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import CheckOut from "../Components/Dashboard/CheckOut/checkOut";
import Payment from "../Components/Dashboard/Payment/Payment/Payment";
import ManageItem from "../Components/Dashboard/ManageItems/ManageItem";

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
            element :<PrivateRoutes> <Mens/></PrivateRoutes>,
         
        },
       {
        path :'/details/:id',
        element : <Details/>,
        
       },
       {
        path :'/booksDetails/:id',
        element : <BookDetails/>
        
       },
       {
        path :'/gadgetDetails/:id',
        element : <AccessoriesDetails/>
        
       },
      
        ,{
            path : "/accessories",
            element : <Accessories/>
        },
        ,{
            path : "/mobile",
            element : <Mobile/>
        },
        ,{
            path : "/laptop",
            element : <Laptop/>
        },
        ,{
            path : "/perfume",
            element : <Perfume/>
        },
        ,{
            path : "/watch",
            element : <Watch/>
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
            path : "/forgetPass",
            element : <ForgetPass/>
        },
        {
            path : "/register",
            element : <Register/>
        },
        {
            path : "/search",
            element : <Search/>
        },
        {
            path : "/myProfile",
            element : <MyProfile/>
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
                path: "/dashboard/booksAddItem",
                 element :  <BooksAddItem/>
            },
            {
                path: "/dashboard/addAccessories",
                 element :  <AddAccessories/>
            },
            {
                path: "/dashboard/allUser",
                 element : <AllUser/>
            },
            {
                path: "/dashboard/manageItems",
                 element :<ManageItem/>
            },
            {
                path: "/dashboard/myCart",
                 element : <MyCart/>
            },
            {
                path: "/dashboard/paymentHistory",
                 element : <PaymentHistory/>
            },
            {
                path: "/dashboard/checkOut",
                 element :  <CheckOut/>
            },
            {
                path: "/dashboard/payment",
                 element :  <Payment/>
            },
        ]
    },
]);
