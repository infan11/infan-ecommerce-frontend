import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/icon/favIcon.png'
import { HiBookmarkSquare, HiHome, HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenuSquare } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { IoManOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { CgAppleWatch } from "react-icons/cg";
import { Drawer, Button, Typography, IconButton, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, } from "@material-tailwind/react";
import useAuth from "../Hooks/useAuth";
import { CiMobile3 } from "react-icons/ci";
import { LuLaptop2 } from "react-icons/lu";
import { TbPerfume } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import DarkMode from "../Home/DarkMode";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
 
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import useCart from "../Hooks/useCart";
 
const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();
  const handleLogout = () => {
    logout()
      .then(() => { })
      navigate("/login")
  }
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      action : () => navigate("/myProfile")

    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    
    {
      label: "Dashboard",
      icon: InboxArrowDownIcon,
      action : () => navigate("/dashboard")
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
     user ? {
      label: "Sign Out",
      icon: PowerIcon,
      action : handleLogout
    } :{
      label: "Login",
      icon: PowerIcon,
      action : () => navigate("/login")
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
 
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
      to="/mobile"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
      }
    >

      MOBILES
    </NavLink>
    <NavLink
      to="/laptop"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
      }
    >

      LAPTOP
    </NavLink>
    <NavLink
      to="/perfume"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
      }
    >

      PERFUME
    </NavLink>
    <NavLink
      to="/watch"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
      }
    >

      WATCH
    </NavLink>
    <NavLink
      to="/books"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
      }
    >
      BOOKS
    </NavLink>
    <NavLink
      to="/dashboard"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white font-bold border-b-2 border-yellow-500 rounded" : "text-white font-bold text-[15px]  font-[Roboto]"
      }
    >
      DASHBOARD
    </NavLink>
  </>
  return (
    <div>
      {/* First Navbar */}
      <div className="navbar px-10 ">
        <div className="navbar-start">
          <p className="mt-1"> <span className="md:text-2xl  font-extrabold font-[Roboto Mono]"> INFAN   </span><span className="md:text-2xl  font-extrabold  font-[Roboto Mono]"> WEB </span> <br /> </p>

        </div>
        <div className="navbar-center">
          <img className=" bg-green-500 rounded-full w-16" src={logo} alt="" />
        </div>
        <div className="navbar-end">





          <div className="">
            {
              user ? <>
               <div>
               <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            withBorder={true}
            color="blue-gray"
            className=" p-0.5"
            src={user?.photoURL}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, action  }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
               onClick={() => {
                closeMenu();
                action & action();
               }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
               </div>
              </> : <>
                <div className="flex" >
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-black font-bold" : "text-black font-bold text-[18px]  md:mt-4 mr-4 font-[Roboto]"
                    }
                  >
                    Login
                  </NavLink>

                  <p className="mr-3  md:mt-4 font-bold  hidden md:block">or</p>

                  <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " hidden md:block " : " hidden md:block font-bold  border-4 px-5 p-3 rounded-full  hover:bg-green-400  hover:text-white  "
                    }
                  >
                    SIGNUP
                  </NavLink>
                </div>
              </>
            }
          </div>

        </div>
      </div>
      {/* First Navbar end */}
      {/*Second Navbar */}
      <div className={`navbar bg-[#0604046c] px-8 text-white ${scrolled ? 'fixed top-0 left-0  w-full shadow-md z-10 ' : ''}`} >
        <div className="navbar-start">
          <React.Fragment>
            <p className="text-2xl" onClick={openDrawer}><LuMenuSquare /></p>
            <Drawer open={open} onClose={closeDrawer}>
              <div className="mb-2 flex items-center justify-between p-4">
                <Typography variant="h5" color="blue-gray ">
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
                      <p className="font-bold text-xl" > <HiHome /></p>
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
                <Link to={"/mobile"}>
                  <ListItem>
                    <ListItemPrefix>
                      <p className="font-bold text-xl" >  <CiMobile3 /></p>
                    </ListItemPrefix>
                    <NavLink

                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
                      }
                    >
                      MOBILES
                    </NavLink>
                  </ListItem>
                </Link>
                <Link to={"/laptop"}>
                  <ListItem>
                    <ListItemPrefix>
                      <p className="font-bold text-xl" >  <LuLaptop2 /></p>
                    </ListItemPrefix>
                    <NavLink

                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
                      }
                    >
                      LAPTOP
                    </NavLink>
                  </ListItem>
                </Link>
                <Link to={"/perfume"}>
                  <ListItem>
                    <ListItemPrefix>
                      <p className="font-bold text-xl" >  <TbPerfume /></p>
                    </ListItemPrefix>
                    <NavLink

                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
                      }
                    >
                      PERFUME
                    </NavLink>
                  </ListItem>
                </Link>
                <Link to={"/watch"}>
                  <ListItem>
                    <ListItemPrefix>
                      <p className="font-bold text-xl" > <BsWatch /></p>
                    </ListItemPrefix>
                    <NavLink

                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
                      }
                    >
                      WATCH
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
              
                <Link to={"/dashboard"}>
                  <ListItem>
                    <ListItemPrefix>
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
                    </ListItemPrefix>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " font-bold rounded" : " font-bold text-[15px]  font-[Roboto]"
                      }
                    >
                      DASHBOARD
                    </NavLink>
                  </ListItem>
                </Link>




              </List>
            <div className="ml-5">
            <DarkMode/>
            </div>
              {user ? <>
                <div className="flex" >
                  <Button onClick={handleLogout} className="mt-3 ml-5" size="sm">  LOGOUT   </Button>

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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/search"}>
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
          </Link>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
             <Link to={"/dashboard/myCart"}>
             <p className="text-2xl font-bold text-white" >  <HiOutlineShoppingBag /></p>
              <span className="badge badge-sm indicator-item">{cart.length}</span>
             </Link>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;