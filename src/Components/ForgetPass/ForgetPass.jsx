
import { getAuth, sendPasswordResetEmail,  } from "firebase/auth";

import toast from "react-hot-toast";
import { useRef } from "react";
import { app } from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const auth = getAuth(app);
const ForgetPass = () => {
const navigate = useNavigate();
 
    const emailRef = useRef(null);
    const handleForgetPassword = event => {
  event.preventDefault()
        const email = emailRef.current.value;
        if (!email) {
            // // console.log('pelase provide an email', emailRef.current.value)
            return 
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            // // console.log('please write a valid email')
             
            return  
        }

        // send validation email
        sendPasswordResetEmail(auth, email)
        .then(result => {
            const forget = result
         
          toast.success('Please Check Your E-mail');
          
          setTimeout(() => {
            window.location.href = "https://mail.google.com/mail/u/0/?hl=en#inbox";
        }, 500); // 3000ms = 3 seconds delay, adjust as needed
       
        })
      
      
        .catch(error =>{
            console.error(error)
             if(error.code === "auth/network-request-failed"){
                toast.error('Please Connect Internet')
            }
            else if(error.code === "auth/too-many-requests"){
                toast.error('Try Another Later')
            }
        })
    
    }
    return (
        <div className="bg-white min-h-screen">
             <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - FORGET PASSWORD</title>
           
            </Helmet>
            <form onClick={handleForgetPassword} className="">
<div className="max-w-7xl mx-auto px-6 pt-24">
    <p className="text-5xl  font-extrabold text-black">Reset Your Password? Now</p>
<div className="form-control mt-3">
          <label className="label">
            <span className="label-text  font-bold text-[16px] ml-3 mt-4 text-black mb-9"> </span>
          </label>
          <input type="email" ref={emailRef}  name="email" placeholder="Type Your Email" className=" md:w-80 lg:w-full p-2 text-black rounded   bg-transparent border-b-2  font-bold text-[15px] px-4 text- " required />
        </div>
        <button className="mt-7 btn rounded-full w-80 text-white font-bold text-xl bg-red-500 ">Reset </button>
</div>
            </form>
        </div>
    );
};

export default ForgetPass;