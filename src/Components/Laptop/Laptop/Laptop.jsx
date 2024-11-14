import React from 'react';
import LaptopBanner from '../LaptopBanner/LaptopBanner';
import LaptopCategory from '../LaptopCategory/LaptopCategory';
import { Helmet } from 'react-helmet';

const Laptop = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - LEPTOP ITEM</title>
           
            </Helmet>
            <LaptopBanner/>
            <LaptopCategory/>
        </div>
    );
};

export default Laptop;