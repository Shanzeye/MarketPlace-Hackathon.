
'use client';

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/context/CartContext";
import { useParams } from 'next/navigation';
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useWishlist } from "@/app/context/WishlistContext";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "@/app/components/navbar";

interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  description: string;
  tags: string[];
  imageUrl: string;
  available: boolean;
  rating: number;
  quantity: number;
  image: string;
}

const FoodDetail = () => {
  const { id } = useParams() as unknown as { id: string };
  const { addToCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const [food, setFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [wishlistNotificationVisible, setWishlistNotificationVisible] = useState(false);
  const [productNotFound, setProductNotFound] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchFood = async () => {
      setLoading(true);
      const fetchedFood = await client.fetch(
        `*[_type == "food" && _id == $id] {
          _id,
          name,
          category,
          price,
          originalPrice,
          description,
          tags,
          "imageUrl": image.asset->url,
          available,
          rating
        }[0]`,
        { id }
      );
      setLoading(false);
      if (!fetchedFood) {
        setProductNotFound(true);
      } else {
        setFood(fetchedFood);
      }
    };

    if (navigator.onLine) {
      fetchFood();
    } else {
      setIsOffline(true);
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!food) return;
    addToCart({ ...food, quantity });
    setNotificationVisible(true);
    setTimeout(() => setNotificationVisible(false), 3000);
  };

  const handleAddToWishList = () => {
    if (!food) return;
    addToWishlist(food);
    setWishlistNotificationVisible(true);
    setTimeout(() => setWishlistNotificationVisible(false), 3000);
  };

  const handleBack = () => {
    window.history.back();
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-white text-xl">Loading...</div>;
  }

  if (isOffline) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-2xl font-semibold text-red-500">
          <p>YOU ARE OFFLINE!</p>
          <p className="text-lg text-black mt-2">Please check your internet connection to view the product details.</p>
        </div>
      </div>
    );
  }

  if (productNotFound || !food) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-lg font-semibold text-red-500">
          <p>Product Not Found</p>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      
<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Shop Details</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Shop Details</span> 
    </div>
  </div>
</section>



      <div className="font-sans bg-black text-white p-6 rounded-xl shadow-xl">
        <button onClick={handleBack} className="text-white text-2xl mb-4">
          <FaArrowLeft />
        </button>
        <div className="flex gap-8">
          <div className="w-1/2 relative group">
            <Image src={food.imageUrl} alt={food.name} width={200} height={200} className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-semibold">{food.name}</h1>
            <p className="text-lg mt-2">{food.description}</p>
            <div className="mt-4">
              <p>Price: ${food.price}</p>
              <p className="text-sm text-gray-400 line-through">Original Price: ${food.originalPrice}</p>
            </div>
            <div className="flex items-center mt-4">
              <button onClick={() => setQuantity(quantity - 1)} className="px-4 py-2 bg-gray-600 text-white rounded-l-md" disabled={quantity <= 1}>-</button>
              <input type="number" value={quantity} className="w-12 text-center bg-gray-700 text-white" readOnly />
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-gray-600 text-white rounded-r-md">+</button>
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick={handleAddToCart} className="px-6 py-2 bg-orange-500 hover:bg-orange-700 rounded-md text-white">Add to Cart</button>
              <button onClick={handleAddToWishList} className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white">
                {wishlist.some((item) => item._id === food._id) ? <AiFillHeart className="text-xl" /> : <AiOutlineHeart className="text-xl" />}
              </button>
            </div>
            {notificationVisible && <div className="mt-4 p-4 bg-green-500 text-white text-center rounded-md">Successfully added to cart!</div>}
            {wishlistNotificationVisible && <div className="mt-4 p-4 bg-red-500 text-white text-center rounded-md">Successfully added to wishlist!</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;





