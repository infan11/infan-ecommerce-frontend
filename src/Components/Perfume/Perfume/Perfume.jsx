import React from 'react';
import PerfumeBanner from '../PerfumeBanner/PerfumeBanner';
import PerfumeCategory from '../PerfumeCategory/PerfumeCategory';
import { Helmet } from 'react-helmet';

const Perfume = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - PERFUME</title>
           
            </Helmet>
            <PerfumeBanner/>
            <PerfumeCategory/>
        </div>
    );
};

export default Perfume;