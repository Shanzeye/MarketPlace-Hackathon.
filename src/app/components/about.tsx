

import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-black py-10">
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-20">
        
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">About Us</h2>

          <div className="text-4xl font-bold text-white">
            <span className="text-orange-500">We </span>
            <span className="text-white">Create the best </span>
            <div>
              <span className="text-white">foody product </span>
            </div>
          </div>

          <p className="text-white mb-6 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
            dolor. Cras elementum ultrices diam.
          </p> 

          <div className="space-y-2 mb-6">
            <p className="flex items-center justify-center md:justify-start text-white">
              <FaCheck className="mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="flex items-center justify-center md:justify-start text-white">
              <FaCheck className="mr-2"/> Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.
            </p>
            <p className="flex items-center justify-center md:justify-start text-white">
              <FaCheck className="mr-2"/> Maecenas ligula massa, varius a, semper congue.
            </p>
          </div>

          <Link
            href="/about-us"
            className="inline-block px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full text-lg transition"
          >
            Read More
          </Link>
        </div>

        {/* Right Section: Images */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
          {/* Large Image */}
          <img
            src="/images/about1.png"
            alt="Food Image 1"
            className="w-full md:w-[600px] h-auto object-cover rounded-lg mb-4"
          />
          {/* Smaller Images */}
          <div className="flex flex-col md:flex-row md:space-x-4 w-full items-center md:items-start">
            <img
              src="/images/about2.png"
              alt="Food Image 2"
              className="w-[300px] h-auto object-cover rounded-lg mb-4"
            />
            <img
              src="/images/about3.png"
              alt="Food Image 3"
              className="w-[300px] h-auto object-cover rounded-lg mb-4"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
