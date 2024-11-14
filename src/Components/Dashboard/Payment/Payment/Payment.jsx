import React from 'react';
import useCheckout from '../../../Hooks/useCheckout';
import useCart from '../../../Hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { Helmet } from 'react-helmet';

const Payment = () => {
   
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT)
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>DASHOBARD | PAYMENT</title>
           
            </Helmet>
            <Elements stripe={stripePromise} >
                <CheckOutForm/>
            </Elements>
        </div>
    );
};

export default Payment;