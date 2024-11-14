import { Link, } from "react-router-dom";


const BookItemCard = ({ item }) => {

    const {name, discountedPrice, price, photo, _id } = item;

    return (
        <div>
            <div className="w-44   md:w-80    ">
                <figure className="">
                    <img
                        src={photo}
                        alt="unavilable "
                        className=" mx-auto w-40 h-40 md:w-64 md:h-64" />
                </figure>

                <div className=" text-center items-center mt-2 ">
                    <h2 className="text-[12px] font-bold ">{name}</h2>
                    {/* <div className="flex gap-7">
                        <p className=" md:text-[15px] font-bold" > Offer :  ${discountedPrice}</p>
                        <p className="md:text-[15px] font-bold"> Price: <del>${price}</del></p>
                    </div> */}
                    <div className="">
                        <Link to={`/booksDetails/${item._id}`}>
                            <button className="btn text-[9px] md:text-[12px] mt-2  w-full text-white bg-black">SELECT OPTION</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookItemCard;