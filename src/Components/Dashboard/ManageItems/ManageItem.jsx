import { Helmet } from "react-helmet";
import { MdDeleteOutline, MdManageSearch } from "react-icons/md";
import useGadget from "../../Hooks/useGadget";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const ManageItem = () => {
    const [gadgetProduct , refetch] = useGadget()
    const axiosSecure = useAxiosPublic()
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
                axiosSecure.delete(`/addItems/${id}`)
                    .then(res => {
                        // // console.log(res.data);
                        if (res.data.deletedCount < 0) {
                            toast.success("Successfully deleted")
                            
                        }
                        refetch();
                    })


            }
        });
    }
    return (
        <div>
             <div className="overflow-x-auto md:px-10">
              <Helmet>
                <meta charSet="utf-8" />
                <title>DASHOBARD | MENAGE ITEMS</title>
           
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>PRODUCT INFO</th>
                        <th></th>
                        <th>DELETED</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        gadgetProduct.map((product, index) => <tr className=" shadow-xl">
                            <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={product.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.name}</div>
              <div className="text-sm opacity-50">{product.discountedPrice}</div>
            </div>
          </div>
        </td>
                            <td className='text-[15px]'>
                                <br />
                                <span className='text-[10px]'>{product.email}</span>
                            </td>
                            <button onClick={() => handleRemove(product._id)} className="mt-4 text-red-600 text-sm font-semibold  hover:underline">
                                <MdDeleteOutline />
                            </button>
                            <td><Link className="/dashboard/update"><button className="text-2xl">  <MdManageSearch /></button></Link></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ManageItem;