import React, { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";

const posts = [
  {
    id: 1,
    title: "Making Education Accessible in Rural Areas",
    excerpt: "How our education initiative is transforming lives in remote villages",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    content: "Full blog content goes here...",
  },
  {
    id: 2,
    title: "Clean Water: A Basic Human Right",
    excerpt: "The impact of our clean water projects in drought-affected regions",
    author: "Michael Chen",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?auto=format&fit=crop&q=80&w=800",
    content: "Full blog content goes here...",
  },
  {
    id: 3,
    title: "Volunteer Stories: Making a Difference",
    excerpt: "Meet the dedicated volunteers who are changing lives",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    content: "Full blog content goes here...",
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="py-10">
      {selectedPost ? (
        <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <BlogList posts={posts} onPostClick={setSelectedPost} />
      )}
    </div>
  );
};

export default BlogPage;
