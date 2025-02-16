
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the Food interface
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

// CartContextType definition
interface CartContextType {
  cart: Food[];
  wishlist: Food[];
  addToCart: (food: Food) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateCartItemQuantity: (id: string, newQuantity: number) => void; // Updated
  addToWishlist: (food: Food) => void;
  removeFromWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to access CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Load cart and wishlist from localStorage
  const [cart, setCart] = useState<Food[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<Food[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  // Update localStorage when cart or wishlist changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [cart, wishlist]);

  // Add item to cart
  const addToCart = (food: Food) => {
    setCart((prev) => [...prev, food]);
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((food) => food._id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Update item quantity in cart
  const updateCartItemQuantity = (id: string, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Add item to wishlist
  const addToWishlist = (food: Food) => {
    setWishlist((prev) => [...prev, food]);
  };

  // Remove item from wishlist
  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((food) => food._id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItemQuantity, // Expose updateCartItemQuantity
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
