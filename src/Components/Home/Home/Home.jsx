import Available from "../Available/Available";
import BestSellingBanner from "../BestSellingBanner/BestSellingBanner";
import Delivary from "../Delivery/Delivary";
import Slider from "../Slider/Slider";
import BooksHomeBanner from "../booksHomeBanner/booksHomeBanner";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Available/>
            <BestSellingBanner/>
            <BooksHomeBanner/>
            <Delivary/>
        
        </div>
    );
};

export default Home;