import Link from "next/link";

export default function Restaurant () {
    return (
        <div>
<section className="pt-24 relative bg-cover bg-center" style={{ backgroundImage: "url('/images/backimage.png')" }}>
    <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-end">
            {/* Right Side Content */}
            <div className="md:w-1/2 text-center md:text-right">
                <h1 className="text-4xl font-bold text-orange-500 mb-4">Restaurant Active Process</h1>
                <h2 className="text-3xl font-semibold text-white mb-4">We Document Every Food</h2>
                <h3 className="text-3xl font-semibold text-white mb-4">Bean Process Until It Is Saved</h3>
                <p className="text-white text-lg mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>

                {/* Buttons */}
                <div className="flex justify-center md:justify-end space-x-4">
                    {/* Read More Button */}
                    <Link href="/about-us">
                    <button className="px-6 py-3 text-white border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300">
                        Read More
                    </button></Link>

                    {/* Play Video Button */}
                    <Link href="https://youtu.be/xPPLbEFbCAo?si=gCTbiv4uR37ejoaa">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-500 transition-colors duration-300">
                        Play Video
                    </button> </Link>
                </div>
            </div>
        </div>
    </div>
</section>


        </div>
    )
}