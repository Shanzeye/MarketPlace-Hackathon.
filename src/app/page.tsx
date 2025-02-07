"use client"

import Image from "next/image";
import FoodItems from "./components/fooditems";
import Experience from "./components/experience";
import Hero from "./components/hero";
import About from "./components/about";
import Choose from "./components/choose";
import Chef from "./components/chef";
import Test from "./components/test";
import Rest from "./components/rest";
import Blogs from "./components/blogs";
import Navbar from "./components/navbar";
import Dish from "./components/dish";



export default function Home() {
  return (
    <div>
     
        
      <Navbar />
      <Hero/>
      <About/>
      <FoodItems/>
      <Choose/>
      <Experience/>

      <Dish/>
      
      <Chef/>
      <Test/>
      <Rest/>
      <Blogs/>
      
      
    </div>
  );
}



