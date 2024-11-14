import React from 'react';
import BookBanner from '../BookBanner/BookBanner';
import BookItem from '../BookItem/BookItem';
import { Helmet } from 'react-helmet';

const Books = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INFAN WEB - BOOKS</title>
           
            </Helmet>
            <BookBanner/>
            <BookItem/>
        </div>
    );
};

export default Books;