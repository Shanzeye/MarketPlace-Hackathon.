
'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe failed to load.');
      return;
    }

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cart: cart.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          imageUrl: item.imageUrl,
        })),
      }),
    });

    const session = await response.json();
    
    if (session.error) {
      console.error('Stripe session error:', session.error);
      return;
    }

    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error('Stripe checkout error:', error);
    }
  };

  if (!mounted) return null;
  
  if (!cart || cart.length === 0) {
    return (
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold text-orange-500">Your cart is empty.</h2>
        <Link href="/Cart">
          <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Go Back to Cart</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-2">Checkout</h1>
          <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg">
            <span className="text-white">Home</span>
            <span>&gt;</span>
            <span>Checkout</span>
          </div>
        </div>
      </section>

      <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 p-6 border rounded bg-gray-800 text-white">
            <h3 className="text-lg font-semibold">Shipping Address</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="First Name" className="p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Last Name" className="p-3 rounded bg-gray-700 text-white" />
              <input type="email" placeholder="Email Address" className="p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Phone Number" className="p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Country" className="p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="City" className="p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Zip Code" className="p-3 rounded bg-gray-700 text-white" />
              <input type="text" placeholder="Address 1" className="p-3 rounded bg-gray-700 text-white col-span-2" />
            </form>
            <div className="mt-6 flex justify-between">
              <Link href="/Cart">
                <button className="bg-gray-600 text-white py-2 px-4 rounded">Back to Cart</button>
              </Link>
              
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 border rounded bg-gray-900 text-white">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            {cart.map((food) => (
              <div key={food._id} className="flex items-center gap-4 mt-4 border-b pb-2">
                <Image src={food.imageUrl} alt={food.name} width={50} height={50} className="rounded" />
                <div>
                  <p>{food.name}</p>
                  <p className="text-sm">{food.quantity} x ${food.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <button className="mt-6 bg-orange-500 text-white py-2 px-4 w-full rounded" onClick={handleCheckout}>
              Pay with Stripe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
