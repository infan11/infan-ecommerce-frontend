

import { Link, } from "react-router-dom";


const AccessoriesCard = ({item}) => {
  

    const {name , discountedPrice , price,  photo , _id} = item;
    
    return (
        <div>
             <div  className="card  md:w-80  shadow-2xl rounded-lg">
                    <figure className="">
                      <img
                        src={photo}
                        alt="unavilable " 
                        className="rounded-xl w-40 h-40 md:w-64 md:h-64" />
                    </figure>
                   
                    <div className="card-body text-center items-center ">
                      <h2 className="text-[12px] font-bold ">{name}</h2>
                      <div className="flex gap-7">
                      <p className=" md:text-[15px] font-bold" > Offer :  ${discountedPrice}</p>
                      <p className="md:text-[15px] font-bold"> Price: <del>${price}</del></p>
                      </div>
                      <div className="card-actions">
                        <Link to={`/accessoriesDetails/${item._id}`}>
                        <button className="btn rounded-full text-white bg-black">SELECT OPTION</button>
                        </Link>
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default AccessoriesCard;