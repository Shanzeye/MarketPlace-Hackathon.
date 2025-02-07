
'use client';

import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";
import Navbar from '../components/navbar';

// Initialize Sanity Image URL Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).width(400).url();

const PAGE_SIZE = 6;

type Food = {
  _id: string;
  name: string;
  price: number;
  image?: { asset: { _ref: string } };
  category?: string;
};

export default function FoodListings() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  useEffect(() => {
    fetchFoods();
  }, [searchTerm, selectedCategories, currentPage, priceRange]);

  const fetchFoods = async () => {
    let query = `*[_type == "food"]`;
    let filters: string[] = [];

    if (searchTerm) {
      filters.push(`name match "*${searchTerm}*"`);
    }
    if (selectedCategories.length > 0) {
      filters.push(`category in [${selectedCategories.map(cat => `"${cat}"`).join(',')}]`);
    }
    filters.push(`price >= ${priceRange[0]} && price <= ${priceRange[1]}`);
    
    if (filters.length > 0) {
      query += `[${filters.join(' && ')}]`;
    }
    query += ` | order(_createdAt desc) [${(currentPage - 1) * PAGE_SIZE}...${currentPage * PAGE_SIZE}]`;

    const results: Food[] = await client.fetch(query);
    setFoods(results);
  };

  const fetchCategories = async () => {
    const results: { name: string }[] = await client.fetch(`*[_type == "category"]{name}`);
    setCategories(results.map(cat => cat.name));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div> 
    <Navbar/>



<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Our Shop</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Shop</span> 
    </div>
  </div>
</section>


    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search food..."
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="text-white flex flex-col md:flex-row gap-4 mb-4">
        <div className="border p-4 rounded w-full md:w-1/4">
          <h2 className="font-bold mb-2">Filter Panel</h2>
          <h3 className="font-medium">Categories</h3>
          <div className="flex flex-col gap-2 mb-4">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...selectedCategories, category]
                      : selectedCategories.filter((cat) => cat !== category);
                    setSelectedCategories(updated);
                  }}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
          <h3 className="font-medium">Price Range</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
          <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {foods.map((food) => (
            <Link href={`/our-shop/${food._id}`}>
            <div key={food._id} className="border rounded-lg p-4 shadow">
              <img
                src={food.image ? urlFor(food.image) : '/placeholder.jpg'}
                alt={food.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{food.name}</h3> 
              <p className="text-orange-500">${food.price}</p>
            </div>
            </Link>
          ))}
        </div>
        
      </div>
      <div className="text-white flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2">Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </div>



    </div>
  );
}
