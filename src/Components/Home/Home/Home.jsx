import { Helmet } from "react-helmet";
import Available from "../Available/Available";
import BestSellingBanner from "../BestSellingBanner/BestSellingBanner";
import Delivary from "../Delivery/Delivary";
import HomeProduct from "../HomeProduct/HomeProduct";
import Slider from "../Slider/Slider";
import BooksHomeBanner from "../booksHomeBanner/booksHomeBanner";


const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - HOME</title>
           
            </Helmet>
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