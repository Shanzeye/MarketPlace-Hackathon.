
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; 
import { client } from "@/sanity/lib/client";
import Navbar from "@/app/components/navbar";


interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  image: { asset: { url: string } };
  tags: string[];
  date: string;
  author: string;
}

export default function BlogDetail() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const query = `*[_type == "blog" && _id == "${id}"] { _id, title, description, content, image { asset -> { url } }, tags, date, author }[0]`;
        const data = await client.fetch(query);
        setBlog(data);
      };
      fetchBlog();
    }
  }, [id]);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!blog) return <p className="text-center py-10">Loading...</p>;

  return (
    <div>
      <Navbar/>
      <section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Blogs Details</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Blogs Details</span> 
    </div>
  </div>
</section>

    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Blog Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src={blog.image.asset.url}
          alt={blog.title}
          width={800}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="text-orange-500 text-3xl font-bold">{blog.title}</h1>
        <div className="text-gray-500 text-sm flex justify-between">
          <span>{blog.date} | {blog.author}</span>
          <div className="flex gap-2">
            {blog.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 bg-gray-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-white leading-relaxed">{blog.description}</p>

        {/* Comments Section */}
        <div className="mt-8">
          <h2 className="text-orange-500 text-xl font-semibold">Comments</h2>
          <div className="space-y-4 mt-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-100">
                  {comment}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>
          <div className="mt-4">
            <textarea
              className="w-full p-3 border rounded-md"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              onClick={handleCommentSubmit}
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>

      
    </div>
    </div>
  );
}
