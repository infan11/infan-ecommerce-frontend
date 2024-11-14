import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL : "https://infan-ecommerce-backend.vercel.app"
    })
    return axiosPublic;


};

export default useAxiosPublic;