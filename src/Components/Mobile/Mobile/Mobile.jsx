import React from 'react';
import MobileBanner from '../MobileBanner/MobileBanner';
import MobileCategory from '../MobileCategory/MobileCategory';
import { Helmet } from 'react-helmet';

const Mobile = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - MOBILE</title>
           
            </Helmet>
            <MobileBanner/>
            <MobileCategory/>
        </div>
    );
};

export default Mobile;