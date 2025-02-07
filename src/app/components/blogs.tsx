
import { LuThumbsUp } from "react-icons/lu";
import { RiMessage2Line } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";

export default function Blogs() {
    return (
        <div>
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    {/* Blog Post Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-orange-500">Blog Post</h1>
                        <h2 className="text-4xl font-semibold mt-4 text-white">
                            <span className="text-orange-500">La</span>test News & Blog
                        </h2>
                    </div>

                    {/* Blog Posts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Blog Post */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-black rounded-lg shadow-lg overflow-hidden">
                                <img src={`/images/blog${item}.png`} alt={`Blog ${item}`} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <p className="text-orange-500 text-sm mb-4">10 February 2022</p>
                                    <p className="text-white text-lg mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link href="/our-blogs" className="text-white font-semibold">Learn More</Link>
                                        <div className="flex space-x-2">
                                            <LuThumbsUp className="w-6 h-6 text-white" />
                                            <RiMessage2Line className="w-6 h-6 text-orange-500" />
                                            <IoShareSocialOutline className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
