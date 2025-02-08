
// 'use client';

// import { useState, useEffect } from 'react';
// import { useCart } from '@/app/context/CartContext';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '../components/navbar';

// const CheckoutPage = () => {
//   const { cart } = useCart();
//   const [mounted, setMounted] = useState(false); // Track if the component has mounted

//   const [orderSummary, setOrderSummary] = useState({
//     totalItems: 0,
//     totalPrice: 0,
//     discount: 0.25, // 25% discount
//     tax: 0.1, // 10% tax
//   });

//   // Set mounted to true when the component is mounted on the client
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Ensure that cart data is available before updating order summary
//   useEffect(() => {
//     if (cart.length === 0) return; // Prevent errors if cart is empty

//     const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
//     const totalPrice = cart.reduce((acc, item) => {
//       const numericPrice = parseFloat(item.price.toString().replace(/[^\d.-]/g, ''));
//       return acc + numericPrice * (item.quantity || 0);
//     }, 0);

//     const discountedPrice = totalPrice * (1 - orderSummary.discount);
//     const totalWithTax = discountedPrice * (1 + orderSummary.tax);

//     setOrderSummary({
//       totalItems,
//       totalPrice: totalWithTax,
//       discount: orderSummary.discount,
//       tax: orderSummary.tax,
//     });
//   }, [cart]);

//   const formatCurrency = (value: number) => `$${value.toFixed(2)}`;

//   if (!mounted) {
//     return null; // Ensure the component only renders after it's mounted
//   }

//   if (!cart || cart.length === 0) {
//     return (
//       <div className="text-center p-4">
//         <h2 className="text-2xl font-bold text-orange-500">Your cart is empty.</h2>
//         <Link href="/Cart">
//           <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Go Back to Cart</button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar/>
//       <section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');" }}>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-5xl md:text-5xl font-bold mb-2">Checkout </h1>
//           <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
//             <span className="text-white">Home</span>
//             <span>&gt;</span>
//             <span>Checkout</span> 
//           </div>
//         </div>
//       </section>

//       <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="w-full md:w-2/3 p-6 border rounded bg-gray-800 text-white">
//             <h3 className="text-lg font-semibold">Shipping Address</h3>
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <input type="text" placeholder="First Name" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="Last Name" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="email" placeholder="Email Address" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="Phone Number" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="Company (Optional)" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="Country" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="City" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="Zip Code" className="p-3 rounded bg-gray-700 text-white" />
//               <input type="text" placeholder="Address 1" className="p-3 rounded bg-gray-700 text-white col-span-2" />
//               <input type="text" placeholder="Address 2 (Optional)" className="p-3 rounded bg-gray-700 text-white col-span-2" />
//             </form>
//             <div className="mt-6">
//               <input type="checkbox" id="sameBilling" className="mr-2" />
//               <label htmlFor="sameBilling">Same as shipping address</label>
//             </div>
//             <div className="mt-6 flex justify-between">
//               <Link href="/Cart">
//                 <button className="bg-gray-600 text-white py-2 px-4 rounded">Back to Cart</button> 
//               </Link>
//               <button className="bg-orange-500 text-white py-2 px-4 rounded">Proceed to Shipping</button>
//             </div>
//           </div>
//           <div className="w-full md:w-1/3 p-6 border rounded bg-gray-900 text-white">
//             <h3 className="text-lg font-semibold">Order Summary</h3>
//             {cart.map((food) => (
//               <div key={food._id} className="flex items-center gap-4 mt-4 border-b pb-2">
//                 <Image src={food.imageUrl} alt={food.name} width={50} height={50} className="rounded" />
//                 <div>
//                   <p>{food.name}</p>
//                   <p className="text-sm">{food.quantity} x ${food.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-6 space-y-2">
//               <p className="flex justify-between"><span>Subtotal:</span> <span>{formatCurrency(orderSummary.totalPrice / (1 + orderSummary.tax))}</span></p>
//               <p className="flex justify-between"><span>Shipping:</span> <span>Free</span></p>
//               <p className="flex justify-between"><span>Discount:</span> <span>{orderSummary.discount * 100}%</span></p>
//               <p className="flex justify-between"><span>Tax:</span> <span>{formatCurrency(orderSummary.totalPrice - (orderSummary.totalPrice / (1 + orderSummary.tax)))}</span></p>
//               <p className="text-lg font-bold flex justify-between mt-4"><span>Total:</span> <span>{formatCurrency(orderSummary.totalPrice)}</span></p>
//             </div>
//             <button className="mt-6 bg-orange-500 text-white py-2 px-4 w-full rounded">Place an Order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


















// import { useState, useEffect } from 'react';
// import { useCart } from '@/app/context/CartContext';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '../components/navbar';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

// const CheckoutPage = () => {
//   const { cart } = useCart();
//   const [mounted, setMounted] = useState(false); // Track if the component has mounted

//   const [orderSummary, setOrderSummary] = useState({
//     totalItems: 0,
//     totalPrice: 0,
//     discount: 0.25, // 25% discount
//     tax: 0.1, // 10% tax
//   });

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (cart.length === 0) return;

//     const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
//     const totalPrice = cart.reduce((acc, item) => {
//       const numericPrice = parseFloat(item.price.toString().replace(/[^\d.-]/g, ''));
//       return acc + numericPrice * (item.quantity || 0);
//     }, 0);

//     const discountedPrice = totalPrice * (1 - orderSummary.discount);
//     const totalWithTax = discountedPrice * (1 + orderSummary.tax);

//     setOrderSummary({
//       totalItems,
//       totalPrice: totalWithTax,
//       discount: orderSummary.discount,
//       tax: orderSummary.tax,
//     });
//   }, [cart]);

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch('/api/checkout-session', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         items: cart.map((item) => ({
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         })),
//       }),
//     });
//     const session = await response.json();

//     // Redirect to Stripe Checkout page
//     const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

//     if (error) {
//       console.error('Stripe checkout error:', error);
//     }
//   };

//   const formatCurrency = (value: number) => `$${value.toFixed(2)}`;

//   if (!mounted) {
//     return null;
//   }

//   if (!cart || cart.length === 0) {
//     return (
//       <div className="text-center p-4">
//         <h2 className="text-2xl font-bold text-orange-500">Your cart is empty.</h2>
//         <Link href="/Cart">
//           <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Go Back to Cart</button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />
//       <section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');" }}>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-5xl md:text-5xl font-bold mb-2">Checkout </h1>
//           <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
//             <span className="text-white">Home</span>
//             <span>&gt;</span>
//             <span>Checkout</span>
//           </div>
//         </div>
//       </section>

//       <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="w-full md:w-2/3 p-6 border rounded bg-gray-800 text-white">
//             <h3 className="text-lg font-semibold">Shipping Address</h3>
//             {/* Add your form for shipping details here */}
//             <button className="bg-orange-500 text-white py-2 px-4 rounded mt-6" onClick={handleCheckout}>
//               Place an Order
//             </button>
//           </div>
//           <div className="w-full md:w-1/3 p-6 border rounded bg-gray-900 text-white">
//             <h3 className="text-lg font-semibold">Order Summary</h3>
//             {cart.map((food) => (
//               <div key={food._id} className="flex items-center gap-4 mt-4 border-b pb-2">
//                 <Image src={food.imageUrl} alt={food.name} width={50} height={50} className="rounded" />
//                 <div>
//                   <p>{food.name}</p>
//                   <p className="text-sm">{food.quantity} x ${food.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-6 space-y-2">
//               <p className="flex justify-between"><span>Subtotal:</span> <span>{formatCurrency(orderSummary.totalPrice / (1 + orderSummary.tax))}</span></p>
//               <p className="flex justify-between"><span>Shipping:</span> <span>Free</span></p>
//               <p className="flex justify-between"><span>Discount:</span> <span>{orderSummary.discount * 100}%</span></p>
//               <p className="flex justify-between"><span>Tax:</span> <span>{formatCurrency(orderSummary.totalPrice - (orderSummary.totalPrice / (1 + orderSummary.tax)))}</span></p>
//               <p className="text-lg font-bold flex justify-between mt-4"><span>Total:</span> <span>{formatCurrency(orderSummary.totalPrice)}</span></p>
//             </div>
//             <button className="mt-6 bg-orange-500 text-white py-2 px-4 w-full rounded" onClick={handleCheckout}>
//               Place an Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;










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
        items: cart.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
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
              <button className="bg-orange-500 text-white py-2 px-4 rounded" onClick={handleCheckout}>
                Proceed to Payment
              </button>
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
