import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useBooksProduct = () => {
    const axiosSecure = useAxiosSecure()
    const { data: booksProduct = [] } = useQuery({
        queryKey: ["booksProduct"],
        queryFn: async () => {
            const res = await axiosSecure.get("/addItems")
           // // console.log( "data",res.data);
           return res.data 
        }
    })
    return [booksProduct]
};

export default useBooksProduct;