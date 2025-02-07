
"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Food type for items in the wishlist
interface Food {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  originalPrice: number;
  description: string;
  tags: string[];
  imageUrl: string;
  rating: number;
  available: boolean;
}

// Define the structure of the WishlistContext
interface WishlistContextType {
  wishlist: Food[];
  addToWishlist: (food: Food) => void;
  removeFromWishlist: (foodId: string) => void;
}

// Create the context with an empty initial state
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Create the provider component
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Food[]>([]);

  // Function to add an item to the wishlist
  const addToWishlist = (food: Food) => {
    setWishlist((prevWishlist) => {
      // Ensure the food item isn't already in the wishlist
      if (!prevWishlist.some((item) => item._id === food._id)) {
        return [...prevWishlist, food];
      }
      return prevWishlist;
    });
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (foodId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== foodId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use Wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
