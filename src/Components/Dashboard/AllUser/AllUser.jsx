import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteOutline, MdOutlineAdminPanelSettings } from 'react-icons/md';

import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    const handleRemove = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount < 0) {
                            toast.success("Successfully deleted")

                        }
                        refetch();
                    })


            }
        });
    }
    const handleMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount < 0){
               
                toast.success("Successfully deleted")
            }
            refetch();
        })
    }
    return (
        <div className="overflow-x-auto md:px-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>NAME</th>
                        <th>DELETED</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr className=" shadow-xl">

                            <td className='text-[15px]'>{user.name}
                                <br />
                                <span className='text-[10px]'>{user.email}</span>
                            </td>
                            <button onClick={() => handleRemove(user._id)} className="mt-4 text-red-600 text-sm font-semibold  hover:underline">
                                <MdDeleteOutline />
                            </button>
                            <td>  { user?.role === "admin"  ? "Admin" : <button onClick={() => handleMakeAdmin(user._id)}><MdOutlineAdminPanelSettings /></button>}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;