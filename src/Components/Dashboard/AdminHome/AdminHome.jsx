import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCheckout from "../../Hooks/useCheckout";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const {data: stats = []}= useQuery({
     queryKey : ["admin-stats"],
     queryFn :  async () => {
        const res = await axiosSecure.get("/admin-stats")
        return res.data
     }
  })

    return (
        <div>
   <div className=" md:ml-96 mt-10 md:px-1">
   <div className="stats shadow">
  <div className="stat place-items-center">
    <div className="text-[12px] md:stat-title">USERS</div>
    <div className="text-xl md:stat-value ">{stats.users}</div>
    
  </div>

  <div className="stat place-items-center">
    <div className="text-[12px] md:stat-title">ADD ITEMS</div>
    <div className="text-xl md:stat-value md:text-secondary">{stats.addItem}</div>

  </div>

  <div className="stat place-items-center">
    <div className="text-[12px] md:stat-title">PAYMENT</div>
    <div className="text-xl md:stat-value md:text-secondary">{stats.orders}</div>
  
  </div>

  <div className="stat place-items-center">
    <div className="text-[12px] md:stat-title">REVENUE</div>
    <div className="text-xl md:stat-value md:text-secondary">${stats.revenue}</div>
  
  </div>
</div>
   </div>
        </div>
    );
};

export default AdminHome;