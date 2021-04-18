import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
//import { CardElement } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51IhANmJq1WvR0IZcorySb4Lm8PfDg6oPD86nh2mbVzb16XJvhZiulzC8EM7r5kUqyHl57eL40yDw6bfaxA0gtpZn00L5XIl01V');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
         <PaymentForm></PaymentForm>
        </Elements>
    );
};

export default PaymentProcess;



