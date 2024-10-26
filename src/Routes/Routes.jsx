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
        element : <Dashboard/>
    },
]);
