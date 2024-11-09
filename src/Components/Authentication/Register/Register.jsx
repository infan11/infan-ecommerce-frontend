import { Button, Checkbox, Input } from "@material-tailwind/react";
import image from '../../../assets/other/authentication2.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
// import {promise} from 'react-hot-toast/dist/index.css'
const Register = () => {
  const { createUser, user, googleUserProvider, updateUserProfile } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const onSubmit = data => {
    console.log("data", data);
    createUser(data.email, data.password)
      .then(result => {
        const registerUser = result.user;
        console.log(registerUser);
        updateUserProfile(data.name, null)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email
            };


            return toast.promise(
              axiosPublic.post("/users", userInfo),
              {
                loading: 'Loading...',
                success: `${user?.displayName} successfully  registered!`,
                error: 'Could not save the user.'
             
              },
               navigate(from , {replace : true}) 
            )
            
          })

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
        console.log(googleUser);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        toast.promise(
          axiosPublic.post("/users", userInfo),
          {
            loading: 'Loading...',
            success: `${result.user?.displayName} successfully  registered!`,
            error: 'Could not save the user.'
          }

        )
        navigate(from , {replace : true}) 

      })

      .catch(error => {

        if (error.code === "auth/network-request-failed") {
          toast.error("Please check your internet connection.");
        } else {

          toast.error("An unexpected error occurred.");
        }
      });
  }

  return (
    <div>
      <div style={{ backgroundImage: "url(https://i.ibb.co.com/p1SckNY/authentication.png)" }} className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="  w-full max-w-sm shrink-0  border-4 border-green-400 rounded-md shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <p className="text-center font-bold  text-orange-500">SIGNUP</p>
              <br />
              <div className="form-control">
                <Input type="text" size="lg" label="Name" name="name" {...register("name", { required: true })} className="" />
                {errors.name && <span className="text-red-500 font-bold italic">This field is required</span>}
                <br />
                <Input type="email" size="lg" label="Email" name="email" {...register("email", { required: true })} className="" />
                {errors.email && <span className="text-red-500 font-bold italic">This field is required</span>}
                <br />
              </div>
              <div className="form-control">
                <Input type="password" size="lg" label="Password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 10 })} className="" />
                {errors.password?.type && <span className="text-red-500 font-bold italic">This field is required</span>}
                {errors.password?.type === "minLength" && <span className="text-red-500 font-bold italic">password must be 6 Characters</span>}
                {errors.password?.type === "maxLength" && <span className="text-red-500 italic font-bold">password only 10 Characters</span>}
                <br />

              </div>
              <div className="-ml-2.5">
                <Checkbox size="lg" label="Remember Me" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-orange-400 hover:bg-orange-400 text-white">SignUp</button>
              </div>
              <p className="text-green-500 text-center font-bold">All ready registered ?Go to <Link to={"/login"}> SignIn</Link> </p>
              <p className="text-center font-bold ">Or signUp in with</p>
             
            </form>
            <button onClick={handleGoogle} className=" -mt-4 mb-4 max-w-7xl mx-auto bg-white p-3 px-7 text-black flex  rounded-full "><span className="text-xl"><FcGoogle /></span> <span className="text-[13px] font-bold text-center ml-3 ">Continue with Google</span></button>
          </div>
          <div className="text-center hidden md:block lg:text-left">
            <img className=" w-[700px]" src={image} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;