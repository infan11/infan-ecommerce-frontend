import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { TbMenu2 } from "react-icons/tb";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import useAuth from '../../Hooks/useAuth';
import { MdAdminPanelSettings } from "react-icons/md";
import { IoAddSharp, IoLogOut } from 'react-icons/io5';
import { IoMdHome } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
      logout()
        .then(() => { })
        navigate("/login")
    }
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div>
    <React.Fragment>
      <Button onClick={openDrawer}><TbMenu2 /></Button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
       { user ? <>   <Link to={"/dashboard/adminHome"}>
          <ListItem>
            <ListItemPrefix>
          <p className='text-xl'>  <MdAdminPanelSettings /></p>
            </ListItemPrefix>
            Admin Home
          </ListItem>
          </Link>
         <Link  to={"/dashboard/addItem"}>
         <ListItem>
            <ListItemPrefix>
             <p className='text-xl'><IoAddSharp /></p>
            </ListItemPrefix>
            Add Item
            <ListItemSuffix>
              <Chip
                value="5"
                size="sm"
                color="green"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
         </Link>
    <Link to={"/dashboard/allUser"}>
    <ListItem>
            <ListItemPrefix>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            All User
          </ListItem>
    </Link>
         <Link to={"/dashboard/myCart"}>
         <ListItem>
            <ListItemPrefix>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            My Cart
          </ListItem>
         </Link>

     <Link  to={"/dashboard/paymentHistory"}>
     <ListItem>
            <ListItemPrefix>
           <p className='text-xl'> <FaHistory /></p>
            </ListItemPrefix>
            Payment History
          </ListItem>
     </Link></> : <>
   
    
         <Link to={"/"}>
         <ListItem>
            <ListItemPrefix>
              <p className='text-xl'><IoMdHome /></p>
            </ListItemPrefix>
            Home
          </ListItem>
         </Link>
         <Link to={"/mens"}>
         <ListItem>
            <ListItemPrefix>
             <p className='text-xl'><FaMale /></p>
            </ListItemPrefix>
            Mens
          </ListItem>
         </Link>
          <Link to={'/books'}>
          <ListItem>
            <ListItemPrefix>
              <p className='text-xl'><ImBooks /></p>
            </ListItemPrefix>
            Books
          </ListItem>
          </Link>
     </>

       }
         
         <div className='divider'></div>
         <Link to={"/"}>
         <ListItem>
            <ListItemPrefix>
              <p className='text-xl'><IoMdHome /></p>
            </ListItemPrefix>
            Home
          </ListItem>
         </Link>
         <Link to={"/mens"}>
         <ListItem>
            <ListItemPrefix>
             <p className='text-xl'><FaMale /></p>
            </ListItemPrefix>
            Mens
          </ListItem>
         </Link>
          <Link to={'/books'}>
          <ListItem>
            <ListItemPrefix>
              <p className='text-xl'><ImBooks /></p>
            </ListItemPrefix>
            Books
          </ListItem>
          </Link>
        </List>
        {user ? <>
                <div className="flex" >
                  <Button onClick={handleLogout} className="mt-3 ml-5" size="sm">  <IoLogOut />   </Button>

                </div>
              </> : <>
                <div className="flex">
                  <Link to={"/register"}>  <Button className="mt-3 ml-5" size="sm">   SIGNUP  </Button></Link>
                  <p className=" ml-4  md:mt-4 font-bold text-black   ">or</p>
                  <Link to={"/login"}>  <Button className="mt-3 ml-5" size="sm">   SIGNIN  </Button></Link>
                </div>


              </>}

      </Drawer>
    </React.Fragment>
      
    </div>
  </div>
  <div className="navbar-center">
    <a className=" text-5xl">  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clipRule="evenodd"
                />
              </svg></a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Dashboard;