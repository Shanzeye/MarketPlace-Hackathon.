import Link from "next/link";

import Experience from "../components/experience";
import { PiCoffeeBold } from "react-icons/pi";
import Navbar from "../components/navbar";


export default function Menu () {
    return (
        <div>
            <Navbar/>


<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Our Menu</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Menu</span> 
    </div>
  </div>
</section>





<div className="bg-white">
<section className="py-24 bg-white w-full max-w-screen-xl mx-auto my-10 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="w-full max-w-[448px] h-[626px] bg-cover bg-center " style= {{backgroundImage: "url('/images/ourmenu1.png');"}}></div>

    <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-2">
      <PiCoffeeBold className="text-orange-500 text-2xl" />
      </div>
      
     <div>
     <h2 className="text-3xl font-bold">Starter Menu</h2>

     </div>

      <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Alder Grilled Chinook Salmon</h3>
         <p className="text-xl text-orange-500 font-semibold">32$</p> 
      </div>
        
        <p className="text-lg">Toasted French bread topped with romano, cheddar.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-orange-500">Berries and Creme Tart</h3>
         <p className="text-xl text-orange-500 font-semibold">43$</p> 
      </div>
        
        <p className="text-lg">Gorgonzola, ricotta, mozzarella, taleggio.</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      
      <div className="space-y-2">
      <div className="flex justify-between items-center">
         <h3 className="text-2xl font-semibold">Tormentoso Bush Pizza Pintoage</h3>
         <p className="text-xl text-orange-500 font-semibold">14$</p> 

      </div>
        
        <p className="text-lg">Ground cumin, avocados, peeled and cubed</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>


      <div className="space-y-2">
        <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Spicy Vegan Potato Curry</h3> 
        <p className="text-xl text-orange-500 font-semibold">35$</p> 
        </div>
        
        <p className="text-lg">Spreadable cream cheese, crumbled blue cheese.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

    </div>
  </div>
</section>





<section className="py-24 bg-white w-full max-w-screen-xl mx-auto my-10 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="w-full max-w-[448px] h-[626px] bg-cover bg-center lg:order-last" style={{backgroundImage: "url('/images/ourmenu2.png');"}}> </div>

    <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-2">
      <PiCoffeeBold className="text-orange-500 text-2xl" />

      </div>
      
      <div>
        <h2 className="text-3xl font-bold">Main Course</h2>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Optic Big Breakfast Combo Menu</h3>
          <p className="text-xl text-orange-500 font-semibold">32$</p> 
        </div>
        <p className="text-lg">Toasted French bread topped with romano, cheddar.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Cashew Chicken With Stir-Fry</h3>
          <p className="text-xl text-orange-500 font-semibold">43$</p> 
        </div>
        <p className="text-lg">Gorgonzola, ricotta, mozzarella, taleggio.</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Vegetables & Green Salad</h3>
          <p className="text-xl text-orange-500 font-semibold">14$</p> 
        </div>
        <p className="text-lg">Ground cumin, avocados, peeled and cubed</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Spicy Vegan Potato Curry</h3> 
          <p className="text-xl text-orange-500 font-semibold">35$</p> 
        </div>
        <p className="text-lg">Spreadable cream cheese, crumbled blue cheese.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>
    </div>
  </div>
</section>


<div>
  <Experience/>
</div>



<section className="py-24 bg-white w-full max-w-screen-xl mx-auto my-10 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="w-full max-w-[448px] h-[626px] bg-cover bg-center " style= {{backgroundImage: "url('/images/ourmenu3.png');"}}> </div>

    <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-2">
      <PiCoffeeBold className="text-orange-500 text-2xl" />

      </div>
      
     <div>
     <h2 className="text-3xl font-bold">Dessert</h2>

     </div>

      <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Fig and lemon cake</h3>
         <p className="text-xl text-orange-500 font-semibold">32$</p> 
      </div>
        
        <p className="text-lg">Toasted French bread topped with romano, cheddar.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Creamy mascarpone cake</h3>
         <p className="text-xl text-orange-500 font-semibold">43$</p> 
      </div>
        
        <p className="text-lg">Gorgonzola, ricotta, mozzarella, taleggio.</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      
      <div className="space-y-2">
      <div className="flex justify-between items-center">
         <h3 className="text-2xl font-semibold">Pastry, blueberries, lemon juice</h3>
         <p className="text-xl text-orange-500 font-semibold">14$</p> 

      </div>
        
        <p className="text-lg">Ground cumin, avocados, peeled and cubed</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>


      <div className="space-y-2">
        <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">pain au chocolat</h3> 
        <p className="text-xl text-orange-500 font-semibold">35$</p> 
        </div>
        
        <p className="text-lg">Spreadable cream cheese, crumbled blue cheese.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

    </div>
  </div>
</section>









  
<section className="py-24 bg-white w-full max-w-screen-xl mx-auto my-10 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="w-full max-w-[448px] h-[626px] bg-cover bg-center lg:order-last" style={{backgroundImage: "url('/images/ourmenu4.png');"}}> </div>

    <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-2">
      <PiCoffeeBold className="text-orange-500 text-2xl" />

      </div>
      
      <div>
        <h2 className="text-3xl font-bold">Drinks</h2>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Caffe macchiato</h3>
          <p className="text-xl text-orange-500 font-semibold">32$</p> 
        </div>
        <p className="text-lg">Toasted French bread topped with romano, cheddar.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Aperol Spritz Capacianno</h3>
          <p className="text-xl text-orange-500 font-semibold">43$</p> 
        </div>
        <p className="text-lg">Gorgonzola, ricotta, mozzarella, taleggio.</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Caffe Latte Campuri</h3>
          <p className="text-xl text-orange-500 font-semibold">14$</p> 
        </div>
        <p className="text-lg">Ground cumin, avocados, peeled and cubed</p>
        <p className="text-sm text-gray-600">1000 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Tormentoso BushTea Pintoage</h3> 
          <p className="text-xl text-orange-500 font-semibold">35$</p> 
        </div>
        <p className="text-lg">Spreadable cream cheese, crumbled blue cheese.</p>
        <p className="text-sm text-gray-600">560 CAL</p>
        <div className="border-t border-gray-300 mt-2"></div>
      </div>
    </div>
  </div>
</section>






<section className="w-[1333] h-[129.37] py-16 bg-white text-center">
  <h3 className="text-sm font-semibold text-black mb-2">Partners & Clients</h3>

  <h2 className="text-3xl font-bold text-black mb-10">We Work With The Best People</h2>

  <div className="flex flex-wrap justify-center gap-8">
    <div className="w-full sm:w-[240.96px] h-[129.23px]">
      <img src="/images/p1.png" alt="Client 1" className="w-full h-full object-contain" />
    </div>
    <div className="w-full sm:w-[240.96px] h-[129.23px]">
      <img src="/images/p2.png" alt="Client 2" className="w-full h-full object-contain" />
    </div>
    <div className="w-full sm:w-[240.96px] h-[129.23px]">
      <img src="/images/p3.png" alt="Client 3" className="w-full h-full object-contain" />
    </div>
    <div className="w-full sm:w-[240.96px] h-[129.23px]">
      <img src="/images/p4.png" alt="Client 4" className="w-full h-full object-contain" />
    </div>
    <div className="w-full sm:w-[240.96px] h-[129.23px]">
      <img src="/images/p5.png" alt="Client 5" className="w-full h-full object-contain" />
    </div>
    <div className="w-full sm:w-[240.96px] h-[129.23px]">
      <img src="/images/p6.png" alt="Client 6" className="w-full h-full object-contain" />
    </div>
  </div>
</section>

</div>

        </div>
    )
} 