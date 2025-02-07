
'use client';  

import { useState, useEffect } from 'react';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateCartItemQuantity } = useCart();

  const [orderSummary, setOrderSummary] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  const [mounted, setMounted] = useState(false); // Added mounted state

  useEffect(() => {
    setMounted(true); // Set to true after component is mounted
  }, []);

  useEffect(() => {
    if (mounted) {
      const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
      const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);
      setOrderSummary({ totalItems, totalPrice });
    }
  }, [cart, mounted]);

  const formatCurrency = (value: number) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  const handleQuantityChange = (id: string, change: number) => {
    const item = cart.find((item) => item._id === id);
    if (!item) return;
    const newQuantity = Math.max(1, (item.quantity || 0) + change);
    updateCartItemQuantity(id, newQuantity);
  };

  if (!mounted) return null; // Return null until client-side rendering is ready

  return (
    <div>

      <Navbar/>
         
<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Shopping Cart</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Cart</span> 
    </div>
  </div>
</section>

      
    <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
      
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-white mb-4">Your cart is empty</p>
          <Link href="/our-shop">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
              Go Back to Shop
            </button>
          </Link>
        </div>
      ) : (
        <div className="border rounded-lg p-4 bg-gray-800">
          <div className="block sm:hidden">
            {cart.map((food) => (
              <div key={food._id} className="border-b p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image src={food.imageUrl} alt={food.name} width={50} height={50} className="rounded" />
                  <div>
                    <p className="text-white font-semibold">{food.name}</p>
                    <p className="text-white">{formatCurrency(food.price)}</p>
                  </div>
                </div>
                <div className="text-white flex items-center gap-2 mt-2">
                  <button onClick={() => handleQuantityChange(food._id, -1)} className="border px-2 rounded">-</button>
                  <span className="px-2">{food.quantity}</span>
                  <button onClick={() => handleQuantityChange(food._id, 1)} className="border px-2 rounded">+</button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-white">Total: {formatCurrency(food.price * food.quantity)}</p>
                  <button onClick={() => removeFromCart(food._id)} className="text-red-500">X</button>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-white min-w-[600px]">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                  <th className="p-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((food) => (
                  <tr key={food._id} className="border-b">
                    <td className="p-2 flex items-center gap-2">
                      <Image src={food.imageUrl} alt={food.name} width={50} height={50} className="rounded" />
                      {food.name}
                    </td>
                    <td className="p-2">{formatCurrency(food.price)}</td>
                    <td className="p-2 flex items-center gap-2">
                      <button onClick={() => handleQuantityChange(food._id, -1)} className="border px-2 rounded">-</button>
                      <span className="px-2">{food.quantity}</span>
                      <button onClick={() => handleQuantityChange(food._id, 1)} className="border px-2 rounded">+</button>
                    </td>
                    <td className="p-2">{formatCurrency(food.price * food.quantity)}</td>
                    <td className="p-2">
                      <button onClick={() => removeFromCart(food._id)} className="text-red-500">X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-between">
            <div className="bg-gray-900 p-4 rounded-lg flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-white">Coupon Code</h3>
              <input type="text" placeholder="Enter code" className="mt-2 p-2 w-full rounded bg-gray-700 text-white" />
              <button className="mt-2 bg-orange-500 text-white py-2 px-4 w-full rounded">Apply</button>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-white">Total Bill</h3>
              <p className="mt-2 text-white">Cart Subtotal: {formatCurrency(orderSummary.totalPrice)}</p>
              <p className="text-white">Shipping Charge: $0.00</p>
              <p className="text-lg font-bold text-white mt-2">Total Amount: {formatCurrency(orderSummary.totalPrice)}</p>
              <Link href="/checkout">
                <button className="mt-2 bg-orange-500 text-white py-2 px-4 w-full rounded">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;
