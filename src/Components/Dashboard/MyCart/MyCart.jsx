import React from 'react';
import useCart from '../../Hooks/useCart';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { MdDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useProduct from '../../Hooks/useProduct';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const MyCart = () => {
    const [cart, refetch] = useCart();
    const [mensProduct] = useProduct()
    console.log("cart found",cart);
    const axiosSecure = useAxiosSecure();

    const subTotal = cart.reduce((total, item) => {
        const discountedPrice = Number(item.discountedPrice) || 0;
        const quantity = Number(item.quantity) || 0;
        return total + discountedPrice * quantity;
    }, 0);

    const tax = subTotal * 0.15;
    const total = subTotal + tax;
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
                axiosSecure.delete(`/cart/${id}`)
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
    return (
        <div className='min-h-screen max-w-7xl mx-auto mt-4 md:px-10'>
              <Helmet>
                <meta charSet="utf-8" />
                <title>DASHOBARD | MY CART</title>
           
            </Helmet>
            <div className="mb-11">
                <table className="table w-full">
                    <thead className='bg-orange-900 text-white '>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>

                                <td className='p-4'>
                                    <div className="flex flex-col md:flex-row items-center gap-4">
                                        <div className="avatar">
                                            <div className="h-16 w-16 mr-32 md:mr-0 rounded-md overflow-hidden">
                                                <img
                                                    src={item.photo}
                                                    alt={item.name}
                                            
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className='mr-20 md:mr-0'>
                                            <p className="font-bold text-sm md:text-lg">{item.name}</p>
                                               {
                                                mensProduct ? <> <p className='font-bold '>  {item.size}</p> </> : <>
                                                </>
                                               }

                                            <p className="text-sm font-semibold ">Price: ${item.discountedPrice}.00</p>
                                            <button onClick={() => handleRemove(item._id)} className="text-red-600 text-sm font-semibold mt-1 hover:underline">
                                                <MdDeleteOutline />
                                            </button>
                                            
                                        </div>
                                    </div>
                                </td>


                                <td>
                                    <p className='border-2 border-orange-900 rounded-full  w-10 mx-auto text-center p-1 ml-0 md:ml-4'>
                                        {item.quantity}
                                    </p>
                                </td>


                                <td>
                                    <p className='font-semibold'>${(item.discountedPrice * item.quantity)}.00</p>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='mt-6  md:px-24'>
                    <div className='divider  ml-4 divider-error  mx-auto '></div>


                    <div className='flex justify-evenly md:justify-end gap-12 '>
                        <p className='text-center '>Subtotal</p>
                        <p className='text-center '>${subTotal}</p>
                    </div>


                    <div className='flex justify-evenly md:justify-end gap-12 '>
                        <p className='text-center '>Tax (15%)</p>
                        <p className='text-center '>${tax}</p>
                    </div>

                    <div className='flex justify-evenly md:justify-end  gap-12   '>
                        <p className='text-center mr-4 '>Total</p>
                        <p className='text-center  ml-3 font-bold text-red-400'>${total}</p>
                    </div>
                </div>
                <div className='px-3 md:px-1'>
             <Link to={"/dashboard/checkOut"}>
             <button className='btn  w-full mt-4  btn-outline bg-orange-900 text-white'>Confirm Order</button>
             </Link>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
