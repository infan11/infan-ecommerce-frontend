import { Link } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";

const BestSellingBanner = () => {
    return (
        <div>
            <SectionTitle heading={"---Offer---"} subHeading={"ACCESSORIES ITEM"}></SectionTitle>
            <div
                className="hero h-[245px] md:h-[650px] bg-fixed"
                style={{
                    backgroundImage: "url(https://i.ibb.co/KyrdFnb/accessories2.jpg)",
                }}
            >
                <div className="hero-overlay bg-[#0d0c0ccb]"></div>
                <div className="px-6 pt-3 bottom-3 md:px-32 flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                    <div>
                        <img 
                            className="w-72 md:w-96 rounded-lg" 
                            src="https://i.ibb.co/KyrdFnb/accessories2.jpg" 
                            alt="Accessories" 
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <p className="font-bold text-white text-lg md:text-2xl">
                            ACCESSORIES ALL ITEMS 
                        </p>
                        <p className="text-orange-400 font-bold text-2xl md:text-3xl">
                            40% FLAT OFF
                        </p>
                        <p className="text-white mt-2 md:mt-4 text-sm md:text-base">
                            Accessories add a touch of personality and style to any outfit or space.
                            From sleek watches and elegant jewelry to functional bags and stylish.
                        </p>
                        <Link to={"/accessories"}>
                            <button className="btn w-32 mb-3 md:mb-0   md:w-40 rounded-full p-1 mt-4 md:mt-6">
                                READ MORE
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellingBanner;
