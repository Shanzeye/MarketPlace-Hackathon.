
"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs"; // Cart Icon
import { BsHeart } from "react-icons/bs"; // Wishlist Icon (Heart)
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/app/context/CartContext"; // Use Cart Context hook
import { useWishlist } from "@/app/context/WishlistContext"; // Use Wishlist Context hook
import { client } from "@/sanity/lib/client";
import { CgProfile } from "react-icons/cg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { cart } = useCart(); // Get cart from Context
  const { wishlist } = useWishlist(); // Get wishlist from Context

  const [cartItemCount, setCartItemCount] = useState(0); // State for cart item count
  const [wishItemCount, setWishItemCount] = useState(0); // State for wishlist item count

  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  

  // Update cart item count dynamically from context
  useEffect(() => {
    setCartItemCount(cart.reduce((total, item) => total + (item.quantity || 1), 0));
  }, [cart]); // Update when cart changes

  // Update wishlist item count dynamically from context
  useEffect(() => {
    setWishItemCount(wishlist.length);
  }, [wishlist]); // Update when wishlist changes

  // Function to handle search and fetch products from Sanity
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const params: Record<string , string> = { query: `${query}*` };

      // Fetch products based on the query
      const products = await client.fetch(
                `*[_type == "food" && (name match $query || description match $query || tags match $query)]{
                  _id,
                  name,
                  category,
                  price,
                  originalPrice,
                  description,
                  tags,
                  "imageUrl": image.asset->url,
                  available,
                  slug
                }`,
                params
              );

      setSearchResults(products);
    } else {
      setSearchResults([]); // Reset search results if query is empty
    }
  };

  return (
    <div className="font-sans bg-gray-100">
      <header className="bg-black shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center text-2xl font-bold justify-center w-full">
            <span className="text-orange-500">Food</span>
            <span className="text-white">tuck</span>
          </div>
          {/* Hamburger Menu (for mobile) */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:w-auto w-full`}>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* Navbar links */}
            <nav className="text-white flex flex-col md:flex-row items-center text-base justify-center md:space-x-8 space-y-4 md:space-y-0">
              <Link href="/" className="hover:text-orange-500">Home</Link>
              <Link href="/our-menu" className="hover:text-orange-500">Menu</Link>
              <Link href="/our-blogs" className="hover:text-orange-500">Blog</Link>
              <Link href="/faq-page" className="hover:text-orange-500">Pages</Link>
              <Link href="/about-us" className="hover:text-orange-500">About</Link>
              <Link href="/our-shop" className="hover:text-orange-500">Shop</Link>
              <Link href="#contact" className="hover:text-orange-500">Contact</Link>
            </nav>


            {/* Search Input */}
            <div className="relative flex items-center ml-auto mt-4 md:mt-0 mr-4 bg-black p-2 rounded-full border-2 border-orange-500">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="p-2 rounded-l-full text-white bg-transparent border-none outline-none placeholder-white"
              />
              <CiSearch className="text-white" size={20} />
              {/* Display search results */}
              {searchQuery && searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-black text-white mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.map((food) => (
                    <Link
                      key={food._id}
                      href={`/dish/${food.id?.current}`} 
                      className="block px-4 py-2 hover:bg-orange-500"
                    >
                      {food.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            

            {/* Cart Icon */}
            <Link href="/Cart">
              <div className="relative py-2 flex items-center justify-center p-2 bg-black text-white">
                <BsCart className="text-white" size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItemCount > 0 ? cartItemCount : 0}
                </span>
              </div>
            </Link>

            {/* Wishlist Icon */}
            <Link href="/wish" className="relative flex items-center gap-1">
            <div   className="relative py-2 flex items-center justify-center p-2 bg-black text-white">
              <BsHeart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {wishItemCount > 0 ? wishItemCount : 0}
              </span>
              </div>
            </Link>


             
             


              {/* If user is signed out... */}
    <SignedOut>
    <SignInButton>
    <CgProfile className="text-white text-2xl ml-2"/>
       
    </SignInButton>
    </SignedOut>

  {/* If user is signed in */}
  <SignedIn>
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-[28px] h-[28px]", // Styling for avatar size
        },
      }}
    />
  </SignedIn>


          </div>
        </div>
      </header>
    </div>
  );
}
