import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icon/favIcon.png'
import { HiBookmarkSquare, HiHome, HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenuSquare } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { IoManOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { CgAppleWatch } from "react-icons/cg";
import {Drawer, Button,Typography,IconButton,List, ListItem,ListItemPrefix,ListItemSuffix, Chip,} from "@material-tailwind/react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
const openDrawer = () => setOpen(true);
const closeDrawer = () => setOpen(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const navLinks = <>
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
  }
>
  HOME
</NavLink> 
      <NavLink
  to="/mens"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
  }
>
  MENS
</NavLink> 
      <NavLink
  to="/accessories"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
  }
>

ACCESSORIES
</NavLink> 
      <NavLink
  to="/books"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
  }
>
  BOOKS
</NavLink> 
    </>
    return (
        <div>
           {/* First Navbar */}
           <div className="navbar bg-base-100 px-10 ">
  <div className="navbar-start">
  <p className=""> <span className="md:text-2xl  font-extrabold font-[Roboto Mono]"> INFAN   </span><span className="md:text-2xl  font-extrabold  font-[Roboto Mono]"> WEB </span> <br /> </p>
   
  </div>
  <div className="navbar-center">
     <img  className="mix-blend-darken w-16" src={logo} alt="" />
  </div>
  <div className="navbar-end">
    
   
<div >
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-black font-bold" : "text-black font-bold text-[18px] mr-4 font-[Roboto]"
  }
>
  Login
</NavLink> 
</div>
<p className="mr-3 font-bold  hidden md:block">or</p>

<button>
<div className="">
<NavLink 
  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " hidden md:block "  : " hidden md:block font-bold  btn btn-outline hover:bg-purple-400   "
  }
>
  SIGNUP
</NavLink>
</div>
</button>
  </div>
</div>
  {/* First Navbar end */}
  {/*Second Navbar */}
  <div className={`navbar bg-[#0604046c] px-8 text-white ${scrolled ? 'fixed top-0 left-0  w-full shadow-md z-10 ' : ''}`} >
  <div className="navbar-start">
  <React.Fragment>
      <p className="text-2xl" onClick={openDrawer}><LuMenuSquare/></p>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            INFAN WEB 
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
       <Link to={"/"}>
       <ListItem>
            <ListItemPrefix>
           <p className="font-bold text-xl" > <HiHome/></p>
            </ListItemPrefix>
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
  }
>
  HOME
</NavLink> 
          </ListItem>
       </Link>
       <Link to={'/mens'}>
       <ListItem>
            <ListItemPrefix>
           <p className="font-bold text-xl" >  <IoManOutline /></p>
            </ListItemPrefix>
            <NavLink
  to="/mens"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
  }
>
  MENS
</NavLink> 
          </ListItem>
       </Link>
       <Link to={"/accessories"}>
       <ListItem>
            <ListItemPrefix>
           <p className="font-bold text-xl" >  <CgAppleWatch /></p>
            </ListItemPrefix>
            <NavLink

  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
  }
>
ACCESSORIES 
</NavLink> 
          </ListItem>
       </Link>
       <Link to={"/books"}>
       <ListItem>
            <ListItemPrefix>
           <p className="font-bold text-xl" ><ImBooks /></p>
            </ListItemPrefix>
            <NavLink
  to="/mens"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
  }
>
  BOOKS
</NavLink> 
          </ListItem>
       </Link>
       <Link>
       <ListItem>
            <ListItemPrefix>
           <p className="font-bold text-xl" >  <IoManOutline /></p>
            </ListItemPrefix>
            <NavLink
  to="/mens"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
  }
>
  MENS
</NavLink> 
          </ListItem>
       </Link>
     
      
     
       
        </List>
        <Button className="mt-3 ml-5" size="sm">
          LOGOUT
        </Button>
      </Drawer>
    </React.Fragment>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
     {navLinks}
    </ul>
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
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
       <p className="text-2xl font-bold text-white" >  <HiOutlineShoppingBag /></p>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
   
    </div>

  </div>

        </div>
    );
};

export default Navbar;