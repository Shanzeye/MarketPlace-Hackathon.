
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import Navbar from "../components/navbar";

export default function () {
    return (
        <div>

 <Navbar/>


<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">FAQ'S Page</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Faq</span> 
    </div>
  </div>
</section>





            <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Questions Looks Here</h2>

      <p className="mx-auto max-w-screen-md text-center text-black md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
    </div>
  
    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
     
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How we serve food?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center  text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
     
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How can we get in touch with you?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
            <RiSubtractLine />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How is our food quality?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      

      
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">What will be delivered? And When?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center  text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>



      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How do we give home delivery?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>



      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">Is this restaurant 24 hours open?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?.</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
    )
}