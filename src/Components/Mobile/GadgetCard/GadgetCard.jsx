

import { Link, } from "react-router-dom";


const GadgetCard = ({item}) => {
  

    const {name , discountedPrice , price,  photo , _id} = item;
    
    return (
      <div>
      <div  className=" w-44   md:w-80 shadow-xl  ">
             <figure className="">
               <img
                 src={photo}
                 alt="unavilable " 
                 className="w-full mx-auto  h-32  md:h-64" />
             </figure>
            
             <div className="text-center items-center ">
               <h2 className="text-[15px] font-bold ">{name}</h2>
               <div className="flex gap-2 justify-center items-center mt-2">
               <p className="text-[10px] md:text-[10px] font-bold" >${discountedPrice}</p>
               <p className="text-[10px] md:text-[10px] font-bold  text-gray-400"><del>${price}</del></p>
               </div>
               <div className="justify-center item-center">
            
                 <Link to={`/gadgetDetails/${item._id}`}>
                 <button className="btn text-[9px] md:text-[12px] mt-2  w-full text-white bg-black">SELECT OPTION</button>
                 </Link>
               </div>
             </div>
           </div>
 </div>
    );
};

export default GadgetCard;