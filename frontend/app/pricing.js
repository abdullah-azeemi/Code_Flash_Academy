'use client';
import React from 'react';
import axios from 'axios';

const Pricing = () => {
  const handleCheckout = async (priceId) => {
    const { data } = await axios.post('/api/payment/create-checkout-session', { priceId });
    window.location.href = data.url; // Redirect to Stripe checkout page
  };

  return (
    <div>
      <h3>Pricing</h3>
      <div>
        <h4>Basic Plan - $19/month</h4>
        <button onClick={() => handleCheckout('price_basic_plan')}>Subscribe</button>
      </div>
      <div>
        <h4>Pro Plan - $49/month</h4>
        <button onClick={() => handleCheckout('price_pro_plan')}>Subscribe</button>
      </div>
    </div>
  );
};

export default Pricing;
