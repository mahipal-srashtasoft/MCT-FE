import React from "react";
import { Calendar, User } from "lucide-react";

const BlogDetail = ({ post, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <button onClick={onBack} className="text-orange-500 font-semibold hover:text-orange-600 transition mb-4">
        ← Back to Blog
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

      <div className="flex items-center text-sm text-gray-500 mb-4">
        <User className="w-4 h-4 mr-1" />
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <Calendar className="w-4 h-4 mr-1" />
        <span>{post.date}</span>
      </div>

      <img src={post.image} alt={post.title} className="w-full rounded-lg mb-6" />

      <p className="text-gray-700 leading-relaxed">
        {post.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla auctor lacus, nec aliquet eros pharetra sed..."}
      </p>
    </div>
  );
};

export default BlogDetail;
