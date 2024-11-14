import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCheckout = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    const {data : checkOut = [] , refetch} = useQuery({
        queryKey : ["checkOut"],
        queryFn : async () => {
            const res = await axiosSecure.get(`/checkOut?email=${user?.email}`)
            console.log("fh" , checkOut.length);
            console.log("found data checkout" , res.data);
            return  res.data
        } 
    })
    return  [checkOut,refetch]
};

export default useCheckout;