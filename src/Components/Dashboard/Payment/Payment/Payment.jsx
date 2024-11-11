import React from 'react';
import useCheckout from '../../../Hooks/useCheckout';
import useCart from '../../../Hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const Payment = () => {
   
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT)
    return (
        <div>
            <Elements stripe={stripePromise} >
                <CheckOutForm/>
            </Elements>
        </div>
    );
};

export default Payment;