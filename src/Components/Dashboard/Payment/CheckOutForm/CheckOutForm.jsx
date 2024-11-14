import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';  // Import EmailJS
import useAuth from '../../../Hooks/useAuth';
import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCheckout from '../../../Hooks/useCheckout';

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  console.log("user",user?.email);
  const [checkOut] = useCheckout(); // atr modde email ase : email
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [cart, refetch] = useCart();

  const totalPrice = useMemo(() => cart.reduce((total, item) => total + item.price, 0), [cart]);

  useEffect(() => {
    if (totalPrice > 0 && !clientSecret) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => setClientSecret(res.data.clientSecret))
        .catch(error => console.error("Error creating payment intent:", error));
    }
  }, [axiosSecure, totalPrice, clientSecret]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    try {
      const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      
      if (paymentError) {
        setError(paymentError.message);
        return;
      }

      setError("");

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

      if (confirmError) {
        setError(confirmError.message);
        return;
      }

      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        cardId: cart.map(item => item._id),
        cartItemId: cart.map(item => item.cartId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payments", payment);
      refetch();

      if (res.data?.paymentResult?.insertedId) {
        toast.success("Payment Successful! Continue Shopping");

        // Send email notification via EmailJS
      // Send email notification via EmailJS
const emailData = {
  user_email: user?.email || "default@example.com", // Default to your email if user email is not available
  user_name: user?.displayName || "User",
  transaction_id: paymentIntent.id,
  total_amount: totalPrice.toFixed(2),
};
console.log("Email data:", emailData);

emailjs.send('service_uu13qt9', 'template_pew7w0b', emailData, 'LD3EefzuvWY-avuiH')
  .then(() => {
    toast.success("Confirmation email sent.");
  })
  .catch((error) => {
    console.error("Email sending error:", error);
    toast.error("Failed to send confirmation email.");
  });


        navigate("/");
      }
      
    } catch (error) {
      console.error("Payment error:", error);
      setError("An error occurred during payment. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-7xl justify-center items-baseline mt-20 mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Card Number</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  '::placeholder': { color: '#aab7c4' },
                },
                invalid: { color: '#9e2146' },
              },
              hidePostalCode: false,
            }}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {error && <p className="text-red-500 font-bold mb-2">{error}</p>}
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
        >
          Pay Now
        </button>
        {transactionId && (
          <p className="font-bold">
            Your Transaction ID: <span className="text-orange-600">{transactionId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
