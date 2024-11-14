import React from 'react';
import WatchCategory from '../WatchCategory/WatchCategory';
import WatchBanner from '../WatchBanner/WatchBanner';
import { Helmet } from 'react-helmet';

const Watch = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - WATCH</title>
           
            </Helmet>
            <WatchBanner/>
         <WatchCategory></WatchCategory>
        </div>
    );
};

export default Watch;