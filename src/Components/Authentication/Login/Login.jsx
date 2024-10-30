import { Checkbox, Input } from "@material-tailwind/react";
import image from '../../../assets/other/authentication2.png'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div>
            <div style={{backgroundImage : "url(https://i.ibb.co.com/p1SckNY/authentication.png)"}} className="hero bg-base-200 min-h-screen">
  <div  className="hero-content flex-col lg:flex-row-reverse gap-20">
  <div  className="text-center hidden md:block lg:text-left">
     <img className=" w-[700px]" src={image} alt="" />
    </div>
  <div  className="  w-full max-w-sm shrink-0  border-2 border-orange-400 rounded-md shadow-2xl">
      <form className="card-body">
                       <p className="text-center font-bold text-orange-500 ">SIGNIN</p>
                       <br />
        <div className="form-control">
         
          <Input type="email" label="Email"  className="" required />
          <br />
        </div>
        <div className="form-control">
          <Input type="password"  label="Password"  className="" required />
          <br />
       
        </div>
        <div className="-ml-2.5">
          <Checkbox  label="Remember Me" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-400 hover:bg-orange-400 text-white">SignUp</button>
        </div>
        <p className="text-green-500 text-center font-bold">All ready registered ?Go to <Link to={"/register"}> SignUp</Link> </p>
        <p className="text-center font-bold ">Or signIn in with</p>
         <button className=" bg-white p-3 px-7 text-black flex  rounded-full "><span className="text-xl"><FcGoogle /></span> <span className="text-[13px] font-bold text-center  ml-4 md:ml-11 ">Continue with Google</span></button>
      </form>
    </div>
   
   
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;