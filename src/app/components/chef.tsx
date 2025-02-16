
import Link from "next/link";

export default function Chef() {
  return (
    <div id="chef">
      <section className="bg-black container mx-auto px-4 py-16">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">Chefs</h1>
        </div>

        {/* Sub Heading */}
        <div className="text-center mb-12">
          <div className="font-bold">
            <span className="text-3xl text-orange-500">Me</span>
            <span className="text-3xl text-white">et Our Chefs</span>
          </div>
        </div>

        {/* Chef Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Chef Image 1 */}
          <div className="flex justify-center">
            <img
              src="/images/chef1.png"
              alt="Chef 1"
              className="w-80 h-[391px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Chef Image 2 */}
          <div className="flex justify-center">
            <img
              src="/images/chef2.png"
              alt="Chef 2"
              className="w-80 h-[391px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Chef Image 3 */}
          <div className="flex justify-center">
            <img
              src="/images/chef3.png"
              alt="Chef 3"
              className="w-80 h-[391px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Chef Image 4 */}
          <div className="flex justify-center">
            <img
              src="/images/chef4.png"
              alt="Chef 4"
              className="w-80 h-[391px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <Link href="/our-chefs">
            <button className="px-6 py-3 bg-black text-white rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition-colors duration-300">
              See More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
