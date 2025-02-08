
"use client"; 

import { useWishlist } from "@/app/context/WishlistContext"; // Correct hook for Wishlist
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Use the wishlist from context

  return (
    <div>
<Navbar/>
         
<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Wishlist</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Wishlist</span> 
    </div>
  </div>
</section>

      

    <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 text-center mb-6 sm:mb-10">
        Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center text-white bg-gray-800 p-6 rounded-lg">
          <p className="text-lg">Your wishlist is empty.</p>
          <Link href="/our-shop">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">
              Go Back to Shop
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-lg bg-gray-800 text-white overflow-hidden"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{item.name}</h3>
                <p className="text-orange-500 font-medium mt-2">
                  ${item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default WishlistPage;
