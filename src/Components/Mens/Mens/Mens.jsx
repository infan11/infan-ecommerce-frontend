import { Helmet } from "react-helmet";
import ItemCategory from "../ItemCategory/ItemCategory";
import MensBanner from "../MensBanner/MensBanner";


const Mens = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - MENS</title>
           
            </Helmet>
         <MensBanner/>         
         <ItemCategory/>   
        </div>
    );
};

export default Mens;