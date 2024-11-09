import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuth(null);
    const axiosSecure = useAxiosSecure();
    const {data : isAdmin , isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email , "isAdmin"],
        queryFn : async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log("Successfully Admin Found" ,res.data);
            return res.data.admin
        }
    })
    return  [isAdmin , isAdminLoading]
};

export default useAdmin;