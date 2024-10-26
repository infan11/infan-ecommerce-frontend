import { NavLink } from "react-router-dom";
import logo from '../../assets/icon/favIcon.png'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenuSquare } from "react-icons/lu";
const Navbar = () => {
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
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 roundedd-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div> */}
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
    isPending ? "pending" : isActive ? " hidden md:block font-bold text-yellow-600" : "  font-bold text-yellow-600  "
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
  <div className="navbar bg-[#2d242474] border-2  md:px-10 fixed z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <p className=" text-2xl text-green-300"><LuMenuSquare /></p>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-green-400  rounded z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
  <p className=""> <span className="md:text-2xl  text-white font-extrabold font-[Roboto Mono]"> INFAN   </span><span className="md:text-2xl  text-white font-extrabold  font-[Roboto Mono]"> WEB </span> <br /> <span className="text-center text-white  text-[12px] md:text-xl  font-[Roboto Mono]">E C O M M E R C E </span> </p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
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