import Available from "../Available/Available";
import BestSellingBanner from "../BestSellingBanner/BestSellingBanner";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Available/>
            <BestSellingBanner/>
        </div>
    );
};

export default Home;