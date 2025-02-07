import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import Link from "next/link";

export default function Hero () {
    return (
        <div>

<section className="bg-black text-gray-600 body-font">
  <div className="container mx-auto flex py-24 px-5 items-center justify-between">
    
    <div className="flex flex-col items-center">
      <div className="w-px bg-white h-24 mb-6"></div>
      <div className="flex flex-col space-y-6">
        <a href="#" className="text-white text-2xl hover:text-gray-400"><FaFacebookF /></a>
        <a href="#" className="text-orange-500 text-2xl hover:text-gray-400"><FaTwitter /></a>
        <a href="#" className="text-white text-2xl hover:text-gray-400"><FaPinterestP /></a>
      </div>
      <div className="w-px bg-white h-24 mt-6"></div>
    </div>

    <div className="ml-9 flex flex-col items-start space-y-6 w-1/2">
      <h1 className="text-3xl font-semibold text-orange-500">It's Quick & Amusing!</h1>
      <div className="text-4xl font-bold text-white">
      
      <span className="text-orange-500">Th</span>
      <span className="text-white">e Art of Speed </span>
      <div>
      <span className="text-white">Food Quality</span>
      </div>
      
      </div>
            

      <p className="text-white text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor quam vitae nulla mollis, non venenatis tortor feugiat.
      </p>
      

      <Link href="/our-menu" className="bg-orange-500 text-white rounded-full py-2 px-6 mt-4 inline-block text-center hover:bg-orange-600">
        See Menu
      </Link>
    </div>

    <div className="w-1/2">
  <img src="/images/image1.png" alt="Food Quality" className="w-full max-w-[600px] h-auto rounded-lg shadow-lg" />
</div>

  </div>
</section>
  </div>
    )
}