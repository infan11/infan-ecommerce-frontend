import React from 'react';
import AccessoriesBanner from '../AccessoriesBanner/AccessoriesBanner';
import AccessoriesItem from '../AccessoriesItem/AccessoriesItem';
import { Helmet } from 'react-helmet';

const Accessories = () => {
    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - ACCESSORIES</title>
           
            </Helmet>
          <AccessoriesBanner/>
          <AccessoriesItem/>
        </div>
    );
};

export default Accessories;