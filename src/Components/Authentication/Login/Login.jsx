import { Checkbox, Input } from "@material-tailwind/react";
import image from '../../../assets/other/authentication2.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const {login ,googleUserProvider} = useContext(AuthContext);
  const onSubmit = data  => {
    console.log(data);
    login(data.email , data.password)
    .then(result => {
      const loginUser = result.user;
      console.log(loginUser)
      if(loginUser){
        toast.success('Successfully Login')
      }
      navigate(from , {replace : true})
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        toast.error(" user exist ")
      }
      else if (error) {
        if (error.code === "auth/network-request-failed") {
          toast.error("please connect Internet")
        }
      }
    })
  }
  const handleGoogle = () => {
    googleUserProvider()
    .then(result => {
      const googleUser = result.user;
      console.log(googleUser)
      if(googleUser){
        toast.success("Successfully Google Login")
      }
      navigate(from , {replace : true})
    })
    .catch(error => {
       if (error) {
        if (error.code === "auth/network-request-failed") {
          toast.error("please connect Internet")
        }
      }
    })
  }
    return (
        <div>
            <div>
            <div style={{backgroundImage : "url(https://i.ibb.co.com/p1SckNY/authentication.png)"}} className="hero bg-base-200 min-h-screen">
  <div  className="hero-content flex-col lg:flex-row-reverse gap-20">
  <div  className="text-center hidden md:block lg:text-left">
     <img className=" w-[700px]" src={image} alt="" />
    </div>
  <div  className="  w-full max-w-sm shrink-0  border-2 border-orange-400 rounded-md shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <p className="text-center font-bold text-orange-500 ">SIGNIN</p>
                       <br />
        <div className="form-control">
         
        <Input type="email" size="lg" label="Email" name="email" {...register("email", { required: true })} className="" />
                {errors.email && <span className="text-red-500 font-bold italic">This field is required</span>}
                <br />
              </div>
              <div className="form-control">
                <Input type="password" size="lg" label="Password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 10 })} className="" />
                {errors.password?.type === "setValueAs" && <span className="text-red-500 font-bold italic">This field is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-500 font-bold italic">password must be 6 Characters</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-500 italic font-bold">password only 10 Characters</span>}
       
        </div>
        <div className="-ml-2.5">
          <Checkbox  label="Remember Me" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-400 hover:bg-orange-400 text-white">SignUp</button>
        </div>
        <p className="text-green-500 text-center font-bold">All ready registered ?Go to <Link to={"/register"}> SignUp</Link> </p>
        <p className="text-center font-bold ">Or signIn in with</p>
         <button onClick={handleGoogle} className=" bg-white p-3 px-7 text-black flex  rounded-full "><span className="text-xl"><FcGoogle /></span> <span className="text-[13px] font-bold text-center  ml-4 md:ml-11 ">Continue with Google</span></button>
      </form>
    </div>
   
   
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;