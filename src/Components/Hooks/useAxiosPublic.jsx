import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL : "https://infan-ecommerce-backend-exjcp1meh-infan11s-projects.vercel.app"
    })
    return axiosPublic;


};

export default useAxiosPublic;