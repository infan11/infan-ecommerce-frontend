import Available from "../Available/Available";
import BestSellingBanner from "../BestSellingBanner/BestSellingBanner";
import Delivary from "../Delivery/Delivary";
import HomeProduct from "../HomeProduct/HomeProduct";
import Slider from "../Slider/Slider";
import BooksHomeBanner from "../booksHomeBanner/booksHomeBanner";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Available/>
            <BestSellingBanner/>
            <BooksHomeBanner/>
             <HomeProduct/>
            <Delivary/>
        
        </div>
    );
};

export default Home;