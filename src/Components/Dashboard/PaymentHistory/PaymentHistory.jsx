
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";



const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : payments = []  ,refetch} = useQuery({
        queryKey: ['payments' , user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data);
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
              axiosSecure.delete(`/payments/${id}`)
                  .then(res => {
                      console.log(res.data);
                      if (res.data.deletedCount < 0) {
                          toast.success("Successfully deleted")

                      }
                    
                  })
                  refetch();


          }
      });
  }
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>DASHOBARD | PAYMENT HISTORY</title>
           
            </Helmet>
            <div className="max-w-7xl mx-auto px-2 md:px-10">
             <div className="mt-3">
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        
        <th className="uppercase">PAYMENT</th>
        <th className="uppercase">Transaction ID</th>
        <th >STATUS</th>
        <th>ACTION</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
               {
                payments?.map((item , index) =>  <tr key={item._id}>
                
                      
                      <td>${item.price}</td>
                        
                     
                  
                
                    <td>
                       {item.transactionId}
                      <br />
                      <span className="badge badge-sm text-green-400 font-bold">{item.date}</span>
                    </td>
                    <td className="text-green-700 font-bold ">{item.status}</td>
                  
                   <td><Button onClick={() =>handleRemove(item._id)}>DELETED</Button></td>
                  </tr>)
               }
   
    
     
      
    </tbody>
  
    
  </table>
</div>
               </div>
             </div>

        </div>
    );
};

export default PaymentHistory;
