import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { data: mensProduct = [] } = useQuery({
        queryKey: ["mensProduct"],
        queryFn: async () => {
            const res = await axiosSecure.get('/addItems')
            console.log(res.data);
            return res.data
        }
    })
    return [mensProduct]
};

export default useProduct;