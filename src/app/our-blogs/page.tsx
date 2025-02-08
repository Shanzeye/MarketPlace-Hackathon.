
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Navbar from "../components/navbar";

interface Blog { 
  _id: string;
  title: string;
  description: string;
  image: { asset: { url: string } }; 
  tags: string[];
  date: string;
  author: string;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "blog"] { _id, title, description, image { asset -> { url } }, tags, date, author }`;
      const data = await client.fetch(query);
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const filteredBlogs = blogs.filter((blog) =>
    selectedTag ? blog.tags.includes(selectedTag) : true
  );

  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));

  return (
    <div>
      <Navbar/>
      <section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Our Blogs</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Blogs</span> 
    </div>
  </div>
</section>

    
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Blog List */}
      <div className="md:col-span-2 space-y-8">
        {filteredBlogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <Image
              src={blog.image.asset.url}
              alt={blog.title}
              width={700}
              height={400}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-gray-500 flex justify-between">
                <span>{blog.date} | {blog.author}</span>
                <div className="flex gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="cursor-pointer text-xs px-3 py-1 bg-gray-300 rounded-full hover:bg-orange-500 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-2">{blog.title}</h3>
              <p className="text-gray-700 mt-2 line-clamp-3">{blog.description}</p>
              <Link href={`/our-blogs/${blog._id}`}>
              <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                Read More
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-3 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-orange-500 font-semibold text-lg mb-3">Recent Posts</h4>
          <div className="space-y-3">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog._id} className="flex items-center gap-3 border-b pb-3">
                <Image
                  src={blog.image.asset.url}
                  alt={blog.title}
                  width={80}
                  height={50}
                  className="w-20 h-14 object-cover rounded-md"
                />
                <p className="text-white text-sm line-clamp-2">{blog.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter by Categories */}
        <div>
          <h4 className="text-orange-500 font-semibold text-lg mb-3">Filter by Categories</h4>
          <ul className="space-y-2">
            {allTags.map((tag) => (
              <li key={tag} className="text-white flex justify-between text-sm border-b py-2 cursor-pointer hover:text-orange-500" onClick={() => handleTagClick(tag)}>
                <span>{tag}</span>
                <span>({blogs.filter(blog => blog.tags.includes(tag)).length})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo Gallery */}
        <div>
          <h4 className="text-orange-500 font-semibold text-lg mb-3">Photo Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {blogs.slice(0, 6).map((blog) => (
              <Image
                key={blog._id}
                src={blog.image.asset.url}
                alt={blog.title}
                width={80}
                height={80}
                className="w-full h-20 object-cover rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
