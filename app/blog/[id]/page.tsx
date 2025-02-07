"use client";

import { useParams } from "next/navigation";
import { PiCloudSlashThin } from "react-icons/pi";

interface Blog {
    id: number;
    title: string;
    content: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: "Post",
        content: "My posts", 
    },

    {
        id: 2,
        title: "Post",
        content: "My posts",
    },

    {
        id: 3,
        title: "Post",
        content: "My posts",
    },

    {
        id: 4,
        title: "Post",
        content: "My posts",
    },
];

const postpage = () => {
    const { id } = useParams();
    
    const blog = blogs.find((p) => p.id.toString() === id);

    if (!blog) {
        return <p className="text-center text-xl text-black mt-6">Post not found</p>
    }

    return (
        <div>
        <h1 className=""> {blog.title}</h1>
        <p>{blog.content}</p>
        </div>

    )
};

export default postpage;