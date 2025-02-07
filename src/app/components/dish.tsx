
"use client"

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import CategoryNav from "./CategoryNav";
import { FaHeart, FaEye } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

interface Food {
  quantity: number;
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
}

const Dish = () => {
  const [selectedCategory, setSelectedCategory] = useState("Appetizer");
  const [foods, setFoods] = useState<Food[]>([]);
  const { addToCart, addToWishlist } = useCart();

  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food" && category == "${selectedCategory}"]{
        _id,
        name,
        price,
        originalPrice,
        "imageUrl": image.asset->url
      }`;

      const data = await client.fetch(query);
      setFoods(data);
    };

    fetchFoods();
  }, [selectedCategory]);

  const handleAddToCart = (food: Food, quantity: number) => {
    addToCart({ ...food, quantity });
  };

  const handleAddToWishlist = (food: Food, p0: number) => {
    addToWishlist(food);
  };

  return ( 
    <div className="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-4xl max-w-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 text-center mb-6 sm:mb-10">Choose & Pick!</h2>
      <h2 className="text-3xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-10">From Our Menu</h2>
      <CategoryNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {foods.map((food) => (
          <div key={food._id} className="bg-gray-100 p-2 overflow-hidden cursor-pointer group relative transition-all duration-300">
            <div className="bg-white flex flex-col h-full rounded-lg transform group-hover:scale-105 group-hover:border-2 group-hover:border-gray-500 transition-transform">
              <div className="w-full">
                <img
                  src={food.imageUrl}
                  alt={food.name}
                  className="aspect-[139/125] w-full object-cover rounded-t-lg transition-all duration-500"
                />
              </div>

              <div className="p-4 text-center flex-1">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">{food.name}</h4>
                <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-2">
                  ${food.price}{" "}
                  {food.originalPrice > food.price && (
                    <del className="text-gray-500 ml-1">${food.originalPrice}</del>
                  )}
                </h4>
              </div>

              <div className="p-2 flex justify-between items-center">
                <button
                  type="button"
                  className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2"
                  onClick={() => handleAddToCart(food, 1)} // Default quantity 1
                >
                  Add to Cart
                </button>
                <div className="flex space-x-2">
                 
                  <Link className="text-blue-500 hover:text-blue-600" href={`/dish/${food._id}`}>
                    
                       view details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dish;   


