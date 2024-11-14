import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useGadget = () => {
    const axiosSecure = useAxiosSecure();
    const { data: gadgetProduct = []  , refetch} = useQuery({
        
        queryKey: ["gadgetProduct"],
        queryFn: async () => {
            const res = await axiosSecure.get('/addItems')
            console.log(res.data);
            return res.data
        }
    })
    return [gadgetProduct , refetch]
};

export default useGadget;