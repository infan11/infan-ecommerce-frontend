
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";



const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : payments = [] } = useQuery({
        queryKey: ['payments' , user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    })
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
      
        
        <th className="uppercase">Price</th>
        <th className="uppercase">Transaction ID</th>
        <th >STATUS</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
               {
                payments?.map((item , index) =>  <tr key={item._id}>
                
                      
                      <td>{item.price}</td>
                        
                     
                  
                
                    <td>
                       {item.transactionId}
                      <br />
                      <span className="badge badge-ghost badge-sm">{item._id}</span>
                    </td>
                    <td className="text-red-500 font-bold italic">{item.status}</td>
                  
                   
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
