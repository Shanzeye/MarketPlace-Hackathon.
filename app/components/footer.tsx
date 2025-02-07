import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";


export default function Footer () {
    return (
        <div>
            <div id="contact">
<section className="py-16 bg-black border-b-4 border-orange-500">

<div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-500">
                St<span className="text-white">ill You Need Our Support ?</span>
            </h1>
            <p className="text-white mt-4 text-lg">
                Don't wait, make a smart & logical quote here. It's pretty easy.
            </p>
        </div>

        {/* Right Section: Email Input and Button */}
        <div className="lg:w-1/2 w-full">
            <div className="flex flex-col sm:flex-row w-full h-[56px] border border-gray-300">
                {/* Email Input */}
                <input
                    type="text"
                    className="placeholder-white w-full h-full px-6 border-0 bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-t sm:rounded-l-md sm:rounded-t-none"
                    placeholder="Enter Your Email"
                />

                {/* Subscribe Button */}
                <button className="w-full sm:w-[200px] h-full bg-white text-orange-500 flex items-center justify-center px-6 rounded-b sm:rounded-l-md sm:rounded-b-none mt-2 sm:mt-0">
                    Subscribe Now
                </button>
            </div>
        </div>
    </div>
</div>
</section>
</div>



        {/* <footer className="bg-black py-5 font-sans tracking-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
          <div>
            <h4 className="ml-10 text-lg font-semibold mb-6 text-white">About Us</h4>
            <p className="ml-10 text-white text-base">orporate clients and leisure travelers has been relying on Groundlink for dependab safe,and professional
              chauffeured car service in major cities across World. </p>
              
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Useful Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-white hover:text-orange-500 text-base">About</Link></li>
              <li><Link href="/our-blogs" className="text-white hover:text-orange-500 text-base">News</Link>
              </li>
              <li><Link href="#chef" className="text-white hover:text-orange-500 text-base">Partners</Link></li>
              <li><Link href="our-chefs" className="text-white hover:text-orange-500 text-base">Team</Link></li>
              <li><Link href="our-menu" className="text-white hover:text-orange-500 text-base">Menu</Link></li>
              <li><Link href="#contact" className="text-white hover:text-orange-500 text-base">Contacts</Link></li>

            </ul>
          </div>
  
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6 text-white">Help?</h4>
            <p className="text-white text-base">FAQ</p>
            <p className="text-white text-base">Term & Conditions</p>
            <p className="text-white text-base">Reporting</p>
            <p className="text-white text-base">Documentation</p>
            <p className="text-white text-base">Support</p>
            <p className="text-white text-base">Privacy</p>

          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Recent Post</h4>
  
        
          </div>
  

    

        </div>

        <div className="bg-gray-600 flex flex-col lg:flex-row justify-between items-center p-4">
    <p className="ml-14 text-white text-base text-left mb-4 lg:mb-0">
        Copyright © 2022. All Rights Reserved.
    </p>

    <div className="flex space-x-4 mr-14">
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
            <FaFacebookF className="fas fa-bell text-gray-800"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <GrTwitter className="fas fa-bell text-gray-800"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaInstagram className="fas fa-bell text-gray-800"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaYoutube className="fas fa-bell text-orange-500"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaPinterest  className="fas fa-bell text-gray-800"/>

             
        </div>
    </div>
</div>
 <div className="bg-black border-b-4 border-orange-500"> </div>
      </footer> */}



<footer className="bg-black py-5 font-sans tracking-wide">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
    
    {/* About Us Section */}
    <div>
      <h4 className="ml-10 text-lg font-semibold mb-6 text-white">About Us</h4>
      <p className="ml-10 text-white text-base">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
      </p>
    </div>
  
    {/* Useful Links Section */}
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Useful Links</h4>
      <ul className="space-y-4">
        <li><Link href="/about-us" className="text-white hover:text-orange-500 text-base">About</Link></li>
        <li><Link href="/our-blogs" className="text-white hover:text-orange-500 text-base">News</Link></li>
        <li><Link href="#chef" className="text-white hover:text-orange-500 text-base">Partners</Link></li>
        <li><Link href="our-chefs" className="text-white hover:text-orange-500 text-base">Team</Link></li>
        <li><Link href="our-menu" className="text-white hover:text-orange-500 text-base">Menu</Link></li>
        <li><Link href="#contact" className="text-white hover:text-orange-500 text-base">Contacts</Link></li>
      </ul>
    </div>
  
    {/* Help Section */}
    <div className="space-y-4">
      <h4 className="text-lg font-semibold mb-6 text-white">Help?</h4>
      <p className="text-white text-base">FAQ</p>
      <p className="text-white text-base">Terms & Conditions</p>
      <p className="text-white text-base">Reporting</p>
      <p className="text-white text-base">Documentation</p>
      <p className="text-white text-base">Support</p>
      <p className="text-white text-base">Privacy</p>
    </div>
  
    {/* Recent Post Section */}
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Recent Post</h4>
      {/* Add recent posts links or content here if needed */}
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="bg-gray-600 flex flex-col lg:flex-row justify-between items-center p-4">
    <p className="ml-14 text-white text-base text-left mb-4 lg:mb-0">
      Copyright © 2022. All Rights Reserved.
    </p>

    {/* Social Icons */}
    <div className="flex space-x-4 mr-14">
      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaFacebookF className="text-gray-800" />
      </div>
      
      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <GrTwitter className="text-gray-800" />
      </div>
      
      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaInstagram className="text-gray-800" />
      </div>
      
      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaYoutube className="text-orange-500" />
      </div>
      
      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaPinterest className="text-gray-800" />
      </div>
    </div>
  </div>

  {/* Footer Divider */}
  <div className="bg-black border-b-4 border-orange-500"></div>
</footer>










        </div>
    )
}