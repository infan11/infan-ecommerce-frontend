import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import SectionTitle from "../../SectionTitle/SectionTitle";


const HomeProduct = () => {
    const [product] = useProduct(null);
    const  allProduct = product.slice(0, 11) ;
    return (
        <div>
            <SectionTitle heading={'Your Favorite'} subHeading={"PRODUCT CATEGORY"}></SectionTitle>
            <div className="max-w-7xl  mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2 ">
                {
                    allProduct.map(products => <div key={products._id} className="card  md:w-80  shadow-2xl rounded-lg">
                    <figure className="">
                      <img
                        src={products.photo}
                        alt="unavilable " 
                        className="rounded-xl w-40 h-40 md:w-64 md:h-64" />
                    </figure>
                   
                    <div className="card-body text-center items-center ">
                      <h2 className="text-[12px] font-bold ">{products.name}</h2>
                      <div className="flex gap-7">
                      <p className=" md:text-[15px] font-bold" > Offer :  ${products.discountedPrice}</p>
                      <p className="md:text-[15px] font-bold"> Price: <del>${products.price}</del></p>
                      </div>
                      <div className="card-actions">
                    <Link to={`/details/${products._id}`}>
                    <button className="btn rounded-full text-white bg-black">SELECT OPTION</button>
                    </Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;