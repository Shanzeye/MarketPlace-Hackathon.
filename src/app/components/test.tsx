
import { MdOutlineStar } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

export default function Testimonials() {
  return (
    <div>
      <section className="bg-black mb-24 container mx-auto px-4 py-16">
        {/* Left Section Heading */}
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold text-orange-500">Testimonials</h1>
        </div>

        {/* Sub Heading */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-semibold text-white">
            What Our Clients Are Saying
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="flex justify-center py-5">
          <div className="bg-white w-full sm:w-[500px] md:w-[700px] lg:w-[868px] h-auto rounded-lg shadow-lg p-6">
            <div className="flex justify-center">
              {/* Profile Image */}
              <img
                src="/images/test1.png"
                alt="Reviewer"
                className="w-24 h-24 rounded-full border-4 border-orange-500 mb-4"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-center mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
              dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
              cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>

            {/* Star Ratings */}
            <div className="flex justify-center mb-4">
              {/* 4 Orange Stars and 1 Gray Star */}
              <MdOutlineStar className="w-6 h-6 text-orange-500" />
              <MdOutlineStar className="w-6 h-6 text-orange-500" />
              <MdOutlineStar className="w-6 h-6 text-orange-500" />
              <MdOutlineStar className="w-6 h-6 text-orange-500" />
              <MdOutlineStar className="w-6 h-6 text-gray-500" />
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black">Alamin Hasan</h3>
              <p className="text-gray-600">Food Specialist</p>
            </div>

            {/* Four Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              <PiDotsThreeOutlineFill className="text-5xl text-orange-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
